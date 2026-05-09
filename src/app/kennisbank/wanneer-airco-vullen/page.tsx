import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, Thermometer, Wind, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wanneer Airco Vullen? | 5 Signalen & Tips | Car Store Cuijk',
  description: 'Hoe weet u wanneer uw airco moet worden gevuld? Lees de 5 belangrijkste signalen en tips voor optimaal airco onderhoud. Expert advies van Car Store Cuijk.',
  keywords: 'wanneer airco vullen, airco bijvullen signalen, airco onderhoud tips, airco werkt niet, airco vullen indicaties',
  openGraph: {
    title: 'Wanneer Airco Vullen? | 5 Signalen & Tips',
    description: 'Hoe weet u wanneer uw airco moet worden gevuld? Lees de 5 belangrijkste signalen.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wanneer Airco Vullen? 5 Signalen dat het Tijd is",
  "description": "Hoe weet u wanneer uw airco moet worden gevuld? Lees de 5 belangrijkste signalen en tips voor optimaal airco onderhoud.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/wanneer-airco-vullen"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoe vaak moet ik mijn airco vullen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wij adviseren om uw airco elke 2 jaar te laten bijvullen voor optimale werking. Dit voorkomt storingen en houdt het systeem in topconditie."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost airco vullen bij Car Store Cuijk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Airco vullen bij Car Store Cuijk kost vanaf €89. Dit is inclusief controle van het systeem en vullen met R134a of R1234yf koelmiddel."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik zelf mijn airco vullen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wij raden af om zelf uw airco te vullen. Een professionele vulling zorgt voor de juiste hoeveelheid koelmiddel en voorkomt schade aan het systeem."
      }
    }
  ]
};

