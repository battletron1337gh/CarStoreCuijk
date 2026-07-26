const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'vehicles.json');
const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'featured-cars.json');

function parseDate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return '1970-01-01T00:00:00.000Z';
  const parts = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (parts) {
    return `${parts[3]}-${parts[2]}-${parts[1]}T00:00:00.000Z`;
  }
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? '1970-01-01T00:00:00.000Z' : d.toISOString();
}

function main() {
  if (!fs.existsSync(dataPath)) {
    console.error(`[generate-featured-cars] ${dataPath} not found`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const vehicles = data.vehicles || [];

  const cars = vehicles
    .map((v) => {
      const raw = v.raw || {};
      const isSold =
        v.status === 'verkocht' ||
        v.status === 'gereserveerd' ||
        v.sjabloon === 'Verkocht' ||
        raw.verkocht === 'j' ||
        raw.verkocht === true ||
        raw.gereserveerd === 'j';
      const status = isSold ? 'verkocht' : 'beschikbaar';

      let afbeeldingen = [];
      if (Array.isArray(v.localFotos) && v.localFotos.length > 0) {
        afbeeldingen = v.localFotos;
      } else if (Array.isArray(v.fotoUrls) && v.fotoUrls.length > 0) {
        afbeeldingen = v.fotoUrls;
      } else {
        afbeeldingen = ['/cars/placeholder.svg'];
      }

      const id =
        raw.voertuignr && raw.klantnummer
          ? `${raw.voertuignr}/${raw.klantnummer}`.toLowerCase()
          : String(v.kenteken || v.id || 'unknown').toLowerCase();

      return {
        id,
        merk: v.merk || 'Onbekend',
        model: v.model || '',
        bouwjaar: parseInt(v.bouwjaar || '0', 10),
        kilometerstand: parseInt(v.kmStand || '0', 10),
        prijs: parseInt(v.prijs || '0', 10),
        afbeeldingen,
        status,
        createdAt: parseDate(raw.invoerdatum),
      };
    })
    .filter(
      (car) =>
        car.status === 'beschikbaar' &&
        car.afbeeldingen.length > 0 &&
        car.afbeeldingen[0] !== '/cars/placeholder.svg' &&
        car.prijs > 0
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    outPath,
    JSON.stringify({ cars, generatedAt: new Date().toISOString() }, null, 2)
  );

  console.log(`[generate-featured-cars] Wrote ${cars.length} cars to ${outPath}`);
  cars.forEach((car) => {
    console.log(`  - ${car.merk} ${car.model} (${car.bouwjaar}) - ${car.createdAt}`);
  });
}

main();
