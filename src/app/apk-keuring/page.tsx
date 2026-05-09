import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Phone, MessageCircle, Clock, Shield, AlertCircle, FileText, Car } from 'lucide-react';
import { contactInfo, openingHours } from '@/data/cars';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'APK Keuring Cuijk | RDW Erkend | Vanaf €49 | Alle Merken',
  description: 'APK keuring Cuijk bij RDW erkende garage. ✅ Alle merken ✅ Zonder afspraak ✅ Snel geregeld. Garage open tot 22:00. Bel 0485-555090!',
  keywords: 'apk keuring cuijk, apk keuring, rdw apk, auto keuren cuijk, apk garage cuijk, apk prijs, apk kosten',
  openGraph: {
    title: 'APK Keuring Cuijk | RDW Erkend | Alle Merken',
    description: 'RDW erkende APK keuring in Cuijk. Alle merken, zonder afspraak. Bel nu!',
    type: 'website',
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "APK Keuring Cuijk - Car Store Cuijk",
  "description": "RDW erkende APK keuring in Cuijk. Alle merken, zonder afspraak. Garage open tot 22:00.",
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
        "price": "49.00",
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
        "text": "Een APK keuring bij Car Store Cuijk kost vanaf €49. Dit is de all-in prijs inclusief keuring en eventueel herkeuren binnen 14 dagen."
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
    'RDW erkend keuringsstation',
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
      <main className="min-h-screen pt-24 lg:pt-28">
        {/* Hero */}
        <section className="bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4" />
                RDW Erkend
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                APK <span className="text-[#c8102e]">Keuring</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto mb-8">
                RDW erkende APK keuring in Cuijk. Alle merken, zonder afspraak. 
                Snel geregeld terwijl u wacht. Garage open tot 22:00.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Bel Direct: {contactInfo.telefoon}
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

        {/* Prijzen */}
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
                  <span className="text-3xl font-bold text-[#c8102e]">€49,-</span>
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

        {/* Controlepunten */}
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

        {/* Voordelen */}
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Waarom kiezen voor Car Store Cuijk?
                </h2>
                <p className="text-white/50 mb-8">
                  Als RDW erkend keuringsstation garanderen wij een vakkundige en eerlijke APK keuring. 
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
                    <p className="text-white/50">Officieel keuringsstation</p>
                  </div>
                </div>

                <p className="text-white/60 mb-6">
                  Car Store Cuijk is officieel erkend door de RDW voor het uitvoeren van 
                  APK keuringen. Dit betekent dat wij voldoen aan alle kwaliteitseisen 
                  en dat uw keuring officieel geldig is.
                </p>

                <div className="flex items-center gap-2 text-[#c8102e]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Officieel RDW erkend</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hoe werkt het */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Hoe werkt de APK keuring?
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Simpel, snel en zonder gedoe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c8102e] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Langskomen</h3>
                <p className="text-white/50">
                  U rijdt bij ons naar binnen, zonder afspraak. Wij zijn 7 dagen per week open.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#c8102e] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Keuring</h3>
                <p className="text-white/50">
                  Onze keurmeester controleert uw auto volgens de RDW richtlijnen (30-45 min).
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#c8102e] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Resultaat</h3>
                <p className="text-white/50">
                  Direct het resultaat. Bij goedkeuring krijgt u het APK rapport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Openingstijden */}
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Openingstijden
                </h2>
                <p className="text-white/50 mb-8">
                  Wij zijn 7 dagen per week open tot 22:00. Ook 's avonds kunt u bij ons terecht 
                  voor uw APK keuring. Ideaal als u overdag werkt.
                </p>

                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                  <div className="space-y-3">
                    {openingHours.map((hours) => (
                      <div key={hours.dag} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                        <span className="text-white/50">{hours.dag}</span>
                        <span className="font-medium text-white">{hours.opening} - {hours.sluiting}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Direct contact</h3>
                <p className="text-white/50 mb-6">
                  Heeft u vragen over de APK keuring? Bel of app ons direct.
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                    className="flex items-center gap-4 bg-[#0a0a0a] rounded-xl p-4 border border-white/5 hover:border-[#c8102e]/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-white/50 text-sm block">Telefoon</span>
                      <span className="text-white font-bold text-lg">{contactInfo.telefoon}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#0a0a0a] rounded-xl p-4 border border-white/5 hover:border-[#c8102e]/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-white/50 text-sm block">WhatsApp</span>
                      <span className="text-white font-bold text-lg">{contactInfo.whatsapp}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sectie */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-white/50">
                Antwoorden op veelgestelde vragen over APK keuring
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Wat kost een APK keuring in Cuijk?
                </h3>
                <p className="text-white/60">
                  Een APK keuring bij Car Store Cuijk kost vanaf €49. Dit is de all-in prijs 
                  inclusief keuring en eventueel herkeuren binnen 14 dagen.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Kan ik zonder afspraak langskomen voor APK?
                </h3>
                <p className="text-white/60">
                  Ja, bij Car Store Cuijk kunt u zonder afspraak langskomen voor een APK keuring. 
                  Wij zijn 7 dagen per week open tot 22:00.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Hoe lang duurt een APK keuring?
                </h3>
                <p className="text-white/60">
                  Een APK keuring duurt ongeveer 30-45 minuten. U kunt in de wachtruimte wachten 
                  terwijl wij uw auto keuren.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Wat gebeurt er als mijn auto wordt afgekeurd?
                </h3>
                <p className="text-white/60">
                  Als uw auto wordt afgekeurd, krijgt u een lijst met gebreken. Wij kunnen deze 
                  direct voor u repareren. Herkeuring binnen 14 dagen is gratis.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Wanneer moet mijn auto naar de APK?
                </h3>
                <p className="text-white/60">
                  Dit hangt af van het brandstoftype en de leeftijd van uw auto. Benzine auto's 
                  ouder dan 3 jaar gaan jaarlijks. Diesel auto's vanaf 3 jaar. Wij kunnen dit 
                  voor u controleren aan de hand van uw kenteken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                APK Keuring Cuijk nodig?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Kom langs voor een RDW erkende APK keuring. Zonder afspraak, 
                snel geregeld. Alle merken welkom!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Bel Direct
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-4">APK Keuring Cuijk - Car Store Cuijk</h2>
            <p className="text-white/60 mb-4">
              Voor een APK keuring in Cuijk bent u bij Car Store Cuijk aan het juiste adres. 
              Wij zijn RDW erkend en keuren alle merken auto's. U kunt zonder afspraak langskomen 
              en wij zijn 7 dagen per week open tot 22:00. Een APK keuring duurt ongeveer 30-45 minuten 
              en kost vanaf €49.
            </p>
            <p className="text-white/60 mb-4">
              Tijdens de APK keuring controleren wij alle veiligheidsaspecten van uw auto, zoals 
              verlichting, remmen, banden, uitlaat en carrosserie. Wij werken volgens de officiële 
              RDW richtlijnen, zodat u zeker weet dat de keuring correct wordt uitgevoerd.
            </p>
            <p className="text-white/60">
              Als uw auto wordt afgekeurd, kunnen wij de gebreken direct voor u repareren. 
              Herkeuring binnen 14 dagen is gratis. Kom langs aan het Stationsplein 4 in Cuijk 
              of bel {contactInfo.telefoon} voor meer informatie.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