export default function WanneerAircoVullenPage() {
  const signalen = [
    {
      icon: Thermometer,
      title: 'De airco blaast geen koude lucht',
      desc: 'Dit is het meest voorkomende signaal. Als de lucht uit de ventilatie niet koud is, is het koelmiddel waarschijnlijk op.',
    },
    {
      icon: Wind,
      title: 'Muffe geur uit de ventilatie',
      desc: 'Een vieze lucht kan duiden op bacteriegroei in het systeem, vaak door gebrek aan koelmiddel en vochtophoping.',
    },
    {
      icon: AlertCircle,
      title: 'Ruiten beslaan sneller',
      desc: 'Een goed werkende airco ontvochtigt de lucht. Bij gebrek aan koelmiddel werkt dit minder goed.',
    },
    {
      icon: Wind,
      title: 'Zwakke luchtstroom',
      desc: 'Als de luchtstroom zwakker lijkt dan normaal, kan dit komen door een laag koelmiddelniveau.',
    },
    {
      icon: AlertCircle,
      title: 'Vreemde geluiden',
      desc: 'Klikkende of ritselende geluiden uit de airco kunnen wijzen op een probleem met het systeem.',
    },
  ];

  const tips = [
    'Laat de airco jaarlijks controleren',
    'Vul de airco elke 2 jaar bij',
    'Gebruik de airco ook in de winter',
    'Laat lekkages direct repareren',
    'Vervang het interieurfilter regelmatig',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/kennisbank"
              className="inline-flex items-center gap-2 text-[#c8102e] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug naar kennisbank
            </Link>
            
            <span className="inline-block px-4 py-1.5 bg-[#c8102e]/10 text-[#c8102e] text-sm font-medium rounded-full mb-6">
              Onderhoud
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Wanneer Airco <span className="text-[#c8102e]">Vullen</span>?
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm mb-8">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Leestijd: 5 min</span>
              </div>
              <span>•</span>
              <span>Car Store Cuijk</span>
            </div>
            
            <p className="text-xl text-white/60 leading-relaxed">
              Een goed werkende airco is essentieel voor comfort in uw auto. Maar hoe weet u 
              wanneer het tijd is om de airco te laten vullen? In dit artikel bespreken wij 
              de 5 belangrijkste signalen en geven wij tips voor optimaal airco onderhoud.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* Intro */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Waarom is airco onderhoud belangrijk?
                </h2>
                <p className="text-white/60">
                  De airco in uw auto werkt met een koelmiddel (R134a of R1234yf) dat door het 
                  systeem circuleert. Door natuurlijk verlies en lekkages kan het koelmiddel 
                  langzaam wegraken. Een te laag niveau zorgt voor minder koelvermogen en kan 
                  zelfs schade aan het systeem veroorzaken. Daarom is regelmatig onderhoud belangrijk.
                </p>
              </div>

              {/* 5 Signalen */}
              <h2 className="text-3xl font-bold text-white mb-8">
                5 Signalen dat uw airco moet worden gevuld
              </h2>
              
              <div className="space-y-6 mb-12">
                {signalen.map((signaal, index) => (
                  <div 
                    key={index}
                    className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#c8102e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <signaal.icon className="w-6 h-6 text-[#c8102e]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {index + 1}. {signaal.title}
                        </h3>
                        <p className="text-white/60">{signaal.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tips */}
              <h2 className="text-3xl font-bold text-white mb-8">
                Tips voor optimaal airco onderhoud
              </h2>
              
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                      <span className="text-white/70">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hoe vaak */}
              <h2 className="text-3xl font-bold text-white mb-6">
                Hoe vaak moet ik mijn airco laten vullen?
              </h2>
              
              <p className="text-white/60 mb-6">
                Wij adviseren om uw airco <strong className="text-white">elke 2 jaar</strong> te 
                laten bijvullen. Dit voorkomt storingen en houdt het systeem in topconditie. 
                Daarnaast is het verstandig om de airco jaarlijks te laten controleren, zodat 
                eventuele problemen vroegtijdig worden ontdekt.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/20 rounded-2xl p-6 mb-12">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-[#c8102e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Onderhoudsschema Airco
                    </h3>
                    <ul className="space-y-2 text-white/60">
                      <li>• <strong className="text-white">Jaarlijks:</strong> Controle aircosysteem</li>
                      <li>• <strong className="text-white">Elke 2 jaar:</strong> Airco vullen/bijvullen</li>
                      <li>• <strong className="text-white">Elke 3 jaar:</strong> Interieurfilter vervangen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* R134a vs R1234yf */}
              <h2 className="text-3xl font-bold text-white mb-6">
                R134a of R1234yf: welk koelmiddel heeft mijn auto?
              </h2>
              
              <p className="text-white/60 mb-6">
                Er zijn twee soorten koelmiddelen die in auto's worden gebruikt:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">R134a</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Gebruikt in auto's tot ca. 2017</li>
                    <li>• Oudere aircosystemen</li>
                    <li>• Lagere druk in systeem</li>
                  </ul>
                </div>
                
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">R1234yf</h3>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>• Gebruikt in nieuwere auto's (vanaf ca. 2017)</li>
                    <li>• Milieuvriendelijker</li>
                    <li>• Hogere druk in systeem</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/60 mb-12">
                Bij Car Store Cuijk kunnen wij beide koelmiddelen vullen. Wij bepalen aan de hand 
                van uw kenteken welk type koelmiddel uw auto nodig heeft.
              </p>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-white mb-8">
                Veelgestelde vragen
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Hoe vaak moet ik mijn airco vullen?
                  </h3>
                  <p className="text-white/60">
                    Wij adviseren om uw airco elke 2 jaar te laten bijvullen voor optimale werking. 
                    Dit voorkomt storingen en houdt het systeem in topconditie.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Wat kost airco vullen bij Car Store Cuijk?
                  </h3>
                  <p className="text-white/60">
                    Airco vullen bij Car Store Cuijk kost vanaf €89. Dit is inclusief controle van 
                    het systeem en vullen met R134a of R1234yf koelmiddel.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Kan ik zelf mijn airco vullen?
                  </h3>
                  <p className="text-white/60">
                    Wij raden af om zelf uw airco te vullen. Een professionele vulling zorgt voor 
                    de juiste hoeveelheid koelmiddel en voorkomt schade aan het systeem. Daarnaast 
                    kunnen wij eventuele lekkages opsporen.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Waarom moet ik de airco ook in de winter gebruiken?
                  </h3>
                  <p className="text-white/60">
                    Het regelmatig gebruiken van de airco voorkomt dat de afdichtingen uitdrogen 
                    en houdt het systeem soepel. Daarnaast helpt de airco bij het ontwasemen van 
                    de ruiten in de winter.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#c8102e]/10 to-transparent border border-[#c8102e]/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Airco laten vullen in Cuijk?
                </h2>
                <p className="text-white/60 mb-6">
                  Bij Car Store Cuijk vullen wij uw airco professioneel bij. Inclusief systeemcontrole 
                  en lekdetectie. Vanaf €89.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/airco-vullen"
                    className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    Meer over airco vullen
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    Contact opnemen
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
