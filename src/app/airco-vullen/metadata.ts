import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airco Vullen Cuijk | Vanaf €79 | R134a & R1234yf',
  description: 'Airco vullen in Cuijk vanaf €79. Specialist in onderhoud van 1ste eigenaar autos. R134a en R1234yf koelmiddel. Leeservice, lekdetectie en reparatie. 168 reviews, 5 sterren. Bel nu!',
  keywords: 'airco vullen Cuijk, 1ste eigenaar auto onderhoud, airco service, airco onderhoud, airco reparatie, R134a, R1234yf, auto airco, airco bijvullen, airco lekdetectie',
  alternates: {
    canonical: '/airco-vullen',
    languages: {
      'nl-NL': '/airco-vullen',
    },
  },
  openGraph: {
    title: 'Airco Vullen Cuijk | Vanaf €79 | R134a & R1234yf',
    description: 'Airco vullen vanaf €79. R134a en R1234yf. Onderhoud en reparatie. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/airco-vullen',
    images: [
      {
        url: '/og-airco.jpg',
        width: 1200,
        height: 630,
        alt: 'Airco Vullen Cuijk - Vanaf €79',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Vullen Cuijk | Vanaf €79',
    description: 'Airco vullen vanaf €79. R134a en R1234yf. Onderhoud en reparatie.',
    images: ['/og-airco.jpg'],
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
