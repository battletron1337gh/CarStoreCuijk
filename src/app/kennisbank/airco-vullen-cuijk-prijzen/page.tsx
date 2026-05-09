import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Thermometer, Phone, Euro, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airco Vullen Cuijk - Prijzen, Wanneer & Waarom? | Car Store Cuijk',
  description: 'Airco vullen in Cuijk vanaf €89. Ontdek prijzen, wanneer je airco bijgevuld moet worden en waarom onderhoud essentieel is. Directe service zonder afspraak.',
  keywords: 'airco vullen cuijk, airco onderhoud cuijk, airco prijzen cuijk, airco bijvullen kosten, auto airco service cuijk, airco vullen wanneer',
  openGraph: {
    title: 'Airco Vullen Cuijk - Prijzen, Wanneer & Waarom? | Car Store Cuijk',
    description: 'Airco vullen in Cuijk vanaf €89. Ontdek prijzen, wanneer je airco bijgevuld moet worden en waarom onderhoud essentieel is.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Airco Vullen Cuijk - Prijzen, Wanneer & Waarom?",
  "description": "Airco vullen in Cuijk vanaf €89. Ontdek prijzen, wanneer je airco bijgevuld moet worden en waarom onderhoud essentieel is.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/airco-vullen-cuijk-prijzen"
  }
};

