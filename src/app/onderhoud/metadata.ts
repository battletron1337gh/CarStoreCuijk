import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Onderhoud Cuijk | Garage Car Store | APK & Beurt',
  description: 'Professioneel auto onderhoud in Cuijk voor alle merken. Garage open tot 22:00, bereikbaar voor spoed reparatie. APK, kleine en grote beurt. Specialist in 1ste eigenaar autos. 168 reviews, 5 sterren.',
  keywords: 'auto onderhoud Cuijk, garage open tot 22:00, 22:00 bereikbaar, spoed reparatie, reparatie na sluitingstijd, altijd bereikbaar voor spoed, 1ste eigenaar autos onderhoud, auto onderhoud, alle merken, APK keuring, kleine beurt, grote beurt, garage Cuijk, RDW garage',
  alternates: {
    canonical: '/onderhoud',
    languages: {
      'nl-NL': '/onderhoud',
    },
  },
  openGraph: {
    title: 'Auto Onderhoud Cuijk | Garage Alle Merken | APK & Beurt',
    description: 'Professioneel auto onderhoud voor alle merken. APK, kleine en grote beurt. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/onderhoud',
    images: [
      {
        url: '/og-onderhoud.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Onderhoud Cuijk - Garage Car Store',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Onderhoud Cuijk | Garage Alle Merken',
    description: 'Professioneel auto onderhoud voor alle merken. APK, kleine en grote beurt.',
    images: ['/og-onderhoud.jpg'],
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
