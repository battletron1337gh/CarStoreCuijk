import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Tag, FileText, Camera, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Waar moet je op letten als je een auto verkoopt? | Car Store Cuijk',
  description: 'Je auto verkopen? Ontdek waar je op moet letten voor een veilige en succesvolle verkoop. Tips over prijsbepaling, documenten, advertentie en overdracht van Car Store Cuijk.',
  keywords: 'auto verkopen tips, auto verkopen particulier, waar op letten auto verkopen, auto verkoop checklist, auto verkopen documenten, auto verkopen prijs bepalen',
  openGraph: {
    title: 'Waar moet je op letten als je een auto verkoopt? | Car Store Cuijk',
    description: 'Ontdek waar je op moet letten voor een veilige en succesvolle autoverkoop. Tips over prijsbepaling, documenten, advertentie en overdracht.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
    publishedTime: '2024-01-15T08:00:00+01:00',
    modifiedTime: '2024-01-15T08:00:00+01:00',
    authors: ['Car Store Cuijk'],
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Waar moet je op letten als je een auto verkoopt?",
  "description": "Je auto verkopen doe je het best met de juiste voorbereiding. Lees onze tips over prijsbepaling, documenten en een veilige verkoop.",
  "image": "https://www.carstorecuijk.nl/images/auto-verkopen-tips.jpg",
  "author": {
    "@type": "Organization",
    "name": "Car Store Cuijk",
    "url": "https://www.carstorecuijk.nl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Car Store Cuijk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.carstorecuijk.nl/logo.png"
    }
  },
  "datePublished": "2024-01-15T08:00:00+01:00",
  "dateModified": "2024-01-15T08:00:00+01:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.carstorecuijk.nl/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt"
  }
};

const relatedArticles = [
  {
    slug: 'waar-moet-je-op-letten-als-je-een-auto-koopt',
    title: 'Waar moet je op letten als je een auto koopt?',
    excerpt: 'Een auto kopen is een belangrijke beslissing. Ontdek wat je moet controleren.',
    readTime: 6,
  },
  {
    slug: 'apk-keuring-wat-wordt-er-gecontroleerd',
    title: 'APK Keuring: Wat wordt er gecontroleerd?',
    excerpt: 'De APK keuring is verplicht voor iedere auto. Lees wat er wordt gecontroleerd.',
    readTime: 7,
  },
];

const checkList = [
  'Bepaal de juiste vraagprijs op basis van marktonderzoek',
  'Verzamel alle documenten: kentekenbewijs, onderhoudshistorie',
  'Zorg voor een geldige APK-keuring',
  'Maak professionele foto\'s van de auto',
  'Schrijf een eerlijke en complete advertentie',
  'Bereid de auto goed voor: schoonmaken en kleine reparaties',
  'Plan veilige proefritten met potentiële kopers',
  'Regel de overschrijving correct bij de RDW',
];

export default function AutoVerkopenPage() {
  return (
    <>
      <Header />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Article Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/kennisbank" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8102e] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar kennisbank
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c8102e]/10 text-[#c8102e] text-sm font-medium rounded-full">
                <Tag className="w-4 h-4" />
                Verkoopadvies
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/40 text-sm">
                <Clock className="w-4 h-4" />
                Leestijd: 5 minuten
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Waar moet je op letten als je een auto verkoopt?
            </h1>

            <p className="text-xl text-white/60 leading-relaxed">
              Je auto verkopen is meer dan alleen een advertentie plaatsen. Met de juiste 
              voorbereiding haal je meer uit de verkoop en voorkom je problemen achteraf. 
              In dit artikel delen we onze tips voor een succesvolle en veilige autoverkoop.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              
              {/* Introduction */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#c8102e]" />
                  De Verkoop Checklist
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {checkList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-[#c8102e]/20 text-[#c8102e] text-sm font-bold rounded-full shrink-0">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 1 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                1. Bepaal de juiste vraagprijs
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een realistische vraagprijs is essentieel voor een snelle verkoop. Doe 
                onderzoek naar wat vergelijkbare auto's opvragen op platformen als 
                Marktplaats, Autoscout24 en Autotrader. Let op:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Bouwjaar, kilometerstand en onderhoudshistorie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Extra opties en accessoires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Staat van de auto: nieuwe banden, recente onderhoudsbeurt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Houd ruimte voor onderhandeling (5-10%)</span>
                </li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                2. Verzamel alle documenten
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een complete documentatie geeft kopers vertrouwen en versnelt de verkoop. 
                Zorg dat je het volgende paraat hebt:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Kentekenbewijs:</strong> Deel IA en IB</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Tenaamstellingscode:</strong> Nodig voor overschrijving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Onderhoudshistorie:</strong> Alle facturen en boekjes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>APK-keuringsrapporten:</strong> Laatste keuringen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Keuringsrapporten:</strong> NAP, BOVAG of andere</span>
                </li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                3. Maak professionele foto's
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Goede foto's maken het verschil tussen wel of geen reacties. Tips voor 
                de perfecte autoshoot:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Fotografeer bij daglicht in open schaduw (geen harde schaduwen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Maak foto's van alle hoeken: voor, achter, zijkanten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Fotografeer het interieur: dashboard, stoelen, kofferbak</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Toon ook eventuele beschadigingen eerlijk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Zorg voor een neutrale achtergrond</span>
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                4. Schrijf een eerlijke advertentie
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een goede advertentie bevat alle relevante informatie en is eerlijk over 
                de staat van de auto. Vermeld altijd:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Merk, model, bouwjaar en kilometerstand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Motorinhoud, vermogen en brandstof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Transmissie: handgeschakeld of automaat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>APK geldig tot en onderhoudshistorie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Bekende gebreken en recente reparaties</span>
                </li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                5. Veilige proefritten organiseren
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een proefrit is een belangrijk onderdeel van de verkoop, maar denk aan 
                je veiligheid:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Plan proefritten overdag op een veilige locatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Vraag om een geldig rijbewijs en noteer de gegevens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Ga altijd mee tijdens de proefrit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Controleer of de verzekering dekking biedt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Bij twijfel: vraag een waarborgsom voor de proefrit</span>
                </li>
              </ul>

              {/* Section 6 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                6. De overdracht regelen
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Een correcte overdracht beschermt zowel koper als verkoper. Zorg voor:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Een schriftelijk koopcontract met alle afspraken</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Overschrijving via de RDW (online of bij het postkantoor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Directe betaling via bankoverschrijving (geen contant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Een vrijwaring voor eventuele boetes na de verkoopdatum</span>
                </li>
              </ul>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#c8102e]/5 border border-[#c8102e]/30 rounded-2xl p-8 my-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#c8102e]/20 rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-[#c8102e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Wil je je auto snel en veilig verkopen?
                    </h3>
                    <p className="text-white/70 mb-4">
                      Bij Car Store Cuijk kopen we ook auto's in. Je krijgt een eerlijke 
                      prijs en directe betaling, zonder gedoe met proefritten of 
                      onbetrouwbare kopers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300"
                      >
                        Vraag een taxatie aan
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/occasions"
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300"
                      >
                        Bekijk onze occasions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </article>

            {/* Related Articles */}
            <div className="mt-16 pt-16 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#c8102e]" />
                Gerelateerde artikelen
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/kennisbank/${article.slug}`}
                    className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#c8102e]/30 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8102e] transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-white/60 text-sm mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/40 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Leestijd: {article.readTime} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
