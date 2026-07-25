#!/usr/bin/env node
/**
 * Webhook Receiver for VWE
 * Ontvangt webhook calls van VWE en update vehicles.json direct
 * 
 * Usage: node scripts/webhook-receiver.js [port]
 * Default port: 3002
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.argv[2] || 3002;
const WORKSPACE = path.resolve(__dirname, '..');
const DATA_FILE = path.join(WORKSPACE, 'data', 'vehicles.json');
const LOG_FILE = path.join(WORKSPACE, 'logs', 'webhook.log');
const REBUILD_SCRIPT = path.join(__dirname, 'webhook-rebuild.sh');

// Webhook secret (moet overeenkomen met VWE webhook instelling)
const WEBHOOK_SECRET = process.env.VWE_WEBHOOK_SECRET || 'carstore-cuijk-vwe-webhook';

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync(LOG_FILE, logMessage + '\n');
}

function updateVehicleFromWebhook(vehicleData) {
  try {
    // Lees huidige data
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const vehicles = data.vehicles || [];
    
    // Zoek voertuig op voertuignr
    const voertuignr = vehicleData.voertuignr || vehicleData.id;
    if (!voertuignr) {
      log('ERROR: No voertuignr in webhook data');
      return false;
    }
    
    const existingIndex = vehicles.findIndex(v => 
      v.voertuignr === voertuignr || v.id === voertuignr
    );
    
    // Bepaal status uit webhook data
    let status = 'beschikbaar';
    if (vehicleData.verkocht === 'j' || vehicleData.verkocht === true) {
      status = 'verkocht';
    } else if (vehicleData.gereserveerd === 'j' || vehicleData.gereserveerd === true) {
      status = 'verkocht'; // gereserveerd = verkocht voor filtering
    }
    
    if (existingIndex >= 0) {
      // Update bestaand voertuig
      const oldStatus = vehicles[existingIndex].status;
      vehicles[existingIndex].status = status;
      
      // Update raw data ook
      if (!vehicles[existingIndex].raw) vehicles[existingIndex].raw = {};
      vehicles[existingIndex].raw.verkocht = vehicleData.verkocht || 'n';
      vehicles[existingIndex].raw.gereserveerd = vehicleData.gereserveerd || 'n';
      
      log(`Updated vehicle ${voertuignr}: ${vehicles[existingIndex].merk} ${vehicles[existingIndex].model} - status ${oldStatus} -> ${status}`);
    } else {
      // Nieuw voertuig - voeg toe (vereist meer data)
      log(`New vehicle ${voertuignr} not in database - skipping (needs full sync)`);
      return false;
    }
    
    // Sla op
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    log(`Data saved. Total vehicles: ${vehicles.length}`);
    
    return true;
    
  } catch (error) {
    log(`ERROR updating vehicle: ${error.message}`);
    return false;
  }
}

function triggerRebuild() {
  log('Triggering rebuild...');
  
  exec(`bash "${REBUILD_SCRIPT}"`, {
    cwd: WORKSPACE,
    timeout: 300000
  }, (error, stdout, stderr) => {
    if (error) {
      log(`Rebuild failed: ${error.message}`);
    } else {
      log('Rebuild completed successfully');
    }
  });
}

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Webhook-Secret');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  // Check secret
  const secret = req.headers['x-webhook-secret'];
  if (secret !== WEBHOOK_SECRET) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    let payload = {};
    try {
      payload = JSON.parse(body);
    } catch (e) {
      // Probeer XML te parsen (VWE stuurt soms XML)
      log('JSON parse failed, trying to handle as XML or plain data');
    }

    log(`Webhook received for vehicle: ${payload.voertuignr || payload.id || 'unknown'}`);
    log(`Data: verkocht=${payload.verkocht}, gereserveerd=${payload.gereserveerd}`);

    // Update vehicle
    const updated = updateVehicleFromWebhook(payload);
    
    res.writeHead(202, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      success: true, 
      updated: updated,
      timestamp: new Date().toISOString()
    }));

    // Trigger rebuild if updated
    if (updated) {
      triggerRebuild();
    }
  });
});

server.listen(PORT, () => {
  log(`=== VWE Webhook Receiver started on port ${PORT} ===`);
  log(`Webhook URL: http://localhost:${PORT}/`);
  log(`Data file: ${DATA_FILE}`);
});
