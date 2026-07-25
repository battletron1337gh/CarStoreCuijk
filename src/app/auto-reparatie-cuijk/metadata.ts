import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Reparatie Cuijk | Onderhoud Airco APK | Garage Open tot 22:00',
  description: 'Vakkundige auto reparatie in Cuijk. Onderhoud, airco vullen, distributieriem, koppeling, schokdempers, APK zelfde dag. Garage open tot 22:00. RDW erkend. 175 reviews, 5 sterren. Bel direct!',
  keywords: [
    'auto reparatie Cuijk',
    'auto onderhoud Cuijk',
    'airco vullen Cuijk',
    'distributieriem vervangen Cuijk',
    'distributieketting vervangen Cuijk',
    'koppeling vervangen Cuijk',
    'schokdempers vervangen Cuijk',
    'remmen vervangen Cuijk',
    'APK keuring Cuijk zelfde dag',
    'garage Cuijk open tot 22:00',
    'auto reparatie',
    'garage Cuijk',
    'RDW erkend Cuijk',
    'alle merken Cuijk',
    'spoed reparatie Cuijk',
  ],
  alternates: {
    canonical: 'https://carstorecuijk.nl/auto-reparatie-cuijk',
  },
  openGraph: {
    title: 'Auto Reparatie Cuijk | Onderhoud Airco APK | Garage Open tot 22:00',
    description: 'Vakkundige auto reparatie in Cuijk. Onderhoud, airco, distributieriem, koppeling, APK. Garage open tot 22:00. 175 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://carstorecuijk.nl/auto-reparatie-cuijk',
    siteName: 'Car Store Cuijk',
    images: [
      {
        url: '/og-auto-reparatie.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Reparatie Cuijk - Garage Open tot 22:00',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Reparatie Cuijk | Garage Open tot 22:00',
    description: 'Vakkundige auto reparatie in Cuijk. Onderhoud, airco, distributieriem, koppeling, APK.',
    images: ['/og-auto-reparatie.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'G-NR62QEFWCN',
  },
};
