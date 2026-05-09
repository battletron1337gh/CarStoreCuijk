import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Disc, Phone, AlertTriangle, Gauge } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Remblokken Vervangen - Kosten Cuijk | Car Store Cuijk',
  description: 'Remblokken vervangen in Cuijk vanaf €149. ✓ Originele kwaliteit ✓ Snelle service ✓ Garantie. Veilig de weg op met nieuwe remblokken!',
  keywords: 'remblokken vervangen Cuijk, remblokken kosten, remmen vervangen Cuijk, remblokken prijs, garage Cuijk remmen',
  openGraph: {
    title: 'Remblokken Vervangen - Kosten Cuijk | Car Store Cuijk',
    description: 'Remblokken vervangen in Cuijk vanaf €149. Originele kwaliteit, snelle service, garantie.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Remblokken Vervangen - Kosten Cuijk",
  "description": "Remblokken vervangen in Cuijk vanaf €149. Originele kwaliteit, snelle service, garantie.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/remblokken-vervangen-kosten-cuijk"
  }
};

export default function RemblokkenVervangenPage() {
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
              <Disc className="w-4 h-4" />
              <span>Remmen</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Remblokken Vervangen - <span className="text-[#c8102e]">Kosten Cuijk</span>
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
                Goed werkende remmen zijn essentieel voor je veiligheid en die van andere weggebruikers. 
                Bij Car Store Cuijk vervangen we remblokken snel en vakkundig, zodat je weer veilig de weg op kunt.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kosten Nieuwe Remblokken in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten voor het vervangen van remblokken variëren per auto. Bij Car Store Cuijk 
                betaal je voor remblokken vervangen vanaf <strong>€149</strong> per as (voor of achter). 
                Dit is een all-in prijs inclusief:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Nieuwe remblokken van A-kwaliteit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controle van remschijven en remcilinders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Reiniging en smering van remonderdelen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Arbeidsloon en klein materiaal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">12 maanden garantie op onderdelen en werk</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€149</div>
                  <p className="text-white/60">Remblokken vervangen vooras</p>
                </div>

                <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6">
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€149</div>
                  <p className="text-white/60">Remblokken vervangen achteras</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer Moeten Remblokken Vervangen Worden?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Remblokken slijten geleidelijk en moeten tijdig vervangen worden. De levensduur hangt af van 
                je rijstijl, het gewicht van de auto en het type remblokken. Gemiddeld moeten remblokken 
                elke 30.000 - 70.000 kilometer vervangen worden.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-[#c8102e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Signalen dat je remblokken aan vervanging toe zijn:</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Piepend geluid bij het remmen (slijtagewaarschuwing)</li>
                      <li>• Trillen of vibraties in het stuur bij het remmen</li>
                      <li>• Langer remweg dan normaal</li>
                      <li>• Rempedaal voelt zachter aan</li>
                      <li>• Waarschuwingslampje remmen brandt op het dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Moeten ook de Remschijven Vervangen Worden?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij het vervangen van remblokken controleren we altijd ook de remschijven. 
                Soms kunnen de schijven meerdere keren mee met nieuwe remblokken, maar soms is vervanging noodzakelijk. 
                Dit hangt af van de slijtage en eventuele beschadigingen zoals groeven of warping.
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Complete Remservice Pakketten:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#0a0a0a] rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#c8102e] mb-1">€149</div>
                    <p className="text-white/80 font-medium">Remblokken voor</p>
                    <p className="text-white/60 text-sm">Alleen remblokken vervangen</p>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#c8102e] mb-1">€299</div>
                    <p className="text-white/80 font-medium">Remblokken + Schijven voor</p>
                    <p className="text-white/60 text-sm">Complete set voorzijde</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hoe Lang Duurt het Vervangen?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het vervangen van remblokken duurt meestal 1-2 uur per as. Bij Car Store Cuijk 
                kun je vaak zonder afspraak terecht. Je kunt wachten in onze comfortabele wachtruimte 
                terwijl wij je remmen vervangen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tips na het Vervangen van Remblokken</h2>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Rijd de eerste 200-300 km rustig en vermijd harde remacties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Laat de remmen "inrijden" door regelmatig te remmen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Let op eventuele vreemde geluiden en meld deze direct</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Remmen Vervangen in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is specialist in remmen vervangen voor alle merken auto's. 
                We bedienen klanten uit <strong>Cuijk</strong>, <strong>Boxmeer</strong>, <strong>Grave</strong>, 
                <strong>Gennep</strong>, <strong>Wijchen</strong>, <strong>Beuningen</strong> en <strong>Nijmegen</strong>. 
                Onze monteurs hebben ervaring met zowel conventionele remsystemen als geavanceerde elektronische remmen.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Remblokken Vervangen in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Rijd veilig met nieuwe remblokken. Kom langs voor een gratis remmencontrole 
                  of maak direct een afspraak voor vervanging.
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
