import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kennisbank - Tips & Advies over Auto\'s | Car Store Cuijk',
  description: 'Handige tips en advies over auto kopen, auto verkopen, APK keuring en meer. Lees onze kennisbank artikelen voor betrouwbaar advies van Car Store Cuijk.',
  keywords: 'auto kopen tips, auto verkopen tips, APK keuring, tweedehands auto advies, auto onderhoud tips, Car Store Cuijk kennisbank',
  openGraph: {
    title: 'Kennisbank - Tips & Advies over Auto\'s | Car Store Cuijk',
    description: 'Handige tips en advies over auto kopen, auto verkopen, APK keuring en meer. Betrouwbaar advies van Car Store Cuijk.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data for the knowledge base
const knowledgeBaseSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Kennisbank - Tips & Advies over Auto's",
  "description": "Handige tips en advies over auto kopen, auto verkopen, APK keuring en meer.",
  "url": "https://www.carstorecuijk.nl/kennisbank",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Waar moet je op letten als je een auto koopt?",
        "url": "https://www.carstorecuijk.nl/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Waar moet je op letten als je een auto verkoopt?",
        "url": "https://www.carstorecuijk.nl/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "APK Keuring: Wat wordt er gecontroleerd?",
        "url": "https://www.carstorecuijk.nl/kennisbank/apk-keuring-wat-wordt-er-gecontroleerd"
      }
    ]
  }
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readTime: number;
  category: string;
  icon: React.ReactNode;
}

const articles: Article[] = [
  {
    slug: 'waar-moet-je-op-letten-als-je-een-auto-koopt',
    title: 'Waar moet je op letten als je een auto koopt?',
    excerpt: 'Een auto kopen is een belangrijke beslissing. Ontdek wat je moet controleren bij de aankoop van een tweedehands auto, van onderhoudshistorie tot proefrit.',
    readTime: 6,
    category: 'Aankoopadvies',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    slug: 'waar-moet-je-op-letten-als-je-een-auto-verkoopt',
    title: 'Waar moet je op letten als je een auto verkoopt?',
    excerpt: 'Je auto verkopen doe je het best met de juiste voorbereiding. Lees onze tips over prijsbepaling, documenten en een veilige verkoop.',
    readTime: 5,
    category: 'Verkoopadvies',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    slug: 'apk-keuring-wat-wordt-er-gecontroleerd',
    title: 'APK Keuring: Wat wordt er gecontroleerd?',
    excerpt: 'De APK keuring is verplicht voor iedere auto. Lees wat er precies wordt gecontroleerd en hoe je je auto het beste kunt voorbereiden.',
    readTime: 7,
    category: 'Onderhoud',
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export default function KennisbankPage() {
  return (
    <>
      <Header />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeBaseSchema) }}
      />

      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#c8102e]/10 text-[#c8102e] text-sm font-medium rounded-full mb-6">
                Kennisbank
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tips & Advies over{' '}
                <span className="text-[#c8102e]">Auto's</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                Handige artikelen met betrouwbaar advies over auto kopen, verkopen, 
                onderhoud en meer. Alles wat je moet weten als autobezitter.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#c8102e]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c8102e]/5"
                >
                  <Link href={`/kennisbank/${article.slug}`} className="block p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c8102e]/10 text-[#c8102e] text-xs font-medium rounded-full">
                        {article.icon}
                        {article.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#c8102e] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-1.5 text-white/40 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Leestijd: {article.readTime} min</span>
                      </div>
                      
                      <span className="inline-flex items-center gap-1 text-[#c8102e] text-sm font-medium group-hover:gap-2 transition-all">
                        Lees meer
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-[#c8102e]/10 to-transparent border border-[#c8102e]/20 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Staat je vraag er niet tussen?
                </h2>
                <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                  Onze experts staan voor je klaar. Neem contact met ons op voor persoonlijk advies 
                  of kom langs in onze showroom in Cuijk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Neem contact op
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/occasions"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Bekijk occasions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
