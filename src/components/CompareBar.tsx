'use client';

import Link from 'next/link';
import { X, Scale, ArrowRight } from 'lucide-react';
import { useCompare } from '@/context/CompareContext';

export default function CompareBar() {
  const { selectedCars, removeCar, clearCars } = useCompare();

  if (selectedCars.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium flex-shrink-0">
              <Scale className="w-4 h-4 text-[#c8102e]" />
              <span className="hidden sm:inline">Vergelijk</span>
              <span className="bg-[#c8102e] text-white text-xs px-2 py-0.5 rounded-full">
                {selectedCars.length}
              </span>
            </div>
            {selectedCars.map(car => (
              <div
                key={car.id}
                className="flex items-center gap-2 bg-[#0a0a0a] border border-white/10 rounded-lg pl-2 pr-1 py-1 flex-shrink-0"
              >
                <span className="text-white text-sm truncate max-w-[120px] sm:max-w-[180px]">
                  {car.merk} {car.model}
                </span>
                <button
                  onClick={() => removeCar(car.id)}
                  className="p-1 hover:bg-white/10 rounded-md transition-colors"
                  aria-label="Verwijder uit vergelijking"
                >
                  <X className="w-3.5 h-3.5 text-white/50" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={clearCars}
              className="text-white/50 hover:text-white text-sm transition-colors hidden sm:block"
            >
              Wissen
            </button>
            <Link
              href="/vergelijk"
              className="flex items-center gap-1.5 bg-[#c8102e] hover:bg-[#a00d24] text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all"
            >
              Vergelijk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
