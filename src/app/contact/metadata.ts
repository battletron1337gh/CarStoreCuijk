import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Garage Cuijk | Car Store - 22:00 Bereikbaar',
  description: 'Neem contact op met Car Store Cuijk. Garage open tot 22:00, altijd bereikbaar voor spoed reparatie. Specialist in 1ste eigenaar autos. Bel of WhatsApp ons, ook na sluitingstijd. 168 reviews, 5 sterren.',
  keywords: 'contact Car Store Cuijk, garage open tot 22:00, 22:00 bereikbaar, spoed reparatie, reparatie na sluitingstijd, altijd bereikbaar voor spoed, 1ste eigenaar autos, auto inkoop Cuijk, auto verkopen Cuijk, garage Cuijk, adres Car Store Cuijk',
  alternates: {
    canonical: '/contact',
    languages: {
      'nl-NL': '/contact',
    },
  },
  openGraph: {
    title: 'Contact | Garage Cuijk | Car Store - 22:00 Bereikbaar',
    description: 'Neem contact op met Car Store Cuijk. Specialist in 1ste eigenaar autos. 22:00 bereikbaar.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Car Store Cuijk - Garage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Garage Cuijk | Car Store',
    description: 'Neem contact op met Car Store Cuijk. Specialist in 1ste eigenaar autos.',
    images: ['/og-contact.jpg'],
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
