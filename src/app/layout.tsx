import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Car Store Cuijk | Tweedehands Auto's & Garage",
  description: "Car Store Cuijk - Uw specialist in tweedehands auto's, gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie, airco vullen. 168 reviews, 5 sterren Google reviews. 7 dagen open.",
  keywords: "Car Store Cuijk, tweedehands auto's, gebruikte auto's, alle merken, auto inkoop, auto onderhoud, auto reparatie, airco vullen, koplampen polijsten, RDW garage Cuijk, occasions Cuijk",
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
    title: "Car Store Cuijk | Tweedehands Auto's & Garage",
    description: "Uw specialist in tweedehands auto's en gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie. 168 reviews, 5 sterren. RDW erkend. 7 dagen open.",
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
    title: "Car Store Cuijk | Tweedehands Auto's & Garage",
    description: "Uw specialist in tweedehands auto's en gebruikte auto's. 168 reviews, 5 sterren. RDW erkend.",
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
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

// Schema.org LocalBusiness structured data - AutoDealer
const autoDealerSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "@id": "https://www.carstorecuijk.nl/#autodealer",
  "name": "Car Store Cuijk",
  "description": "Uw specialist in tweedehands auto's, gebruikte auto's van alle merken. Auto inkoop, onderhoud, reparatie, airco vullen. 168 reviews, 5 sterren Google reviews. RDW erkend.",
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
    "reviewCount": "168",
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
    "https://www.instagram.com/carstorecuijk"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31687118768",
    "contactType": "customer service",
    "availableLanguage": "Dutch",
    "areaServed": "NL"
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
      </head>
      <body className="antialiased">
        <LoadingScreen>
          {children}
        </LoadingScreen>
        <CookieConsent />
      </body>
    </html>
  );
}
