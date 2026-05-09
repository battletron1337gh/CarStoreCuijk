import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, ClipboardCheck, Phone, AlertTriangle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'APK Keuring Cuijk - Alles Wat Je Moet Weten | Car Store Cuijk',
  description: 'APK keuring in Cuijk vanaf €29.95. ✓ Zonder afspraak ✓ Directe uitslag ✓ Garantie. Lees alles over kosten, termijnen en wat er wordt gecontroleerd.',
  keywords: 'APK keuring Cuijk, APK Cuijk, APK keuring kosten, APK termijn, auto keuring Cuijk, APK garage Cuijk',
  openGraph: {
    title: 'APK Keuring Cuijk - Alles Wat Je Moet Weten | Car Store Cuijk',
    description: 'APK keuring in Cuijk vanaf €29.95. Zonder afspraak, directe uitslag, garantie.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "APK Keuring Cuijk - Alles Wat Je Moet Weten",
  "description": "APK keuring in Cuijk vanaf €29.95. Zonder afspraak, directe uitslag, garantie.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/apk-keuring-cuijk-alles-wat-je-moet-weten"
  }
};

export default function APKKeuringCuijkPage() {
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
              <ClipboardCheck className="w-4 h-4" />
              <span>APK Keuring</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              APK Keuring Cuijk - <span className="text-[#c8102e]">Alles Wat Je Moet Weten</span>
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
                De APK keuring is verplicht voor iedere auto op de Nederlandse weg. 
                Maar wat houdt de keuring precies in? Wat kost een APK in Cuijk? 
                En waar moet je op letten? In dit complete overzicht lees je alles over de APK keuring.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat is de APK?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                APK staat voor <strong>Algemene Periodieke Keuring</strong>. Het is een wettelijk verplichte keuring 
                om de veiligheid van voertuigen op de openbare weg te waarborgen. Tijdens de keuring controleert 
                een erkend keuringsstation of je auto voldoet aan de wettelijke veiligheidseisen en milieunormen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">APK Kosten in Cuijk</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk betaal je voor een APK keuring slechts <strong>€29,95</strong>. 
                Dit is een all-in prijs zonder verborgen kosten. Heb je een aanhanger of bestelbus? 
                Neem dan contact met ons op voor de specifieke tarieven.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">APK Keuring Cuijk</h3>
                    <p className="text-white/60">Inclusief administratiekosten</p>
                  </div>
                  <div className="text-4xl font-bold text-[#c8102e]">€29,95</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer is APK Verplicht?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De APK termijn hangt af van het type voertuig en de leeftijd:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Calendar className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">4 jaar</div>
                  <p className="text-white/60 text-sm">Eerste keuring (nieuwe personenauto)</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Calendar className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">2 jaar</div>
                  <p className="text-white/60 text-sm">Tweede keuring</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 text-center">
                  <Calendar className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">1 jaar</div>
                  <p className="text-white/60 text-sm">Daarna jaarlijks</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Wordt er Gecontroleerd?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Tijdens de APK keuring worden verschillende onderdelen van je auto gecontroleerd:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Verlichting
                  </h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Koplampen en achterlichten</li>
                    <li>• Remlichten en knipperlichten</li>
                    <li>• Mistlampen</li>
                    <li>• Kentekenverlichting</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Remmen
                  </h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Werking reminstallatie</li>
                    <li>• Remslijtage</li>
                    <li>• Remvloeistof</li>
                    <li>• Handrem</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Besturing & Ophanging
                  </h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Stuurinrichting</li>
                    <li>• Schokdempers</li>
                    <li>• Wiellagers</li>
                    <li>• Banden</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Carrosserie & Veiligheid
                  </h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Ruiten en spiegels</li>
                    <li>• Gordels</li>
                    <li>• Wissers</li>
                    <li>• Uitlaat en emissies</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Voorbereiding op de APK</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Met deze tips vergroot je de kans op een succesvolle keuring:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer alle lampen vooraf</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vul de ruitensproeiervloeistof bij</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Zorg voor schone ruiten en spiegels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Neem het kentekenbewijs mee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Ruim de auto op (toegang tot gordels)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Gebeurt er Bij Afkeur?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Als je auto wordt afgekeurd, ontvang je een keuringsrapport met de gebreken die moeten worden verholpen. 
                Je hebt dan <strong>2 weken</strong> de tijd om de gebreken te laten repareren. 
                Bij Car Store Cuijk kunnen we de meeste reparaties direct uitvoeren, zodat je snel weer de weg op kunt.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-[#c8102e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Let op!</h3>
                    <p className="text-white/60">
                      Rijden zonder geldige APK kan een boete opleveren van €140. 
                      Bovendien is je verzekering mogelijk niet geldig bij een ongeval.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">APK Keuring Zonder Afspraak in Cuijk</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk kun je terecht voor je APK keuring <strong>zonder afspraak</strong>. 
                Rij gewoon binnen tijdens onze openingstijden en we keuren je auto direct. 
                De keuring duurt ongeveer 30-45 minuten. Je kunt wachten in onze comfortabele wachtruimte 
                met gratis koffie en WiFi.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">APK Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We bedienen niet alleen Cuijk, maar ook klanten uit de hele regio, waaronder 
                <strong>Boxmeer</strong>, <strong>Grave</strong>, <strong>Gennep</strong>, <strong>Wijchen</strong>, 
                <strong>Beuningen</strong> en <strong>Nijmegen</strong>. Onze centrale ligging aan de doorgaande weg 
                maakt ons gemakkelijk bereikbaar.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">APK Keuring Nodig in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Kom langs bij Car Store Cuijk voor je APK keuring. Vanaf €29,95, zonder afspraak, 
                  direct geholpen!
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
