

import { Car } from '@/types';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

// Helper functie om VWE data om te zetten naar Car formaat
function convertVweToCar(vweVehicle: any): Car | null {
  const raw = vweVehicle.raw || {};
  
  // Haal prijs op - eerst uit vweVehicle.prijs (server parsed), dan uit raw data
  let prijs = 0;
  if (vweVehicle.prijs) {
    prijs = parseInt(String(vweVehicle.prijs), 10);
  } else {
    const prijsData = raw.verkoopprijs_particulier?.prijzen;
    if (prijsData && typeof prijsData === 'object') {
      const prijsObj = prijsData.prijs;
      if (prijsObj && typeof prijsObj === 'object') {
        prijs = parseInt(prijsObj.bedrag || prijsObj['@attributes']?.bedrag || '0', 10);
      }
    }
  }
  
  // Skip voertuigen zonder prijs
  if (!prijs || prijs === 0) {
    return null;
  }
  
  // Haal KM stand op - eerst uit vweVehicle.kmStand, dan uit raw
  let kmStand = 0;
  if (vweVehicle.kmStand) {
    kmStand = parseInt(String(vweVehicle.kmStand), 10);
  } else if (raw.tellerstand && typeof raw.tellerstand === 'object') {
    kmStand = parseInt(raw.tellerstand._ || '0', 10);
  }
  
  // Converteer brandstof code
  const brandstofMap: Record<string, string> = {
    'B': 'Benzine',
    'D': 'Diesel',
    'E': 'Elektrisch',
    'H': 'Hybride',
    'L': 'LPG',
    'N': 'CNG'
  };
  const brandstof = brandstofMap[vweVehicle.brandstof] || 'Benzine';
  
  // Converteer transmissie code
  const transmissieMap: Record<string, string> = {
    'A': 'Automaat',
    'H': 'Handmatig',
    'M': 'Handmatig',
    'C': 'CVT'
  };
  const transmissie = transmissieMap[vweVehicle.transmissie] || 'Handmatig';
  
  // Haal carrosserie op
  const carrosserie = raw.carrosserie || raw.carrosserie_orig || vweVehicle.carrosserie || 'Hatchback';
  
  // Haal kleur op
  const kleur = vweVehicle.kleur || raw.basiskleur || raw.kleur_nederlands || '';
  
  // Bouw ID op basis van voertuignr/klantnummer (VWE formaat voor Marktplaats)
  const voertuignr = raw.voertuignr || '';
  const klantnummer = raw.klantnummer || '';
  const id = voertuignr && klantnummer
    ? `${voertuignr}/${klantnummer}`
    : (vweVehicle.kenteken || vweVehicle.id || 'unknown');
  
  // Haal foto URLs op - geef voorrang aan lokale bestanden op de server,
  // omdat externe VWE URLs regelmatig verlopen/verwijderd worden.
  const fotoUrls: string[] = [];
  const kenteken = vweVehicle.kenteken || '';

  // 1. Probeer lokale foto's op de server (public/vwe-fotos/<kenteken>/)
  if (kenteken) {
    const localDir = join(process.cwd(), 'public', 'vwe-fotos', kenteken);
    if (existsSync(localDir)) {
      try {
        const localFiles = readdirSync(localDir)
          .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
        if (localFiles.length > 0) {
          fotoUrls.push(...localFiles.map((file) => `/vwe-fotos/${kenteken}/${file}`));
        }
      } catch {
        // ignore read errors
      }
    }
  }

  // 2. Fallback naar externe VWE fotoUrls
  if (fotoUrls.length === 0 && vweVehicle.fotoUrls && Array.isArray(vweVehicle.fotoUrls) && vweVehicle.fotoUrls.length > 0) {
    fotoUrls.push(...vweVehicle.fotoUrls);
  }

  // 3. Fallback naar raw.afbeeldingen
  if (fotoUrls.length === 0 && raw.afbeeldingen?.afbeelding && Array.isArray(raw.afbeeldingen.afbeelding)) {
    raw.afbeeldingen.afbeelding.forEach((img: any) => {
      if (img['@attributes']?.url) {
        fotoUrls.push(img['@attributes'].url);
      } else if (img.bestandsnaam && kenteken) {
        fotoUrls.push(`/vwe-fotos/${kenteken}/${img.bestandsnaam}`);
      } else if (img.url) {
        fotoUrls.push(img.url);
      }
    });
  }

  // 4. Laatste fallback: placeholder
  if (fotoUrls.length === 0) {
    fotoUrls.push('/cars/placeholder.svg');
  }
  
  // Bouw features uit VWE features + type veld
  const type = vweVehicle.variant || raw.type || '';
  const features: string[] = [];
  
  // Voeg features toe uit VWE data
  if (vweVehicle.features && Array.isArray(vweVehicle.features)) {
    features.push(...vweVehicle.features);
  }
  
  // Parse type veld voor extra features
  if (type.includes('1ste') || type.includes('1e')) features.push('1ste eigenaar');
  if (type.includes('NAP')) features.push('NAP');
  if (raw.nap_weblabel === 'j') features.push('NAP Weblabel');
  
  // Haal APK datum op
  const apkTot = raw.apk?.tot || '';
  
  return {
    id: id.toLowerCase(),
    merk: vweVehicle.merk || 'Onbekend',
    model: vweVehicle.model || '',
    variant: type,
    bouwjaar: parseInt(vweVehicle.bouwjaar || '0', 10),
    carrosserie: carrosserie,
    brandstof: brandstof,
    transmissie: transmissie,
    kilometerstand: kmStand,
    prijs: prijs,
    afbeeldingen: fotoUrls,
    // Beide 'verkocht' en 'gereserveerd' krijgen status 'verkocht' en worden gefilterd uit occasions
    status: vweVehicle.status === 'verkocht' || vweVehicle.sjabloon === 'Verkocht' || raw.verkocht === 'j' || raw.verkocht === true || vweVehicle.status === 'gereserveerd' || raw.gereserveerd === 'j' ? 'verkocht' : 'beschikbaar',
    apk: apkTot,
    features: features,
    beschrijving: type,
    kenteken: vweVehicle.kenteken,
    vweId: raw.voertuignr,
    kleur: kleur,
    vweData: raw
  } as Car;
}

/**
 * Laad VWE voertuigen van lokale JSON file (server-side only)
 */
export async function loadVweCarsFromFile(): Promise<Car[]> {
  try {
    const dataPath = join(process.cwd(), 'data', 'vehicles.json');
    const fileContent = readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(fileContent);
    
    if (!data.vehicles || !Array.isArray(data.vehicles)) {
      console.log('[VWE] Geen voertuigen gevonden in lokale file');
      return [];
    }
    
    const cars = data.vehicles
      .map(convertVweToCar)
      .filter((car: Car | null): car is Car => car !== null)
      .sort((a: Car, b: Car) => a.prijs - b.prijs);
    
    console.log(`[VWE] ${cars.length} voertuigen geladen van lokale file`);
    return cars;
  } catch (error) {
    console.log('[VWE] Kon lokale file niet laden:', error);
    return [];
  }
}
