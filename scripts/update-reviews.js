#!/usr/bin/env node
/**
 * Update Reviews Script - Car Store Cuijk
 * 
 * Dit script update de reviews-cache.json file met nieuwe data.
 * Gebruik: node scripts/update-reviews.js
 * 
 * Je kunt nieuwe reviews toevoegen door ze in te voeren of een JSON file te importeren.
 */

const fs = require('fs');
const path = require('path');

const REVIEWS_FILE = path.join(__dirname, '..', 'public', 'data', 'reviews-cache.json');

// Laad huidige reviews
function loadCurrentReviews() {
  try {
    const data = fs.readFileSync(REVIEWS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading reviews:', error.message);
    return null;
  }
}

// Sla reviews op
function saveReviews(data) {
  try {
    fs.writeFileSync(REVIEWS_FILE, JSON.stringify(data, null, 2), 'utf-8');
    console.log('✅ Reviews succesvol opgeslagen!');
    console.log(`📊 Totaal: ${data.stats.totaal} reviews`);
    console.log(`⭐ Gemiddelde: ${data.stats.gemiddelde}`);
    console.log(`🕐 Bijgewerkt: ${new Date().toLocaleString('nl-NL')}`);
    return true;
  } catch (error) {
    console.error('❌ Error saving reviews:', error.message);
    return false;
  }
}

// Update review stats op basis van reviews array
function calculateStats(reviews) {
  const total = reviews.length;
  const sum = reviews.reduce((acc, r) => acc + r.sterren, 0);
  const average = total > 0 ? sum / total : 5;
  
  const verdeling = {
    vijfSterren: reviews.filter(r => r.sterren === 5).length,
    vierSterren: reviews.filter(r => r.sterren === 4).length,
    drieSterren: reviews.filter(r => r.sterren === 3).length,
    tweeSterren: reviews.filter(r => r.sterren === 2).length,
    eenSter: reviews.filter(r => r.sterren === 1).length,
  };

  return {
    gemiddelde: Math.round(average * 10) / 10,
    totaal: total,
    verdeling,
  };
}

// Toon huidige status
function showStatus() {
  const data = loadCurrentReviews();
  if (!data) return;

  console.log('\n📊 HUIDIGE STATUS\n');
  console.log(`Totaal reviews: ${data.stats.totaal}`);
  console.log(`Gemiddelde: ${data.stats.gemiddelde}`);
  console.log(`Trustpilot: ${data.trustpilotStats.totaal} reviews (${data.trustpilotStats.gemiddelde})`);
  console.log(`Laatste update: ${new Date(data.lastUpdated).toLocaleString('nl-NL')}`);
  console.log(`Bron: ${data.source}`);
  console.log('\n5 sterren:', data.stats.verdeling.vijfSterren);
  console.log('4 sterren:', data.stats.verdeling.vierSterren);
  console.log('3 sterren:', data.stats.verdeling.drieSterren);
  console.log('2 sterren:', data.stats.verdeling.tweeSterren);
  console.log('1 ster:', data.stats.verdeling.eenSter);
  console.log('');
}

// Update totaal aantal reviews (voor als je het totaal van Google Places weet)
function updateTotal(total, trustpilotTotal) {
  const data = loadCurrentReviews();
  if (!data) return;

  data.stats.totaal = total;
  data.trustpilotStats.totaal = trustpilotTotal || data.trustpilotStats.totaal;
  data.lastUpdated = new Date().toISOString();
  
  saveReviews(data);
}

// Help tekst
function showHelp() {
  console.log(`
🚗 Car Store Cuijk - Reviews Update Script

Gebruik:
  node scripts/update-reviews.js [commando] [opties]

Commando's:
  status                    Toon huidige review status
  update-total <n> [tp]     Update totaal aantal reviews (en optioneel Trustpilot)
  help                      Toon deze help

Voorbeelden:
  node scripts/update-reviews.js status
  node scripts/update-reviews.js update-total 175
  node scripts/update-reviews.js update-total 175 28

Let op:
  - Het totaal wordt handmatig geüpdatet (vanwege static export)
  - Commit en push de wijzigingen na update
  - Deploy de site om de wijzigingen live te zetten
`);
}

// Main
const [,, command, ...args] = process.argv;

switch (command) {
  case 'status':
    showStatus();
    break;
    
  case 'update-total':
    const total = parseInt(args[0], 10);
    const trustpilotTotal = args[1] ? parseInt(args[1], 10) : undefined;
    
    if (isNaN(total)) {
      console.error('❌ Ongeldig getal. Gebruik: node scripts/update-reviews.js update-total 175');
      process.exit(1);
    }
    
    updateTotal(total, trustpilotTotal);
    break;
    
  case 'help':
  default:
    showHelp();
    break;
}