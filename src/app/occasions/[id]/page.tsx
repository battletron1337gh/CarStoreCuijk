import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarDetailClient from './CarDetailClient';
import vehiclesData from '../../../../data/vehicles.json';
import type { Metadata } from 'next';
import type { Car } from '@/types';

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
  
  // Bouw ID op basis van kenteken
  const id = (vweVehicle.kenteken || vweVehicle.id || '').toLowerCase();
  
  // Haal foto URLs op uit VWE afbeeldingen
  const fotoUrls: string[] = [];
  if (raw.afbeeldingen?.afbeelding && Array.isArray(raw.afbeeldingen.afbeelding)) {
    raw.afbeeldingen.afbeelding.forEach((img: any) => {
      if (img.url) fotoUrls.push(img.url);
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
    id,
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

// Get all cars
function getAllCars(): Car[] {
  return vehiclesData.vehicles
    .map(convertVweToCar)
    .filter((car): car is Car => car !== null)
    .sort((a, b) => a.prijs - b.prijs);
}

// Generate static params for all VWE cars
export function generateStaticParams() {
  const cars = getAllCars();
  return cars.map((car) => ({
    id: car.id,
  }));
}

// Generate metadata for each car
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const cars = getAllCars();
  const car = cars.find(c => c.id === id?.toLowerCase());
  
  if (!car) {
    return {
      title: 'Auto niet gevonden | Car Store Cuijk',
      description: 'Deze occasion is niet gevonden. Bekijk ons actuele aanbod occasions.',
      robots: {
        index: false,
        follow: true,
      },
    };
  }
  
  const title = `${car.merk} ${car.model} ${car.bouwjaar} | €${car.prijs.toLocaleString('nl-NL')} | Car Store Cuijk`;
  const description = `${car.merk} ${car.model} ${car.bouwjaar} - ${car.kilometerstand.toLocaleString('nl-NL')} km - ${car.brandstof} - ${car.transmissie}. ${car.features?.includes('1ste eigenaar') ? '1ste eigenaar auto. ' : ''}Bekijk deze occasion nu bij Car Store Cuijk!`;
  
  return {
    title,
    description,
    keywords: `${car.merk} ${car.model}, ${car.merk} ${car.model} ${car.bouwjaar}, occasion ${car.merk}, tweedehands ${car.merk} ${car.model}, ${car.bouwjaar} ${car.merk}, ${car.brandstof} ${car.merk}`,
    alternates: {
      canonical: `/occasions/${car.id}`,
      languages: {
        'nl-NL': `/occasions/${car.id}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'nl_NL',
      url: `https://www.carstorecuijk.nl/occasions/${car.id}`,
      images: car.afbeeldingen && car.afbeeldingen.length > 0 ? [
        {
          url: car.afbeeldingen[0],
          width: 1200,
          height: 800,
          alt: `${car.merk} ${car.model} ${car.bouwjaar} - €${car.prijs.toLocaleString('nl-NL')} - Car Store Cuijk`,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: car.afbeeldingen && car.afbeeldingen.length > 0 ? [car.afbeeldingen[0]] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cars = getAllCars();
  const car = cars.find(c => c.id === id?.toLowerCase());
  
  return (
    <>
      <Header />
      <CarDetailClient car={car} />
      <Footer />
    </>
  );
}
