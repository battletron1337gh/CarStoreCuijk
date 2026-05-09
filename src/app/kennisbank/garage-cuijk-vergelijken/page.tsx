import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Phone, Star, MapPin, Wrench, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garage Cuijk Vergelijken - Waarom Car Store? | Car Store Cuijk',
  description: 'Op zoek naar een betrouwbare garage in Cuijk? Ontdek waarom Car Store Cuijk de beste keuze is. 168+ reviews, 5 sterren, eerlijke prijzen en persoonlijke service.',
  keywords: 'garage cuijk, autobedrijf cuijk, garage vergelijken cuijk, auto onderhoud cuijk, betrouwbare garage cuijk, car store cuijk ervaringen',
  openGraph: {
    title: 'Garage Cuijk Vergelijken - Waarom Car Store? | Car Store Cuijk',
    description: 'Op zoek naar een betrouwbare garage in Cuijk? Ontdek waarom Car Store Cuijk de beste keuze is. 168+ reviews, 5 sterren.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Garage Cuijk Vergelijken - Waarom Car Store?",
  "description": "Op zoek naar een betrouwbare garage in Cuijk? Ontdek waarom Car Store Cuijk de beste keuze is.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/garage-cuijk-vergelijken"
  }
};

export default function GarageVergelijkenPage() {
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
              <span>Garage Vergelijken</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Garage Cuijk Vergelijken - <span className="text-[#c8102e]">Waarom Car Store?</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 minuten leestijd</span>
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
                Het kiezen van de juiste garage in Cuijk is belangrijker dan je misschien denkt. 
                Je auto is een waardevol bezit en verdient vakmanschap, eerlijk advies en transparante prijzen. 
                Maar waar moet je op letten bij het vergelijken van garages? En waarom kiezen steeds meer 
                automobilisten in Cuijk en omgeving voor Car Store Cuijk? In dit artikel nemen we je mee 
                in wat ons uniek maakt.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom de Keuze van een Garage Zo Belangrijk Is</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een auto is voor de meeste mensen de op één na grootste aanschaf na een huis. 
                Logisch dat je deze met zorg wilt onderhouden. Een goede garage doet meer dan alleen 
                olie verversen of banden wisselen. Het is een partner in het veilig en betrouwbaar 
                houden van je voertuig. De keuze voor een garage beïnvloedt niet alleen de prestaties 
                van je auto, maar ook je portemonnee en je gemoedsrust.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Helaas zijn er nog steeds garages die werken met verborgen kosten, onnodige reparaties 
                adviseren of simpelweg niet de expertise hebben die ze pretenderen. Daarom is het 
                vergelijken van garages in Cuijk de moeite waard voordat je een keuze maakt.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waar Moet Je Op Letten Bij Het Vergelijken van Garages?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij het vergelijken van garages in Cuijk zijn er verschillende factoren waar je op moet letten. 
                Deze criteria helpen je om een weloverwogen keuze te maken:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Reviews en reputatie</strong>
                      <p className="text-white/60 text-sm">Wat zeggen andere klanten? Een garage met veel positieve reviews geeft vertrouwen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Transparante prijzen</strong>
                      <p className="text-white/60 text-sm">Een goede garage communiceert duidelijk over kosten, zonder verborgen verrassingen achteraf.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Vakmanschap en expertise</strong>
                      <p className="text-white/60 text-sm">Zijn de monteurs goed opgeleid? Werken ze met moderne apparatuur?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Persoonlijke service</strong>
                      <p className="text-white/60 text-sm">Word je als klant gewaardeerd? Is de communicatie helder en vriendelijk?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Garantie op werkzaamheden</strong>
                      <p className="text-white/60 text-sm">Geeft de garage garantie op uitgevoerde reparaties? Dit zegt iets over hun vertrouwen in eigen werk.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Car Store Cuijk: Wat Ons Onderscheidt</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is niet zomaar een garage. We hebben een missie: het leveren van 
                eerlijke, transparante en hoogwaardige service aan elke klant. Dit zijn de punten 
                waarop we ons onderscheiden van andere garages in Cuijk:
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Uitstekende Reviews: 168+ Klanten Beoordelen Ons Met 5 Sterren</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Niets zegt meer over een garage dan de ervaringen van eerdere klanten. 
                Car Store Cuijk is trots op <strong>meer dan 168 positieve reviews</strong> waarin klanten 
                ons gemiddeld beoordelen met 5 sterren. Onze klanten waarderen vooral onze eerlijkheid, 
                snelle service en de persoonlijke aandacht die ze krijgen.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                We nodigen je uit om onze reviews te lezen op Google en Facebook. 
                Deze eerlijke feedback van echte klanten geeft het beste beeld van wat je van ons kunt verwachten.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Eerlijke Prijzen Zonder Verborgen Kosten</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk geloven we in transparantie. Voordat we aan een reparatie beginnen, 
                krijg je altijd een duidelijke prijsopgave. Geen verrassingen achteraf, geen onverwachte 
                extra kosten. We leggen uit wat er moet gebeuren en waarom, zodat je zelf kunt beslissen.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Onze uurtarieven zijn scherp en concurrerend. We rekenen niet te veel en adviseren 
                alleen reparaties die echt nodig zijn. Is iets niet urgent? Dan zeggen we dat eerlijk. 
                Zo bouwen we aan een langdurige relatie met onze klanten, gebaseerd op vertrouwen.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Vakmanschap en Moderne Apparatuur</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Onze monteurs zijn goed opgeleid en werken met de modernste apparatuur. 
                Of het nu gaat om een simpele onderhoudsbeurt, een complexe diagnose of een grote reparatie: 
                we hebben de kennis en tools om het goed te doen. We blijven continu bijscholen om op de hoogte 
                te blijven van de nieuwste ontwikkelingen in de autowereld.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Persoonlijke Service en Korte Lijnen</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk ben je geen nummer. We nemen de tijd om naar je te luisteren, 
                je vragen te beantwoorden en je te adviseren. Je krijgt te maken met dezelfde mensen, 
                die je auto en je situatie kennen. Deze persoonlijke aanpak zorgt voor een prettige 
                ervaring en betere service.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Werken Zonder Afspraak</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                We begrijpen dat je druk bent en niet weken van tevoren kunt plannen. 
                Daarom werken we zonder afspraak voor de meeste werkzaamheden. 
                Kom langs wanneer het jou uitkomt, en we helpen je direct. Voor grotere reparaties 
                plannen we uiteraard wel een afspraak, maar ook dan proberen we flexibel te zijn.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Garantie op Al Onze Werkzaamheden</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                We staan achter ons werk. Daarom geven we garantie op alle door ons uitgevoerde reparaties. 
                Mocht er onverhoopt iets mis zijn, dan lossen we dat gratis voor je op. 
                Dit geeft je de zekerheid dat je auto in goede handen is.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onze Diensten: Alles Onder Één Dak</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is een allround autobedrijf. Dit betekent dat je voor vrijwel alles 
                bij ons terecht kunt. Onze diensten omvatten onder andere:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Wrench className="w-5 h-5 text-[#c8102e]" />
                    <h4 className="text-white font-semibold">Periodiek Onderhoud</h4>
                  </div>
                  <p className="text-white/60 text-sm">Kleine en grote onderhoudsbeurtes volgens fabrieksvoorschrift.</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-[#c8102e]" />
                    <h4 className="text-white font-semibold">APK Keuring</h4>
                  </div>
                  <p className="text-white/60 text-sm">Snelle APK keuring zonder afspraak, direct het keuringsbewijs mee.</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-[#c8102e]" />
                    <h4 className="text-white font-semibold">Airco Service</h4>
                  </div>
                  <p className="text-white/60 text-sm">Airco vullen, reparatie en onderhoud voor optimale werking.</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#c8102e]" />
                    <h4 className="text-white font-semibold">Bandenwissel</h4>
                  </div>
                  <p className="text-white/60 text-sm">Seizoenswissel, nieuwe banden monteren en balanceren.</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mt-6">
                Daarnaast doen we aan <Link href="/occasions" className="text-[#c8102e] hover:underline">verkoop van occasions</Link>, 
                aankoopkeuringen, diagnose van storingen en alle voorkomende reparaties. 
                Kortom: voor alles rondom je auto kun je bij ons terecht.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Car Store Cuijk voor de Hele Regio</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Hoewel we gevestigd zijn in Cuijk, bedienen we een veel groter gebied. 
                Klanten komen uit omliggende plaatsen zoals <strong>Boxmeer</strong>, <strong>Grave</strong>, 
                <strong> Gennep</strong>, <strong>Wijchen</strong>, <strong>Beuningen</strong> en zelfs <strong>Nijmegen</strong>. 
                Onze reputatie is door de regio heen gegroeid, en we zijn trots op het vertrouwen dat klanten ons geven.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Onze Belofte aan Jou</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Wanneer je kiest voor Car Store Cuijk, kun je rekenen op het volgende:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Eerlijk advies:</strong> We vertellen je wat je moet weten, niet wat je wilt horen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Scherpe prijzen:</strong> Transparante kosten zonder verborgen toeslagen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Snelle service:</strong> We werken efficiënt zonder kwaliteit uit het oog te verliezen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Persoonlijke aandacht:</strong> Je krijgt de service die je verdient.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Garantie:</strong> We staan achter ons werk met een duidelijke garantieregeling.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Kom Eens Langs en Ervaar Het Zelf</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De beste manier om te ervaren waarom Car Store Cuijk de juiste keuze is, 
                is om een keer langs te komen. Of je nu een onderhoudsbeurt nodig hebt, 
                een vreemd geluid hoort of gewoon eens wilt kennismaken: we verwelkomen je graag. 
                Een kop koffie staat altijd klaar.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Vergelijk gerust verschillende garages in Cuijk. We zijn ervan overtuigd dat 
                onze combinatie van vakmanschap, eerlijkheid en persoonlijke service je zal overtuigen. 
                Car Store Cuijk: meer dan een garage, je partner in mobiliteit.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Kies voor Car Store Cuijk</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Ervaar zelf waarom meer dan 168 klanten ons beoordelen met 5 sterren. 
                  Kom langs of neem contact op voor een vrijblijvende prijsopgave.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Bel: +31 6 87 11 87 68
                  </Link>
                  <Link href="/onderhoud" className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8102e] transition-colors">
                    Bekijk onze diensten
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
