import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Settings, Phone, Calendar, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Onderhoud Cuijk - Periodiek Onderhoud | Car Store Cuijk',
  description: 'Periodiek onderhoud in Cuijk vanaf €189. ✓ BOVAG erkend ✓ Originele onderdelen ✓ Garantie behoud. Plan je onderhoud vandaag!',
  keywords: 'auto onderhoud Cuijk, periodiek onderhoud Cuijk, auto onderhoud kosten, klein onderhoud Cuijk, groot onderhoud Cuijk',
  openGraph: {
    title: 'Auto Onderhoud Cuijk - Periodiek Onderhoud | Car Store Cuijk',
    description: 'Periodiek onderhoud in Cuijk vanaf €189. BOVAG erkend, originele onderdelen, garantie behoud.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Auto Onderhoud Cuijk - Periodiek Onderhoud",
  "description": "Periodiek onderhoud in Cuijk vanaf €189. BOVAG erkend, originele onderdelen, garantie behoud.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/auto-onderhoud-cuijk-periodiek"
  }
};

export default function AutoOnderhoudPage() {
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
              <Settings className="w-4 h-4" />
              <span>Onderhoud</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Auto Onderhoud Cuijk - <span className="text-[#c8102e]">Periodiek Onderhoud</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>9 minuten leestijd</span>
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
                Regelmatig onderhoud is essentieel om je auto in topconditie te houden. 
                Het voorkomt dure reparaties, verlengt de levensduur van je auto en behoudt de waarde. 
                Bij Car Store Cuijk voeren we alle onderhoudswerkzaamheden uit volgens de specificaties van de fabrikant.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Periodiek Onderhoud?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Periodiek onderhoud zorgt ervoor dat je auto betrouwbaar blijft en optimaal presteert. 
                Daarnaast behoud je de fabrieksgarantie en voorkom je onverwachte kosten door tijdig slijtage 
                te signaleren.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Shield className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Betrouwbaarheid</h3>
                  <p className="text-white/60 text-sm">Voorkom pech onderweg met preventief onderhoud</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Calendar className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Levensduur</h3>
                  <p className="text-white/60 text-sm">Een goed onderhouden auto gaat langer mee</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Settings className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Waardebehoud</h3>
                  <p className="text-white/60 text-sm">Complete onderhoudshistorie verhoogt de verkoopwaarde</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost Onderhoud in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten voor onderhoud verschillen per auto en het type onderhoud dat nodig is. 
                Bij Car Store Cuijk hanteren we transparante prijzen:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€189</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Klein Onderhoud</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Oliewissel inclusief filter</li>
                    <li>• Controle vloeistoffen</li>
                    <li>• Inspectie remmen</li>
                    <li>• Bandenspanning check</li>
                    <li>• Visuele inspectie</li>
                  </ul>
                </div>

                <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€349</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Groot Onderhoud</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Alles van klein onderhoud</li>
                    <li>• Luchtfilter vervangen</li>
                    <li>• Interieurfilter vervangen</li>
                    <li>• Bougies vervangen (benzine)</li>
                    <li>• Uitgebreide diagnose</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat wordt er Gedaan Tijdens Onderhoud?</h2>
              
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Standaard Onderhoudswerkzaamheden:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Motorolie verversen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Oliefilter vervangen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Controle remmen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Controle banden</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Vloeistoffen bijvullen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Controle verlichting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Ruitenwissers checken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8102e] mt-1 flex-shrink-0" />
                      <span className="text-white/70 text-sm">Accu testen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onderhoudsinterval</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het onderhoudsinterval verschilt per automerk en model. Raadpleeg je onderhoudsboekje voor de exacte 
                specificaties. Over het algemeen geldt:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Klein onderhoud:</strong> Elke 15.000 - 20.000 km of 1 jaar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Groot onderhoud:</strong> Elke 30.000 - 60.000 km of 2 jaar</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">BOVAG Onderhoudsboekje</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk vullen we na elk onderhoudsbeurt je BOVAG onderhoudsboekje in. 
                Dit geeft zekerheid bij verkoop en toont dat je auto goed onderhouden is. 
                Ook stempelen we digitaal in bij de RDW, zodat de onderhoudshistorie altijd traceerbaar is.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onderhoud voor Alle Merken</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk onderhouden we alle automerken. Of je nu rijdt in een Volkswagen, BMW, Audi, 
                Mercedes, Ford, Renault of een ander merk - onze monteurs zijn opgeleid om je auto volgens 
                fabrieksspecificaties te onderhouden. We gebruiken altijd onderdelen die passen bij het onderhoudsschema 
                van jouw auto.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onderhoud in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We bedienen klanten uit de hele regio, waaronder <strong>Cuijk</strong>, <strong>Boxmeer</strong>, 
                <strong>Grave</strong>, <strong>Gennep</strong>, <strong>Wijchen</strong>, <strong>Beuningen</strong> 
                en <strong>Nijmegen</strong>. Onze centrale ligging en goede bereikbaarheid maken ons een populaire keuze 
                voor periodiek onderhoud.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Auto Onderhoud in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Plan vandaag nog je onderhoudsbeurt bij Car Store Cuijk. 
                  BOVAG erkend, transparante prijzen, garantie op alle werkzaamheden.
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
