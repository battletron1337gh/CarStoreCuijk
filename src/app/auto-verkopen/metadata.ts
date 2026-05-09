import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Verkopen Cuijk | Gratis Advertentie | 1ste Eigenaar Auto\'s',
  description: 'Auto verkopen via Car Store Cuijk. Consignatie, inruil of directe inkoop. Wij verkopen voornamelijk 1ste eigenaar autos. Gratis waardebepaling en advertentie. 168 reviews, 5 sterren.',
  keywords: 'auto verkopen Cuijk, 1ste eigenaar autos te koop, 1e eigenaar, eerste eigenaar, occasion verkopen, auto inruilen, consumentenverkoop, waardebepaling auto, gratis advertentie',
  alternates: {
    canonical: '/auto-verkopen',
    languages: {
      'nl-NL': '/auto-verkopen',
    },
  },
  openGraph: {
    title: 'Auto Verkopen Cuijk | Gratis Advertentie | Consignatie & Inruil',
    description: 'Consumentenverkoop, inruil of directe inkoop. Gratis waardebepaling. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/auto-verkopen',
    images: [
      {
        url: '/og-verkopen.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Verkopen Cuijk - Gratis Advertentie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Verkopen Cuijk | Gratis Advertentie',
    description: 'Consumentenverkoop, inruil of directe inkoop. Gratis waardebepaling.',
    images: ['/og-verkopen.jpg'],
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
