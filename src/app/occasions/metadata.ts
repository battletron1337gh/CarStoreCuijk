import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Occasions Cuijk | 200+ Tweedehands Auto\'s & 1ste Eigenaar',
  description: 'Ruim aanbod occasions in Cuijk met voornamelijk 1ste eigenaar autos. 200+ tweedehands auto\'s van alle merken met garantie. RDW erkend. 168 reviews, 5 sterren. Bekijk direct ons aanbod!',
  keywords: 'occasions Cuijk, 1ste eigenaar autos, 1e eigenaar, eerste eigenaar, tweedehands auto\'s, gebruikte auto\'s, alle merken, auto kopen, betrouwbare occasions, RDW occasions, occasion Cuijk',
  alternates: {
    canonical: '/occasions',
    languages: {
      'nl-NL': '/occasions',
    },
  },
  openGraph: {
    title: 'Occasions Cuijk | 200+ Tweedehands & Gebruikte Auto\'s',
    description: 'Ruim aanbod tweedehands en gebruikte auto\'s. 1ste eigenaar autos met garantie. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/occasions',
    images: [
      {
        url: '/og-occasions.jpg',
        width: 1200,
        height: 630,
        alt: 'Occasions Cuijk - Tweedehands Auto\'s',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Occasions Cuijk | 200+ Tweedehands Auto\'s',
    description: 'Ruim aanbod tweedehands auto\'s. 1ste eigenaar autos met garantie.',
    images: ['/og-occasions.jpg'],
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
