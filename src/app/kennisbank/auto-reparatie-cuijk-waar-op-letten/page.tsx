import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Wrench, Phone, AlertTriangle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Reparatie Cuijk - Waar Moet Je Op Letten? | Car Store Cuijk',
  description: 'Auto reparatie in Cuijk nodig? Ontdek waar je op moet letten bij het kiezen van een garage. ✓ Eerlijke prijzen ✓ Garantie ✓ Snelle service.',
  keywords: 'auto reparatie Cuijk, garage Cuijk, auto reparatie kosten, betrouwbare garage Cuijk, auto laten maken Cuijk',
  openGraph: {
    title: 'Auto Reparatie Cuijk - Waar Moet Je Op Letten? | Car Store Cuijk',
    description: 'Auto reparatie in Cuijk nodig? Ontdek waar je op moet letten bij het kiezen van een garage.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Auto Reparatie Cuijk - Waar Moet Je Op Letten?",
  "description": "Auto reparatie in Cuijk nodig? Ontdek waar je op moet letten bij het kiezen van een garage.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/auto-reparatie-cuijk-waar-op-letten"
  }
};

export default function AutoReparatiePage() {
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
              <span>Auto Reparatie</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Auto Reparatie Cuijk - <span className="text-[#c8102e]">Waar Op Letten?</span>
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
                Je auto heeft een reparatie nodig en je zoekt een betrouwbare garage in Cuijk? 
                Het kiezen van de juiste garage kan het verschil maken tussen een eerlijke, kwalitatieve reparatie 
                en een dure teleurstelling. In dit artikel lees je waar je op moet letten.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Kies een Erkende Garage</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een <strong>BOVAG-erkende garage</strong> biedt zekerheid. Deze garages werken volgens strenge kwaliteitsnormen 
                en bieden garantie op hun werk. Bij Car Store Cuijk zijn we BOVAG-erkend, wat betekent dat je 
                kunt rekenen op vakmanschap en betrouwbaarheid.
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#c8102e]" />
                  Voordelen van een BOVAG garage:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Garantie op onderdelen en arbeid</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Gecertificeerde monteurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Klachtenregeling via BOVAG</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Behoud van fabrieksgarantie</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Vraag om een Duidelijke Offerte</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een betrouwbare garage geeft je altijd een duidelijke prijsindicatie of offerte vooraf. 
                Bij Car Store Cuijk analyseren we eerst het probleem en bespreken we de kosten met je voordat we beginnen. 
                Zo kom je nooit voor verrassingen te staan.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Check de Reviews en Reputatie</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Zoek online naar ervaringen van andere klanten. Goede garages hebben tevreden klanten die hun 
                ervaringen delen. Vraag ook in je omgeving naar ervaringen met garages in Cuijk en omgeving.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Let op Transparantie</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een goede garage legt uit wat er aan je auto moet gebeuren en waarom. 
                Ze laten je oude onderdelen zien en geven eerlijk advies over noodzakelijke en optionele reparaties. 
                Bij Car Store Cuijk geloven we in volledige transparantie.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Veelvoorkomende Reparaties in Cuijk</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Remmen Vervangen</h3>
                  <p className="text-white/60 text-sm mb-3">Remblokken, remschijven en remvloeistof vervangen.</p>
                  <p className="text-[#c8102e] font-medium">Vanaf €149</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Distributieriem</h3>
                  <p className="text-white/60 text-sm mb-3">Vervanging inclusief waterpomp en spanrollen.</p>
                  <p className="text-[#c8102e] font-medium">Vanaf €449</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Koppeling Vervangen</h3>
                  <p className="text-white/60 text-sm mb-3">Complete set inclusief drukgroep en koppelingsplaat.</p>
                  <p className="text-[#c8102e] font-medium">Vanaf €599</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Airco Reparatie</h3>
                  <p className="text-white/60 text-sm mb-3">Lekkages opsporen en repareren, systeem vullen.</p>
                  <p className="text-[#c8102e] font-medium">Vanaf €89</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer is een Reparatie Nodig?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sommige problemen kun je niet negeren. Let op deze signalen dat je auto een reparatie nodig heeft:
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-[#c8102e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Waarschuwingssignalen:</h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• Waarschuwingslampjes op het dashboard</li>
                      <li>• Vreemde geluiden (knarsen, piepen, tikken)</li>
                      <li>• Trillen of schokken tijdens het rijden</li>
                      <li>• Vreemde geuren (brandend, chemisch)</li>
                      <li>• Vloeistof onder de auto</li>
                      <li>• Verslechterde rijeigenschappen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Garantie op Reparaties</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk geven we <strong>12 maanden garantie</strong> op alle reparaties en vervangen onderdelen. 
                Dit geldt voor zowel de arbeid als de onderdelen zelf. Mocht er iets mis zijn, dan lossen we dat uiteraard kosteloos voor je op.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Reparatie in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We bedienen niet alleen Cuijk, maar ook klanten uit <strong>Boxmeer</strong>, <strong>Grave</strong>, 
                <strong>Gennep</strong>, <strong>Wijchen</strong>, <strong>Beuningen</strong> en <strong>Nijmegen</strong>. 
                Onze centrale ligging en goede bereikbaarheid maken ons een populaire keuze in de regio.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hoe Werkt Het?</h2>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-white font-semibold">Diagnose</h4>
                      <p className="text-white/60 text-sm">We onderzoeken wat er aan de hand is met je auto</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-white font-semibold">Offerte</h4>
                      <p className="text-white/60 text-sm">Je ontvangt een duidelijke prijsopgave</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-white font-semibold">Reparatie</h4>
                      <p className="text-white/60 text-sm">Na je akkoord voeren we de reparatie uit</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-white font-semibold">Controle</h4>
                      <p className="text-white/60 text-sm">We testen de auto en bespreken het werk</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Auto Reparatie Nodig in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Bel of app ons direct. We helpen je graag met een eerlijke diagnose en een scherpe prijs 
                  voor de reparatie van je auto.
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
