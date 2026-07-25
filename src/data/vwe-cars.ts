import { Car } from '@/types';

export type { Car };

// API endpoint voor VWE voertuigen
const VWE_API_URL = 'https://carstorecuijk.nl/api/vwe/vehicles.php';

// Cache voor voertuigen
let cachedVehicles: Car[] | null = null;
let lastFetch: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuten

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
  
  // Bouw ID op basis van voertuignr/klantnummer (VWE formaat voor detail pagina)
  const voertuignr = raw.voertuignr || '';
  const klantnummer = raw.klantnummer || '';
  const id = voertuignr && klantnummer
    ? `${voertuignr}/${klantnummer}`
    : (vweVehicle.kenteken || vweVehicle.id || 'unknown');
  
  // Haal foto URLs op - eerst uit vweVehicle.fotoUrls (van API), dan uit raw
  const fotoUrls: string[] = [];
  const kenteken = vweVehicle.kenteken || '';
  
  // Gebruik fotoUrls uit vweVehicle (van API)
  if (vweVehicle.fotoUrls && Array.isArray(vweVehicle.fotoUrls) && vweVehicle.fotoUrls.length > 0) {
    fotoUrls.push(...vweVehicle.fotoUrls);
  }
  // Fallback naar localFotos
  else if (vweVehicle.localFotos && Array.isArray(vweVehicle.localFotos) && vweVehicle.localFotos.length > 0) {
    fotoUrls.push(...vweVehicle.localFotos.map((path: string) => `https://carstorecuijk.nl${path}`));
  }
  // Fallback naar raw.afbeeldingen
  else if (raw.afbeeldingen?.afbeelding && Array.isArray(raw.afbeeldingen.afbeelding)) {
    raw.afbeeldingen.afbeelding.forEach((img: any) => {
      if (img['@attributes']?.url) {
        fotoUrls.push(img['@attributes'].url);
      } else if (img.bestandsnaam && kenteken) {
        fotoUrls.push(`https://carstorecuijk.nl/vwe-fotos/${kenteken}/${img.bestandsnaam}`);
      } else if (img.url) {
        fotoUrls.push(img.url);
      }
    });
  }
  
  // Fallback: gebruik placeholder als er geen foto's zijn
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

  // Converteer datums naar ISO formaat
  const parseNlDate = (dateStr: string): string | undefined => {
    if (!dateStr || dateStr.trim() === '') return undefined;
    const parts = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (parts) {
      const [, day, month, year] = parts;
      return `${year}-${month}-${day}`;
    }
    return undefined;
  };

  const createdAt = parseNlDate(raw.invoerdatum);
  const soldAt = parseNlDate(raw.verkocht_datum);

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
    // Include raw VWE data for detail page
    vweData: raw,
    createdAt,
    soldAt
  } as Car;
}

/**
 * Haal VWE voertuigen op van de API
 * Gebruikt caching voor betere performance
 */
export async function fetchVweCars(): Promise<Car[]> {
  // Check cache
  const now = Date.now();
  if (cachedVehicles && (now - lastFetch) < CACHE_DURATION) {
    console.log(`[VWE] ${cachedVehicles.length} voertuigen uit cache`);
    return cachedVehicles;
  }
  
  try {
    const response = await fetch(VWE_API_URL, {
      next: { revalidate: 300 } // 5 minuten revalidate
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.vehicles || !Array.isArray(data.vehicles)) {
      console.log('[VWE] Geen voertuigen gevonden in API response');
      return [];
    }
    
    // Converteer en filter voertuigen
    const cars = data.vehicles
      .map(convertVweToCar)
      .filter((car: Car | null): car is Car => car !== null)
      .sort((a: Car, b: Car) => a.prijs - b.prijs);
    
    // Update cache
    cachedVehicles = cars;
    lastFetch = now;
    
    console.log(`[VWE] ${cars.length} voertuigen geladen van API`);
    return cars;
    
  } catch (error) {
    console.error('[VWE] Fout bij ophalen voertuigen:', error);
    // Fallback naar cache als beschikbaar
    if (cachedVehicles) {
      console.log('[VWE] Fallback naar cache');
      return cachedVehicles;
    }
    return [];
  }
}

// Backwards compatibility - leeg array voor initiele load
// Roep fetchVweCars() aan om data te laden
export const vweCars: Car[] = [];

// Export voor componenten die async data nodig hebben
export { convertVweToCar };
