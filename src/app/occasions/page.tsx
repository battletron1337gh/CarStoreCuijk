import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Occasions | Car Store Cuijk - Ruim Aanbod Tweedehands Auto\'s',
  description: 'Bekijk ons ruime aanbod occasions in Cuijk. Betrouwbare tweedehands auto\'s met garantie. Auto inkoop, verkoop en inruil mogelijk. 7 dagen per week open.',
  keywords: 'occasions Cuijk, tweedehands auto, auto kopen, auto verkopen, auto inruilen, occasions Nederland, betrouwbare occasions, BOVAG occasions',
  openGraph: {
    title: 'Occasions | Car Store Cuijk',
    description: 'Ruim aanbod betrouwbare occasions met garantie. Bekijk onze voorraad online.',
    type: 'website',
  },
};

export default function OccasionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 lg:pt-28 bg-[#0a0a0a]">
        {/* Page Header */}
        <div className="bg-[#0d0d0d] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-white">Onze Occasions</h1>
            <p className="text-white/50 mt-4 text-lg max-w-2xl">
              Bekijk ons actuele aanbod occasions. Alle auto\'s worden geleverd met garantie en zijn uitgebreid gecontroleerd.
            </p>
          </div>
        </div>

        {/* VWE Voorraadlijst Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
            <div id="vwe-voorraad" className="min-h-[600px] flex items-center justify-center">
              {/* VWE iframe wordt hier geïnjecteerd */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c8102e]/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-[#c8102e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Voorraad wordt geladen</h2>
                <p className="text-white/50">Onze occasions worden opgehaald uit ons systeem...</p>
                <p className="text-white/30 text-sm mt-4">
                  Werkt het niet? <a href="https://www.carstorecuijk.nl" className="text-[#c8102e] hover:underline">Bekijk hier onze voorraad</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <section className="bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Occasions kopen in Cuijk</h2>
                <p className="text-white/60 mb-4">
                  Bij Car Store Cuijk vindt u een ruim aanbod betrouwbare occasions. Van compacte stadsauto\'s tot ruime gezinsauto\'s 
                  en luxe modellen. Al onze auto\'s worden grondig gecontroleerd voordat ze in de verkoop gaan.
                </p>
                <p className="text-white/60">
                  Wij zijn BOVAG erkend, wat betekent dat u garantie krijgt op uw aankoop. Daarnaast bieden wij 
                  mogelijkheden voor financiering en verzekering.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Auto verkopen of inruilen</h2>
                <p className="text-white/60 mb-4">
                  Wilt u uw huidige auto verkopen of inruilen? Wij bieden een eerlijke prijs voor uw auto, 
                  ongeacht het merk of model. Neem contact met ons op voor een vrijblijvende taxatie.
                </p>
                <p className="text-white/60">
                  Ook voor auto inkoop bent u bij ons aan het juiste adres. Wij kopen auto\'s in van particulieren 
                  en bedrijven in heel Nederland.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
