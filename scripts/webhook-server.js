#!/usr/bin/env node
/**
 * Webhook Server for Car Store Cuijk
 * Simple HTTP server that receives webhooks and triggers rebuilds
 * 
 * Usage: node webhook-server.js [port]
 * Default port: 3001
 */

const http = require('http');
const { exec } = require('child_process');
const path = require('path');

const PORT = process.argv[2] || 3001;
const WORKSPACE = path.resolve(__dirname, '..');
const REBUILD_SCRIPT = path.join(__dirname, 'webhook-rebuild.sh');

// Simple secret token for basic security (should be moved to env var in production)
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'carstore-cuijk-webhook-2024';

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Webhook-Secret');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  // Check secret token
  const secret = req.headers['x-webhook-secret'];
  if (secret !== WEBHOOK_SECRET) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  // Collect body data
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    let payload = {};
    try {
      payload = JSON.parse(body);
    } catch (e) {
      // Ignore parse errors, use empty object
    }

    console.log(`[${new Date().toISOString()}] Webhook received:`, payload);

    // Trigger rebuild
    res.writeHead(202, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Rebuild triggered',
      timestamp: new Date().toISOString()
    }));

    // Run rebuild script in background
    console.log(`[${new Date().toISOString()}] Starting rebuild...`);
    
    exec(`bash "${REBUILD_SCRIPT}"`, {
      cwd: WORKSPACE,
      timeout: 300000 // 5 minutes
    }, (error, stdout, stderr) => {
      if (error) {
        console.error(`[${new Date().toISOString()}] Rebuild failed:`, error);
        return;
      }
      console.log(`[${new Date().toISOString()}] Rebuild completed`);
    });
  });
});

server.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Webhook server running on port ${PORT}`);
  console.log(`[${new Date().toISOString()}] Webhook URL: http://localhost:${PORT}/`);
  console.log(`[${new Date().toISOString()}] Secret: ${WEBHOOK_SECRET}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log(`[${new Date().toISOString()}] Shutting down...`);
  server.close(() => {
    process.exit(0);
  });
});
