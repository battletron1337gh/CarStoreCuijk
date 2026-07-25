import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinematicServiceHero from '@/components/CinematicServiceHero';
import CinematicReveal from '@/components/CinematicReveal';
import { CheckCircle, Phone, MessageCircle, Clock, Shield, AlertCircle, FileText, Car } from 'lucide-react';
import { contactInfo, openingHours } from '@/data/cars';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'APK Keuring Cuijk | RDW Erkend | Vanaf €49.99 | Alle Merken',
  description: 'APK keuring Cuijk bij RDW erkende garage. ✅ Alle merken ✅ Zonder afspraak ✅ Snel geregeld. Garage open tot 22:00. Bel 06-87118768!',
  keywords: 'apk keuring cuijk, apk keuring, rdw apk, auto keuren cuijk, apk garage cuijk, apk prijs, apk kosten',
  openGraph: {
    title: 'APK Keuring Cuijk | RDW Erkend | Alle Merken',
    description: 'APK keuring in Cuijk. Alle merken, zonder afspraak. Bel nu!',
    type: 'website',
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "APK Keuring Cuijk - Car Store Cuijk",
  "description": "APK keuring in Cuijk. Alle merken, zonder afspraak. Garage open tot 22:00.",
  "provider": {
    "@type": "AutoRepair",
    "name": "Car Store Cuijk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stationsplein 4",
      "addressLocality": "Cuijk",
      "postalCode": "5431 CE",
      "addressCountry": "NL"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Cuijk"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "APK Diensten",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "APK Keuring"
        },
        "price": "49.99",
        "priceCurrency": "EUR"
      }
    ]
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat kost een APK keuring in Cuijk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een APK keuring bij Car Store Cuijk kost vanaf €49.99. Dit is de all-in prijs inclusief keuring en eventueel herkeuren binnen 14 dagen."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik zonder afspraak langskomen voor APK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, bij Car Store Cuijk kunt u zonder afspraak langskomen voor een APK keuring. Wij zijn 7 dagen per week open tot 22:00."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt een APK keuring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een APK keuring duurt ongeveer 30-45 minuten. U kunt in de wachtruimte wachten terwijl wij uw auto keuren."
      }
    },
    {
      "@type": "Question",
      "name": "Wat wordt er gecontroleerd tijdens de APK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tijdens de APK wordt onder andere gecontroleerd: verlichting, remmen, banden, uitlaat, carrosserie, wissers en ruitenwisservloeistof."
      }
    }
  ]
};

export default function ApkKeuringPage() {
  const controlepunten = [
    { title: 'Verlichting', desc: 'Alle lampen en reflectoren' },
    { title: 'Remmen', desc: 'Remwerking en remvloeistof' },
    { title: 'Banden', desc: 'Profieldiepte en beschadigingen' },
    { title: 'Uitlaat', desc: 'Uitlaatgassen en geluid' },
    { title: 'Carrosserie', desc: 'Roest en constructieve veiligheid' },
    { title: 'Wissers', desc: 'Ruitenwissers en vloeistof' },
    { title: 'Stuurinrichting', desc: 'Speling en werking' },
    { title: 'Chassis', desc: 'Veerpootbrug en ophanging' },
  ];

  const voordelen = [
    'RDW erkend',
    'Zonder afspraak mogelijk',
    'Snelle service (30-45 min)',
    'Alle merken',
    'Herkeuring binnen 14 dagen gratis',
    'Open tot 22:00',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero */}
        <CinematicServiceHero
          badge={{ icon: <Shield className="w-4 h-4" />, text: 'RDW Erkend' }}
          title="APK Keuring Cuijk"
          highlightWord="Keuring"
          subtitle="APK keuring in Cuijk. Alle merken, zonder afspraak. Snel geregeld terwijl u wacht. Garage open tot 22:00."
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              <span className="sm:hidden">Bel direct</span>
              <span className="hidden sm:inline">+316 87118768</span>
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </CinematicServiceHero>

        {/* Prijzen */}
        <CinematicReveal direction="up" duration={0.9}>
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                APK Keuring Prijzen
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Transparante prijzen zonder verborgen kosten
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">APK Keuring</h3>
                  <span className="text-3xl font-bold text-[#c8102e]">€49,99</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Complete APK keuring
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Alle merken
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Zonder afspraak
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Herkeuring binnen 14 dagen gratis
                  </li>
                </ul>
                <p className="text-white/40 text-sm">* All-in prijs, geen verborgen kosten</p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">APK + Onderhoud</h3>
                  <span className="text-3xl font-bold text-[#c8102e]">Vanaf €149,-</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    APK keuring
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Kleine beurt
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Olie verversen
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                    Vloeistoffen controleren
                  </li>
                </ul>
                <p className="text-white/40 text-sm">* Prijs afhankelijk van auto</p>
              </div>
            </div>
          </div>
        </section>
        </CinematicReveal>

        {/* Controlepunten */}
        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
        <section className="py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Wat wordt er gecontroleerd?
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Tijdens de APK keuring controleren wij alle veiligheidsaspecten van uw auto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {controlepunten.map((punt, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                  <div className="w-12 h-12 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{punt.title}</h3>
                  <p className="text-white/50 text-sm">{punt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </CinematicReveal>

        {/* Voordelen */}
        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Waarom kiezen voor Car Store Cuijk?
                </h2>
                <p className="text-white/50 mb-8">
                  Wij regelen uw APK keuring vakkundig en eerlijk. 
                  Wij keuren alle merken en u kunt zonder afspraak langskomen.
                </p>

                <div className="space-y-4">
                  {voordelen.map((voordeel, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                      <span className="text-white/70">{voordeel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#c8102e]/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#c8102e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">RDW Erkend</h3>
                    <p className="text-white/50">RDW erkend</p>
                  </div>
                </div>

                <p className="text-white/60 mb-6">
                  Car Store Cuijk is RDW erkend en regelt uw APK keuring. 
                  Uw keuring wordt officieel geregistreerd en is wettelijk geldig.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/70">Maandag t/m vrijdag 08:00 - 22:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/70">Zaterdag 09:00 - 17:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/70">{contactInfo.telefoon}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </CinematicReveal>

        {/* CTA */}
        <CinematicReveal direction="scale" duration={0.9} delay={0.1}>
        <section className="py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Direct een APK keuring inplannen?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Bel ons direct of stuur een WhatsApp bericht. Wij zijn 7 dagen per week open, 
                zonder afspraak mogelijk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="sm:hidden">Bel direct</span>
              <span className="hidden sm:inline">+316 87118768</span>
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
        </CinematicReveal>
      </main>
      <Footer />
    </>
  );
}
