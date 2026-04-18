import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Snowflake, Phone, MessageCircle, CheckCircle, Thermometer, Wind, AlertCircle } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airco Vullen Cuijk | Service voor 1ste Eigenaar Auto\'s',
  description: 'Airco vullen in Cuijk vanaf €89. Specialist in onderhoud van 1ste eigenaar autos. R134a en R1234yf koelmiddel. 168 reviews, 5 sterren. Bel nu!',
  keywords: 'airco vullen Cuijk, 1ste eigenaar auto onderhoud, airco service, airco onderhoud, airco reparatie, R134a, R1234yf, auto airco',
  openGraph: {
    title: 'Airco Vullen Cuijk | Airco Service & Onderhoud',
    description: 'Airco vullen vanaf €89. R134a en R1234yf. Onderhoud en reparatie. 168 reviews, 5 sterren.',
    type: 'website',
  },
};

export default function AircoPage() {
  const diensten = [
    { 
      title: 'Airco Vullen', 
      desc: 'Bijvullen met R134a of R1234yf koelmiddel. Inclusief controle van het systeem.',
      price: 'Vanaf €89,-'
    },
    { 
      title: 'Airco Onderhoud', 
      desc: 'Complete servicebeurt: vullen, lekdetectie, filter vervangen en systeemcontrole.',
      price: 'Vanaf €149,-'
    },
    { 
      title: 'Lekdetectie', 
      desc: 'Professionele zoektocht naar lekkages met UV-vloeistof en speciale lamp.',
      price: 'Vanaf €65,-'
    },
    { 
      title: 'Airco Reparatie', 
      desc: 'Reparatie van compressors, condensors, leidingen en andere onderdelen.',
      price: 'Op aanvraag'
    },
  ];

  const voordelen = [
    'Koele airco in de zomer',
    'Snelle ontdooiing in de winter',
    'Frisse lucht in de auto',
    'Voorkomt bacteriegroei',
    'Betere brandstofefficiëntie',
    'Langere levensduur aircosysteem',
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
                <Snowflake className="w-4 h-4" />
                Airco specialist
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Airco <span className="text-[#c8102e]">Vullen</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Professionele airco service voor uw auto. Bijvullen, onderhoud en reparatie 
                met R134a en R1234yf koelmiddel. Snel en voordelig.
              </p>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Onze airco diensten</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Van eenvoudig bijvullen tot complete service. Wij regelen het voor u.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {diensten.map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center">
                      <Snowflake className="w-7 h-7" />
                    </div>
                    <span className="text-[#c8102e] font-bold text-lg">{item.price}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signalen */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Signalen dat uw airco onderhoud nodig heeft
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: <Thermometer className="w-5 h-5" />, text: 'De airco blaast geen koude lucht meer' },
                    { icon: <Wind className="w-5 h-5" />, text: 'Er komt een muffe geur uit de ventilatie' },
                    { icon: <AlertCircle className="w-5 h-5" />, text: 'De ruiten beslaan sneller dan normaal' },
                    { icon: <Snowflake className="w-5 h-5" />, text: 'De airco maakt vreemde geluiden' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                      <div className="w-10 h-10 bg-[#c8102e]/20 text-[#c8102e] rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Voordelen van airco onderhoud</h3>
                <div className="space-y-4">
                  {voordelen.map((voordeel, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                      <span className="text-white/70">{voordeel}</span>
                    </div>
                  ))}
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
                Airco laten vullen?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Maak direct een afspraak voor airco service. Wij werken met alle koelmiddelen 
                en garanderen een professionele behandeling van uw auto.
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
        <section className="bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Airco vullen in Cuijk - Professionele service</h2>
            <p className="text-white/60 mb-4">
              Een goed werkende airco is essentieel voor comfort in de auto, zowel in de zomer als winter. 
              Bij Car Store Cuijk kunt u terecht voor professioneel airco vullen en alle airco diensten. 
              Wij vullen uw airco met het juiste koelmiddel: R134a voor oudere auto's en R1234yf voor nieuwere modellen.
            </p>
            <p className="text-white/60 mb-4">
              Wij zijn BOVAG erkend met 168 reviews en 5 sterren op Google reviews. Naast airco vullen bieden wij 
              ook complete airco service aan. Dit omvat lekdetectie, vervanging van de aircofilter, 
              reiniging van het systeem en controle van alle componenten. Zo voorkomt u storingen en houdt u 
              het systeem in topconditie.
            </p>
            <p className="text-white/60">
              Wij adviseren om uw airco jaarlijks te laten controleren en elke twee jaar te laten bijvullen. 
              Dit zorgt voor optimale prestaties en voorkomt dure reparaties. Airco vullen vanaf €89. 
              Maak vandaag nog een afspraak voor airco service in Cuijk.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
