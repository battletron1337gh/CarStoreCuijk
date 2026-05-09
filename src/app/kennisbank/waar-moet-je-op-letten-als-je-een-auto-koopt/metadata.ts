import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waar Moet Je Op Letten Als Je Een Auto Koopt? | Car Store Cuijk',
  description: 'Een auto kopen? Ontdek waar je op moet letten bij de aankoop van een tweedehands auto. Tips over onderhoudshistorie, proefrit, prijs en documenten. 168 reviews, 5 sterren.',
  keywords: 'auto kopen tips, tweedehands auto kopen, waar op letten auto kopen, auto aankoop checklist, occasion kopen advies, auto kopen wat checken, 1ste eigenaar auto kopen',
  alternates: {
    canonical: '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt',
    languages: {
      'nl-NL': '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt',
    },
  },
  openGraph: {
    title: 'Waar Moet Je Op Letten Als Je Een Auto Koopt? | Car Store Cuijk',
    description: 'Ontdek waar je op moet letten bij de aankoop van een tweedehands auto. Tips over onderhoudshistorie, proefrit, prijs en documenten.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt',
    images: [
      {
        url: '/og-auto-kopen.jpg',
        width: 1200,
        height: 630,
        alt: 'Waar Moet Je Op Letten Als Je Een Auto Koopt?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waar Moet Je Op Letten Als Je Een Auto Koopt?',
    description: 'Ontdek waar je op moet letten bij de aankoop van een tweedehands auto.',
    images: ['/og-auto-kopen.jpg'],
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
