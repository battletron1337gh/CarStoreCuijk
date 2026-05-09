import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waar Moet Je Op Letten Als Je Een Auto Verkoopt? | Car Store Cuijk',
  description: 'Je auto verkopen? Ontdek waar je op moet letten voor een veilige en succesvolle verkoop. Tips over prijsbepaling, documenten, advertentie en overdracht. 168 reviews, 5 sterren.',
  keywords: 'auto verkopen tips, auto verkopen particulier, waar op letten auto verkopen, auto verkoop checklist, auto verkopen documenten, auto verkopen prijs bepalen, 1ste eigenaar auto verkopen',
  alternates: {
    canonical: '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt',
    languages: {
      'nl-NL': '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt',
    },
  },
  openGraph: {
    title: 'Waar Moet Je Op Letten Als Je Een Auto Verkoopt? | Car Store Cuijk',
    description: 'Ontdek waar je op moet letten voor een veilige en succesvolle autoverkoop. Tips over prijsbepaling, documenten, advertentie en overdracht.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt',
    images: [
      {
        url: '/og-auto-verkopen.jpg',
        width: 1200,
        height: 630,
        alt: 'Waar Moet Je Op Letten Als Je Een Auto Verkoopt?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waar Moet Je Op Letten Als Je Een Auto Verkoopt?',
    description: 'Ontdek waar je op moet letten voor een veilige en succesvolle autoverkoop.',
    images: ['/og-auto-verkopen.jpg'],
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
