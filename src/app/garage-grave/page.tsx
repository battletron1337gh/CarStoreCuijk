import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle, Wrench, Car, Navigation } from 'lucide-react';
import { contactInfo, openingHours } from '@/data/cars';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Garage Grave | Auto Onderhoud & APK Keuring | Car Store Cuijk',
  description: 'Garage in Grave gezocht? Car Store Cuijk is 5 minuten rijden. ✅ Auto onderhoud ✅ APK keuring ✅ Spoed reparatie ✅ Alle merken. Bel 0485-555090!',
  keywords: 'garage grave, auto onderhoud grave, apk keuring grave, garage in de buurt van grave, auto reparatie grave, autobedrijf grave',
  openGraph: {
    title: 'Garage Grave | Auto Onderhoud & APK Keuring',
    description: 'Garage Grave? Wij zijn 5 minuten rijden. Auto onderhoud, APK, spoed reparatie. Alle merken. Bel nu!',
    type: 'website',
  },
};

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Car Store Cuijk - Garage voor Grave",
  "description": "Garage voor Grave en omgeving. Auto onderhoud, APK keuring, spoed reparatie. Slechts 5 minuten van Grave.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Stationsplein 4",
    "addressLocality": "Cuijk",
    "postalCode": "5431 CE",
    "addressCountry": "NL"
  },
  "telephone": "+31485555090",
  "openingHours": ["Mo-Su 00:00-22:00"],
  "areaServed": {
    "@type": "City",
    "name": "Grave"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "168"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Waar kan ik terecht voor een garage in Grave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Car Store Cuijk is de dichtstbijzijnde garage voor Grave, slechts 5 minuten rijden. Wij bieden auto onderhoud, APK keuring en spoed reparatie aan."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe ver is Car Store Cuijk van Grave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Car Store Cuijk is slechts 5 minuten rijden van Grave (ongeveer 4 kilometer). U vindt ons aan het Stationsplein 4 in Cuijk."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn jullie bereikbaar voor spoed reparatie in Grave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, onze garage is open tot 22:00 en wij zijn altijd bereikbaar voor spoed reparaties in Grave en omgeving. Bel ons direct voor spoed."
      }
    }
  ]
};

