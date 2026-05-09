import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Financiering Cuijk | Lage Rente | 1ste Eigenaar Auto\'s',
  description: 'Flexibele auto financiering in Cuijk voor 1ste eigenaar autos. Scherpe rentes, snelle afhandeling, geen BKR-toetsing. Financiering voor occasions en 1e eigenaar autos. 168 reviews, 5 sterren.',
  keywords: 'auto financiering Cuijk, 1ste eigenaar auto financieren, auto lease, occasion financiering, auto lening, alle merken, lage rente, geen BKR, auto lening Cuijk',
  alternates: {
    canonical: '/financiering',
    languages: {
      'nl-NL': '/financiering',
    },
  },
  openGraph: {
    title: 'Auto Financiering Cuijk | Lage Rente | 1ste Eigenaar Auto\'s',
    description: 'Flexibele financiering voor 1ste eigenaar autos. Scherpe rentes, snelle afhandeling.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/financiering',
    images: [
      {
        url: '/og-financiering.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Financiering Cuijk - Lage Rente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Financiering Cuijk | Lage Rente',
    description: 'Flexibele financiering voor 1ste eigenaar autos. Scherpe rentes, snelle afhandeling.',
    images: ['/og-financiering.jpg'],
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
