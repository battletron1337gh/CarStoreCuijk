import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Phone, MessageCircle, CheckCircle, Clock, Shield, Car, Thermometer, Settings, AlertTriangle } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import Script from 'next/script';

export default function AutoReparatieCuijkPage() {
  const diensten = [
    { 
      title: 'Auto Onderhoud', 
      desc: 'Kleine en grote onderhoudsbeurt volgens fabrieksschema. Olie verversen, filters vervangen, vloeistoffen controleren.',
      icon: <Settings className="w-7 h-7" />
    },
    { 
      title: 'Airco Vullen & Vervangen', 
      desc: 'Airco vullen vanaf €59. Lekdetectie, compressor vervangen, condensor vervangen. Alle airco systemen.',
      icon: <Thermometer className="w-7 h-7" />
    },
    { 
      title: 'Distributieriem Vervangen', 
      desc: 'Distributieriem of distributieketting vervangen volgens schema. Voorkomt motorschade. Alle merken.',
      icon: <Settings className="w-7 h-7" />
    },
    { 
      title: 'Koppeling Vervangen', 
      desc: 'Koppeling, drukgroep en koppelingslager vervangen. Soepel schakelen zonder slip.',
      icon: <Car className="w-7 h-7" />
    },
    { 
      title: 'Schokdempers & Vering', 
      desc: 'Schokdempers, veren en stabilisatoren vervangen. Veilig en comfortabel rijgedrag.',
      icon: <Wrench className="w-7 h-7" />
    },
    { 
      title: 'Remmen Vervangen', 
      desc: 'Remschijven, remblokken en remvloeistof vervangen. Veilig remmen voor alle merken.',
      icon: <AlertTriangle className="w-7 h-7" />
    },
    { 
      title: 'APK Keuring', 
      desc: 'APK keuring voor dezelfde dag. RDW erkend. Geen wachttijden, direct terecht.',
      icon: <CheckCircle className="w-7 h-7" />
    },
    { 
      title: 'Motorreparaties', 
      desc: 'Diagnose en reparatie van motorproblemen. Motor management, injectoren, turbo.',
      icon: <Settings className="w-7 h-7" />
    },
    { 
      title: 'Uitlaat Vervangen', 
      desc: 'Reparatie en vervanging van uitlaatsystemen. Katalysator, uitlaatdemper, voordemper.',
      icon: <Car className="w-7 h-7" />
    },
  ];

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Car Store Cuijk - Auto Reparatie',
    description: 'Vakkundige auto reparatie in Cuijk. Garage open tot 22:00. RDW erkend. Alle merken.',
    url: 'https://carstorecuijk.nl/auto-reparatie-cuijk',
    telephone: contactInfo.telefoon.replace(/\s|-/g, ''),
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'De Giesel 19',
      addressLocality: 'Cuijk',
      postalCode: '5431 NS',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.7269,
      longitude: 5.8794,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '175',
    },
    areaServed: {
      '@type': 'City',
      name: 'Cuijk',
    },
    serviceType: [
      'Auto Reparatie',
      'Auto Onderhoud',
      'Airco Service',
      'APK Keuring',
      'Distributieriem Vervangen',
      'Koppeling Vervangen',
    ],
  };

  return (
    <>
      <Script
        id="schema-auto-reparatie"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-16 sm:pt-20 lg:pt-28">
        {/* Hero */}
        <section className="bg-[#0a0a0a] py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                Auto Reparatie <span className="text-[#c8102e]">Cuijk</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto mb-8">
                Vakkundige auto reparatie in Cuijk voor alle merken. Van onderhoud tot distributieriem vervangen, 
                airco vullen, koppeling vervangen en APK keuring. Garage open tot 22:00, geen wachttijden.
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
                  WhatsApp Afspraak
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten Grid */}
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Alle Auto Reparaties in Cuijk
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Van klein onderhoud tot grote reparaties. Wij zijn uw specialist in Cuijk voor alle automerken. 
                Direct een afspraak, geen wachttijden.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diensten.map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-[#c8102e]/30 transition-all">
                  <div className="w-12 h-12 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waarom wij */}
        <section className="py-16 lg:py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Waarom Car Store Cuijk?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <CheckCircle className="w-6 h-6" />, title: 'RDW Erkend', desc: 'Garantie op reparaties' },
                { icon: <Car className="w-6 h-6" />, title: 'Alle Merken', desc: 'Ongeacht het automerk' },
                { icon: <Clock className="w-6 h-6" />, title: 'Geen Wachttijd', desc: 'Direct een afspraak' },
                { icon: <Shield className="w-6 h-6" />, title: '175 Reviews', desc: '5 sterren rating' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Direct een afspraak voor auto reparatie?
              </h2>
              <p className="text-white/50 mb-8 max-w-2xl mx-auto">
                Bel ons direct of stuur een WhatsApp bericht. Garage open tot 22:00, 
                geen wachttijden. Vakkundige reparatie in Cuijk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {contactInfo.telefoon}
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

        {/* SEO Content */}
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Auto Reparatie Cuijk - Uw Specialist voor Alle Merken
            </h2>
            <p className="text-white/60 mb-4">
              Zoekt u een betrouwbare garage in Cuijk voor auto reparatie? Car Store Cuijk is uw specialist 
              voor alle automerken. Wij bieden vakkundige reparaties tegen scherpe prijzen. Van klein onderhoud 
              tot grote reparaties, wij regelen het voor u. Onze moderne werkplaats is uitgerust met de nieuwste 
              diagnoseapparatuur.
            </p>
            <p className="text-white/60 mb-4">
              <strong>Onze diensten:</strong> Auto onderhoud, airco vullen en vervangen, distributieriem vervangen, 
              distributieketting vervangen, koppeling vervangen, schokdempers vervangen, remmen vervangen, 
              APK keuring voor dezelfde dag, motorreparaties, en uitlaat vervangen. Wij werken met originele 
              onderdelen of A-merk alternatieven van hoge kwaliteit.
            </p>
            <p className="text-white/60 mb-4">
              <strong>Waarom kiezen voor Car Store Cuijk?</strong> Wij zijn RDW erkend met 175 reviews en 5 sterren 
              op Google. Garage open tot 22:00, geen wachttijden. Direct een afspraak maken voor vakkundige 
              auto reparatie in Cuijk. Wij staan voor transparante prijzen en eerlijk advies.
            </p>
            <p className="text-white/60">
              <strong>Locatie:</strong> De Giesel 19, 5431 NS Cuijk. <strong>Telefoon:</strong> {contactInfo.telefoon}. 
              <strong>Openingstijden:</strong> Maandag t/m vrijdag 08:00 - 22:00, zaterdag 09:00 - 17:00. 
              Direct contact voor een vrijblijvende offerte of afspraak.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
