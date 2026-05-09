'use client';

import { useState, useEffect, useCallback } from 'react';
import { Car } from '@/types';
import { vweCars } from '@/data/vwe-cars';

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load VWE cars from data/vehicles.json
    setCars(vweCars);
    setIsLoading(false);
  }, []);

  const refresh = useCallback(() => {
    // Refresh VWE cars (re-import)
    setCars(vweCars);
  }, []);

  return {
    cars,
    isLoading,
    refresh,
    availableCars: cars.filter((c) => c.status === 'beschikbaar'),
  };
}

export function useCar(id: string) {
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const found = vweCars.find((c) => c.id === id);
    setCar(found || null);
    setIsLoading(false);
  }, [id]);

  return { car, isLoading };
}

export function useCarSearch(query: string) {
  const [results, setResults] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const lowerQuery = query.toLowerCase();
    const filtered = vweCars.filter(car => 
      car.merk.toLowerCase().includes(lowerQuery) ||
      car.model.toLowerCase().includes(lowerQuery) ||
      car.variant?.toLowerCase().includes(lowerQuery) ||
      car.brandstof.toLowerCase().includes(lowerQuery) ||
      car.kenteken?.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
    setIsLoading(false);
  }, [query]);

  return { results, isLoading };
}

export function useCarFilters(filters: {
  merk?: string;
  carrosserie?: string;
  brandstof?: string;
  minPrijs?: number;
  maxPrijs?: number;
  minBouwjaar?: number;
  maxBouwjaar?: number;
}) {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let filtered = vweCars;

    if (filters.merk) {
      filtered = filtered.filter(c => c.merk === filters.merk);
    }
    if (filters.carrosserie) {
      filtered = filtered.filter(c => c.carrosserie === filters.carrosserie);
    }
    if (filters.brandstof) {
      filtered = filtered.filter(c => c.brandstof === filters.brandstof);
    }
    if (filters.minPrijs !== undefined) {
      filtered = filtered.filter(c => c.prijs >= filters.minPrijs!);
    }
    if (filters.maxPrijs !== undefined) {
      filtered = filtered.filter(c => c.prijs <= filters.maxPrijs!);
    }
    if (filters.minBouwjaar !== undefined) {
      filtered = filtered.filter(c => c.bouwjaar >= filters.minBouwjaar!);
    }
    if (filters.maxBouwjaar !== undefined) {
      filtered = filtered.filter(c => c.bouwjaar <= filters.maxBouwjaar!);
    }

    setFilteredCars(filtered);
    setIsLoading(false);
  }, [filters]);

  return { filteredCars, isLoading };
}
