import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kennisbank | Tips & Advies over Auto\'s | Car Store Cuijk',
  description: 'Handige tips en advies over auto kopen, auto verkopen, APK keuring en meer. Lees onze kennisbank artikelen voor betrouwbaar advies van Car Store Cuijk. 168 reviews, 5 sterren.',
  keywords: 'auto kopen tips, auto verkopen tips, APK keuring, tweedehands auto advies, auto onderhoud tips, Car Store Cuijk kennisbank, 1ste eigenaar autos tips',
  alternates: {
    canonical: '/kennisbank',
    languages: {
      'nl-NL': '/kennisbank',
    },
  },
  openGraph: {
    title: 'Kennisbank | Tips & Advies over Auto\'s | Car Store Cuijk',
    description: 'Handige tips en advies over auto kopen, auto verkopen, APK keuring en meer. Betrouwbaar advies van Car Store Cuijk.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/kennisbank',
    images: [
      {
        url: '/og-kennisbank.jpg',
        width: 1200,
        height: 630,
        alt: 'Kennisbank - Tips & Advies over Auto\'s',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kennisbank | Tips & Advies over Auto\'s',
    description: 'Handige tips en advies over auto kopen, auto verkopen, APK keuring en meer.',
    images: ['/og-kennisbank.jpg'],
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
