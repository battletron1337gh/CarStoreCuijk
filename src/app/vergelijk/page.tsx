'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, Scale, CheckCircle, Calendar, Gauge, Fuel, Settings2, Car, Palette, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCompare } from '@/context/CompareContext';
import { motion } from 'framer-motion';
import CinematicServiceHero from '@/components/CinematicServiceHero';
import CinematicReveal from '@/components/CinematicReveal';

export default function VergelijkPage() {
  const { selectedCars, removeCar, clearCars } = useCompare();
  const router = useRouter();

  useEffect(() => {
    if (selectedCars.length === 0) {
      router.replace('/occasions');
    }
  }, [selectedCars.length, router]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(price);

  const formatKm = (km: number) => new Intl.NumberFormat('nl-NL').format(km);

  if (selectedCars.length === 0) return null;

  const specRows = [
    { label: 'Prijs', icon: null, getValue: (car: typeof selectedCars[0]) => formatPrice(car.prijs) },
    { label: 'Bouwjaar', icon: Calendar, getValue: (car: typeof selectedCars[0]) => car.bouwjaar },
    { label: 'KM-stand', icon: Gauge, getValue: (car: typeof selectedCars[0]) => `${formatKm(car.kilometerstand)} km` },
    { label: 'Brandstof', icon: Fuel, getValue: (car: typeof selectedCars[0]) => car.brandstof },
    { label: 'Transmissie', icon: Settings2, getValue: (car: typeof selectedCars[0]) => car.transmissie },
    { label: 'Carrosserie', icon: Car, getValue: (car: typeof selectedCars[0]) => car.carrosserie || '-' },
    { label: 'Kleur', icon: Palette, getValue: (car: typeof selectedCars[0]) => car.kleur || '-' },
    { label: 'Kenteken', icon: null, getValue: (car: typeof selectedCars[0]) => car.kenteken?.toUpperCase() || '-' },
    { label: 'APK tot', icon: null, getValue: (car: typeof selectedCars[0]) => car.apk || '-' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pb-24">
        <CinematicServiceHero
          badge={{ icon: <Scale className="w-4 h-4" />, text: "Occasions vergelijken" }}
          title="Auto Vergelijken"
          highlightWord="Vergelijken"
          subtitle="Vergelijk eenvoudig meerdere occasions op specificaties, prijs en uitrusting."
        />

        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <Link
                href="/occasions"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8102e] transition-colors text-sm mb-3"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar occasions
              </Link>
              <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
                <Scale className="w-8 h-8 text-[#c8102e]" />
                Auto vergelijken
              </h2>
            </div>
            <button
              onClick={clearCars}
              className="text-white/50 hover:text-white text-sm transition-colors self-start sm:self-auto"
            >
              Alles wissen
            </button>
          </div>

          {/* Cards table */}
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[600px]">
              {/* Header row with car cards */}
              <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `160px repeat(${selectedCars.length}, 1fr)` }}>
                <div className="text-white/40 text-sm font-medium flex items-end pb-2">Specificatie</div>
                {selectedCars.map(car => (
                  <div key={car.id} className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden">
                    <Link href={`/occasions/${car.id}`} className="block group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                          alt={`${car.merk} ${car.model}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="300px"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#c8102e] transition-colors line-clamp-1">
                          {car.merk} {car.model}
                        </h3>
                        <p className="text-sm text-white/50 line-clamp-1">{car.variant}</p>
                      </div>
                    </Link>
                    <button
                      onClick={() => removeCar(car.id)}
                      className="w-full py-2 bg-[#0a0a0a] text-white/50 hover:text-white text-sm flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Verwijderen
                    </button>
                  </div>
                ))}
              </div>

              {/* Spec rows */}
              <div className="space-y-2">
                {specRows.map((row, idx) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="grid gap-4 bg-[#1a1a1a]/50 rounded-xl"
                    style={{ gridTemplateColumns: `160px repeat(${selectedCars.length}, 1fr)` }}
                  >
                    <div className="p-4 text-white/50 text-sm font-medium flex items-center gap-2">
                      {row.icon && <row.icon className="w-4 h-4 text-[#c8102e]" />}
                      {row.label}
                    </div>
                    {selectedCars.map(car => (
                      <div key={car.id} className="p-4 text-white font-semibold">
                        {row.getValue(car)}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="grid gap-4 mt-6 bg-[#1a1a1a]/50 rounded-xl" style={{ gridTemplateColumns: `160px repeat(${selectedCars.length}, 1fr)` }}>
                <div className="p-4 text-white/50 text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#c8102e]" />
                  Uitrusting
                </div>
                {selectedCars.map(car => (
                  <div key={car.id} className="p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {car.features.slice(0, 8).map((feature, i) => (
                        <span key={i} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded border border-white/10">
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 8 && (
                        <span className="text-xs text-white/40 px-1">+{car.features.length - 8}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="grid gap-4 mt-6" style={{ gridTemplateColumns: `160px repeat(${selectedCars.length}, 1fr)` }}>
                <div />
                {selectedCars.map(car => (
                  <Link
                    key={car.id}
                    href={`/occasions/${car.id}`}
                    className="bg-[#c8102e] hover:bg-[#a00d24] text-white text-center py-3 rounded-xl font-semibold transition-all"
                  >
                    Bekijk auto
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        </CinematicReveal>
      </main>
      <Footer />
    </>
  );
}
