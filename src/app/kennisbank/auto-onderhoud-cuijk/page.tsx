import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Phone, Calendar, Wrench, Gauge } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Onderhoud Cuijk - Periodiek Onderhoud & Beurt | Car Store Cuijk',
  description: 'Periodiek onderhoud nodig in Cuijk? Car Store Cuijk verzorgt kleine en grote onderhoudsbeurtes volgens fabrieksvoorschrift. Scherpe tarieven, geen afspraak nodig.',
  keywords: 'auto onderhoud cuijk, periodiek onderhoud cuijk, onderhoudsbeurt cuijk, auto beurt cuijk, onderhoudsinterval, kleine beurt, grote beurt',
  openGraph: {
    title: 'Auto Onderhoud Cuijk - Periodiek Onderhoud & Beurt | Car Store Cuijk',
    description: 'Periodiek onderhoud nodig in Cuijk? Car Store Cuijk verzorgt kleine en grote onderhoudsbeurtes volgens fabrieksvoorschrift.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Auto Onderhoud Cuijk - Periodiek Onderhoud & Beurt",
  "description": "Periodiek onderhoud nodig in Cuijk? Car Store Cuijk verzorgt kleine en grote onderhoudsbeurtes volgens fabrieksvoorschrift.",
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
  "datePublished": "2026-05-10",
  "dateModified": "2026-05-10",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.carstorecuijk.nl/kennisbank/auto-onderhoud-cuijk"
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
              <Wrench className="w-4 h-4" />
              <span>Onderhoud</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Auto Onderhoud Cuijk - <span className="text-[#c8102e]">Periodiek Onderhoud & Beurt</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>10 minuten leestijd</span>
              </div>
              <span>•</span>
              <span>10 mei 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Regelmatig onderhoud is essentieel om je auto in topconditie te houden. 
                Het voorkomt dure reparaties, verlengt de levensduur van je voertuig en zorgt 
                voor optimale veiligheid en betrouwbaarheid. Maar wat houdt periodiek onderhoud precies in? 
                Wat is het verschil tussen een kleine en grote beurt? En waarom zou je voor Car Store Cuijk kiezen? 
                In dit artikel beantwoorden we al je vragen over auto onderhoud in Cuijk.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat is Periodiek Onderhoud?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Periodiek onderhoud is het regelmatig controleren en vervangen van slijtageonderdelen 
                en vloeistoffen in je auto. Dit gebeurt volgens een vast schema dat door de fabrikant 
                is bepaald. Elk merk en model heeft zijn eigen onderhoudsschema, maar over het algemeen 
                onderscheiden we twee soorten onderhoudsbeurten: de kleine beurt en de grote beurt.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Het doel van periodiek onderhoud is om problemen te voorkomen voordat ze ontstaan. 
                Door tijdig olie te verversen, filters te vervangen en vitale onderdelen te controleren, 
                houd je je auto betrouwbaar en veilig. Bovendien behoud je de garantie en de restwaarde 
                van je voertuig door het onderhoud volgens voorschrift uit te laten voeren.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Kleine Beurt vs. Grote Beurt: Wat is het Verschil?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk voeren we zowel kleine als grote onderhoudsbeurtes uit. 
                Hieronder leggen we uit wat er bij elke beurt gebeurt:
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Kleine Beurt (Onderhoudsbeurt A)</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een kleine beurt is het meest voorkomende onderhoud en wordt meestal elk jaar of om de 15.000 tot 20.000 kilometer uitgevoerd. 
                Bij een kleine beurt voeren we de volgende werkzaamheden uit:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervangen van de motorolie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervangen van het oliefilter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle van alle vloeistoffen (koelvloeistof, remvloeistof, ruitensproeiervloeistof)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle van bandenspanning en profieldiepte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle van de remmen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle van de verlichting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Resetten van de onderhoudsindicator</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Grote Beurt (Onderhoudsbeurt B)</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een grote beurt wordt minder frequent uitgevoerd, meestal om de 2 jaar of 30.000 tot 40.000 kilometer. 
                Bij een grote beurt worden alle werkzaamheden van de kleine beurt uitgevoerd, aangevuld met extra controles en vervangingen:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Alle werkzaamheden van de kleine beurt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervangen van het interieurfilter (cabin filter)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervangen van het luchtfilter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervangen van de bougies (bij benzinemotoren)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle en eventueel vervangen van de distributieriem (afhankelijk van leeftijd/kilometerstand)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Uitgebreidere controle van alle systemen</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer is een Onderhoudsbeurt Nodig?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het onderhoudsschema van je auto is afhankelijk van verschillende factoren: 
                het merk, het model, het bouwjaar en het type motor. De meeste moderne auto's 
                hebben een flexibel onderhoudsschema dat wordt bepaald door de boordcomputer. 
                Deze houdt rekening met je rijstijl en de omstandigheden waarin je rijdt.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Toch zijn er enkele algemene richtlijnen:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Kleine Beurt</h3>
                  </div>
                  <ul className="space-y-2 text-white/60">
                    <li>• Elke 12-15 maanden</li>
                    <li>• Of om de 15.000 - 20.000 km</li>
                    <li>• Afhankelijk van fabrikant</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Grote Beurt</h3>
                  </div>
                  <ul className="space-y-2 text-white/60">
                    <li>• Elke 24-30 maanden</li>
                    <li>• Of om de 30.000 - 40.000 km</li>
                    <li>• Afhankelijk van fabrikant</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mt-6">
                Raadpleeg altijd het onderhoudsboekje van je auto voor het exacte schema. 
                Twijfel je? Neem contact met ons op, we helpen je graag.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Periodiek Onderhoud Zo Belangrijk Is</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sommige mensen zien periodiek onderhoud als een verplichting of een onnodige kostenpost. 
                Niets is minder waar. Regelmatig onderhoud biedt tal van voordelen:
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Voorkomt Dure Reparaties</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een kleine beurt kost een paar honderd euro. Een kapotte motor door vervuilde olie 
                kan duizenden euros kosten. Door tijdig onderhoud voorkom je dat kleine problemen 
                uitgroeien tot grote, dure reparaties.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Behoudt de Garantie</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Voor nieuwe auto's geldt vaak een fabrieksgarantie. Deze garantie kan vervallen 
                als je het onderhoud niet volgens voorschrift laat uitvoeren. Zorg dus dat je 
                onderhoudsboekje netjes wordt bijgehouden door een erkende garage.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Verhoogt de Veiligheid</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Tijdens een onderhoudsbeurt controleren we vitale onderdelen zoals remmen, banden en verlichting. 
                Dit zorgt ervoor dat je veilig de weg op kunt. Veiligheid is immers het belangrijkst.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Behoudt de Restwaarde</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een auto met een volledig onderhoudshistorie is meer waard bij verkoop. 
                Potentiële kopers zien graag dat de auto goed is onderhouden. 
                Het onderhoudsboekje is dan ook een waardevol document.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Lagere Brandstofkosten</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een goed onderhouden auto rijdt efficiënter. Schone olie, nieuwe filters en goed 
                functionerende onderdelen zorgen voor een lager brandstofverbruik. 
                Op de lange termijn bespaar je dus geld.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Auto Onderhoud in Cuijk: Waarom Car Store?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is jouw specialist in periodiek onderhoud voor alle merken auto's. 
                Dit is waarom klanten uit Cuijk en omgeving voor ons kiezen:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Scherpe tarieven</strong>
                      <p className="text-white/60 text-sm">We hanteren concurrerende prijzen voor onderhoud, zonder in te leveren op kwaliteit.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Geen afspraak nodig</strong>
                      <p className="text-white/60 text-sm">Voor kleine onderhoudsbeurtes kun je zonder afspraak langskomen. Handig en snel!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Onderhoud volgens fabrieksvoorschrift</strong>
                      <p className="text-white/60 text-sm">We werken volgens de richtlijnen van de fabrikant, zodat je garantie behouden blijft.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Originele of A-kwaliteit onderdelen</strong>
                      <p className="text-white/60 text-sm">We gebruiken alleen onderdelen die voldoen aan de specificaties van je auto.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Netjes bijgehouden onderhoudsboekje</strong>
                      <p className="text-white/60 text-sm">We zorgen voor een correcte registratie van alle werkzaamheden.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost een Onderhoudsbeurt?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten van een onderhoudsbeurt hangen af van verschillende factoren: 
                het merk en model van je auto, het type motor, de benodigde onderdelen en de hoeveelheid arbeid. 
                Een kleine beurt begint bij ons vanaf ongeveer €149, een grote beurt vanaf €299.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Voorafgaand aan de onderhoudsbeurt geven we altijd een prijsopgave, 
                zodat je niet voor verrassingen komt te staan. Eventuele extra werkzaamheden 
                worden altijd eerst met je overlegd.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Maak Vandaag Nog een Afspraak</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Is het tijd voor een onderhoudsbeurt? Kom langs bij Car Store Cuijk. 
                We werken snel, vakkundig en tegen scherpe tarieven. 
                Voor kleine beurtes heb je geen afspraak nodig, voor grote beurtes raden we wel aan om even te bellen.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Onderhoud Nodig in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Laat je auto onderhouden door de specialisten van Car Store Cuijk. 
                  Scherpe tarieven, vakkundig werk, geen afspraak nodig voor kleine beurtes.
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
