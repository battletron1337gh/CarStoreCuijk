import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { vweCars } from '@/data/vwe-cars';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verkochte Auto\'s | Car Store Cuijk',
  description: 'Bekijk onze recent verkochte auto\'s. Car Store Cuijk heeft al honderden tevreden klanten. RDW erkend met 168 reviews, 5 sterren.',
  keywords: 'verkochte auto\'s, recent verkocht, auto verkocht Cuijk, tevreden klanten, social proof',
  openGraph: {
    title: 'Verkochte Auto\'s | Car Store Cuijk',
    description: 'Bekijk onze recent verkochte auto\'s. Al honderden tevreden klanten.',
    type: 'website',
  },
};

export default function VerkochteAutosPage() {
  const verkochteAutos = vweCars.filter(car => car.status === 'verkocht');
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-[#0a0a0a] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
                Social Proof
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Verkochte <span className="text-[#c8102e]">Auto\'s</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto">
                Deze auto\'s zijn recent verkocht aan tevreden klanten. 
                Bekijk ons huidige aanbod voor vergelijkbare occasions.
              </p>
            </div>
          </div>
        </section>

        {/* Verkochte Auto\'s Grid */}
        <section className="py-12 lg:py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {verkochteAutos.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Geen verkochte auto\'s gevonden</h2>
                <p className="text-white/50 max-w-md mx-auto mb-8">
                  Momenteel zijn er geen verkochte auto\'s in onze database. 
                  Bekijk ons actuele aanbod occasions.
                </p>
                <a
                  href="/occasions"
                  className="inline-flex items-center gap-2 bg-[#c8102e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a00d24] transition-colors"
                >
                  Bekijk Occasions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {verkochteAutos.map((car) => (
                  <div
                    key={car.id}
                    className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5"
                  >
                    {/* Afbeelding met grijze overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                        alt={`${car.merk} ${car.model}`}
                        className="w-full h-full object-cover grayscale"
                      />
                      {/* Grijze overlay */}
                      <div className="absolute inset-0 bg-[#0a0a0a]/60" />
                      
                      {/* VERKOCHT Badge */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#c8102e] text-white px-6 py-3 rounded-xl font-bold text-xl shadow-2xl transform -rotate-12 border-4 border-white/20">
                          VERKOCHT
                        </div>
                      </div>
                      
                      {/* Prijs badge - doorgehaald */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/10 text-white/50 px-4 py-2 rounded-lg font-bold text-lg line-through">
                          € {car.prijs.toLocaleString('nl-NL')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white/60 mb-2">
                        {car.merk} {car.model}
                      </h3>
                      <p className="text-white/40 text-sm mb-4">{car.transmissie} | {car.carrosserie}</p>
                      
                      {/* Specs */}
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-white/30 block text-xs">Bouwjaar</span>
                          <span className="text-white/50 font-medium">{car.bouwjaar}</span>
                        </div>
                        <div>
                          <span className="text-white/30 block text-xs">KM-stand</span>
                          <span className="text-white/50 font-medium">{car.kilometerstand?.toLocaleString('nl-NL') || '-'}</span>
                        </div>
                        <div>
                          <span className="text-white/30 block text-xs">Brandstof</span>
                          <span className="text-white/50 font-medium">{car.brandstof}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Op zoek naar een vergelijkbare auto?</h2>
              <p className="text-white/60 mb-8">
                Bekijk ons actuele aanbod occasions. Wij hebben regelmatig nieuwe auto\'s in de showroom.
              </p>
              <a
                href="/occasions"
                className="inline-flex items-center gap-2 bg-[#c8102e] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#a00d24] transition-all hover:scale-105"
              >
                Bekijk Huidig Aanbod
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
