import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, ClipboardCheck, AlertTriangle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'APK Keuring: Wat wordt er gecontroleerd? | Car Store Cuijk',
  description: 'Wat wordt er gecontroleerd tijdens een APK keuring? Lees alles over de APK eisen, kosten, termijnen en hoe je je auto kunt voorbereiden.',
  keywords: 'APK keuring wat wordt gecontroleerd, APK eisen, APK kosten, APK termijn, auto keuring',
  openGraph: {
    title: 'APK Keuring: Wat wordt er gecontroleerd? | Car Store Cuijk',
    description: 'Wat wordt er gecontroleerd tijdens een APK keuring? Lees alles over de APK eisen, kosten en termijnen.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

export default function APKKeuringPage() {
  return (
    <>
      <Header />
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
              <span>Onderhoud & Service</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              APK Keuring: Wat wordt er gecontroleerd?
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 minuten leestijd</span>
              </div>
              <span>•</span>
              <span>19 april 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                De Algemene Periodieke Keuring (APK) is verplicht voor alle personenauto's, bestelauto's en motorfietsen. 
                Maar wat wordt er precies gecontroleerd? En hoe bereid je je auto optimaal voor?
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat is de APK?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De APK is een wettelijk verplichte keuring om de veiligheid van voertuigen op de openbare weg te waarborgen. 
                Tijdens de keuring controleert een erkend keuringsstation of je auto voldoet aan de wettelijke veiligheidseisen 
                en milieunormen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat wordt er gecontroleerd?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Verlichting & Signalering
                  </h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Koplampen en achterlichten</li>
                    <li>• Remlichten en knipperlichten</li>
                    <li>• Mistlampen en achteruitrijlicht</li>
                    <li>• Kentekenverlichting</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Remmen
                  </h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Werking reminstallatie</li>
                    <li>• Remslijtage</li>
                    <li>• Remvloeistof niveau</li>
                    <li>• Handrem werking</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Besturing & Ophanging
                  </h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Speling in stuurinrichting</li>
                    <li>• Schokdempers</li>
                    <li>• Wiellagers</li>
                    <li>• Aandrijfassen</li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Carrosserie & Veiligheid
                  </h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Ruiten en spiegels</li>
                    <li>• Gordels en airbags</li>
                    <li>• Banden profiel en staat</li>
                    <li>• Uitlaat en emissies</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">APK Termijnen</h2>
              <div className="bg-[#c8102e]/10 border border-[#c8102e]/20 rounded-xl p-6 mt-6">
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#c8102e]">4 jaar</div>
                    <div className="text-white/60 text-sm mt-1">Eerste keuring (nieuwe auto)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#c8102e]">2 jaar</div>
                    <div className="text-white/60 text-sm mt-1">Tweede keuring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#c8102e]">1 jaar</div>
                    <div className="text-white/60 text-sm mt-1">Daarna jaarlijks</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Voorbereiding Tips</h2>
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
                </ul>
              </div>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-12">
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
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-[#1a1a1a] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">APK Keuring nodig?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Bij Car Store Cuijk kun je terecht voor je APK keuring. Snel, voordelig en zonder afspraak!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/onderhoud" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
                  </Link>
                  <Link href="/occasions" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    Bekijk onze occasions
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
