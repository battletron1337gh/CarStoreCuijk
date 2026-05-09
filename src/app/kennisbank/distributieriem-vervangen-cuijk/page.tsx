import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Cog, Phone, AlertTriangle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Distributieriem Vervangen Cuijk - Kosten & Advies | Car Store Cuijk',
  description: 'Distributieriem vervangen in Cuijk vanaf €449. ✓ Inclusief waterpomp ✓ Garantie ✓ Snelle service. Voorkom motorblokschade!',
  keywords: 'distributieriem vervangen Cuijk, distributieriem kosten, distributieriem vervangen prijs, distributieriem interval, garage Cuijk',
  openGraph: {
    title: 'Distributieriem Vervangen Cuijk - Kosten & Advies | Car Store Cuijk',
    description: 'Distributieriem vervangen in Cuijk vanaf €449. Inclusief waterpomp, garantie, snelle service.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Distributieriem Vervangen Cuijk - Kosten & Advies",
  "description": "Distributieriem vervangen in Cuijk vanaf €449. Inclusief waterpomp, garantie, snelle service.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/distributieriem-vervangen-cuijk"
  }
};

export default function DistributieriemPage() {
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
              <Cog className="w-4 h-4" />
              <span>Onderhoud</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Distributieriem Vervangen <span className="text-[#c8102e]">Cuijk</span>
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
                De distributieriem is een van de meest kritieke onderdelen van je auto. 
                Als deze breekt, kan dat leiden tot ernstige motorblokschade. 
                Bij Car Store Cuijk vervangen we distributieriemen vakkundig en tegen een scherpe prijs.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-[#c8102e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Belangrijk!</h3>
                    <p className="text-white/60">
                      Een gebroken distributieriem kan leiden tot motorblokschade met reparatiekosten 
                      van €2.000 tot €5.000+. Vervang de riem tijdig!
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost Distributieriem Vervangen in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk betaal je voor het vervangen van een distributieriem vanaf 
                <strong>€449</strong>. Dit is een complete prijs inclusief:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Nieuwe distributieriem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Nieuwe spanrollen en geleiderollen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vervanging waterpomp (indien aanbevolen)</span>
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

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Distributieriem Vervangen</h3>
                    <p className="text-white/60">Complete set inclusief waterpomp</p>
                  </div>
                  <div className="text-4xl font-bold text-[#c8102e]">vanaf €449</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer Moet de Distributieriem Vervangen Worden?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het vervangingsinterval verschilt per automerk en model. Raadpleeg altijd het onderhoudsboekje 
                van je auto voor de exacte specificaties. Over het algemeen geldt:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Op Tijd</h3>
                  </div>
                  <p className="text-white/60">Elke 4-6 jaar, afhankelijk van het merk en model van je auto.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Cog className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Op Kilometerstand</h3>
                  </div>
                  <p className="text-white/60">Elke 60.000 - 120.000 kilometer, afhankelijk van het voertuig.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Signalen dat de Distributieriem aan Vervanging Toe is</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Hoewel je distributieriem vaak geen duidelijke signalen geeft voordat deze breekt, 
                zijn er enkele tekenen waar je op kunt letten:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Piepende of ratelende geluiden uit de motorruimte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Motor die niet goed start of haperend loopt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Verminderde motorprestaties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Motorstoringslampje dat brandt</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom Ook de Waterpomp Vervangen?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij het vervangen van de distributieriem raden wij altijd aan om ook de waterpomp te vervangen. 
                De waterpomp zit vaak op dezelfde plaats als de distributieriem en heeft dezelfde levensduur. 
                Door beide tegelijk te vervangen bespaar je op arbeidsloon en voorkom je dat je later terug moet 
                voor de waterpomp.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hoe Lang Duurt de Vervanging?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het vervangen van een distributieriem duurt meestal tussen de 3 en 6 uur, afhankelijk van het merk en model. 
                Bij Car Store Cuijk plannen we de werkzaamheden zodat je auto dezelfde dag nog klaar is. 
                We zorgen voor vervangend vervoer indien nodig.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Distributieriem Vervangen in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is gespecialiseerd in distributieriem vervanging voor alle merken. 
                We bedienen klanten uit <strong>Cuijk</strong>, <strong>Boxmeer</strong>, <strong>Grave</strong>, 
                <strong>Gennep</strong>, <strong>Wijchen</strong>, <strong>Beuningen</strong> en <strong>Nijmegen</strong>. 
                Onze monteurs zijn opgeleid om dit specialistische werk vakkundig uit te voeren.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Verschil Distributieriem en Distributieketting</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sommige moderne auto's hebben geen distributieriem maar een distributieketting. 
                Een ketting slijt minder snel en hoeft meestal pas na 200.000+ kilometer vervangen te worden. 
                Twijfel je of je auto een riem of ketting heeft? Neem contact met ons op, we vertellen het je graag.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Distributieriem Vervangen in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Voorkom dure motorblokschade. Laat je distributieriem tijdig vervangen door onze specialisten. 
                  Vraag een vrijblijvende offerte aan!
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
