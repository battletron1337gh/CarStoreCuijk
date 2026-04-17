import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Car, Phone, MessageCircle, CheckCircle, Shield, FileCheck, Clock } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Verkopen Cuijk | 1ste Eigenaar Auto\'s Te Koop',
  description: 'Auto verkopen via Car Store Cuijk. Consignatie, inruil of directe inkoop. Wij verkopen voornamelijk 1ste eigenaar autos. Gratis waardebepaling. 168 reviews, 5 sterren.',
  keywords: 'auto verkopen Cuijk, 1ste eigenaar autos te koop, 1e eigenaar, eerste eigenaar, occasion verkopen, auto inruilen, consumentenverkoop, waardebepaling auto',
  openGraph: {
    title: 'Auto Verkopen Cuijk | Consignatie & Inruil',
    description: 'Consumentenverkoop, inruil of directe inkoop. 168 reviews, 5 sterren.',
    type: 'website',
  },
};

export default function AutoVerkopenPage() {
  const opties = [
    {
      title: 'Consumentenverkoop',
      desc: 'Wij verkopen uw auto in consignatie. U krijgt een hogere prijs dan bij directe inkoop.',
      voordeel: 'Meer opbrengst',
      tijd: '2-4 weken',
    },
    {
      title: 'Directe Inkoop',
      desc: 'Wij kopen uw auto direct in. Direct geld op uw rekening, geen wachttijd.',
      voordeel: 'Direct geld',
      tijd: 'Direct',
    },
    {
      title: 'Inruil',
      desc: 'Ruilt u uw auto in bij aankoop van een andere auto? Wij geven een eerlijke inruilprijs.',
      voordeel: 'Gemakkelijk',
      tijd: 'Direct',
    },
  ];

  const werkwijze = [
    { icon: <FileCheck className="w-6 h-6" />, title: 'Gratis inspectie', desc: 'Wij bekijken uw auto ter plaatse' },
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Eerlijke prijs', desc: 'Gebaseerd op staat en marktwaarde' },
    { icon: <Shield className="w-6 h-6" />, title: 'Garantie', desc: 'Wij geven garantie op door ons verkochte auto\'s' },
    { icon: <Clock className="w-6 h-6" />, title: 'Snelle afhandeling', desc: 'Alle administratie direct geregeld' },
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
                <Car className="w-4 h-4" />
                Drie verkoopopties
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Auto <span className="text-[#c8102e]">Verkopen</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                1ste eigenaar autos te koop - Kies de manier die bij u past: consumentenverkoop, directe inkoop of inruil. 
                Wij verkopen voornamelijk 1e eigenaar autos en regelen alles voor u.
              </p>
            </div>
          </div>
        </section>

        {/* Opties */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hoe wilt u verkopen?</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Kies de optie die het beste bij uw situatie past.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {opties.map((optie, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">{optie.title}</h3>
                  <p className="text-white/50 mb-6 flex-grow">{optie.desc}</p>
                  
                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <div className="flex justify-between">
                      <span className="text-white/40">Voordeel:</span>
                      <span className="text-[#c8102e] font-semibold">{optie.voordeel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Tijd:</span>
                      <span className="text-white font-semibold">{optie.tijd}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Werkwijze */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Onze werkwijze</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Transparant en betrouwbaar. Zo werken wij.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {werkwijze.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[#c8102e]/20 text-[#c8102e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verschil consignatie vs inkoop */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Consignatie vs Directe Inkoop</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#0a0a0a] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Consignatie (Consumentenverkoop)
                  </h3>
                  <ul className="space-y-3 text-white/60">
                    <li>• Wij verkopen uw auto aan een consument</li>
                    <li>• U ontvangt een hogere prijs</li>
                    <li>• Duurt 2-4 weken gemiddeld</li>
                    <li>• Wij regelen bezichtigingen en proefritten</li>
                    <li>• Wij geven garantie aan de koper</li>
                    <li>• U betaalt een courtage fee</li>
                  </ul>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c8102e]" />
                    Directe Inkoop
                  </h3>
                  <ul className="space-y-3 text-white/60">
                    <li>• Wij kopen uw auto direct</li>
                    <li>• Direct geld op uw rekening</li>
                    <li>• Geen wachttijd</li>
                    <li>• Geen gedoe met kopers</li>
                    <li>• Alle risico\'s voor ons</li>
                    <li>• Lagere prijs dan consignatie</li>
                  </ul>
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
                Advies nodig?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Weet u niet welke optie het beste bij u past? Neem contact op voor vrijblijvend advies. 
                Wij kijken samen naar uw situatie en geven een eerlijk advies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Advies via WhatsApp
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
            <h2 className="text-2xl font-bold text-white mb-4">Auto verkopen Cuijk - 1ste eigenaar autos te koop</h2>
            <p className="text-white/60 mb-4">
              Bij Car Store Cuijk heeft u verschillende opties om uw auto te verkopen. Wij specialiseren ons in 
              1ste eigenaar autos - auto's die nieuw zijn gekocht door één eigenaar. Alle merken welkom - 
              van Volkswagen en BMW tot Audi en Mercedes. Of u nu kiest voor consumentenverkoop (consignatie), 
              directe inkoop of inruil, wij zorgen voor een transparant en eerlijk proces. 
              Onze ervaring in de autobranche garandeert u een professionele behandeling.
            </p>
            <p className="text-white/60 mb-4">
              Wij zijn BOVAG erkend met 168 reviews en 5 sterren op Google reviews. Consignatie is ideaal als 
              u de tijd heeft en de maximale opbrengst wilt realiseren. Wij verkopen voornamelijk 1e eigenaar autos 
              en nemen het volledige verkooptraject uit handen: van advertentie tot garantieafhandeling. 
              Bij directe inkoop krijgt u direct geld en bent u binnen een dag van uw auto af. De keuze is aan u.
            </p>
            <p className="text-white/60">
              Wij hanteren transparante prijzen. Geen verborgen kosten of verrassingen achteraf. 
              Neem contact met ons op voor een vrijblijvende waardebepaling van uw auto.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
