import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Lightbulb, Phone, Sparkles, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Koplampen Polijsten Cuijk - Prijzen & Tips | Car Store Cuijk',
  description: 'Koplampen polijsten in Cuijk vanaf €49.95. ✓ UV bescherming ✓ 2 jaar garantie ✓ Direct resultaat. Maak je koplampen weer als nieuw!',
  keywords: 'koplampen polijsten Cuijk, koplampen polijsten prijs, koplampen herstellen Cuijk, dof koplampen, koplampen poetsen Cuijk',
  openGraph: {
    title: 'Koplampen Polijsten Cuijk - Prijzen & Tips | Car Store Cuijk',
    description: 'Koplampen polijsten in Cuijk vanaf €49.95. UV bescherming, 2 jaar garantie, direct resultaat.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Koplampen Polijsten Cuijk - Prijzen & Tips",
  "description": "Koplampen polijsten in Cuijk vanaf €49.95. UV bescherming, 2 jaar garantie, direct resultaat.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/koplampen-polijsten-cuijk-prijzen"
  }
};

export default function KoplampenPolijstenPage() {
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
              <Lightbulb className="w-4 h-4" />
              <span>Koplampen Polijsten</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Koplampen Polijsten Cuijk - <span className="text-[#c8102e]">Prijzen & Tips</span>
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
                Dofgeleide, vergeelde of beschadigde koplampen? Dit is niet alleen een esthetisch probleem, 
                maar ook een veiligheidsrisico. Bij Car Store Cuijk maken we je koplampen weer helder en helder 
                met onze professionele polijstservice.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost Koplampen Polijsten in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk betaal je voor professioneel koplampen polijsten slechts 
                <strong>€49,95</strong> per set. Dit is een all-in prijs inclusief:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Grondige reiniging van de koplampen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Professioneel polijsten van het kunststof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">UV-beschermende coating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">2 jaar garantie op het resultaat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Koplampen Polijsten Set</h3>
                    <p className="text-white/60">Beide koplampen inclusief coating</p>
                  </div>
                  <div className="text-4xl font-bold text-[#c8102e]">€49,95</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Worden Koplampen Dof?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Koplampen van moderne auto's zijn gemaakt van polycarbonaat kunststof. 
                Door jarenlange blootstelling aan UV-straling, weersinvloeden en straatvuil 
                raakt de bovenste laag van het materiaal aangetast. Dit resulteert in:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Vergeeling</h3>
                  <p className="text-white/60 text-sm">De koplampen krijgen een gele, melkachtige waas door oxidatie van het kunststof.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Matheid</h3>
                  <p className="text-white/60 text-sm">Het oppervlak wordt dof en mat in plaats van glanzend en helder.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Krasjes</h3>
                  <p className="text-white/60 text-sm">Fijne krasjes door zand, stof en schoonmaakbeurten verminderen de lichtopbrengst.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Beschadigingen</h3>
                  <p className="text-white/60 text-sm">Steenchips en andere beschadigingen tasten de structuur aan.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Het Gevaar van Dofgeleide Koplampen</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Dofgeleide koplampen zijn meer dan alleen een cosmetisch probleem. 
                Ze vormen een serieus veiligheidsrisico:
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#c8102e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Veiligheidsrisico's:</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Tot 70% minder lichtopbrengst in het donker</li>
                      <li>• Slechter zicht bij regen en mist</li>
                      <li>• Minder goed zichtbaar zijn voor andere weggebruikers</li>
                      <li>• Kans op afkeur bij de APK keuring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onze Werkwijze</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk polijsten we je koplampen volgens een professioneel stappenplan:
              </p>

              <div className="space-y-4 mt-6">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-white font-semibold">Reiniging</h4>
                      <p className="text-white/60 text-sm">De koplampen worden grondig gereinigd om vuil en vet te verwijderen.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-white font-semibold">Afschuren</h4>
                      <p className="text-white/60 text-sm">Het beschadigde oppervlak wordt voorzichtig afgeschuurd met fijn schuurpapier.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-white font-semibold">Polijsten</h4>
                      <p className="text-white/60 text-sm">Met speciale polijstmiddelen en machines brengen we het glas helder terug.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-white font-semibold">Coating</h4>
                      <p className="text-white/60 text-sm">Een UV-bestendige coating beschermt de koplampen tegen toekomstige beschadiging.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hoe Lang Duurt het?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het polijsten van koplampen duurt ongeveer 1-2 uur, afhankelijk van de staat van de lampen. 
                Je kunt wachten in onze comfortabele wachtruimte met gratis koffie en WiFi. 
                Wil je je auto liever achterlaten? Dat kan natuurlijk ook.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Garantie op Koplampen Polijsten</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk geven we <strong>2 jaar garantie</strong> op ons koplampen polijsten. 
                Mocht de coating binnen deze periode onverhoopt toch niet goed houden, 
                dan polijsten we je koplampen kosteloos opnieuw.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Koplampen Polijsten in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We bedienen niet alleen Cuijk, maar ook klanten uit <strong>Boxmeer</strong>, <strong>Grave</strong>, 
                <strong>Gennep</strong>, <strong>Wijchen</strong>, <strong>Beuningen</strong> en <strong>Nijmegen</strong>. 
                Onze centrale ligging maakt ons gemakkelijk bereikbaar voor iedereen in de regio.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tips om je Koplampen Langer Mooi te Houden</h2>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Was je auto regelmatig om vuil en zout te verwijderen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Parkeer waar mogelijk in de schaduw of garage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Gebruik geen agressieve schoonmaakmiddelen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Laat de koplampen regelmatig behandelen met wax</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Koplampen Polijsten in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Maak je koplampen weer helder en veilig. Vanaf €49,95 voor een complete set 
                  met 2 jaar garantie!
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
