import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Car, Phone, MessageCircle, CheckCircle, DollarSign, Clock, Shield } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Inkoop Cuijk | Wij Kopen 1ste Eigenaar Auto\'s',
  description: "Auto inkoop Cuijk - Wij kopen voornamelijk 1ste eigenaar autos en alle merken. Gratis taxatie, direct geld. Ook 1e eigenaar autos met schade. 168 reviews, 5 sterren.",
  keywords: 'auto inkoop Cuijk, 1ste eigenaar autos inkoop, 1e eigenaar, eerste eigenaar auto verkopen, auto verkopen, alle merken, auto inruilen, taxatie auto',
  openGraph: {
    title: 'Auto Inkoop Cuijk | Alle Merken Gezocht',
    description: "Wij kopen alle merken auto's. Gratis taxatie, direct geld. 168 reviews, 5 sterren.",
    type: 'website',
  },
};

export default function AutoInkoopPage() {
  const stappen = [
    { nr: '1', title: 'Neem contact op', desc: 'Bel of app ons met de gegevens van uw auto' },
    { nr: '2', title: 'Gratis taxatie', desc: 'Wij maken een vrijblijvende prijsindicatie' },
    { nr: '3', title: 'Afspraak', desc: 'Breng uw auto langs voor inspectie' },
    { nr: '4', title: 'Direct geld', desc: 'Akkoord? Direct geld op uw rekening' },
  ];

  const voordelen = [
    'Eerlijke prijs gebaseerd op marktwaarde',
    'Direct geld, geen wachttijd',
    'Alle merken en bouwjaren',
    'Ook auto\'s met schade of hoge km-stand',
    'Gratis taxatie',
    'Snelle afhandeling',
    'Inkoop van particulieren en bedrijven',
    'Rdw vrijwaring direct geregeld',
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
                <DollarSign className="w-4 h-4" />
                Direct geld voor uw auto
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Auto <span className="text-[#c8102e]">Inkoop</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Wij kopen voornamelijk 1ste eigenaar autos - Wij kopen uw auto voor een eerlijke prijs. 
                Gratis taxatie, snelle afhandeling, direct geld op uw rekening. 168 reviews, 5 sterren.
              </p>
            </div>
          </div>
        </section>

        {/* Hoe werkt het */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hoe werkt auto inkoop?</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                In 4 eenvoudige stappen uw auto verkocht. Snel, eenvoudig en transparant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stappen.map((stap, i) => (
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

        {/* Voordelen */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Waarom uw auto aan ons verkopen?
                </h2>
                <p className="text-white/50 mb-8 text-lg">
                  Wij maken het verkopen van uw auto eenvoudig. Geen gedoe met particulieren, 
                  geen onzekerheid. Gewoon een eerlijke prijs en direct geld.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {voordelen.map((voordeel, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{voordeel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-[#c8102e]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-10 h-10 text-[#c8102e]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Wij kopen alle auto\'s</h3>
                </div>
                
                <div className="space-y-4 text-center">
                  <p className="text-white/60">✓ Personenauto\'s</p>
                  <p className="text-white/60">✓ Bedrijfswagens</p>
                  <p className="text-white/60">✓ Youngtimers</p>
                  <p className="text-white/60">✓ Auto\'s met schade</p>
                  <p className="text-white/60">✓ Auto\'s met hoge km-stand</p>
                  <p className="text-white/60">✓ Importauto\'s</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Direct een prijsindicatie?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Bel of app ons met het kenteken en kilometerstand van uw auto. 
                Wij geven u binnen enkele minuten een vrijblijvende prijsindicatie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Prijs via WhatsApp
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
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Auto inkoop Cuijk - Wij kopen voornamelijk 1ste eigenaar autos</h2>
            <p className="text-white/60 mb-4">
              Wilt u uw auto verkopen in Cuijk, Nijmegen, of omgeving? Car Store Cuijk is uw betrouwbare partner 
              voor auto inkoop. Wij kopen voornamelijk 1ste eigenaar autos - auto's die nieuw zijn gekocht door één eigenaar. 
              Alle merken en bouwjaren - van Volkswagen, BMW, Audi tot Mercedes. 
              Heeft u een eerste eigenaar auto? Neem contact op voor een vrijblijvende taxatie.
            </p>
            <p className="text-white/60 mb-4">
              Wij zijn BOVAG erkend met 168 reviews en 5 sterren op Google reviews. Het verkopen van uw auto via 
              Car Store Cuijk heeft veel voordelen ten opzichte van particuliere verkoop. U hoeft niet te wachten 
              op geïnteresseerde kopers, geen gedoe met proefritten, en geen risico op niet-betalende kopers. 
              Wij geven u een eerlijke prijs gebaseerd op de actuele marktwaarde, met name voor 1e eigenaar autos.
            </p>
            <p className="text-white/60">
              Naast inkoop van particulieren kopen wij ook auto's in van bedrijven en leasingmaatschappijen. 
              Wij regelen alle administratie, inclusief RDW vrijwaring. Direct geld op uw rekening. 
              Neem vandaag nog contact op voor een vrijblijvende taxatie van uw 1ste eigenaar auto.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
