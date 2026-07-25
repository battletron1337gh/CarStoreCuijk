#!/usr/bin/env node
/**
 * Download missing VWE foto's for cars that exist in JSON but not in foto folders
 * Usage: node download-missing-vwe-fotos.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Config
const VEHICLES_JSON_PATH = path.join(__dirname, '..', 'data', 'vehicles.json');
const PHOTO_BASE_DIR = path.join(__dirname, '..', 'public', 'vwe-fotos');

// Cars that need foto downloads (kentekens without foto folders)
const MISSING_CARS = ['RT657N', '39NJV5', 'J546VZ'];

// Helper: Download file with follow redirects
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    
    const request = client.get(url, { timeout: 30000 }, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        console.log(`  Redirecting to: ${response.headers.location}`);
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        return reject(new Error(`HTTP ${response.statusCode}`));
      }
      
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });
    
    request.on('error', (err) => {
      reject(err);
    });
    
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

// Main function
async function main() {
  console.log('=== Downloading Missing VWE Foto\'s ===\n');
  
  // Read vehicles.json
  const vehiclesData = JSON.parse(fs.readFileSync(VEHICLES_JSON_PATH, 'utf8'));
  
  for (const kenteken of MISSING_CARS) {
    const vehicle = vehiclesData.vehicles.find(v => v.kenteken === kenteken);
    
    if (!vehicle) {
      console.log(`❌ Vehicle ${kenteken} not found in JSON`);
      continue;
    }
    
    console.log(`\n📸 Processing: ${vehicle.merk} ${vehicle.model} (${kenteken})`);
    
    // Create foto directory
    const photoDir = path.join(PHOTO_BASE_DIR, kenteken);
    if (!fs.existsSync(photoDir)) {
      fs.mkdirSync(photoDir, { recursive: true });
      console.log(`  Created directory: ${photoDir}`);
    }
    
    // Download foto's
    const fotoUrls = vehicle.fotoUrls || [];
    console.log(`  Found ${fotoUrls.length} foto URLs`);
    
    let downloaded = 0;
    let failed = 0;
    
    for (let i = 0; i < fotoUrls.length; i++) {
      const url = fotoUrls[i];
      const filename = path.basename(url);
      const destPath = path.join(photoDir, filename);
      
      // Skip if already exists
      if (fs.existsSync(destPath)) {
        console.log(`  ⏭️  ${i + 1}/${fotoUrls.length} Already exists: ${filename}`);
        downloaded++;
        continue;
      }
      
      try {
        await downloadFile(url, destPath);
        console.log(`  ✅ ${i + 1}/${fotoUrls.length} Downloaded: ${filename}`);
        downloaded++;
      } catch (error) {
        console.log(`  ❌ ${i + 1}/${fotoUrls.length} Failed: ${filename} - ${error.message}`);
        failed++;
      }
      
      // Small delay to be nice to the server
      await new Promise(r => setTimeout(r, 100));
    }
    
    console.log(`  📊 Summary: ${downloaded} downloaded, ${failed} failed`);
  }
  
  console.log('\n=== Done ===');
}

main().catch(console.error);
