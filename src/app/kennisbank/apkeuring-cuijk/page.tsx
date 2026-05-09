import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Phone, Shield, Calendar, AlertCircle, Euro } from 'lucide-react';

export const metadata: Metadata = {
  title: 'APK Keuring Cuijk - Alles Wat Je Moet Weten | Car Store Cuijk',
  description: 'APK keuring nodig in Cuijk? Alles over APK kosten, wanneer APK verplicht is en wat er wordt gecontroleerd. Zonder afspraak, direct het keuringsbewijs mee.',
  keywords: 'apk keuring cuijk, apk kosten cuijk, wanneer apk, apk verplicht, apk keuring prijs, apk controle cuijk',
  openGraph: {
    title: 'APK Keuring Cuijk - Alles Wat Je Moet Weten | Car Store Cuijk',
    description: 'APK keuring nodig in Cuijk? Alles over APK kosten, wanneer APK verplicht is en wat er wordt gecontroleerd.',
    type: 'article',
    locale: 'nl_NL',
    siteName: 'Car Store Cuijk',
  },
};

// Schema.org Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "APK Keuring Cuijk - Alles Wat Je Moet Weten",
  "description": "APK keuring nodig in Cuijk? Alles over APK kosten, wanneer APK verplicht is en wat er wordt gecontroleerd.",
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
    "@id": "https://www.carstorecuijk.nl/kennisbank/apkeuring-cuijk"
  }
};

