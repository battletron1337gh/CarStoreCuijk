'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import CarCard from '@/components/CarCard';
import { Car } from '@/types';

// Dual Range Slider Component
function DualRangeSlider({ 
  min, 
  max, 
  value, 
  onChange,
  label,
  formatValue
}: { 
  min: number; 
  max: number; 
  value: [number, number]; 
  onChange: (value: [number, number]) => void;
  label: string;
  formatValue: (val: number) => string;
}) {
  const [localValue, setLocalValue] = useState(value);
  const [isDragging, setIsDragging] = useState<number | null>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const range = max - min;
  const leftPercent = ((localValue[0] - min) / range) * 100;
  const rightPercent = ((localValue[1] - min) / range) * 100;

  const handleMouseDown = useCallback((index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(index);
  }, []);

  const handleTouchStart = useCallback((index: number) => (e: React.TouchEvent) => {
    setIsDragging(index);
  }, []);

  useEffect(() => {
    if (isDragging === null) return;

    const handleMove = (clientX: number, sliderRect: DOMRect) => {
      const percent = Math.max(0, Math.min(1, (clientX - sliderRect.left) / sliderRect.width));
      const newValue = Math.round(min + percent * range);
      
      setLocalValue(prev => {
        const newValues: [number, number] = [...prev] as [number, number];
        if (isDragging === 0) {
          newValues[0] = Math.min(newValue, prev[1] - 100);
        } else {
          newValues[1] = Math.max(newValue, prev[0] + 100);
        }
        return newValues;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const slider = document.getElementById(`slider-${label}`);
      if (slider) {
        handleMove(e.clientX, slider.getBoundingClientRect());
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const slider = document.getElementById(`slider-${label}`);
      if (slider && e.touches[0]) {
        handleMove(e.touches[0].clientX, slider.getBoundingClientRect());
      }
    };

    const handleEnd = () => {
      setIsDragging(null);
      onChange(localValue);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, min, max, range, label, localValue, onChange]);

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="text-white/60">{label}</span>
        <span className="text-white font-medium">
          {formatValue(localValue[0])} - {formatValue(localValue[1])}
        </span>
      </div>
      <div 
        id={`slider-${label}`}
        className="relative h-2 bg-[#0a0a0a] rounded-full cursor-pointer"
      >
        {/* Track background */}
        <div className="absolute inset-0 rounded-full bg-white/10" />
        
        {/* Active track */}
        <div 
          className="absolute h-full rounded-full bg-[#c8102e]"
          style={{ 
            left: `${leftPercent}%`, 
            right: `${100 - rightPercent}%` 
          }}
        />
        
        {/* Left handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          style={{ left: `calc(${leftPercent}% - 10px)` }}
          onMouseDown={handleMouseDown(0)}
          onTouchStart={handleTouchStart(0)}
        />
        
        {/* Right handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          style={{ left: `calc(${rightPercent}% - 10px)` }}
          onMouseDown={handleMouseDown(1)}
          onTouchStart={handleTouchStart(1)}
        />
      </div>
    </div>
  );
}

interface OccasionsClientProps {
  initialCars: Car[];
}

export default function OccasionsClient({ initialCars }: OccasionsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMerk, setSelectedMerk] = useState('');
  const [selectedBrandstof, setSelectedBrandstof] = useState('');
  const [selectedTransmissie, setSelectedTransmissie] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Price range from data
  const { minPrice, maxPrice } = useMemo(() => {
    if (initialCars.length === 0) return { minPrice: 0, maxPrice: 100000 };
    const prices = initialCars.map(c => c.prijs);
    return {
      minPrice: Math.floor(Math.min(...prices) / 1000) * 1000,
      maxPrice: Math.ceil(Math.max(...prices) / 1000) * 1000
    };
  }, [initialCars]);

  const [prijsRange, setPrijsRange] = useState<[number, number]>([minPrice, maxPrice]);

  // Get unique values for filters
  const merken = useMemo(() => {
    const unique = [...new Set(initialCars.map(c => c.merk))].sort();
    return unique;
  }, [initialCars]);

  const brandstoffen = useMemo(() => {
    const unique = [...new Set(initialCars.map(c => c.brandstof))].sort();
    return unique;
  }, [initialCars]);

  const transmissies = useMemo(() => {
    const unique = [...new Set(initialCars.map(c => c.transmissie))].sort();
    return unique;
  }, [initialCars]);

  // Filter cars
  const filteredCars = useMemo(() => {
    return initialCars.filter(car => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const match = 
          car.merk.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.variant?.toLowerCase().includes(query) ||
          car.kenteken?.toLowerCase().includes(query);
        if (!match) return false;
      }

      // Merk filter
      if (selectedMerk && car.merk !== selectedMerk) return false;

      // Brandstof filter
      if (selectedBrandstof && car.brandstof !== selectedBrandstof) return false;

      // Transmissie filter
      if (selectedTransmissie && car.transmissie !== selectedTransmissie) return false;

      // Prijs filters
      if (car.prijs < prijsRange[0]) return false;
      if (car.prijs > prijsRange[1]) return false;

      return true;
    });
  }, [initialCars, searchQuery, selectedMerk, selectedBrandstof, selectedTransmissie, prijsRange]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedMerk('');
    setSelectedBrandstof('');
    setSelectedTransmissie('');
    setPrijsRange([minPrice, maxPrice]);
  };

  // Count active filters
  const activeFilterCount = [
    searchQuery,
    selectedMerk,
    selectedBrandstof,
    selectedTransmissie,
    prijsRange[0] !== minPrice || prijsRange[1] !== maxPrice ? 'prijs' : ''
  ].filter(Boolean).length;

  return (
    <div>
      {/* Search and Filter Toggle */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Zoek op merk, model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#c8102e]"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white hover:border-[#c8102e] transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-[#c8102e] text-white text-sm rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Merk */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Merk</label>
                <select
                  value={selectedMerk}
                  onChange={(e) => setSelectedMerk(e.target.value)}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#c8102e]"
                >
                  <option value="">Alle merken</option>
                  {merken.map(merk => (
                    <option key={merk} value={merk}>{merk}</option>
                  ))}
                </select>
              </div>

              {/* Brandstof */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Brandstof</label>
                <select
                  value={selectedBrandstof}
                  onChange={(e) => setSelectedBrandstof(e.target.value)}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#c8102e]"
                >
                  <option value="">Alle brandstoffen</option>
                  {brandstoffen.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Transmissie */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Transmissie</label>
                <select
                  value={selectedTransmissie}
                  onChange={(e) => setSelectedTransmissie(e.target.value)}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#c8102e]"
                >
                  <option value="">Alle transmissies</option>
                  {transmissies.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Prijs Range Slider */}
              <div className="flex items-end">
                <DualRangeSlider
                  min={minPrice}
                  max={maxPrice}
                  value={prijsRange}
                  onChange={setPrijsRange}
                  label="Prijs"
                  formatValue={(val) => `€${val.toLocaleString('nl-NL')}`}
                />
              </div>
            </div>

            {/* Clear Filters */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="mt-6 flex items-center gap-2 text-[#c8102e] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
                Wis alle filters
              </button>
            )}
          </motion.div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-white/50">
          <span className="font-semibold text-white">{filteredCars.length}</span> occasions gevonden
        </p>
      </div>

      {/* Cars Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#1a1a1a] rounded-2xl border border-white/10">
          <div className="w-20 h-20 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-white/40" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Geen resultaten gevonden</h3>
          <p className="text-white/50 mb-4">Pas uw filters aan of probeer een andere zoekterm.</p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-[#c8102e] text-white rounded-xl hover:bg-[#a00d24] transition-colors"
          >
            Reset alle filters
          </button>
        </div>
      )}
    </div>
  );
}
