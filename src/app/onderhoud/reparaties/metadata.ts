import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Reparatie Cuijk | RDW Erkend | Distributieriem & Koppeling',
  description: 'Vakkundige auto reparatie in Cuijk. Garage open tot 22:00, bereikbaar voor spoed reparatie. Specialist in 1ste eigenaar autos. Distributieriem, ketting, koppeling, remblokken. RDW erkend. 168 reviews, 5 sterren.',
  keywords: 'auto reparatie Cuijk, spoed reparatie, garage open tot 22:00, 22:00 bereikbaar, reparatie na sluitingstijd, altijd bereikbaar voor spoed, 1ste eigenaar auto onderhoud, distributieriem vervangen, ketting vervangen, koppeling vervangen, remblokken vervangen, auto reparatie, alle merken, RDW werkplaats',
  alternates: {
    canonical: '/onderhoud/reparaties',
    languages: {
      'nl-NL': '/onderhoud/reparaties',
    },
  },
  openGraph: {
    title: 'Auto Reparatie Cuijk | RDW Erkend | Distributieriem, Koppeling, Remmen',
    description: 'Vakkundige auto reparatie. Distributieriem, ketting, koppeling, remblokken. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/onderhoud/reparaties',
    images: [
      {
        url: '/og-reparaties.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Reparatie Cuijk - RDW Erkend',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Reparatie Cuijk | RDW Erkend',
    description: 'Vakkundige auto reparatie. Distributieriem, ketting, koppeling, remblokken.',
    images: ['/og-reparaties.jpg'],
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