export default function ApkKeuringPage() {
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
              <Shield className="w-4 h-4" />
              <span>APK Keuring</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              APK Keuring Cuijk - <span className="text-[#c8102e]">Alles Wat Je Moet Weten</span>
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
                De APK (Algemene Periodieke Keuring) is voor iedere autobezitter een verplicht onderdeel 
                van het auto bezitten. Maar wanneer is je auto aan de beurt? Wat kost een APK keuring in Cuijk? 
                En wat wordt er eigenlijk gecontroleerd? In dit uitgebreide artikel beantwoorden we al je vragen 
                over de APK keuring, zodat je goed voorbereid naar Car Store Cuijk kunt komen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat is de APK?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De Algemene Periodieke Keuring (APK) is een wettelijk verplichte keuring voor alle 
                personenauto's, bedrijfswagens, aanhangers en motorfietsen in Nederland. Het doel van de APK 
                is om de veiligheid op de weg te vergroten en de milieubelasting van voertuigen te beperken. 
                Tijdens de keuring wordt gecontroleerd of je auto voldoet aan de wettelijke veiligheids- 
                en milieueisen.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                De APK is geen onderhoudsbeurt. Het is een momentopname waarbij wordt gekeken of het voertuig 
                op dat moment aan de eisen voldoet. Een goedgekeurde APK geeft dus geen garantie dat de auto 
                de komende tijd geen problemen zal krijgen. Daarom blijft regelmatig onderhoud belangrijk, 
                ook als je auto een geldige APK heeft.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wanneer is APK Verplicht?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De frequentie van de APK keuring hangt af van het type voertuig en de leeftijd ervan. 
                Voor personenauto's gelden de volgende termijnen:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Nieuwe auto (tot 3 jaar oud)</strong>
                      <p className="text-white/60 text-sm">Eerste APK: na 3 jaar, daarna elk jaar opnieuw.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Auto van 3 tot 50 jaar oud</strong>
                      <p className="text-white/60 text-sm">Jaarlijkse APK keuring verplicht.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">Oldtimers (50 jaar en ouder)</strong>
                      <p className="text-white/60 text-sm">APK elke 2 jaar, mits de auto is aangemeld als oldtimer.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-white/60 leading-relaxed mt-6">
                Je ontvangt van de RDW geen herinneringsbrief meer voor de APK. Het is dus zelf je verantwoordelijkheid 
                om bij te houden wanneer je auto gekeurd moet worden. Gelukkig kun je dit eenvoudig controleren 
                via de RDW website met je kenteken.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Kost een APK Keuring in Cuijk?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                De kosten voor een APK keuring verschillen per garage. Bij Car Store Cuijk hanteren we 
                scherpe, transparante tarieven:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">Standaard APK</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">€29,95</div>
                  <p className="text-white/60 text-sm">Inclusief keuringsrapport en registratie bij de RDW.</p>
                </div>

                <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-6 h-6 text-[#c8102e]" />
                    <h3 className="text-lg font-semibold text-white">APK inclusief Onderhoud</h3>
                  </div>
                  <div className="text-3xl font-bold text-[#c8102e] mb-2">Vanaf €149</div>
                  <p className="text-white/60 text-sm">Kleine beurt + APK keuring in één. Handig en voordelig!</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mt-6">
                Let op: deze prijzen gelden voor een goedgekeurde keuring. Als er gebreken worden gevonden 
                die gerepareerd moeten worden, komen hier uiteraard kosten voor reparatie bij. 
                We bespreken dit altijd eerst met je voordat we iets doen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Wordt Er Gecontroleerd Tijdens de APK?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Tijdens de APK keuring worden verschillende onderdelen van je auto gecontroleerd op veiligheid 
                en milieu. Hier is een overzicht van de belangrijkste controlepunten:
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Remmen</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De remmen worden uitgebreid getest. Dit omvat de remwerking, remkrachtverdeling, 
                slijtage van remblokken en schijven, en de staat van de remleidingen. 
                Goed werkende remmen zijn essentieel voor de veiligheid.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Verlichting</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Alle verlichting wordt gecontroleerd: koplampen, achterlichten, remlichten, richtingaanwijzers, 
                mistlampen en kentekenverlichting. We controleren of alles werkt, of de lichtopbrengst voldoende is 
                en of de koplampen goed zijn afgesteld.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Banden en Wielen</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De banden worden gecontroleerd op profieldiepte (minimaal 1,6 mm, maar wij adviseren minimaal 2,5 mm), 
                beschadigingen, leeftijd en juiste montage. Ook de wielophanging en wiellagers worden gecontroleerd.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Besturing</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De stuurinrichting wordt gecontroleerd op speling en werking. Dit is belangrijk voor de 
                beheersbaarheid van de auto.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Carrosserie en Chassis</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                We controleren op roestschade, vooral op plaatsen die de veiligheid kunnen aantasten. 
                Ook worden de dorpels, wielkasten en andere kritieke punten geïnspecteerd.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Uitlaat en Emissies</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De uitlaat wordt gecontroleerd op lekkage en geluidsniveau. Bij dieselauto's wordt ook een 
                roetmeting uitgevoerd om te controleren of de uitstoot binnen de normen valt.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">7. Ruiten en Ruitenwissers</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De voorruit wordt gecontroleerd op sterretjes en barsten die het zicht kunnen belemmeren. 
                Ook de ruitenwissers moeten goed functioneren om voldoende zicht te garanderen.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">8. Gordels en Veiligheidssystemen</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                De veiligheidsgordels worden gecontroleerd op werking en beschadigingen. 
                Ook het ABS-systeem en eventuele airbags worden getest.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Hoe Bereid Je Je Auto Voor op de APK?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Om kans op afkeur te verkleinen, kun je een aantal dingen zelf controleren voordat je naar de APK komt:
              </p>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer of alle lampen het doen (ook de kentekenverlichting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Meet de profieldiepte van je banden (minimaal 1,6 mm)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Vul de ruitensproeiervloeistof bij</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Maak de auto schoon, vooral de ramen en lampen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c8102e] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Controleer of er geen waarschuwingslampjes branden op het dashboard</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Wat Gebeurt Er Bij Afkeur?</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Als je auto niet voldoet aan de eisen, wordt deze afgekeurd. Je krijgt dan geen keuringsbewijs 
                en mag de auto niet meer op de openbare weg gebruiken totdat de gebreken zijn verholpen. 
                Je hebt dan twee weken de tijd om de reparaties uit te laten voeren en de auto opnieuw te laten keuren.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk kun je direct na een afkeuring de reparatie laten uitvoeren. 
                We bespreken altijd eerst wat er moet gebeuren en wat de kosten zijn. 
                Vaak kunnen we de reparatie direct uitvoeren, zodat je dezelfde dag nog met een geldige APK de weg op kunt.
              </p>

              <div className="bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-xl p-6 mt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-[#c8102e] flex-shrink-0" />
                  <div>
                    <strong className="text-white block mb-2">Let op: Rijden zonder geldige APK</strong>
                    <p className="text-white/60 text-sm">
                      Rijden zonder geldige APK kan een boete opleveren van €140. Bovendien ben je bij een ongeval 
                      mogelijk niet verzekerd. Houd de APK-datum dus goed in de gaten!
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">APK Keuring Zonder Afspraak in Cuijk</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Bij Car Store Cuijk kun je terecht voor je APK keuring zonder afspraak. 
                Kom gewoon langs tijdens onze openingstijden en we keuren je auto direct. 
                De keuring duurt ongeveer 30 minuten. Je kunt wachten in onze comfortabele wachtruimte 
                met gratis koffie en WiFi.
              </p>

              <p className="text-white/60 leading-relaxed mb-6">
                Na een goedgekeurde keuring ontvang je direct het keuringsbewijs en wordt de nieuwe 
                vervaldatum geregistreerd bij de RDW. Je hoeft zelf niets te doen.
              </p>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">APK en Onderhoud Combineren</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Een handige tip: combineer je APK keuring met een onderhoudsbeurt. 
                Dan weet je zeker dat je auto in optimale conditie is én je bespaart tijd. 
                Bovendien bieden we een interessante combinatiekorting als je beide tegelijk laat doen.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#c8102e]/20 to-[#1a1a1a] rounded-2xl p-8 text-center border border-[#c8102e]/30">
                <h3 className="text-2xl font-bold text-white mb-4">APK Keuring Nodig in Cuijk?</h3>
                <p className="text-white/60 mb-6 max-w-xl mx-auto">
                  Kom langs bij Car Store Cuijk voor je APK keuring. Zonder afspraak, 
                  direct geholpen, scherpe tarieven vanaf €29,95.
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
