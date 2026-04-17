import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Car Store Cuijk | Occasions, Onderhoud & Reparaties",
  description: "Car Store Cuijk - Uw specialist in occasions, onderhoud, reparaties, airco service en koplampen polijsten. 7 dagen per week open. BOVAG erkend.",
  keywords: "Car Store Cuijk, occasions Cuijk, auto kopen, auto verkopen, auto onderhoud, auto reparatie, airco vullen, koplampen polijsten, BOVAG garage Cuijk",
  authors: [{ name: "Car Store Cuijk" }],
  creator: "Car Store Cuijk",
  publisher: "Car Store Cuijk",
  metadataBase: new URL("https://www.carstorecuijk.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Car Store Cuijk | Occasions, Onderhoud & Reparaties",
    description: "Uw specialist in occasions, onderhoud en reparaties. BOVAG erkend. 7 dagen per week open.",
    type: "website",
    locale: "nl_NL",
    siteName: "Car Store Cuijk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Store Cuijk | Occasions, Onderhoud & Reparaties",
    description: "Uw specialist in occasions, onderhoud en reparaties. BOVAG erkend.",
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
