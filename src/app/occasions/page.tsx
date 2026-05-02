import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AutoInruilForm from '@/components/AutoInruilForm';
import { vweCars } from '@/data/vwe-cars';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Occasions Cuijk | 1ste Eigenaar Auto\'s & Tweedehands',
  description: 'Ruim aanbod occasions in Cuijk met voornamelijk 1ste eigenaar autos. Tweedehands auto\'s van alle merken met garantie. RDW erkend. 168 reviews, 5 sterren.',
  keywords: 'occasions Cuijk, 1ste eigenaar autos, 1e eigenaar, eerste eigenaar, tweedehands auto\'s, gebruikte auto\'s, alle merken, auto kopen, betrouwbare occasions, RDW occasions',
  openGraph: {
    title: 'Occasions Cuijk | Tweedehands & Gebruikte Auto\'s',
    description: 'Ruim aanbod tweedehands en gebruikte auto\'s. Alle merken, garantie. 168 reviews, 5 sterren.',
    type: 'website',
  },
};

export default function OccasionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-[#0a0a0a] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
                Ons aanbod
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Onze <span className="text-[#c8102e]">Occasions</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto">
                Bekijk ons actuele aanbod occasions. Alle auto&apos;s worden geleverd met garantie en zijn uitgebreid gecontroleerd.
              </p>
            </div>
          </div>
        </section>

        {/* Occasions Grid */}
        <section className="py-12 lg:py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {vweCars.map((car) => (
                <Link
                  key={car.id}
                  href={`/occasions/${car.id}`}
                  className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c8102e]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#c8102e]/5"
                >
                  {/* Afbeelding */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                      alt={`${car.merk} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                    
                    {/* Prijs badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#c8102e] text-white px-4 py-2 rounded-lg font-bold text-lg">
                        € {car.prijs.toLocaleString('nl-NL')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c8102e] transition-colors">
                      {car.merk} {car.model}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{car.transmissie} | {car.carrosserie}</p>
                    
                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-white/40 block text-xs">Bouwjaar</span>
                        <span className="text-white font-medium">{car.bouwjaar}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-xs">KM-stand</span>
                        <span className="text-white font-medium">{car.kilometerstand?.toLocaleString('nl-NL') || '-'}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-xs">Brandstof</span>
                        <span className="text-white font-medium">{car.brandstof}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Tweedehands auto&apos;s kopen in Cuijk - Voornamelijk 1ste eigenaar</h2>
                <p className="text-white/60 mb-4">
                  Bij Car Store Cuijk vindt u een ruim aanbod betrouwbare tweedehands auto&apos;s en gebruikte auto&apos;s. 
                  Wij specialiseren ons in 1ste eigenaar autos - auto&apos;s die nieuw zijn gekocht door één eigenaar. 
                  Van compacte stadsauto&apos;s tot ruime gezinsauto&apos;s en luxe modellen van alle merken. 
                  Al onze 1e eigenaar autos worden grondig gecontroleerd voordat ze in de verkoop gaan.
                </p>
                <p className="text-white/60">
                  Wij zijn RDW erkend met 168 reviews en 5 sterren op Google reviews. Dat betekent garantie op uw aankoop 
                  en vertrouwde service. Daarnaast bieden wij mogelijkheden voor financiering en verzekering.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Auto inkoop - Wij kopen voornamelijk 1ste eigenaar autos</h2>
                <p className="text-white/60 mb-4">
                  Wilt u uw huidige auto verkopen of inruilen? Wij bieden een eerlijke prijs voor uw auto, 
                  met name voor 1ste eigenaar autos. Auto inkoop van alle merken - van Volkswagen en BMW tot Audi en Mercedes.
                  Heeft u een eerste eigenaar auto? Neem contact met ons op voor een vrijblijvende taxatie.
                </p>
                <p className="text-white/60">
                  Ook voor auto inkoop bent u bij ons aan het juiste adres. Wij kopen voornamelijk 1e eigenaar autos in 
                  van particulieren en bedrijven in heel Nederland. Direct geld en snelle afhandeling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inruil Formulier Sectie */}
        <section className="py-20 lg:py-32 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Uw auto inruilen?</h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Wilt u uw huidige auto inruilen? Vul het formulier in en wij nemen contact met u op.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <AutoInruilForm defaultType="Auto inruilen" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
