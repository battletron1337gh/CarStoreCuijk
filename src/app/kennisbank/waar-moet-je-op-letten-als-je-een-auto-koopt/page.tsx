import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Car, FileText, Wrench, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Waar moet je op letten als je een auto koopt? | Car Store Cuijk',
  description: 'Een auto kopen? Ontdek waar je op moet letten bij de aankoop van een tweedehands auto. Tips over onderhoudshistorie, proefrit, prijs en documenten van Car Store Cuijk.',
  keywords: 'auto kopen tips, tweedehands auto kopen, waar op letten auto kopen, auto aankoop checklist, occasion kopen advies, auto kopen wat checken',
  openGraph: {
    title: 'Waar moet je op letten als je een auto koopt? | Car Store Cuijk',
    description: 'Ontdek waar je op moet letten bij de aankoop van een tweedehands auto. Tips over onderhoudshistorie, proefrit, prijs en documenten.',
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
  "headline": "Waar moet je op letten als je een auto koopt?",
  "description": "Een auto kopen is een belangrijke beslissing. Ontdek wat je moet controleren bij de aankoop van een tweedehands auto, van onderhoudshistorie tot proefrit.",
  "image": "https://www.carstorecuijk.nl/images/auto-kopen-tips.jpg",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt"
  }
};

const relatedArticles = [
  {
    slug: 'waar-moet-je-op-letten-als-je-een-auto-verkoopt',
    title: 'Waar moet je op letten als je een auto verkoopt?',
    excerpt: 'Je auto verkopen doe je het best met de juiste voorbereiding.',
    readTime: 5,
  },
  {
    slug: 'apk-keuring-wat-wordt-er-gecontroleerd',
    title: 'APK Keuring: Wat wordt er gecontroleerd?',
    excerpt: 'De APK keuring is verplicht voor iedere auto. Lees wat er wordt gecontroleerd.',
    readTime: 7,
  },
];

const checkList = [
  'Controleer de onderhoudshistorie en onderhoudsboekjes',
  'Vraag naar het aantal vorige eigenaren',
  'Check de kilometerstand voor consistentie',
  'Inspecteer het exterieur op roest en schade',
  'Test alle elektrische componenten',
  'Maak een uitgebreide proefrit',
  'Laat een onafhankelijke keuring doen',
  'Controleer de bandenspanning en profieldiepte',
];

export default function AutoKopenPage() {
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
                <Car className="w-4 h-4" />
                Aankoopadvies
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/40 text-sm">
                <Clock className="w-4 h-4" />
                Leestijd: 6 minuten
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Waar moet je op letten als je een auto koopt?
            </h1>

            <p className="text-xl text-white/60 leading-relaxed">
              Een auto kopen is een belangrijke investering. Of je nu je eerste auto koopt 
              of een upgrade zoekt, het is essentieel om goed voorbereid te zijn. In dit 
              artikel delen we onze expertise over wat je moet controleren bij de aankoop 
              van een tweedehands auto.
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
                  De Ultieme Checklist
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
                1. Onderhoudshistorie controleren
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                De onderhoudshistorie vertelt het verhaal van de auto. Een goed onderhouden auto 
                heeft altijd onderhoudsboekjes met stempels van erkende garages. Vraag naar:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Volledige onderhoudshistorie met facturen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Wanneer is de distributieriem of ketting vervangen?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Zijn er grote reparaties uitgevoerd?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Wanneer waren de laatste onderhoudsbeurten?</span>
                </li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                2. De kilometerstand verifiëren
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een te mooie kilometerstand kan een waarschuwingssignaal zijn. Controleer of 
                de stand consistent is met het bouwjaar en de onderhoudshistorie. Een auto van 
                5 jaar oud met slechts 20.000 km is mogelijk, maar vraag om uitleg. 
                Tachograaffraude komt helaas nog steeds voor.
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                3. Visuele inspectie
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Loop de auto rustig rond en let op:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Roest:</strong> Check vooral de dorpels, wielkasten en onderkant van de deuren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Lakwerk:</strong> Verschillen in glans of structuur kunnen schadeherstel aangeven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Banden:</strong> Controleer profieldiepte (minimaal 1,6 mm) en productiedatum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span><strong>Vloeistoffen:</strong> Check olie, koelvloeistof en ruitensproeiervloeistof</span>
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                4. De proefrit
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Een proefrit is essentieel. Rijd verschillende wegtypes en let op:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Start het motor soepel en zonder vreemde geluiden?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Schakelt de versnellingsbak soepel (bij handgeschakelde auto's)?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Trekt de auto rechtuit of trekt deze naar één kant?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Werken alle remmen goed en gelijkmatig?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Zijn er vreemde trillingen of geluiden?</span>
                </li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                5. Documenten checken
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Zorg dat alle documenten compleet en geldig zijn:
              </p>
              <ul className="space-y-2 text-white/70 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Kentekenbewijs (deel IA en deel IB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Tenaamstellingscode voor overschrijving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Geldige APK-keuring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8102e] mt-1">•</span>
                  <span>Onderhoudsboekjes en facturen</span>
                </li>
              </ul>

              {/* Section 6 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                6. Laat een keuring doen
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Bij twijfel is een onafhankelijke keuring het geld waard. Een professionele 
                keuring brengt verborgen gebreken aan het licht en geeft je een sterke 
                onderhandelingspositie. Bij Car Store Cuijk worden al onze occasions grondig 
                gecontroleerd voordat ze te koop worden aangeboden.
              </p>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#c8102e]/5 border border-[#c8102e]/30 rounded-2xl p-8 my-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#c8102e]/20 rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-[#c8102e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Persoonlijk advies nodig?
                    </h3>
                    <p className="text-white/70 mb-4">
                      Onze experts helpen je graag bij het vinden van de perfecte auto. 
                      Kom langs in Cuijk of neem contact met ons op.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300"
                      >
                        Neem contact op
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
