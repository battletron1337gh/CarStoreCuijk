import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VerkochteAutosClient from './VerkochteAutosClient';
import { loadVweCarsFromFile } from '@/data/vwe-cars-static';

export const metadata = {
  title: 'Verkochte Auto\'s | Car Store Cuijk',
  description: 'Bekijk onze recent verkochte occasions. Deze auto\'s zijn verkocht aan tevreden klanten.',
};

export default async function VerkochteAutosPage() {
  const cars = await loadVweCarsFromFile();
  const verkochteAutos = cars.filter(car => car.status === 'verkocht');
  
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
                Verkochte <span className="text-[#c8102e]">Auto's</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto">
                Deze auto's zijn recent verkocht aan tevreden klanten. 
                Bekijk ons huidige aanbod voor vergelijkbare occasions.
              </p>
            </div>
          </div>
        </section>

        {/* Verkochte Auto's Filter */}
        <section className="py-12 lg:py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VerkochteAutosClient cars={verkochteAutos} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Op zoek naar een vergelijkbare auto?</h2>
              <p className="text-white/60 mb-8">
                Bekijk ons actuele aanbod occasions. Wij hebben regelmatig nieuwe auto's in de showroom.
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
