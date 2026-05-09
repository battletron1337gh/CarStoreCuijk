import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Koplampen Polijsten Cuijk | Vanaf €59 | UV Coating',
  description: 'Koplampen polijsten in Cuijk vanaf €59. Ook voor 1ste eigenaar autos. Vergeelde koplampen weer als nieuw. UV coating, 6 maanden garantie. 168 reviews, 5 sterren. Bel nu!',
  keywords: 'koplampen polijsten Cuijk, 1ste eigenaar auto onderhoud, koplampen herstellen, vergeelde koplampen, koplamp renovatie, koplamp coating, auto koplampen, koplamp polijsten',
  alternates: {
    canonical: '/koplampen-polijsten',
    languages: {
      'nl-NL': '/koplampen-polijsten',
    },
  },
  openGraph: {
    title: 'Koplampen Polijsten Cuijk | Vanaf €59 | UV Coating',
    description: 'Vergeelde koplampen weer helder. UV coating, 6 maanden garantie. 168 reviews, 5 sterren.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.carstorecuijk.nl/koplampen-polijsten',
    images: [
      {
        url: '/og-koplampen.jpg',
        width: 1200,
        height: 630,
        alt: 'Koplampen Polijsten Cuijk - Vanaf €59',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koplampen Polijsten Cuijk | Vanaf €59',
    description: 'Vergeelde koplampen weer helder. UV coating, 6 maanden garantie.',
    images: ['/og-koplampen.jpg'],
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
