import { redirect, notFound } from 'next/navigation';
import { loadVweCarsFromFile } from '@/data/vwe-cars-static';

interface KentekenRedirectPageProps {
  params: Promise<{
    kenteken: string;
  }>;
}

// Genereer statische redirect pagina's voor alle huidige kentekens
export async function generateStaticParams() {
  const cars = await loadVweCarsFromFile();

  const params = cars
    .filter(car => car.kenteken && car.status === 'beschikbaar' && car.vweId)
    .map(car => ({
      kenteken: car.kenteken!.toLowerCase(),
    }));

  console.log(`[Redirect] ${params.length} kenteken redirects gegenereerd`);
  return params;
}

export async function generateMetadata({ params }: KentekenRedirectPageProps) {
  const { kenteken } = await params;
  return {
    title: `Occasion ${kenteken} | Car Store Cuijk`,
  };
}

export default async function KentekenRedirectPage({ params }: KentekenRedirectPageProps) {
  const { kenteken } = await params;
  const cars = await loadVweCarsFromFile();

  // Zoek auto op kenteken (case-insensitive)
  const car = cars.find(c =>
    c.kenteken && c.kenteken.toLowerCase() === kenteken.toLowerCase()
  );

  if (!car || !car.vweId) {
    notFound();
  }

  const vweData = car.vweData || {};
  const klantnummer = vweData.klantnummer || '67810';

  // Redirect naar nieuwe URL structuur
  redirect(`/occasions/${car.vweId}/${klantnummer}/`);
}
