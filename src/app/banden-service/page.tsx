import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Circle, Phone, MessageCircle, CheckCircle, Thermometer, Calendar, Gauge } from 'lucide-react';
import { contactInfo } from '@/data/cars';

export const metadata: Metadata = {
  title: 'Banden Service Cuijk | Wisselen Vervangen Balanceren | Car Store',
  description: 'Banden service in Cuijk - Banden wisselen, vervangen, balanceren en uitlijnen. Zomerbanden, winterbanden, all season. Bel 06-87118768 voor een afspraak.',
  keywords: 'banden service Cuijk, banden wisselen, banden vervangen, banden balanceren, zomerbanden, winterbanden, all season banden, auto banden Cuijk',
};

export default function BandenServicePage() {
  const diensten = [
    { 
      title: 'Banden Wisselen', 
      desc: 'Seizoenswissel van zomer- naar winterbanden of vice versa. Inclusief opslag mogelijkheid.',
      price: 'Vanaf €25,-'
    },
    { 
      title: 'Banden Vervangen', 
      desc: 'Vervanging van versleten of beschadigde banden. Alle merken en maten leverbaar.',
      price: 'Vanaf €45,-'
    },
    { 
      title: 'Balanceren', 
      desc: 'Professioneel balanceren om trillingen te voorkomen en slijtage te verminderen.',
      price: 'Vanaf €12,50'
    },
    { 
      title: 'Uitlijnen', 
      desc: 'Correcte uitlijning voor optimale wegligging en gelijkmatige bandenslijtage.',
      price: 'Vanaf €49,-'
    },
  ];

  const voordelen = [
    'Alle bandenmerken leverbaar',
    'Snelle service, vaak zonder afspraak',
    'Professionele montage',
    'Bandenopslag mogelijk',
    'Scherpe prijzen',
    'Garantie op montage',
  ];

  const signalen = [
    { icon: <Gauge className="w-5 h-5" />, text: 'Bandenspanning lamp brandt' },
    { icon: <Circle className="w-5 h-5" />, text: 'Profieldiepte onder 2mm' },
    { icon: <Thermometer className="w-5 h-5" />, text: 'Trillingen in het stuur' },
    { icon: <Calendar className="w-5 h-5" />, text: 'Banden ouder dan 6 jaar' },
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
                <Circle className="w-4 h-4" />
                Alle merken & maten
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Banden <span className="text-[#c8102e]">Service</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Professionele banden service voor uw auto. Wisselen, vervangen, balanceren en uitlijnen. 
                Zomerbanden, winterbanden en all season banden. Snel en voordelig.
              </p>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Onze banden diensten</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Van eenvoudig wisselen tot complete service. Wij regelen het voor u.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {diensten.map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center">
                      <Circle className="w-7 h-7" />
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
                  Signalen dat uw banden aan vervanging toe zijn
                </h2>
                <div className="space-y-4">
                  {signalen.map((item, i) => (
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
                <h3 className="text-2xl font-bold text-white mb-6">Waarom banden onderhoud belangrijk is</h3>
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
                Banden laten wisselen of vervangen?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Maak direct een afspraak voor banden service. Wij werken met alle bandenmerken 
                en maten. Vaak kunt u zonder afspraak terecht.
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
            <h2 className="text-2xl font-bold text-white mb-4">Banden service in Cuijk - Professionele montage</h2>
            <p className="text-white/60 mb-4">
              Goede banden zijn essentieel voor uw veiligheid en rijcomfort. Bij Car Store Cuijk kunt u terecht 
              voor alle banden diensten. Wij wisselen, vervangen, balanceren en lijnen uit. Of u nu zomerbanden, 
              winterbanden of all season banden nodig heeft, wij leveren en monteren alle merken en maten.
            </p>
            <p className="text-white/60 mb-4">
              Wij zijn RDW erkend met 175 reviews en 5 sterren op Google reviews. Onze bandenservice omvat 
              meer dan alleen monteren. Wij controleren de profieldiepte, bandenspanning en algemene staat 
              van uw banden. Bij aanschaf van nieuwe banden zorgen wij voor correct balanceren en indien 
              nodig uitlijnen van uw auto.
            </p>
            <p className="text-white/60">
              Wij adviseren om uw banden twee keer per jaar te laten wisselen: in het voorjaar naar zomerbanden 
              en in het najaar naar winterbanden. Dit zorgt voor optimale prestaties en veiligheid. 
              Banden wisselen vanaf €25. Maak vandaag nog een afspraak voor banden service in Cuijk.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