export default function AircoVullenPrijzenPage() {
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
              <Thermometer className="w-4 h-4" />
              <span>Airco Service</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Airco Vullen Cuijk - <span className="text-[#c8102e]">Prijzen, Wanneer & Waarom?</span>
            </h1>
            
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>9 minuten leestijd</span>
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
                Een goed werkende airconditioning is onmisbaar tijdens de hete zomerdagen in Cuijk. 
                Maar wanneer moet je je airco eigenlijk laten vullen? En wat zijn de kosten? 
                In dit uitgebreide artikel bespreken we alles over airco vullen in Cuijk: de prijzen, 
                het juiste moment en waarom regelmatig onderhoud zo belangrijk is voor jouw auto.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost Airco Vullen in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten voor airco vullen in Cuijk verschillen per garage en hangen af van verschillende factoren, 
                zoals het type koelmiddel dat je auto nodig heeft. Bij <strong>Car Store Cuijk</strong> hanteren wij 
                transparante, scherpe prijzen voor onze airco service:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">R134a Koelmiddel</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€89</div>
                  <p className="text-white/60 text-sm">Voor auto's tot circa 2016. Dit is het traditionele koelmiddel dat al jarenlang wordt gebruikt.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">R1234yf Koelmiddel</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€129</div>
                  <p className="text-white/60 text-sm">Voor nieuwere auto's vanaf 2017. Milieuvriendelijker maar duurder in aanschaf.</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mt-6">
                Deze prijzen zijn inclusief complete service: controle op lekkages, aftappen van oude koelmiddel, 
                vacuüm trekken van het systeem en bijvullen met nieuw koelmiddel. We voeren altijd een functionele 
                test uit om zeker te zijn dat je airco optimaal presteert.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer Moet Je Je Airco Vullen?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een veelgestelde vraag is: hoe vaak moet je een airco vullen? Het antwoord is simpel: 
                minimaal één keer per twee jaar, maar bij voorkeur jaarlijks. Het koelmiddel in je aircosysteem 
                verliest namelijk gemiddeld 10-15% van zijn werking per jaar door natuurlijke verdamping. 
                Dit is normaal, maar betekent wel dat je airco na verloop van tijd minder efficiënt koelt.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Signalen dat je Airco Bijgevuld Moet Worden</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Herken je een of meer van de volgende signalen? Dan is het tijd om langs te komen voor een airco service:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">De airco blaast niet meer koud, alleen lauw</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Het duurt veel langer voordat de auto afkoelt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Er komt een muffe of vreemde geur uit de ventilatie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Je hoort vreemde geluiden bij het aanzetten van de airco</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">De ruiten beslaan sneller dan normaal</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Waarom is Airco Onderhoud Zo Belangrijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Veel automobilisten onderschatten het belang van regelmatig airco onderhoud. 
                Het is echter veel meer dan alleen comfortabel rijden tijdens een hittegolf. 
                Goed onderhoud van je airconditioning biedt tal van voordelen:
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Betere Koelprestaties</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een goed gevulde airco koelt efficiënter en sneller. Dit betekent dat je auto binnen enkele minuten 
                aangenaam koel is, zelfs tijdens de heetste dagen. Dit draagt bij aan je rijcomfort en veiligheid, 
                want een oververhitte bestuurder is een afgeleide bestuurder.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Lagere Brandstofkosten</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een airco die weinig koelmiddel bevat, moet harder werken om dezelfde resultaten te bereiken. 
                Dit kost extra brandstof. Door regelmatig je airco te laten vullen, blijft het systeem efficiënt 
                werken en bespaar je op je benzinekosten.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Gezondere Lucht in de Auto</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een slecht onderhouden airco kan een broedplaats worden voor schimmels, bacteriën en vieze geurtjes. 
                Dit is niet alleen onprettig, maar kan ook gezondheidsklachten veroorzaken zoals hoofdpijn, 
                vermoeidheid en allergische reacties. Tijdens onze airco service reinigen we ook het systeem 
                om dit te voorkomen.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Langere Levensduur van Componenten</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De aircopomp is een van de duurste onderdelen van het airconditioningsysteem. 
                Wanneer er te weinig koelmiddel in het systeem zit, moet de pomp harder werken en slijt deze sneller. 
                Regelmatig onderhoud voorkomt dure reparaties en verlengt de levensduur van je airco.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Het Airco Vullen Proces</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk werken we volgens een vaste procedure voor het vullen van je airco. 
                Dit proces duurt ongeveer 45 tot 60 minuten en bestaat uit de volgende stappen:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c8102e] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <strong className="text-white">Controle op lekkages</strong>
                      <p className="text-white/60 text-sm">We controleren het complete systeem op lekkages met speciale detectieapparatuur.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c8102e] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <strong className="text-white">Aftappen van oude koelmiddel</strong>
                      <p className="text-white/60 text-sm">Het oude koelmiddel wordt op een milieuvriendelijke manier afgetapt en gerecycled.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c8102e] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <strong className="text-white">Vacuüm trekken</strong>
                      <p className="text-white/60 text-sm">Het systeem wordt vacuüm getrokken om vocht en lucht te verwijderen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c8102e] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <strong className="text-white">Bijvullen met nieuw koelmiddel</strong>
                      <p className="text-white/60 text-sm">We vullen het systeem met de juiste hoeveelheid R134a of R1234yf koelmiddel.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#c8102e] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">5</span>
                    <div>
                      <strong className="text-white">Functionele test</strong>
                      <p className="text-white/60 text-sm">We testen de werking van de airco en controleren de temperatuur.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Airco Vullen in Cuijk en Omgeving</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Car Store Cuijk is dé specialist in airco service voor de regio Cuijk en omgeving. 
                We bedienen niet alleen Cuijk zelf, maar ook omliggende plaatsen zoals 
                <strong> Boxmeer</strong>, <strong>Grave</strong>, <strong>Gennep</strong>, 
                <strong> Wijchen</strong>, <strong>Beuningen</strong> en <strong>Nijmegen</strong>. 
                Onze ervaren monteurs beschikken over de modernste apparatuur om je airco snel en vakkundig te onderhouden.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                We werken zonder afspraak, dus je kunt altijd langskomen wanneer het jou uitkomt. 
                Wil je wachten terwijl we je airco vullen? Dat kan in onze comfortabele wachtruimte met gratis koffie en WiFi. 
                Je kunt je auto ook achterlaten en hem later ophalen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Verschil Tussen R134a en R1234yf Koelmiddel</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sinds 2017 is het milieuvriendelijkere koelmiddel R1234yf verplicht voor nieuwe auto's. 
                Dit koelmiddel heeft een veel lagere impact op het milieu dan de traditionele R134a. 
                Het nadeel is dat R1234yf duurder is, waardoor de kosten voor airco vullen bij nieuwere auto's hoger liggen.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Onze monteurs kunnen direct zien welk koelmiddel je auto nodig heeft. 
                We rekenen nooit te veel en geven altijd vooraf een duidelijke prijsopgave. 
                Twijfel je over welk koelmiddel je auto gebruikt? Neem gerust contact met ons op, 
                we helpen je graag.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Tips om Je Airco Langer Mee te Laten Gaan</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Naast regelmatig onderhoud zijn er een aantal dingen die je zelf kunt doen om je airco in topconditie te houden:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Zet de airco regelmatig aan:</strong> Zelfs in de winter, minstens 10 minuten per week. Dit voorkomt dat de afdichtingen uitdrogen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Laat jaarlijks controleren:</strong> Voorkomen is beter dan genezen. Een jaarlijkse controle houdt je airco in topconditie.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Vervang het interieurfilter:</strong> Een schoon filter zorgt voor betere luchtkwaliteit en efficiëntere werking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70"><strong>Zet de airco uit voor je parkeert:</strong> Schakel de airco een paar minuten voor het einde van je rit uit, maar laat de ventilator draaien. Dit voorkomt vochtophoping.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Veelgestelde Vragen over Airco Vullen</h2>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Hoe lang duurt airco vullen?</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Een complete airco service duurt ongeveer 45 tot 60 minuten. Je kunt wachten in onze wachtruimte 
                of je auto achterlaten en later ophalen.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Kan ik mijn airco zelf vullen?</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                We raden dit sterk af. Airco vullen vereist specialistische kennis en apparatuur. 
                Bovendien moet oude koelmiddel op een milieuvriendelijke manier worden verwerkt. 
                Laat dit altijd over aan een professionele garage.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Garantie op airco vullen?</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk geven we garantie op onze airco service. 
                Als er binnen korte tijd iets mis is met de werking, kijkken we dit gratis voor je na.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">Airco Vullen in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Kom langs bij Car Store Cuijk voor professionele airco service. 
                  Vanaf €89, zonder afspraak, direct geholpen!
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
