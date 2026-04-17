import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wrench, Phone, MessageCircle, CheckCircle, Clock, Shield, Car } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Reparatie Cuijk | 22:00 Bereikbaar - Spoed Reparatie Service',
  description: 'Vakkundige auto reparatie in Cuijk. Garage open tot 22:00, bereikbaar voor spoed reparatie. Specialist in 1ste eigenaar autos. Distributieriem, ketting, koppeling, remblokken. Altijd bereikbaar voor spoed, ook na sluitingstijd. Alle merken, BOVAG erkend. 168 reviews, 5 sterren.',
  keywords: 'auto reparatie Cuijk, spoed reparatie, garage open tot 22:00, 22:00 bereikbaar, reparatie na sluitingstijd, altijd bereikbaar voor spoed, 1ste eigenaar auto onderhoud, distributieriem vervangen, ketting vervangen, koppeling vervangen, remblokken vervangen, auto reparatie, alle merken, BOVAG werkplaats',
  openGraph: {
    title: 'Auto Reparatie Cuijk | Distributieriem, Koppeling, Remmen',
    description: 'Vakkundige auto reparatie. Distributieriem, ketting, koppeling, remblokken. 168 reviews, 5 sterren.',
    type: 'website',
  },
};

export default function ReparatiesPage() {
  const reparaties = [
    { title: 'Distributieriem Vervangen', desc: 'Vervanging van distributieriem of distributieketting volgens schema' },
    { title: 'Remmen', desc: 'Remschijven, remblokken en remvloeistof vervangen voor alle merken' },
    { title: 'Koppeling Vervangen', desc: 'Koppeling, drukgroep en koppelingslager vervangen' },
    { title: 'Motorreparaties', desc: 'Diagnose en reparatie van motorproblemen voor alle merken' },
    { title: 'Uitlaat', desc: 'Reparatie en vervanging van uitlaatsystemen' },
    { title: 'Vering & Demping', desc: 'Schokdempers, veren en stabilisatoren vervangen' },
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
                <Wrench className="w-4 h-4" />
                22:00 bereikbaar - Spoed reparatie service
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Auto <span className="text-[#c8102e]">Reparaties</span> Cuijk
              </h1>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Professionele reparaties voor alle automerken. Garage open tot 22:00, bereikbaar voor spoed reparatie. 
                Onze ervaren monteurs lossen elk probleem op, groot of klein. Altijd bereikbaar voor spoed, ook na sluitingstijd.
              </p>
            </div>
          </div>
        </section>

        {/* Reparaties Grid */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Onze reparatiediensten</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Van kleine reparaties tot grote onderhoudsbeurten. Garage open tot 22:00 voor spoed reparaties. 
                Wij staan voor u klaar, ook na sluitingstijd.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">22:00 bereikbaar voor spoed - Bel ons!</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reparaties.map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all">
                  <div className="w-14 h-14 bg-[#c8102e]/20 text-[#c8102e] rounded-xl flex items-center justify-center mb-4">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waarom wij */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Waarom kiezen voor ons?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <CheckCircle className="w-8 h-8" />, title: 'BOVAG Erkend', desc: 'Garantie op reparaties' },
                { icon: <Car className="w-8 h-8" />, title: 'Alle Merken', desc: 'Ongeacht het automerk' },
                { icon: <Clock className="w-8 h-8" />, title: 'Snelle Service', desc: 'Efficiënte planning' },
                { icon: <Shield className="w-8 h-8" />, title: 'Transparant', desc: 'Duidelijke prijzen' },
              ].map((item, i) => (
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

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-white/5 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Direct een afspraak maken?
              </h2>
              <p className="text-white/50 mb-8 text-lg max-w-2xl mx-auto">
                Neem contact met ons op voor een vrijblijvende offerte of plan direct een afspraak. 
                Garage open tot 22:00, altijd bereikbaar voor spoed reparatie.
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
            <h2 className="text-2xl font-bold text-white mb-4">Auto reparatie in Cuijk - Alle merken</h2>
            <p className="text-white/60 mb-4">
              Zoekt u een betrouwbare garage in Cuijk voor uw auto reparatie? Car Store Cuijk is uw specialist 
              voor alle merken. Van distributieriem vervangen tot koppeling en remblokken - wij regelen het voor u. 
              Onze moderne werkplaats is uitgerust met de nieuwste diagnoseapparatuur en onze 
              monteurs volgen regelmatig bijscholing.
            </p>
            <p className="text-white/60 mb-4">
              Wij zijn BOVAG erkend met 168 reviews en 5 sterren op Google reviews. Of het nu gaat om een kleine reparatie 
              of een grote onderhoudsbeurt, wij staan voor u klaar. Wij werken met originele onderdelen of A-merk 
              alternatieven van hoge kwaliteit. Alle reparaties worden uitgevoerd volgens fabrieksvoorschriften.
            </p>
            <p className="text-white/60">
              Specialisaties: distributieriem vervangen, ketting vervangen, koppeling vervangen, remblokken vervangen, 
              en alle andere auto reparaties. Maak direct een afspraak voor vakkundige service in Cuijk.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
