import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APK Keuring: Wat Wordt Er Gecontroleerd? | Car Store Cuijk',
  description: 'Wat wordt er gecontroleerd tijdens een APK keuring? Lees alles over de APK eisen, kosten, termijnen en hoe je je auto kunt voorbereiden. 168 reviews, 5 sterren.',
  keywords: 'APK keuring wat wordt gecontroleerd, APK eisen, APK kosten, APK termijn, auto keuring, APK Cuijk, APK keuring checklist',
  alternates: {
    canonical: '/kennisbank/apk-keuring-wat-wordt-er-gecontroleerd',
    languages: {
      'nl-NL': '/kennisbank/apk-keuring-wat-wordt-er-gecontroleerd',
    },
  },
  openGraph: {
    title: 'APK Keuring: Wat Wordt Er Gecontroleerd? | Car Store Cuijk',
    description: 'Wat wordt er gecontroleerd tijdens een APK keuring? Lees alles over de APK eisen, kosten en termijnen.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/kennisbank/apk-keuring-wat-wordt-er-gecontroleerd',
    images: [
      {
        url: '/og-apk-keuring.jpg',
        width: 1200,
        height: 630,
        alt: 'APK Keuring - Wat Wordt Er Gecontroleerd?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APK Keuring: Wat Wordt Er Gecontroleerd?',
    description: 'Wat wordt er gecontroleerd tijdens een APK keuring? Lees alles over de APK eisen, kosten en termijnen.',
    images: ['/og-apk-keuring.jpg'],
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
