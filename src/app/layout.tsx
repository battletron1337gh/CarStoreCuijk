import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Car Store Cuijk | Tweedehands Auto's & Garage",
  description: "Car Store Cuijk - Uw specialist in tweedehands auto's, gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie, airco vullen. 168 reviews, 5 sterren Google reviews. 7 dagen open.",
  keywords: "Car Store Cuijk, tweedehands auto's, gebruikte auto's, alle merken, auto inkoop, auto onderhoud, auto reparatie, airco vullen, koplampen polijsten, BOVAG garage Cuijk, occasions Cuijk",
  authors: [{ name: "Car Store Cuijk" }],
  creator: "Car Store Cuijk",
  publisher: "Car Store Cuijk",
  metadataBase: new URL("https://www.carstorecuijk.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Car Store Cuijk | Tweedehands Auto's & Garage",
    description: "Uw specialist in tweedehands auto's en gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie. 168 reviews, 5 sterren. BOVAG erkend. 7 dagen open.",
    type: "website",
    locale: "nl_NL",
    siteName: "Car Store Cuijk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Store Cuijk | Tweedehands Auto's & Garage",
    description: "Uw specialist in tweedehands auto's en gebruikte auto's. 168 reviews, 5 sterren. BOVAG erkend.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

// Schema.org LocalBusiness structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Car Store Cuijk",
  "description": "Uw specialist in tweedehands auto's, gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie, airco vullen. 168 reviews, 5 sterren Google reviews. BOVAG erkend.",
  "url": "https://www.carstorecuijk.nl",
  "telephone": "+31687118768",
  "email": "info@carstorecuijk.nl",
  "priceRange": "€€",
  "image": "https://www.carstorecuijk.nl/logo.png",
  "logo": "https://www.carstorecuijk.nl/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lange Beijerd 3d",
    "addressLocality": "Cuijk",
    "postalCode": "5431 NR",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.7309",
    "longitude": "5.8794"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:30",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/carstorecuijk",
    "https://www.instagram.com/carstorecuijk"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Autodiensten",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tweedehands auto's"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gebruikte auto's"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto inkoop"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto onderhoud"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto reparatie"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Distributieriem vervangen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ketting vervangen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Koppeling vervangen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Remblokken vervangen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airco vullen"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Koplampen polijsten"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "APK Keuring"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "168",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Google Analytics 4 ID - Replace with actual GA4 ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: false,
                cookie_flags: 'SameSite=None;Secure',
                cookie_expires: 28 * 24 * 60 * 60, // 28 days
              });
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
