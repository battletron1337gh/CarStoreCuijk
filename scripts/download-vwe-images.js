#!/usr/bin/env node
/**
 * Download VWE afbeeldingen naar lokale public folder
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const vehiclesPath = path.join(__dirname, '..', 'data', 'vehicles.json');
const publicDir = path.join(__dirname, '..', 'public', 'vwe-fotos');

// Maak public/vwe-fotos directory als die niet bestaat
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created:', publicDir);
}

// Laad vehicles data
const vehiclesData = JSON.parse(fs.readFileSync(vehiclesPath, 'utf-8'));

// Functie om een bestand te downloaden
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  let totalDownloaded = 0;
  let totalErrors = 0;
  
  for (const vehicle of vehiclesData.vehicles) {
    const kenteken = vehicle.kenteken;
    const raw = vehicle.raw || {};
    
    // Haal afbeeldingen op uit raw.afbeeldingen.afbeelding
    const afbeeldingen = raw.afbeeldingen?.afbeelding;
    if (!afbeeldingen || !Array.isArray(afbeeldingen)) {
      console.log(`No images for ${kenteken}`);
      continue;
    }
    
    // Maak directory voor dit kenteken
    const kentekenDir = path.join(publicDir, kenteken);
    if (!fs.existsSync(kentekenDir)) {
      fs.mkdirSync(kentekenDir, { recursive: true });
    }
    
    console.log(`\nProcessing ${kenteken} (${afbeeldingen.length} images)...`);
    
    for (const img of afbeeldingen) {
      const url = img.url;
      const bestandsnaam = img.bestandsnaam || path.basename(url);
      const destPath = path.join(kentekenDir, bestandsnaam);
      
      // Skip als bestand al bestaat
      if (fs.existsSync(destPath)) {
        console.log(`  ✓ ${bestandsnaam} (already exists)`);
        continue;
      }
      
      try {
        await downloadFile(url, destPath);
        console.log(`  ✓ ${bestandsnaam}`);
        totalDownloaded++;
      } catch (err) {
        console.log(`  ✗ ${bestandsnaam}: ${err.message}`);
        totalErrors++;
      }
    }
  }
  
  console.log(`\n========================================`);
  console.log(`Download complete!`);
  console.log(`  Downloaded: ${totalDownloaded}`);
  console.log(`  Errors: ${totalErrors}`);
  console.log(`========================================`);
}

main().catch(console.error);
