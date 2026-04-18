import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, Phone, MessageCircle, CheckCircle, Sun, Shield, Eye } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Koplampen Polijsten Cuijk | 1ste Eigenaar Auto\'s | €59',
  description: 'Koplampen polijsten in Cuijk vanaf €59. Ook voor 1ste eigenaar autos. Vergeelde koplampen weer als nieuw. UV coating, 6 maanden garantie. 168 reviews, 5 sterren.',
  keywords: 'koplampen polijsten Cuijk, 1ste eigenaar auto onderhoud, koplampen herstellen, vergeelde koplampen, koplamp renovatie, koplamp coating, auto koplampen',
  openGraph: {
    title: 'Koplampen Polijsten Cuijk | Vanaf €59',
    description: 'Vergeelde koplampen weer helder. UV coating, 6 maanden garantie. 168 reviews, 5 sterren.',
    type: 'website',
  },
};

export default function KoplampenPage() {
  const voordelen = [
    'Betere zichtbaarheid in het donker',
    'Mooiere uitstraling van uw auto',
    'Hogere verkoopwaarde',
    'Bespaart op dure vervanging',
    'UV-bestendige coating',
    'Garantie op het resultaat',
  ];

  const proces = [
    { nr: '1', title: 'Reiniging', desc: 'Grondige reiniging van de koplampen' },
    { nr: '2', title: 'Schuren', desc: 'Vijf stappen nat schuren om verkleuring te verwijderen' },
    { nr: '3', title: 'Polijsten', desc: 'Professioneel polijsten voor een helder resultaat' },
    { nr: '4', title: 'Coating', desc: 'UV-bestendige coating aanbrengen voor bescherming' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 lg:pt-28">
        {/* Hero */}
        <section className="bg-[#0a0a0a] py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4" />
                Professionele behandeling
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Koplampen <span className="text-[#c8102e]">Polijsten</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Vergeelde of dof geworden koplampen? Wij maken ze weer helder als nieuw. 
                Professionele polijstbeurt met UV-bestendige coating.
              </p>
            </div>
          </div>
        </section>

        {/* Probleem */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Waarom worden koplampen dof?
                </h2>
                <p className="text-white/50 mb-6 text-lg">
                  Door UV-straling, weersinvloeden en ouderdom wordt het polycarbonaat van koplampen 
                  geel en dof. Dit is niet alleen een cosmetisch probleem, maar ook een veiligheidsrisico.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Minder zichtbaarheid</h3>
                      <p className="text-white/50 text-sm">Dof gewassen koplampen geven tot 70% minder licht af</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">UV-schade</h3>
                      <p className="text-white/50 text-sm">De zon breekt het polycarbonaat af, waardoor het geel wordt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                    <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Keuring</h3>
                      <p className="text-white/50 text-sm">Ernstig vervuilde koplampen kunnen een reden voor afkeur zijn</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Voordelen van polijsten</h3>
                <div className="space-y-4">
                  {voordelen.map((voordeel, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                      <span className="text-white/70">{voordeel}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Prijs vanaf:</span>
                    <span className="text-3xl font-bold text-[#c8102e]">€59,-</span>
                  </div>
                  <p className="text-white/30 text-sm mt-2">Beide koplampen inclusief UV coating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ons polijstproces</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Professionele behandeling in 4 stappen voor een duurzaam resultaat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {proces.map((stap, i) => (
                <div key={i} className="relative">
                  <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 text-center">
                    <div className="w-16 h-16 bg-[#c8102e] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {stap.nr}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{stap.title}</h3>
                    <p className="text-white/50">{stap.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#c8102e]/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resultaat */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Duurzaam resultaat met UV coating
                  </h2>
                  <p className="text-white/50 mb-6">
                    Na het polijsten brengen wij een professionele UV-bestendige coating aan. 
                    Dit beschermt de koplampen tegen nieuwe verkleuring en houdt ze langer helder.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                      <span className="text-white/70">Bescherming tegen UV-straling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                      <span className="text-white/70">Waterafstotend effect</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                      <span className="text-white/70">Krasbestendig</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                      <span className="text-white/70">6 maanden garantie</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] rounded-2xl p-8 text-center">
                  <Sparkles className="w-16 h-16 text-[#c8102e] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Garantie op ons werk</h3>
                  <p className="text-white/50">
                    Wij staan achter de kwaliteit van ons werk. Daarom geven wij 6 maanden garantie 
                    op het polijstresultaat. Mocht er binnen deze periode onverhoopt iets misgaan, 
                    dan lossen wij het kosteloos voor u op.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Koplampen laten polijsten?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Maak direct een afspraak voor koplampen polijsten. Binnen enkele uren weer heldere 
                koplampen. Werkzaamheden terwijl u wacht.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Afspraak via WhatsApp
                </a>
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {contactInfo.telefoon}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Koplampen polijsten in Cuijk - Vanaf €59</h2>
            <p className="text-white/60 mb-4">
              Vergeelde of dof geworden koplampen zijn een veelvoorkomend probleem bij auto's van enige leeftijd. 
              Niet alleen ziet het er onverzorgd uit, het is ook een veiligheidsrisico omdat het lichtoppervlak 
              wordt verminderd. Bij Car Store Cuijk bieden wij een professionele oplossing: koplampen polijsten 
              met UV-bestendige coating.
            </p>
            <p className="text-white/60 mb-4">
              Wij zijn BOVAG erkend met 168 reviews en 5 sterren op Google reviews. Ons polijstproces bestaat 
              uit meerdere stappen. Eerst reinigen wij de koplampen grondig. Vervolgens schuren wij het oppervlak 
              in vijf stappen om alle verkleuring te verwijderen. Daarna polijsten wij de koplampen tot een helder 
              resultaat. Tot slot brengen wij een UV-bestendige coating aan die de koplampen beschermt tegen 
              nieuwe verkleuring.
            </p>
            <p className="text-white/60">
              Het resultaat is verbluffend: uw koplampen zien er weer uit als nieuw en geven tot 70% meer licht. 
              Dit verhoogt niet alleen de veiligheid, maar ook de uitstraling en waarde van uw auto. 
              Koplampen polijsten vanaf €59, inclusief UV coating en 6 maanden garantie. 
              Maak vandaag nog een afspraak in Cuijk.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
