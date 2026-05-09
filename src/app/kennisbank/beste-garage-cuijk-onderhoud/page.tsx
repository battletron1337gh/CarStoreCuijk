import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Award, Phone, MapPin, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beste Garage in Cuijk voor Onderhoud | Car Store Cuijk',
  description: 'Op zoek naar de beste garage in Cuijk? ✓ Erkend BOVAG ✓ Transparante prijzen ✓ Snelle service. Lees waarom klanten voor Car Store Cuijk kiezen.',
  keywords: 'beste garage Cuijk, auto onderhoud Cuijk, garage Boxmeer, garage Grave, BOVAG garage Cuijk, auto reparatie Cuijk',
  openGraph: {
    title: 'Beste Garage in Cuijk voor Onderhoud | Car Store Cuijk',
    description: 'Op zoek naar de beste garage in Cuijk? Erkend BOVAG, transparante prijzen, snelle service.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Beste Garage in Cuijk voor Onderhoud",
  "description": "Op zoek naar de beste garage in Cuijk? Erkend BOVAG, transparante prijzen, snelle service.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/beste-garage-cuijk-onderhoud"
  }
};

export default function BesteGaragePage() {
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
              <Award className="w-4 h-4" />
              <span>Garage Cuijk</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Beste Garage in Cuijk voor <span className="text-[#c8102e]">Onderhoud</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>7 minuten leestijd</span>
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
                Het vinden van een betrouwbare garage voor het onderhoud van je auto is essentieel. 
                Maar waar let je op bij het kiezen van de beste garage in Cuijk? 
                In dit artikel delen we waarom steeds meer automobilisten uit Cuijk en omgeving kiezen voor Car Store Cuijk.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Car Store Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Als <strong>BOVAG-erkend autobedrijf</strong> staan wij garant voor kwaliteit, betrouwbaarheid en transparantie. 
                Onze klanten uit Cuijk, Boxmeer, Grave, Gennep, Wijchen, Beuningen en Nijmegen waarderen ons om verschillende redenen:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">BOVAG Erkend</h3>
                  </div>
                  <p className="text-white/60">Gecertificeerde monteurs en garantie op alle werkzaamheden volgens BOVAG-normen.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Transparante Prijzen</h3>
                  </div>
                  <p className="text-white/60">Geen verrassingen achteraf. Duidelijke offertes en prijsindicaties vooraf.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Snelle Service</h3>
                  </div>
                  <p className="text-white/60">Werken zonder afspraak voor veel onderhoudswerkzaamheden. Direct geholpen.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Centrale Locatie</h3>
                  </div>
                  <p className="text-white/60">Goed bereikbaar vanuit Cuijk en hele regio. Gratis parkeergelegenheid.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onze Diensten</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk ben je aan het juiste adres voor alle werkzaamheden aan je auto. 
                Onze ervaren monteurs werken met de nieuwste apparatuur en originele onderdelen:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Periodiek onderhoud en klein onderhoud</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">APK keuring zonder afspraak</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Airco service en bijvullen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Remmen, banden en uitlaat</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Diagnose en storingen oplossen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Koplampen polijsten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Distributieriem vervangen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Auto inkoop en verkoop</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Garage Cuijk vs. Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Veel klanten komen speciaal naar onze garage in Cuijk vanuit omliggende plaatsen. 
                Waarom? Omdat we een unieke combinatie bieden van <strong>vakmanschap, persoonlijke service en scherpe prijzen</strong>. 
                Of je nu woont in Boxmeer, Grave, Gennep, Wijchen, Beuningen of Nijmegen - 
                onze centrale ligging maakt ons gemakkelijk bereikbaar.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Zeggen Onze Klanten?</h2>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <blockquote className="text-white/70 italic mb-4">
                  "Eindelijk een garage die doet wat ze beloven. Duidelijke communicatie, eerlijke prijzen en mijn auto wordt altijd perfect onderhouden."
                </blockquote>
                <p className="text-[#c8102e] font-medium">- Mark uit Cuijk</p>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-4">
                <blockquote className="text-white/70 italic mb-4">
                  "Ik kom speciaal vanuit Boxmeer naar Car Store Cuijk omdat ik weet dat het goed zit. De service is top en ze denken met je mee."
                </blockquote>
                <p className="text-[#c8102e] font-medium">- Sandra uit Boxmeer</p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Werken Zonder Afspraak</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk hoef je niet weken van tevoren te reserveren voor onderhoud of een APK keuring. 
                Je rijdt gewoon binnen en wij helpen je direct. Voor grotere reparaties maken we natuurlijk wel graag een afspraak, 
                zodat we je auto snel en efficiënt kunnen behandelen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onderhoud voor Alle Merken</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Of je nu rijdt in een Volkswagen, BMW, Audi, Mercedes, Ford, Opel, Renault of een ander merk - 
                onze monteurs hebben ervaring met vrijwel alle automerken. We gebruiken altijd onderdelen die passen bij 
                het onderhoudsschema van jouw auto, zodat je fabrieksgarantie behouden blijft.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost Onderhoud bij Car Store Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten voor onderhoud verschillen per auto en per merk. We werken met transparante prijsindicaties 
                zodat je nooit voor verrassingen komt te staan. Vraag vrijblijvend een offerte aan voor het onderhoud van jouw auto.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-white mb-3">Tip: Onderhoudsabonnement</h3>
                <p className="text-white/60">
                  Vraag naar onze onderhoudsabonnementen. Spreid je onderhoudskosten en profiteer van extra voordelen 
                  zoals gratis pechhulp en korting op reparaties.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">De Beste Garage in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Ervaar zelf waarom klanten uit de hele regio voor Car Store Cuijk kiezen. 
                  Kom langs of bel voor een afspraak!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
                  </Link>
                  <Link href="/onderhoud" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    Bekijk onze diensten
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
