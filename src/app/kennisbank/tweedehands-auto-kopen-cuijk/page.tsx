import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Phone, Car, FileText, Shield, AlertTriangle, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tweedehands Auto Kopen Cuijk - Tips & Checklist | Car Store Cuijk',
  description: 'Een tweedehands auto kopen in Cuijk? Ontdek onze tips, checklist en waar je op moet letten. Car Store Cuijk helpt je aan een betrouwbare occasion.',
  keywords: 'tweedehands auto cuijk, occasions cuijk, auto kopen tips, tweedehands auto checklist, occasion kopen cuijk, betrouwbare occasions',
  openGraph: {
    title: 'Tweedehands Auto Kopen Cuijk - Tips & Checklist | Car Store Cuijk',
    description: 'Een tweedehands auto kopen in Cuijk? Ontdek onze tips, checklist en waar je op moet letten.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tweedehands Auto Kopen Cuijk - Tips & Checklist",
  "description": "Een tweedehands auto kopen in Cuijk? Ontdek onze tips, checklist en waar je op moet letten.",
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
  "datePublished": "2026-05-10",
  "dateModified": "2026-05-10",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.carstorecuijk.nl/kennisbank/tweedehands-auto-kopen-cuijk"
  }
};

export default function TweedehandsAutoKopenPage() {
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
              <Car className="w-4 h-4" />
              <span>Occasions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Tweedehands Auto Kopen Cuijk - <span className="text-[#c8102e]">Tips & Checklist</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>11 minuten leestijd</span>
              </div>
              <span>•</span>
              <span>10 mei 2026</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Een tweedehands auto kopen is een spannende stap. Of je nu je eerste auto koopt of een upgrade zoekt, 
                het is belangrijk om goed voorbereid te zijn. Waar moet je op letten? Welke documenten heb je nodig? 
                En hoe voorkom je dat je een miskoop doet? In dit uitgebreide artikel delen we onze beste tips en 
                een handige checklist voor het kopen van een tweedehands auto in Cuijk en omgeving.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom een Tweedehands Auto Kopen?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De aanschaf van een tweedehands auto heeft veel voordelen ten opzichte van een nieuwe auto. 
                Het meest voor de hand liggende voordeel is de prijs: een occasion is aanzienlijk goedkoper dan een nieuwe auto. 
                Maar er zijn meer redenen om voor een tweedehands auto te kiezen:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Lagere aanschafprijs:</strong> Je krijgt meer auto voor je geld</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Minder waardeverlies:</strong> Een nieuwe auto verliest in het eerste jaar de meeste waarde</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Lagere verzekeringspremie:</strong> De WA-premie is lager voor een oudere auto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Groter aanbod:</strong> Je kunt kiezen uit allerlei merken, modellen en uitvoeringen</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Voorbereiding: Bepaal Je Wensen en Budget</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Voordat je op zoek gaat naar een tweedehands auto, is het belangrijk om goed na te denken over je wensen en mogelijkheden. 
                Dit voorkomt dat je overhaast een beslissing neemt of over je budget heen gaat.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Stel jezelf de volgende vragen:</h3>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Wat is mijn budget? (inclusief onderhoud, verzekering en wegenbelasting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Welk merk of model spreekt me aan?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Hoeveel kilometers rij ik per jaar?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Heb ik behoefte aan veel bagageruimte?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Rij ik voornamelijk korte afstanden of lange ritten?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Wat voor brandstof wil ik? (benzine, diesel, hybride, elektrisch)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waar Koop Je een Tweedehands Auto?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Er zijn verschillende plekken waar je een tweedehands auto kunt kopen. Elke optie heeft zijn voor- en nadelen:
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Een Erkende Garage (Aanbevolen)</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Het kopen van een occasion bij een erkende garage zoals Car Store Cuijk biedt de meeste zekerheid. 
                Je profiteert van garantie, een aankoopkeuring en professioneel advies. Bovendien worden de auto's 
                bij een garage vaak grondig nagekeken voordat ze te koop worden aangeboden.
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <p className="text-white font-semibold mb-3">Voordelen van een garage:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Wettelijke garantie (minimaal 6 maanden)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Auto is gecontroleerd en gereed voor verkoop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Mogelijkheid tot inruil van je oude auto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Service na aankoop</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Particuliere Verkoop</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij een particuliere verkoper kun je soms een goedkope deal sluiten. 
                Het nadeel is dat je geen garantie hebt (tenzij anders afgesproken) en de auto vaak niet is nagekeken. 
                Je moet zelf goed opletten en eventueel een aankoopkeuring laten uitvoeren.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Online Autoverkopers</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Er zijn veel online platforms waar occasions worden aangeboden. 
                Let erop dat je de auto altijd eerst bekijkt en een proefrit maakt voordat je koopt. 
                Wees voorzichtig met aanbiedingen die te mooi lijken om waar te zijn.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">De Ultieme Checklist voor het Kopen van een Tweedehands Auto</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Gebruik deze checklist wanneer je een tweedehands auto gaat bekijken. 
                Het helpt je om systematisch alle belangrijke punten te controleren.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Documenten Checklist</h3>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Kentekenbewijs (deel IA en IB)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Ten minste geldige APK</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Onderhoudshistorie (onderhoudsboekje)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Identiteitsbewijs verkoper</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Koopcontract</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Visuele Inspectie Checklist</h3>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer de carrosserie op roest, deuken en krassen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Kijk of de lak overal hetzelfde is (verschil kan wijzen op schadeherstel)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer de banden op profieldiepte en slijtagepatroon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Inspecteer de ruiten op sterretjes en barsten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer of alle lampen werken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Bekijk de interieurbekleding op slijtage en vlekken</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Technische Checklist</h3>
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer alle vloeistoffen (olie, koelvloeistof, remvloeistof)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Start de motor en luister naar vreemde geluiden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer of er geen waarschuwingslampjes branden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Test de airco en verwarming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer of alle elektrische ramen en spiegels werken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Test de remmen tijdens de proefrit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Let op trillingen of trekken tijdens het rijden</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Belangrijke Waarschuwingssignalen</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sommige signalen kunnen wijzen op ernstige problemen. Wees extra alert bij:
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Een veel te lage prijs (kan wijzen op schuld of schade)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Onwil om een proefrit te maken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Geen onderhoudshistorie beschikbaar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Sporen van recente reparaties zonder verklaring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Rook uit de uitlaat (kan wijzen op motorproblemen)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">De Proefrit: Wat Moet Je Testen?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een proefrit is essentieel bij het kopen van een tweedehands auto. 
                Maak een rit van minimaal 15-20 minuten en test verschillende situaties:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Acceleratie: trekt de auto soepel op?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Remmen: remt de auto rechtuit en zonder vreemde geluiden?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Versnellingsbak: schakelt soepel (handgeschakeld) of schakelt zonder schokken (automaat)?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Stuur: trekt de auto niet naar één kant? Is er geen speling?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Geluiden: geen knarsende, piepende of ratelende geluiden?</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Aankoopkeuring: De Extra Zekerheid</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Wil je absolute zekerheid over de staat van de auto? Laat dan een aankoopkeuring uitvoeren. 
                Bij Car Store Cuijk kun je een professionele aankoopkeuring laten doen voordat je definitief koopt. 
                We controleren de auto op meer dan 100 punten en geven een uitgebreid rapport.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Een aankoopkeuring kost tussen de €75 en €150, maar kan je honderden of zelfs duizenden euros besparen 
                door verborgen gebreken te ontdekken. Het geeft je ook een sterke onderhandelingspositie.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tweedehands Auto Kopen in Cuijk bij Car Store</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk vind je een uitgebreid aanbod betrouwbare occasions. 
                Alle auto's worden grondig gecontroleerd voordat ze te koop worden aangeboden. 
                Dit is wat je van ons kunt verwachten:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Garantie op elke occasion</strong>
                      <p className="text-white/60 text-sm">Minimaal 6 maanden garantie op alle auto's</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Grondige controle</strong>
                      <p className="text-white/60 text-sm">Elke auto wordt technisch nagekeken</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">NAP check</strong>
                      <p className="text-white/60 text-sm">We verifiëren de kilometerstand</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Inruil mogelijk</strong>
                      <p className="text-white/60 text-sm">Ruil je oude auto gemakkelijk in</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Service na aankoop</strong>
                      <p className="text-white/60 text-sm">Ook na de koop staan we voor je klaar</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusie: Slim een Tweedehands Auto Kopen</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Het kopen van een tweedehands auto vereist wat voorbereiding en aandacht, 
                maar met de juiste aanpak vind je een betrouwbare auto die jarenlang plezier geeft. 
                Neem de tijd, gebruik onze checklist en laat je niet haasten.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Wil je zeker zijn van een goede aankoop? Kom dan langs bij Car Store Cuijk. 
                We adviseren je graag en helpen je aan een occasion die bij je past. 
                Bekijk ons <Link href="/occasions" className="text-[#c8102e] hover:underline">actuele aanbod</Link> of neem contact met ons op.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Op Zoek naar een Betrouwbare Occasion?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Bekijk het aanbod van Car Store Cuijk. Alle auto's gecontroleerd, 
                  met garantie en NAP-verklaring. Kom langs voor een proefrit!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/occasions" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Car className="w-5 h-5" />
                    Bekijk Occasions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
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
