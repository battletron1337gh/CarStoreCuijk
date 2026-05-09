import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Car, Phone, Euro, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Verkopen in Cuijk - Compleet Stappenplan | Car Store Cuijk',
  description: 'Auto verkopen in Cuijk? ✓ Direct bod ✓ Gratis taxatie ✓ Snelle betaling. Volg ons stappenplan voor een succesvolle verkoop.',
  keywords: 'auto verkopen Cuijk, auto inkoop Cuijk, auto verkopen tips, auto opkopers Cuijk, auto verkopen stappenplan',
  openGraph: {
    title: 'Auto Verkopen in Cuijk - Compleet Stappenplan | Car Store Cuijk',
    description: 'Auto verkopen in Cuijk? Direct bod, gratis taxatie, snelle betaling.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Auto Verkopen in Cuijk - Compleet Stappenplan",
  "description": "Auto verkopen in Cuijk? Direct bod, gratis taxatie, snelle betaling.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/auto-verkopen-cuijk-stappenplan"
  }
};

export default function AutoVerkopenPage() {
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
              <span>Auto Verkopen</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Auto Verkopen in Cuijk - <span className="text-[#c8102e]">Stappenplan</span>
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
                Je auto verkopen kan op verschillende manieren. Maar hoe zorg je voor de beste prijs 
                en een soepele verkoop? In dit artikel delen we een compleet stappenplan voor het verkopen 
                van je auto in Cuijk en omgeving.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Verkopen via Car Store Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Er zijn verschillende manieren om je auto te verkopen: particulier, via een opkoper, 
                of inruilen bij aankoop van een nieuwe auto. Bij Car Store Cuijk bieden we een eerlijke prijs, 
                directe betaling en een zorgeloos verkoopproces.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Euro className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Eerlijke Prijs</h3>
                  <p className="text-white/60 text-sm">Taxatie gebaseerd op actuele marktwaarde</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <CheckCircle className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Directe Betaling</h3>
                  <p className="text-white/60 text-sm">Geld direct op je rekening bij akkoord</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <FileText className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Regel wij</h3>
                  <p className="text-white/60 text-sm">Alle papierwerk wordt door ons geregeld</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Stappenplan Auto Verkopen</h2>

              <div className="space-y-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Bereid je Auto Voor</h3>
                      <p className="text-white/60">
                        Een schone auto maakt een betere indruk. Was de auto van buiten en ruim het interieur op. 
                        Zorg dat alle documenten bij de hand zijn: kentekenbewijs, onderhoudsboekje, aankoopbonnen van onderhoud.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Bepaal de Waarde</h3>
                      <p className="text-white/60">
                        Check de actuele marktwaarde van je auto. Factoren die de prijs beïnvloeden zijn: 
                        merk, model, bouwjaar, kilometerstand, onderhoudshistorie en staat van de auto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Vraag een Taxatie aan</h3>
                      <p className="text-white/60">
                        Bij Car Store Cuijk kun je gratis en vrijblijvend je auto laten taxeren. 
                        We bekijken de auto ter plekke en doen je direct een eerlijk bod.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Vergelijk Aanbiedingen</h3>
                      <p className="text-white/60">
                        Het is verstandig om meerdere biedingen te vergelijken. Let niet alleen op de prijs, 
                        maar ook op de voorwaarden. Sommige opkopers brengen verborgen kosten in rekening.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Regel de Administratie</h3>
                      <p className="text-white/60">
                        Bij verkoop via Car Store Cuijk regelen wij alle papierwerk. Je krijgt een verkoopovereenkomst 
                        en wij zorgen voor de overschrijving bij de RDW.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Welke Documenten Heb je Nodig?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Zorg dat je de volgende documenten bij de hand hebt bij de verkoop:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Kentekenbewijs deel I en II</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Onderhoudsboekje en facturen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Identiteitsbewijs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Alle sleutels en afstandsbedieningen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">APK keuringsrapport (indien aanwezig)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Bepaalt de Waarde van je Auto?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De waarde van je auto hangt af van verschillende factoren:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Positieve Factoren</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Compleet onderhoudshistorie</li>
                    <li>• Lage kilometerstand</li>
                    <li>• Goede staat (binnen en buiten)</li>
                    <li>• Recent onderhoud of nieuwe APK</li>
                    <li>• Populair merk/model</li>
                    <li>• Extra opties en accessoires</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Negatieve Factoren</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Onbekend onderhoud</li>
                    <li>• Hoge kilometerstand</li>
                    <li>• Schade of roest</li>
                    <li>• Verlopen APK</li>
                    <li>• Missende documenten</li>
                    <li>• Slechte banden</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Auto Verkopen in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk koopt auto's in uit de hele regio. Of je nu woont in 
                <strong>Cuijk</strong>, <strong>Boxmeer</strong>, <strong>Grave</strong>, <strong>Gennep</strong>, 
                <strong>Wijchen</strong>, <strong>Beuningen</strong> of <strong>Nijmegen</strong> - 
                we komen de auto bekijken of je kunt bij ons langskomen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Veelgestelde Vragen</h2>
              
              <div className="space-y-4 mt-6">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-2">Hoe snel krijg ik mijn geld?</h3>
                  <p className="text-white/60">Bij verkoop aan Car Store Cuijk wordt het bedrag direct overgemaakt op je rekening.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-2">Neem je ook auto's met schade in?</h3>
                  <p className="text-white/60">Ja, we nemen ook auto's met schade of defecten in. De prijs wordt aangepast naar de staat.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-2">Moet ik zelf de auto schoonmaken?</h3>
                  <p className="text-white/60">Nee, dat is niet nodig. Een schone auto maakt wel een betere indruk, maar wij kopen auto's in elke staat.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Auto Verkopen in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Vraag vandaag nog een gratis taxatie aan. Direct een eerlijk bod en snelle betaling!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
                  </Link>
                  <Link href="/inkoop" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    Meer over auto inkoop
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
