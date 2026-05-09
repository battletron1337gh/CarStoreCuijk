import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Inkoop Cuijk | Direct Geld | Wij Kopen 1ste Eigenaar Auto\'s',
  description: 'Auto inkoop Cuijk - Wij kopen voornamelijk 1ste eigenaar autos en alle merken. Gratis taxatie, direct geld. Ook 1e eigenaar autos met schade. 168 reviews, 5 sterren. Bel nu!',
  keywords: 'auto inkoop Cuijk, 1ste eigenaar autos inkoop, 1e eigenaar, eerste eigenaar auto verkopen, auto verkopen, alle merken, auto inruilen, taxatie auto, direct geld auto',
  alternates: {
    canonical: '/auto-inkoop',
    languages: {
      'nl-NL': '/auto-inkoop',
    },
  },
  openGraph: {
    title: 'Auto Inkoop Cuijk | Direct Geld | Alle Merken Gezocht',
    description: 'Wij kopen alle merken auto\'s. Gratis taxatie, direct geld. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/auto-inkoop',
    images: [
      {
        url: '/og-inkoop.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Inkoop Cuijk - Direct Geld',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Inkoop Cuijk | Direct Geld',
    description: 'Wij kopen alle merken auto\'s. Gratis taxatie, direct geld.',
    images: ['/og-inkoop.jpg'],
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
