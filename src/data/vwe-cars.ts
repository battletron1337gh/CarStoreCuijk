import { Car } from '@/types';
import vehiclesData from '../../data/vehicles.json';

// Helper functie om VWE data om te zetten naar Car formaat
function convertVweToCar(vweVehicle: any): Car | null {
  const raw = vweVehicle.raw || {};
  
  // Haal prijs op uit raw data
  let prijs = 0;
  const prijsData = raw.verkoopprijs_particulier?.prijzen;
  if (prijsData && typeof prijsData === 'object') {
    const prijsObj = prijsData.prijs;
    if (prijsObj && typeof prijsObj === 'object') {
      prijs = parseInt(prijsObj.bedrag || '0', 10);
    }
  }
  
  // Skip voertuigen zonder prijs
  if (!prijs || prijs === 0) {
    return null;
  }
  
  // Haal KM stand op
  let kmStand = 0;
  if (raw.tellerstand && typeof raw.tellerstand === 'object') {
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
  const carrosserie = raw.carrosserie || raw.carrosserie_orig || 'Hatchback';
  
  // Haal kleur op
  const kleur = raw.basiskleur || raw.kleur_nederlands || '';
  
  // Bouw ID op basis van kenteken of voertuignr
  const id = vweVehicle.kenteken || vweVehicle.id || `vwe-${raw.voertuignr}`;
  
  // Haal foto URLs op uit VWE afbeeldingen (gebruik lokale paden)
  const fotoUrls: string[] = [];
  const kenteken = vweVehicle.kenteken || '';
  if (raw.afbeeldingen?.afbeelding && Array.isArray(raw.afbeeldingen.afbeelding)) {
    raw.afbeeldingen.afbeelding.forEach((img: any) => {
      if (img.bestandsnaam && kenteken) {
        // Gebruik lokale pad naar gedownloade afbeelding
        fotoUrls.push(`/vwe-fotos/${kenteken}/${img.bestandsnaam}`);
      }
    });
  }
  // Fallback: gebruik placeholder als er geen foto's zijn
  if (fotoUrls.length === 0) {
    fotoUrls.push('/cars/placeholder.svg');
  }
  
  // Bouw beschrijving
  const type = raw.type || '';
  const features: string[] = [];
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
    status: 'beschikbaar',
    apk: apkTot,
    features: features,
    beschrijving: type,
    kenteken: vweVehicle.kenteken,
    vweId: raw.voertuignr,
    kleur: kleur,
    // Include raw VWE data for detail page
    vweData: raw
  } as Car;
}

// Converteer alle VWE voertuigen
export const vweCars: Car[] = vehiclesData.vehicles
  .map(convertVweToCar)
  .filter((car): car is Car => car !== null)
  .sort((a, b) => a.prijs - b.prijs);

console.log(`[VWE] ${vweCars.length} voertuigen geladen`);
