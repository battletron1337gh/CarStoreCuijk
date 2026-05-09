import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Thermometer, Phone, Euro } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airco Vullen in Cuijk - Wat Kost Het? | Car Store Cuijk',
  description: 'Airco vullen in Cuijk vanaf €89. Ontdek de kosten, werkwijze en waarom je airco onderhoud belangrijk is. Directe service zonder afspraak in Cuijk.',
  keywords: 'airco vullen Cuijk, airco onderhoud Cuijk, airco kosten Cuijk, airco bijvullen prijs, auto airco service Cuijk',
  openGraph: {
    title: 'Airco Vullen in Cuijk - Wat Kost Het? | Car Store Cuijk',
    description: 'Airco vullen in Cuijk vanaf €89. Ontdek de kosten en werkwijze. Directe service zonder afspraak.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Airco Vullen in Cuijk - Wat Kost Het?",
  "description": "Airco vullen in Cuijk vanaf €89. Ontdek de kosten, werkwijze en waarom je airco onderhoud belangrijk is.",
  "author": {
    "@type": "Organization",
    "name": "Car Store Cuijk"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Car Store Cuijk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.carstorecuijk.nl/logo.png"
    }
  },
  "datePublished": "2026-05-09",
  "dateModified": "2026-05-09",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.carstorecuijk.nl/kennisbank/airco-vullen-cuijk-wat-kost-het"
  }
};

export default function AircoVullenPage() {
  return (
    <>
      <Header />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-[#0d0d0d] border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/kennisbank" className="inline-flex items-center gap-2 text-white/50 hover:text-[#c8102e] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Terug naar kennisbank</span>
            </Link>
            
            <div className="flex items-center gap-2 text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
              <Thermometer className="w-4 h-4" />
              <span>Airco Service</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Airco Vullen in Cuijk - <span className="text-[#c8102e]">Wat Kost Het?</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 minuten leestijd</span>
              </div>
              <span>•</span>
              <span>9 mei 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Een goed werkende airco is essentieel voor comfort tijdens de warme zomermaanden. 
                Maar wat kost airco vullen in Cuijk precies? En waar moet je op letten? 
                In dit artikel bespreken we alles over airco onderhoud en de bijbehorende kosten.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost Airco Vullen in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten voor airco vullen in Cuijk variëren afhankelijk van het type auto en de hoeveelheid 
                koelmiddel dat nodig is. Bij <strong>Car Store Cuijk</strong> betaal je voor een volledige 
                airco service vanaf <strong>€89</strong>. Dit omvat:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle van het aircosysteem op lekkages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Aftappen en recycleren van oude koelmiddel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vacuüm trekken van het systeem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Bijvullen met nieuw R1234yf of R134a koelmiddel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Functionele test van de airco</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Prijsindicatie Airco Service Cuijk</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">R134a Koelmiddel</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€89</div>
                  <p className="text-white/60 text-sm">Voor oudere auto's tot ca. 2016</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">R1234yf Koelmiddel</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€129</div>
                  <p className="text-white/60 text-sm">Voor nieuwere auto's vanaf 2017</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom is Airco Onderhoud Belangrijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Veel automobilisten onderschatten het belang van regelmatig airco onderhoud. 
                Het koelmiddel in je aircosysteem verliest jaarlijks ongeveer 10-15% van zijn werking 
                door natuurlijke verdamping. Daarnaast:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Efficiëntie:</strong> Een goed gevulde airco koelt beter en gebruikt minder brandstof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Gezondheid:</strong> Voorkomt schimmels en bacteriën in het systeem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Levensduur:</strong> Beschermt de aircopomp en andere componenten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Comfort:</strong> Altijd verkoeling wanneer je het nodig hebt</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Signalen dat je Airco Bijgevuld Moet Worden</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Herken jij één of meer van deze signalen? Dan is het tijd om je airco te laten vullen:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <p className="text-white/80">De airco blaast niet meer koud</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <p className="text-white/80">Het duurt lang voordat de auto afkoelt</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <p className="text-white/80">Er komt een vreemde geur uit de ventilatie</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <p className="text-white/80">Je hoort vreemde geluiden bij het aanzetten</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Airco Vullen in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is jouw specialist in airco service in de regio. We bedienen niet alleen Cuijk, 
                maar ook omliggende plaatsen zoals <strong>Boxmeer</strong>, <strong>Grave</strong>, <strong>Gennep</strong>, 
                <strong>Wijchen</strong>, <strong>Beuningen</strong> en <strong>Nijmegen</strong>. 
                Onze ervaren monteurs beschikken over de modernste apparatuur om je airco snel en vakkundig te onderhouden.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Het Verschil Tussen R134a en R1234yf</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sinds 2017 is het milieuvriendelijkere koelmiddel R1234yf verplicht voor nieuwe auto's. 
                Dit koelmiddel is duurder dan de traditionele R134a, maar heeft een veel lagere impact op het milieu. 
                Onze monteurs kunnen direct zien welk koelmiddel je auto nodig heeft en rekenen nooit te veel.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hoe Lang Duurt Airco Vullen?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een complete airco service duurt ongeveer 45-60 minuten. Je kunt wachten in onze comfortabele wachtruimte 
                met gratis koffie en WiFi. Wil je je auto liever achterlaten? Dat kan natuurlijk ook. 
                We werken zonder afspraak, dus je bent altijd welkom tijdens onze openingstijden.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tips om je Airco Langer Mee te Laten Gaan</h2>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Zet de airco minstens 10 minuten per week aan, ook in de winter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Laat de airco elk jaar controleren en bijvullen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervang het interieurfilter regelmatig</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Zet de airco uit een paar minuten voor je de auto parkeert</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Airco Vullen in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Kom langs bij Car Store Cuijk voor professionele airco service. 
                  Vanaf €89, zonder afspraak, direct geholpen!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
                  </Link>
                  <Link href="/onderhoud" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    Bekijk alle diensten
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
