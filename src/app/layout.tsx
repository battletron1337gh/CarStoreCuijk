import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import LoadingScreen from "@/components/LoadingScreen";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CompareBar from "@/components/CompareBar";
import { CompareProvider } from "@/context/CompareContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 0.5,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Auto Garage Cuijk | Inkoop Verkoop Reparatie Onderhoud | Car Store",
  description: "Car Store Cuijk - Uw full-service garage voor auto inkoop, verkoop, reparatie, onderhoud, banden en airco service. RDW erkend. 175+ reviews, 5 sterren. Alle merken, altijd bereikbaar. Bel 06-87118768.",
  keywords: "auto garage Cuijk, auto inkoop Cuijk, auto verkoop Cuijk, auto reparatie Cuijk, garage Cuijk, auto onderhoud Cuijk, banden service Cuijk, airco vullen Cuijk, APK keuring Cuijk, RDW erkend garage, occasions Cuijk, tweedehands auto's, gebruikte auto's, auto reparatie, garage Noord-Brabant, auto verkopen Cuijk, auto opkoper Cuijk",
  authors: [{ name: "Car Store Cuijk" }],
  creator: "Car Store Cuijk",
  publisher: "Car Store Cuijk",
  metadataBase: new URL("https://www.carstorecuijk.nl"),
  alternates: {
    canonical: "/",
    languages: {
      'nl-NL': '/',
    },
  },
  openGraph: {
    title: "Auto Garage Cuijk | Inkoop Verkoop Reparatie Onderhoud | Car Store",
    description: "Full-service garage voor auto inkoop, verkoop, reparatie, onderhoud, banden en airco service. RDW erkend. 175+ reviews, 5 sterren. Alle merken, altijd bereikbaar. Bel 06-87118768.",
    type: "website",
    locale: "nl_NL",
    siteName: "Car Store Cuijk",
    url: "https://www.carstorecuijk.nl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Car Store Cuijk - Tweedehands Auto's & Garage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Garage Cuijk | Inkoop Verkoop Reparatie Onderhoud | Car Store",
    description: "Full-service garage voor auto inkoop, verkoop, reparatie, onderhoud, banden en airco. 175+ reviews, 5 sterren. RDW erkend. Bel 06-87118768.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
};

// Schema.org LocalBusiness structured data - AutoDealer
const autoDealerSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": "https://www.carstorecuijk.nl/#autodealer",
  "name": "Car Store Cuijk",
  "description": "Uw specialist in tweedehands auto's, gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie, airco vullen. 175 reviews, 5 sterren Google reviews. RDW erkend.",
  "url": "https://www.carstorecuijk.nl",
  "telephone": "+31687118768",
  "email": "info@carstorecuijk.nl",
  "priceRange": "€€",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.carstorecuijk.nl/logo.png",
    "width": 512,
    "height": 512
  },
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.carstorecuijk.nl/logo.png",
    "width": 512,
    "height": 512
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lange Beijerd 3d",
    "addressLocality": "Cuijk",
    "addressRegion": "Noord-Brabant",
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
    "reviewCount": "175+",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": {
    "@type": "City",
    "name": "Cuijk",
    "containedInPlace": {
      "@type": "State",
      "name": "Noord-Brabant"
    }
  },
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer"
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.carstorecuijk.nl"
    }
  ]
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.carstorecuijk.nl/#website",
  "url": "https://www.carstorecuijk.nl",
  "name": "Car Store Cuijk",
  "description": "Uw specialist in tweedehands auto's en gebruikte auto's van alle merken",
  "publisher": {
    "@id": "https://www.carstorecuijk.nl/#autodealer"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.carstorecuijk.nl/occasions?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "nl-NL"
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.carstorecuijk.nl/#organization",
  "name": "Car Store Cuijk",
  "url": "https://www.carstorecuijk.nl",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.carstorecuijk.nl/logo.png",
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://www.facebook.com/carstorecuijk",
    "https://www.instagram.com/carstorecuijk",
    "https://www.tiktok.com/@car.store.cuijk"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31687118768",
    "contactType": "customer service",
    "availableLanguage": "Dutch",
    "areaServed": "NL"
  }
};

// Google Analytics 4 ID
const GA_MEASUREMENT_ID = "G-NR62QEFWCN";

// Meta Pixel ID
const META_PIXEL_ID = "601363764708862";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" className={inter.variable}>
      <head>
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="nl-NL" href="https://www.carstorecuijk.nl" />
        <link rel="alternate" hrefLang="x-default" href="https://www.carstorecuijk.nl" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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

        {/* Meta Pixel wordt alleen geladen na toestemming voor marketing cookies — zie CookieConsent */}
      </head>
      <body className="antialiased">
        <CompareProvider>
          <LoadingScreen>
            <Breadcrumb />
            {children}
          </LoadingScreen>
          <CookieConsent />
          <WhatsAppWidget />
          <CompareBar />
        </CompareProvider>
      </body>
    </html>
  );
}
