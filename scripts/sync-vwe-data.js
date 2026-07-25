#!/usr/bin/env node
/**
 * VWE Data Sync Script
 * Haalt voertuigen op van VWE API en update vehicles.json
 * 
 * Usage: node scripts/sync-vwe-data.js
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE = path.resolve(__dirname, '..');
const DATA_FILE = path.join(WORKSPACE, 'data', 'vehicles.json');
const LOG_FILE = path.join(WORKSPACE, 'logs', 'sync.log');

// VWE API configuratie
const VWE_API_URL = 'https://b2b.vwe.nl/axaco/axaco.asmx/GetVoertuigen';
const VWE_API_KEY = process.env.VWE_API_KEY || '';
const VWE_CLIENT_ID = process.env.VWE_CLIENT_ID || '';

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync(LOG_FILE, logMessage + '\n');
}

async function fetchVweData() {
  try {
    log('Fetching VWE data...');
    
    // Check of we API credentials hebben
    if (!VWE_API_KEY || !VWE_CLIENT_ID) {
      log('ERROR: VWE_API_KEY or VWE_CLIENT_ID not set');
      log('Using local data file only');
      return null;
    }
    
    // TODO: Implementeer VWE API call
    // Voor nu gebruiken we de lokale file
    log('VWE API credentials not configured, using local file');
    return null;
    
  } catch (error) {
    log(`ERROR fetching VWE data: ${error.message}`);
    return null;
  }
}

function updateVehicleStatus(vehicles) {
  let updated = 0;
  
  vehicles.forEach(vehicle => {
    const raw = vehicle.raw || {};
    const oldStatus = vehicle.status;
    
    // Bepaal nieuwe status
    let newStatus = 'beschikbaar';
    if (raw.verkocht === 'j' || raw.verkocht === true || 
        vehicle.status === 'verkocht' || vehicle.sjabloon === 'Verkocht') {
      newStatus = 'verkocht';
    } else if (raw.gereserveerd === 'j' || raw.gereserveerd === true || 
               vehicle.status === 'gereserveerd') {
      newStatus = 'verkocht'; // gereserveerd = verkocht voor filtering
    }
    
    if (oldStatus !== newStatus) {
      vehicle.status = newStatus;
      updated++;
      log(`Updated ${vehicle.merk} ${vehicle.model}: ${oldStatus} -> ${newStatus}`);
    }
  });
  
  return updated;
}

async function main() {
  try {
    log('=== VWE Data Sync Started ===');
    
    // Lees huidige data
    if (!fs.existsSync(DATA_FILE)) {
      log(`ERROR: Data file not found: ${DATA_FILE}`);
      process.exit(1);
    }
    
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const vehicles = data.vehicles || [];
    
    log(`Loaded ${vehicles.length} vehicles from local file`);
    
    // Update statussen
    const updated = updateVehicleStatus(vehicles);
    log(`Updated ${updated} vehicles`);
    
    // Sla op
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    log('Data saved successfully');
    
    // Toon status overzicht
    const statusCounts = {};
    vehicles.forEach(v => {
      statusCounts[v.status] = (statusCounts[v.status] || 0) + 1;
    });
    log(`Status counts: ${JSON.stringify(statusCounts)}`);
    
    log('=== VWE Data Sync Completed ===');
    
  } catch (error) {
    log(`FATAL ERROR: ${error.message}`);
    process.exit(1);
  }
}

main();
