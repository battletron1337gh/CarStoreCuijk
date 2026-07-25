import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadVweCarsFromFile } from '@/data/vwe-cars-static';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarDetailClient from './CarDetailClient';

interface CarDetailPageProps {
  params: Promise<{
    voertuignr: string;
    klantnummer: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CarDetailPageProps): Promise<Metadata> {
  const { voertuignr, klantnummer } = await params;
  const cars = await loadVweCarsFromFile();
  const car = cars.find(c =>
    c.vweId && c.vweId.toLowerCase() === voertuignr.toLowerCase()
  );

  if (!car) {
    return {
      title: 'Auto niet gevonden | Car Store Cuijk',
    };
  }
  
  return {
    title: `${car.merk} ${car.model} ${car.variant} | Car Store Cuijk`,
    description: `${car.merk} ${car.model} ${car.variant} uit ${car.bouwjaar}. ${car.kilometerstand.toLocaleString('nl-NL')} km, ${car.brandstof}, ${car.transmissie}. Prijs: €${car.prijs.toLocaleString('nl-NL')}`,
  };
}

// Generate static params voor alle beschikbare auto's
export async function generateStaticParams() {
  const cars = await loadVweCarsFromFile();
  
  // Filter alleen beschikbare auto's
  const availableCars = cars.filter(car => car.status === 'beschikbaar' && car.vweId);
  
  const params = availableCars.map(car => {
    // Extract voertuignr en klantnummer uit de car data
    const vweData = car.vweData || {};
    const voertuignr = car.vweId || '';
    const klantnummer = vweData.klantnummer || '67810'; // Default klantnummer
    
    return {
      voertuignr,
      klantnummer,
    };
  });
  
  console.log(`[SSG] ${params.length} auto detail pagina's gegenereerd`);
  return params;
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { voertuignr, klantnummer } = await params;

  // Load car data
  const cars = await loadVweCarsFromFile();
  const car = cars.find(c =>
    c.vweId && c.vweId.toLowerCase() === voertuignr.toLowerCase()
  );

  if (!car) {
    notFound();
  }

  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: `${car.merk} ${car.model} ${car.variant}`,
    brand: { '@type': 'Brand', name: car.merk },
    model: car.model,
    vehicleConfiguration: car.variant,
    vehicleIdentificationNumber: car.kenteken || undefined,
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: car.kilometerstand,
      unitCode: 'KMT',
    },
    fuelType: car.brandstof,
    vehicleTransmission: car.transmissie,
    dateVehicleFirstRegistered: car.bouwjaar ? String(car.bouwjaar) : undefined,
    color: car.kleur,
    offers: {
      '@type': 'Offer',
      price: car.prijs,
      priceCurrency: 'EUR',
      availability: car.status === 'beschikbaar' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `https://www.carstorecuijk.nl/occasions/${voertuignr}/${klantnummer}/`,
    },
    image: car.afbeeldingen && car.afbeeldingen.length > 0 ? car.afbeeldingen[0] : undefined,
    description: `${car.merk} ${car.model} ${car.variant} uit ${car.bouwjaar}. ${car.kilometerstand.toLocaleString('nl-NL')} km, ${car.brandstof}, ${car.transmissie}.`,
    url: `https://www.carstorecuijk.nl/occasions/${voertuignr}/${klantnummer}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />
      <Header />
      <CarDetailClient car={car} />
      <Footer />
    </>
  );
}
