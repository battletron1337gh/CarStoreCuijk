import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verkochte Auto\'s | Car Store Cuijk | Recent Verkocht',
  description: 'Bekijk onze recent verkochte auto\'s. Car Store Cuijk heeft al honderden tevreden klanten. RDW erkend met 168 reviews, 5 sterren. Bekijk ons aanbod voor vergelijkbare occasions.',
  keywords: 'verkochte auto\'s, recent verkocht, auto verkocht Cuijk, tevreden klanten, social proof, 1ste eigenaar autos verkocht',
  alternates: {
    canonical: '/verkochte-autos',
    languages: {
      'nl-NL': '/verkochte-autos',
    },
  },
  openGraph: {
    title: 'Verkochte Auto\'s | Car Store Cuijk | Recent Verkocht',
    description: 'Bekijk onze recent verkochte auto\'s. Al honderden tevreden klanten. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/verkochte-autos',
    images: [
      {
        url: '/og-verkocht.jpg',
        width: 1200,
        height: 630,
        alt: 'Verkochte Auto\'s - Car Store Cuijk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verkochte Auto\'s | Car Store Cuijk',
    description: 'Bekijk onze recent verkochte auto\'s. Al honderden tevreden klanten.',
    images: ['/og-verkocht.jpg'],
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