export default function GarageGravePage() {
  const diensten = [
    { title: 'Auto Onderhoud', desc: 'Kleine en grote beurt voor alle merken', icon: Wrench },
    { title: 'APK Keuring', desc: 'RDW erkend, zonder afspraak', icon: CheckCircle },
    { title: 'Spoed Reparatie', desc: 'Ook na sluitingstijd bereikbaar', icon: Car },
    { title: 'Airco Service', desc: 'Vullen en onderhoud', icon: Clock },
  ];

  const voordelen = [
    'Slechts 5 minuten van Grave',
    'Open tot 22:00, altijd bereikbaar voor spoed',
    'RDW erkend',
    'Alle merken',
    '168 Google reviews, 5 sterren',
    'Gratis parkeerplaats',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
                <MapPin className="w-4 h-4" />
                Slechts 5 minuten van Grave
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Garage <span className="text-[#c8102e]">Grave</span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto mb-8">
                Op zoek naar een garage in Grave? Car Store Cuijk is uw dichtstbijzijnde specialist 
                in auto onderhoud, APK keuring en spoed reparatie. Wij zijn slechts 5 minuten rijden 
                en open tot 22:00.
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

        {/* Routebeschrijving */}
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Van Grave naar onze garage
                </h2>
                <p className="text-white/50 mb-6">
                  Onze garage is zeer gemakkelijk bereikbaar vanuit Grave. Via de A73 of de provinciale 
                  weg bent u in slechts 5 minuten bij ons. Ideaal voor spoed reparatie of onderhoud.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Richting Cuijk</h3>
                      <p className="text-white/50 text-sm">Via de A73 of N324 richting Cuijk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Stationsplein Cuijk</h3>
                      <p className="text-white/50 text-sm">Wij zitten direct naast het treinstation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Gratis parkeren</h3>
                      <p className="text-white/50 text-sm">Ruime parkeergelegenheid voor de deur</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/dir/Grave/Car+Store+Cuijk,+Stationsplein+4,+5431+CE+Cuijk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#c8102e] font-semibold hover:underline"
                  >
                    <Navigation className="w-5 h-5" />
                    Open route in Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Waarom kiezen voor Car Store Cuijk?</h3>
                <div className="space-y-4">
                  {voordelen.map((voordeel, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                      <span className="text-white/70">{voordeel}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/50">Afstand van Grave:</span>
                    <span className="text-white font-bold">~4 km</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/50">Rijtijd:</span>
                    <span className="text-white font-bold">~5 minuten</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Openingstijden:</span>
                    <span className="text-white font-bold">Tot 22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Onze diensten voor Grave
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Vanuit Grave kunt u bij ons terecht voor alle autowerkzaamheden
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diensten.map((dienst, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all">
                  <div className="w-14 h-14 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center mb-4">
                    <dienst.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{dienst.title}</h3>
                  <p className="text-white/50">{dienst.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/onderhoud"
                className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Bekijk alle diensten
              </Link>
            </div>
          </div>
        </section>

        {/* Spoed Sectie */}
        <section className="py-16 lg:py-24 bg-[#c8102e]/10 border-y border-[#c8102e]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Spoed reparatie nodig in Grave?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Wij zijn altijd bereikbaar voor spoed reparaties. Ook na 22:00 kunt u contact 
                met ons opnemen voor urgente autoproblemen in Grave en omgeving.
              </p>
              <a
                href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Bel Nu voor Spoed
              </a>
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
                  voor auto onderhoud en reparatie. Ideaal als u overdag werkt.
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
                  Heeft u vragen of wilt u een afspraak maken? Bel of app ons direct. 
                  Wij zijn ook buiten openingstijden bereikbaar voor spoed.
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
                Antwoorden op vragen van klanten uit Grave
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Waar kan ik terecht voor een garage in Grave?
                </h3>
                <p className="text-white/60">
                  Car Store Cuijk is de dichtstbijzijnde garage voor Grave, slechts 5 minuten rijden. 
                  Wij bieden auto onderhoud, APK keuring en spoed reparatie aan.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Hoe ver is Car Store Cuijk van Grave?
                </h3>
                <p className="text-white/60">
                  Car Store Cuijk is slechts 5 minuten rijden van Grave (ongeveer 4 kilometer). 
                  U vindt ons aan het Stationsplein 4 in Cuijk.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Zijn jullie bereikbaar voor spoed reparatie in Grave?
                </h3>
                <p className="text-white/60">
                  Ja, onze garage is open tot 22:00 en wij zijn altijd bereikbaar voor spoed reparaties 
                  in Grave en omgeving. Bel ons direct voor spoed.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-2">
                  Kan ik zonder afspraak langskomen vanuit Grave?
                </h3>
                <p className="text-white/60">
                  Ja, voor APK keuringen en kleine onderhoudsbeurten kunt u zonder afspraak langskomen. 
                  Voor grotere reparaties raden wij wel aan om even te bellen.
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
                Garage Grave? Kies Car Store Cuijk!
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Wij zijn uw dichtstbijzijnde garage voor Grave. 
                Auto onderhoud, APK of spoed reparatie? Wij helpen u graag!
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
            <h2 className="text-2xl font-bold text-white mb-4">Garage Grave - Car Store Cuijk</h2>
            <p className="text-white/60 mb-4">
              Op zoek naar een garage in Grave? Car Store Cuijk is slechts 5 minuten rijden en biedt 
              alle autodiensten die u nodig heeft. Van auto onderhoud en APK keuring tot spoed reparatie 
              en airco service. Wij zijn RDW erkend en hebben 168 reviews met 5 sterren op Google.
            </p>
            <p className="text-white/60 mb-4">
              Onze garage in Cuijk is zeer gemakkelijk bereikbaar vanuit Grave via de A73 of N324. 
              Wij zijn open tot 22:00, zodat u ook na werktijd nog terecht kunt. Alle merken zijn 
              welkom bij ons, van Volkswagen en BMW tot Audi en Mercedes.
            </p>
            <p className="text-white/60">
              Wij zijn altijd bereikbaar voor spoed reparaties in Grave en omgeving. Ook na 22:00 
              kunt u contact met ons opnemen voor urgente autoproblemen. Kom langs aan het 
              Stationsplein 4 in Cuijk of bel {contactInfo.telefoon} voor een afspraak.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
