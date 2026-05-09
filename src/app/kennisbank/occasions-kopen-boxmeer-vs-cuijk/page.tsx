import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Car, Phone, MapPin, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Occasions Kopen Boxmeer vs Cuijk - Vergelijking | Car Store Cuijk',
  description: 'Occasion kopen in Boxmeer of Cuijk? Vergelijk aanbod, prijzen en service. ✓ Grote voorraad ✓ BOVAG garantie. Bekijk het verschil!',
  keywords: 'occasions kopen Boxmeer, occasions kopen Cuijk, occasion Boxmeer, occasion Cuijk, tweedehands auto Boxmeer, tweedehands auto Cuijk',
  openGraph: {
    title: 'Occasions Kopen Boxmeer vs Cuijk - Vergelijking | Car Store Cuijk',
    description: 'Occasion kopen in Boxmeer of Cuijk? Vergelijk aanbod, prijzen en service.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Occasions Kopen Boxmeer vs Cuijk - Vergelijking",
  "description": "Occasion kopen in Boxmeer of Cuijk? Vergelijk aanbod, prijzen en service.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/occasions-kopen-boxmeer-vs-cuijk"
  }
};

export default function OccasionsBoxmeerVsCuijkPage() {
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
              <Car className="w-4 h-4" />
              <span>Occasions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Occasions Kopen: <span className="text-[#c8102e]">Boxmeer vs Cuijk</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 minuten leestijd</span>
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
                Je bent op zoek naar een occasion en twijfelt tussen autobedrijven in Boxmeer en Cuijk? 
                Beide plaatsen hebben hun voordelen. In dit artikel vergelijken we het aanbod, 
                de service en de prijzen zodat je een weloverwogen keuze kunt maken.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Occasion Aanbod in Boxmeer vs Cuijk</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Zowel Boxmeer als Cuijk hebben diverse autobedrijven met een occasion aanbod. 
                Car Store Cuijk onderscheidt zich door een <strong>uitgebreide voorraad</strong> van diverse merken en modellen. 
                Of je nu zoekt naar een zuinige stadsauto, een ruime gezinsauto of een luxe sedan - 
                wij hebben voor ieder wat wils.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Boxmeer</h3>
                  </div>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Verschillende lokale autobedrijven</li>
                    <li>• Kleinere voorraad per bedrijf</li>
                    <li>• Goed bereikbaar vanuit omliggende dorpen</li>
                    <li>• Persoonlijke service</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Cuijk</h3>
                  </div>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Grotere voorraad occasions</li>
                    <li>• Meer keuze in merken en modellen</li>
                    <li>• Centrale ligging in de regio</li>
                    <li>• Uitgebreide faciliteiten</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Kiezen voor Car Store Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Veel klanten uit Boxmeer komen speciaal naar Car Store Cuijk voor hun occasion. 
                Dit zijn de redenen waarom:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Grote voorraad:</strong> Altijd meer dan 50 occasions op voorraad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>BOVAG garantie:</strong> Standaard 6 maanden garantie op alle auto's</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>NAP check:</strong> Alle kilometerstanden zijn gecontroleerd</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Inruil mogelijk:</strong> Je huidige auto wordt graag ingekocht</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Financiering:</strong> Flexibele financieringsmogelijkheden</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Afstand Boxmeer naar Cuijk</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De afstand tussen Boxmeer en Cuijk is slechts ongeveer <strong>12 kilometer</strong>, 
                goed te doen in ongeveer 15 minuten met de auto. Voor een goede occasion is deze korte rit 
                meer dan de moeite waard. Bovendien ligt Car Store Cuijk direct aan de doorgaande weg, 
                waardoor we gemakkelijk bereikbaar zijn.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Service en Nazorg</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk stopt de service niet bij de verkoop. We bieden uitgebreide nazorg 
                voor al onze klanten, ongeacht of je uit Cuijk, Boxmeer of verder komt:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <Star className="w-6 h-6 text-[#c8102e] mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Onderhoud</h3>
                  <p className="text-white/60 text-sm">Periodiek onderhoud en reparaties bij ons in de werkplaats</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <Star className="w-6 h-6 text-[#c8102e] mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Garantie</h3>
                  <p className="text-white/60 text-sm">Uitgebreide garantiepakketten tot 24 maanden</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <Star className="w-6 h-6 text-[#c8102e] mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">APK</h3>
                  <p className="text-white/60 text-sm">APK keuring zonder afspraak</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <Star className="w-6 h-6 text-[#c8102e] mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Banden</h3>
                  <p className="text-white/60 text-sm">Bandenwissel en bandenopslag</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Populaire Occasions in de Regio</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                In zowel Boxmeer als Cuijk zijn bepaalde auto's populairder dan andere. 
                Dit zijn de meest gevraagde occasions in onze regio:
              </p>

              <div className="grid md:grid-cols-4 gap-4 mt-6">
                {['Volkswagen Polo', 'Ford Focus', 'BMW 3-serie', 'Audi A3', 'Renault Clio', 'Opel Corsa', 'Peugeot 208', 'Mercedes A-klasse'].map((auto) => (
                  <div key={auto} className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5 text-center">
                    <p className="text-white font-medium text-sm">{auto}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tips voor het Kopen van een Occasion</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Of je nu in Boxmeer of Cuijk een occasion koopt, deze tips helpen je bij een succesvolle aankoop:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vergelijk meerdere auto's en prijzen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vraag naar de onderhoudshistorie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer de NAP stand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Maak een uitgebreide proefrit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Kies een BOVAG erkend bedrijf</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Occasion Zoeken in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Kom langs bij Car Store Cuijk en ontdek ons uitgebreide aanbod occasions. 
                  Ook voor klanten uit Boxmeer en omgeving!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/occasions" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Car className="w-5 h-5" />
                    Bekijk Occasions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
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
