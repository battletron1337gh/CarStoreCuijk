'use client';

import { useState, useMemo, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ChevronDown, 
  Filter,
  RotateCcw
} from 'lucide-react';
import CarCard from '@/components/CarCard';
import { useCars } from '@/hooks/useCars';
import { Car } from '@/types';

interface FilterState {
  merk: string;
  model: string;
  minPrijs: number;
  maxPrijs: number;
  minBouwjaar: number;
  maxBouwjaar: number;
  minKm: number;
  maxKm: number;
  brandstoffen: string[];
  transmissies: string[];
}

const brandstofOptions = ['Benzine', 'Diesel', 'Elektrisch', 'Hybride', 'LPG', 'CNG'];
const transmissieOptions = ['Automaat', 'Handmatig', 'CVT'];

function OccasionsFilterContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { cars: allCars, isLoading } = useCars();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    if (allCars.length > 0) {
      setCars(allCars.filter(c => c.status !== 'verkocht'));
    }
  }, [allCars]);

  // Get available values from actual car data
  const availableData = useMemo(() => {
    if (cars.length === 0) {
      return {
        merken: [] as string[],
        minPrijs: 0,
        maxPrijs: 100000,
        minBouwjaar: 2000,
        maxBouwjaar: new Date().getFullYear(),
        minKm: 0,
        maxKm: 300000,
      };
    }
    const merken = [...new Set(cars.map(c => c.merk))].sort();
    const prijzen = cars.map(c => c.prijs);
    const bouwjaren = cars.map(c => c.bouwjaar);
    const kmStanden = cars.map(c => c.kilometerstand);
    
    return {
      merken,
      minPrijs: Math.min(...prijzen),
      maxPrijs: Math.max(...prijzen),
      minBouwjaar: Math.min(...bouwjaren),
      maxBouwjaar: Math.max(...bouwjaren),
      minKm: Math.min(...kmStanden),
      maxKm: Math.max(...kmStanden),
    };
  }, [cars]);

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>(() => {
    return {
      merk: searchParams.get('merk') || '',
      model: searchParams.get('model') || '',
      minPrijs: parseInt(searchParams.get('prijs_min') || String(availableData.minPrijs)),
      maxPrijs: parseInt(searchParams.get('prijs_max') || String(availableData.maxPrijs)),
      minBouwjaar: parseInt(searchParams.get('bouwjaar_min') || String(availableData.minBouwjaar)),
      maxBouwjaar: parseInt(searchParams.get('bouwjaar_max') || String(availableData.maxBouwjaar)),
      minKm: parseInt(searchParams.get('km_min') || String(availableData.minKm)),
      maxKm: parseInt(searchParams.get('km_max') || String(availableData.maxKm)),
      brandstoffen: searchParams.get('brandstof')?.split(',').filter(Boolean) || [],
      transmissies: searchParams.get('transmissie')?.split(',').filter(Boolean) || [],
    };
  });

  const [searchQuery, setSearchQuery] = useState(searchParams.get('zoek') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sorteer') || 'relevantie');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get available models based on selected merk
  const availableModels = useMemo(() => {
    if (!filters.merk || cars.length === 0) return [];
    const models = cars
      .filter(c => c.merk === filters.merk && c.status !== 'verkocht')
      .map(c => c.model);
    return [...new Set(models)].sort();
  }, [filters.merk, cars]);

  // Update URL when filters change
  const updateURL = useCallback((newFilters: FilterState, newSort: string, newSearch: string) => {
    const params = new URLSearchParams();
    
    if (newFilters.merk) params.set('merk', newFilters.merk);
    if (newFilters.model) params.set('model', newFilters.model);
    if (newFilters.minPrijs !== availableData.minPrijs) params.set('prijs_min', String(newFilters.minPrijs));
    if (newFilters.maxPrijs !== availableData.maxPrijs) params.set('prijs_max', String(newFilters.maxPrijs));
    if (newFilters.minBouwjaar !== availableData.minBouwjaar) params.set('bouwjaar_min', String(newFilters.minBouwjaar));
    if (newFilters.maxBouwjaar !== availableData.maxBouwjaar) params.set('bouwjaar_max', String(newFilters.maxBouwjaar));
    if (newFilters.minKm !== availableData.minKm) params.set('km_min', String(newFilters.minKm));
    if (newFilters.maxKm !== availableData.maxKm) params.set('km_max', String(newFilters.maxKm));
    if (newFilters.brandstoffen.length > 0) params.set('brandstof', newFilters.brandstoffen.join(','));
    if (newFilters.transmissies.length > 0) params.set('transmissie', newFilters.transmissies.join(','));
    if (newSort !== 'relevantie') params.set('sorteer', newSort);
    if (newSearch) params.set('zoek', newSearch);

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.replace(newUrl, { scroll: false });
  }, [pathname, router, availableData]);

  // Filter cars
  const filteredCars = useMemo(() => {
    let result = [...cars].filter(c => c.status !== 'verkocht');

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(car =>
        car.merk.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query) ||
        car.variant.toLowerCase().includes(query) ||
        car.brandstof.toLowerCase().includes(query) ||
        (car.kenteken && car.kenteken.toLowerCase().includes(query))
      );
    }

    // Apply filters
    if (filters.merk) {
      result = result.filter(car => car.merk === filters.merk);
    }
    if (filters.model) {
      result = result.filter(car => car.model === filters.model);
    }
    if (filters.brandstoffen.length > 0) {
      result = result.filter(car => filters.brandstoffen.includes(car.brandstof));
    }
    if (filters.transmissies.length > 0) {
      result = result.filter(car => filters.transmissies.includes(car.transmissie));
    }
    
    result = result.filter(car => 
      car.prijs >= filters.minPrijs && 
      car.prijs <= filters.maxPrijs &&
      car.bouwjaar >= filters.minBouwjaar &&
      car.bouwjaar <= filters.maxBouwjaar &&
      car.kilometerstand >= filters.minKm &&
      car.kilometerstand <= filters.maxKm
    );

    // Sort
    switch (sortBy) {
      case 'prijs-oplopend':
        result.sort((a, b) => a.prijs - b.prijs);
        break;
      case 'prijs-aflopend':
        result.sort((a, b) => b.prijs - a.prijs);
        break;
      case 'bouwjaar-nieuw':
        result.sort((a, b) => b.bouwjaar - a.bouwjaar);
        break;
      case 'bouwjaar-oud':
        result.sort((a, b) => a.bouwjaar - b.bouwjaar);
        break;
      case 'km-oplopend':
        result.sort((a, b) => a.kilometerstand - b.kilometerstand);
        break;
      case 'km-aflopend':
        result.sort((a, b) => b.kilometerstand - a.kilometerstand);
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery, cars]);

  // Update URL when filters change
  useEffect(() => {
    updateURL(filters, sortBy, searchQuery);
  }, [filters, sortBy, searchQuery, updateURL]);

  // Handle merk change - reset model
  const handleMerkChange = (merk: string) => {
    setFilters(prev => ({ ...prev, merk, model: '' }));
  };

  // Toggle checkbox filter
  const toggleBrandstof = (brandstof: string) => {
    setFilters(prev => ({
      ...prev,
      brandstoffen: prev.brandstoffen.includes(brandstof)
        ? prev.brandstoffen.filter(b => b !== brandstof)
        : [...prev.brandstoffen, brandstof]
    }));
  };

  const toggleTransmissie = (transmissie: string) => {
    setFilters(prev => ({
      ...prev,
      transmissies: prev.transmissies.includes(transmissie)
        ? prev.transmissies.filter(t => t !== transmissie)
        : [...prev.transmissies, transmissie]
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      merk: '',
      model: '',
      minPrijs: availableData.minPrijs,
      maxPrijs: availableData.maxPrijs,
      minBouwjaar: availableData.minBouwjaar,
      maxBouwjaar: availableData.maxBouwjaar,
      minKm: availableData.minKm,
      maxKm: availableData.maxKm,
      brandstoffen: [],
      transmissies: [],
    });
    setSearchQuery('');
    setSortBy('relevantie');
  };

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.merk) count++;
    if (filters.model) count++;
    if (filters.minPrijs !== availableData.minPrijs) count++;
    if (filters.maxPrijs !== availableData.maxPrijs) count++;
    if (filters.minBouwjaar !== availableData.minBouwjaar) count++;
    if (filters.maxBouwjaar !== availableData.maxBouwjaar) count++;
    if (filters.minKm !== availableData.minKm) count++;
    if (filters.maxKm !== availableData.maxKm) count++;
    if (filters.brandstoffen.length > 0) count++;
    if (filters.transmissies.length > 0) count++;
    if (searchQuery) count++;
    return count;
  }, [filters, searchQuery, availableData]);

  // Active filter badges
  const activeFiltersList = useMemo(() => {
    const list: { key: string; label: string; onRemove: () => void }[] = [];
    
    if (filters.merk) {
      list.push({ key: 'merk', label: filters.merk, onRemove: () => handleMerkChange('') });
    }
    if (filters.model) {
      list.push({ key: 'model', label: filters.model, onRemove: () => setFilters(prev => ({ ...prev, model: '' })) });
    }
    filters.brandstoffen.forEach(b => {
      list.push({ key: `brandstof-${b}`, label: b, onRemove: () => toggleBrandstof(b) });
    });
    filters.transmissies.forEach(t => {
      list.push({ key: `transmissie-${t}`, label: t, onRemove: () => toggleTransmissie(t) });
    });
    if (filters.minPrijs !== availableData.minPrijs || filters.maxPrijs !== availableData.maxPrijs) {
      list.push({ 
        key: 'prijs', 
        label: `€${filters.minPrijs.toLocaleString()} - €${filters.maxPrijs.toLocaleString()}`, 
        onRemove: () => setFilters(prev => ({ ...prev, minPrijs: availableData.minPrijs, maxPrijs: availableData.maxPrijs })) 
      });
    }
    if (filters.minBouwjaar !== availableData.minBouwjaar || filters.maxBouwjaar !== availableData.maxBouwjaar) {
      list.push({ 
        key: 'bouwjaar', 
        label: `${filters.minBouwjaar} - ${filters.maxBouwjaar}`, 
        onRemove: () => setFilters(prev => ({ ...prev, minBouwjaar: availableData.minBouwjaar, maxBouwjaar: availableData.maxBouwjaar })) 
      });
    }
    if (searchQuery) {
      list.push({ key: 'zoek', label: `"${searchQuery}"`, onRemove: () => setSearchQuery('') });
    }
    
    return list;
  }, [filters, searchQuery, availableData]);

  // Format price for display
  const formatPrice = (price: number) => `€${price.toLocaleString('nl-NL')}`;

  // Filter Sidebar Component
  const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`space-y-6 ${isMobile ? 'p-6' : ''}`}>
      {/* Header for mobile */}
      {isMobile && (
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#c8102e]" />
            Filters
          </h2>
          <button 
            onClick={() => setShowMobileFilters(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>
      )}

      {/* Merk */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">Merk</label>
        <div className="relative">
          <select
            value={filters.merk}
            onChange={(e) => handleMerkChange(e.target.value)}
            className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#c8102e] transition-colors"
          >
            <option value="">Alle merken</option>
            {availableData.merken.map((merk) => (
              <option key={merk} value={merk}>{merk}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
        </div>
      </div>

      {/* Model - only show when merk is selected */}
      <AnimatePresence>
        {filters.merk && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <label className="block text-sm font-semibold text-white mb-3">Model</label>
            <div className="relative">
              <select
                value={filters.model}
                onChange={(e) => setFilters(prev => ({ ...prev, model: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-[#c8102e] transition-colors"
              >
                <option value="">Alle modellen</option>
                {availableModels.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prijs Range */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Prijs: {formatPrice(filters.minPrijs)} - {formatPrice(filters.maxPrijs)}
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min={availableData.minPrijs}
            max={availableData.maxPrijs}
            step={500}
            value={filters.minPrijs}
            onChange={(e) => setFilters(prev => ({ ...prev, minPrijs: Math.min(parseInt(e.target.value), prev.maxPrijs - 500) }))}
            className="w-full accent-[#c8102e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min={availableData.minPrijs}
            max={availableData.maxPrijs}
            step={500}
            value={filters.maxPrijs}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrijs: Math.max(parseInt(e.target.value), prev.minPrijs + 500) }))}
            className="w-full accent-[#c8102e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Bouwjaar Range */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Bouwjaar: {filters.minBouwjaar} - {filters.maxBouwjaar}
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min={availableData.minBouwjaar}
            max={availableData.maxBouwjaar}
            value={filters.minBouwjaar}
            onChange={(e) => setFilters(prev => ({ ...prev, minBouwjaar: Math.min(parseInt(e.target.value), prev.maxBouwjaar - 1) }))}
            className="w-full accent-[#c8102e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min={availableData.minBouwjaar}
            max={availableData.maxBouwjaar}
            value={filters.maxBouwjaar}
            onChange={(e) => setFilters(prev => ({ ...prev, maxBouwjaar: Math.max(parseInt(e.target.value), prev.minBouwjaar + 1) }))}
            className="w-full accent-[#c8102e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* KM Stand Range */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Kilometerstand: {filters.minKm.toLocaleString()} - {filters.maxKm.toLocaleString()} km
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min={availableData.minKm}
            max={availableData.maxKm}
            step={1000}
            value={filters.minKm}
            onChange={(e) => setFilters(prev => ({ ...prev, minKm: Math.min(parseInt(e.target.value), prev.maxKm - 1000) }))}
            className="w-full accent-[#c8102e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min={availableData.minKm}
            max={availableData.maxKm}
            step={1000}
            value={filters.maxKm}
            onChange={(e) => setFilters(prev => ({ ...prev, maxKm: Math.max(parseInt(e.target.value), prev.minKm + 1000) }))}
            className="w-full accent-[#c8102e] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Brandstof Checkboxes */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">Brandstof</label>
        <div className="space-y-2">
          {brandstofOptions.map((brandstof) => (
            <label key={brandstof} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filters.brandstoffen.includes(brandstof)}
                  onChange={() => toggleBrandstof(brandstof)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-white/20 rounded peer-checked:bg-[#c8102e] peer-checked:border-[#c8102e] transition-all" />
                {filters.brandstoffen.includes(brandstof) && (
                  <svg className="absolute inset-0 w-5 h-5 text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors">{brandstof}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmissie Checkboxes */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">Transmissie</label>
        <div className="space-y-2">
          {transmissieOptions.map((transmissie) => (
            <label key={transmissie} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filters.transmissies.includes(transmissie)}
                  onChange={() => toggleTransmissie(transmissie)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-white/20 rounded peer-checked:bg-[#c8102e] peer-checked:border-[#c8102e] transition-all" />
                {filters.transmissies.includes(transmissie) && (
                  <svg className="absolute inset-0 w-5 h-5 text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-white/70 group-hover:text-white transition-colors">{transmissie}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      {activeFilterCount > 0 && (
        <button
          onClick={resetFilters}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-white/70 hover:text-white hover:border-[#c8102e] transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Reset filters
        </button>
      )}

      {/* Mobile Apply Button */}
      {isMobile && (
        <button
          onClick={() => setShowMobileFilters(false)}
          className="w-full py-4 bg-[#c8102e] text-white font-semibold rounded-xl hover:bg-[#a00d24] transition-colors"
        >
          Toon {filteredCars.length} resultaten
        </button>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24 bg-[#1a1a1a] rounded-2xl border border-white/10 p-6 h-96 animate-pulse" />
        </aside>
        <div className="flex-1 space-y-6">
          <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-4 h-20 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-16 bg-[#1a1a1a] rounded-2xl border border-white/10">
        <div className="w-20 h-20 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-white/40" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Geen occasions gevonden</h3>
        <p className="text-white/50 mb-4">Er zijn nog geen occasions toegevoegd aan de database.</p>
        <a
          href="/admin/occasions"
          className="inline-block px-6 py-3 bg-[#c8102e] text-white rounded-xl hover:bg-[#a00d24] transition-colors"
        >
          Ga naar Admin
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-24 bg-[#1a1a1a] rounded-2xl border border-white/10 p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#c8102e]" />
            Filters
          </h2>
          <FilterSidebar />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search and Controls Bar */}
        <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Zoek op merk, model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#c8102e] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-white/40" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white hover:border-[#c8102e] transition-all"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-[#c8102e] text-white text-sm rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full sm:w-48 px-4 py-3 pr-10 bg-[#0a0a0a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#c8102e] cursor-pointer"
              >
                <option value="relevantie">Relevantie</option>
                <option value="prijs-oplopend">Prijs: laag → hoog</option>
                <option value="prijs-aflopend">Prijs: hoog → laag</option>
                <option value="bouwjaar-nieuw">Bouwjaar: nieuw → oud</option>
                <option value="bouwjaar-oud">Bouwjaar: oud → nieuw</option>
                <option value="km-oplopend">KM: laag → hoog</option>
                <option value="km-aflopend">KM: hoog → laag</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
            </div>
          </div>

          {/* Active Filter Badges */}
          {activeFiltersList.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
              {activeFiltersList.map((filter) => (
                <span
                  key={filter.key}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#c8102e]/20 text-[#c8102e] text-sm rounded-full border border-[#c8102e]/30"
                >
                  {filter.label}
                  <button
                    onClick={filter.onRemove}
                    className="ml-1 p-0.5 hover:bg-[#c8102e]/20 rounded-full transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={resetFilters}
                className="text-sm text-white/50 hover:text-white transition-colors px-2"
              >
                Alles wissen
              </button>
            </div>
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
              onClick={resetFilters}
              className="px-6 py-3 bg-[#c8102e] text-white rounded-xl hover:bg-[#a00d24] transition-colors"
            >
              Reset alle filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#1a1a1a] z-50 overflow-y-auto lg:hidden"
            >
              <FilterSidebar isMobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Loading fallback
function FilterLoading() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-24 bg-[#1a1a1a] rounded-2xl border border-white/10 p-6 h-96 animate-pulse" />
      </aside>
      <div className="flex-1 space-y-6">
        <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-4 h-20 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-2xl h-80 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Main export with Suspense
export default function OccasionsFilter() {
  return (
    <Suspense fallback={<FilterLoading />}>
      <OccasionsFilterContent />
    </Suspense>
  );
}
