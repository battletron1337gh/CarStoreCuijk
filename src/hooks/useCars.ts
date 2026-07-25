'use client';

import { useState, useEffect, useCallback } from 'react';
import { Car } from '@/types';
import { fetchVweCars } from '@/data/vwe-cars';

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load VWE cars from API
    const loadCars = async () => {
      setIsLoading(true);
      try {
        const loadedCars = await fetchVweCars();
        setCars(loadedCars);
      } catch (error) {
        console.error('Error loading cars:', error);
        setCars([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadCars();
  }, []);

  const refresh = useCallback(async () => {
    // Refresh VWE cars from API
    const loadedCars = await fetchVweCars();
    setCars(loadedCars);
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
    const loadCar = async () => {
      setIsLoading(true);
      try {
        const cars = await fetchVweCars();
        const found = cars.find((c) => c.id === id);
        setCar(found || null);
      } catch (error) {
        console.error('Error loading car:', error);
        setCar(null);
      } finally {
        setIsLoading(false);
      }
    };
    loadCar();
  }, [id]);

  return { car, isLoading };
}

export function useCarSearch(query: string) {
  const [results, setResults] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchCars = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const cars = await fetchVweCars();
        const lowerQuery = query.toLowerCase();
        const filtered = cars.filter(car => 
          car.merk.toLowerCase().includes(lowerQuery) ||
          car.model.toLowerCase().includes(lowerQuery) ||
          car.variant?.toLowerCase().includes(lowerQuery) ||
          car.brandstof.toLowerCase().includes(lowerQuery) ||
          car.kenteken?.toLowerCase().includes(lowerQuery)
        );
        setResults(filtered);
      } catch (error) {
        console.error('Error searching cars:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    searchCars();
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
    const filterCars = async () => {
      setIsLoading(true);
      try {
        let filtered = await fetchVweCars();

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
      } catch (error) {
        console.error('Error filtering cars:', error);
        setFilteredCars([]);
      } finally {
        setIsLoading(false);
      }
    };
    filterCars();
  }, [filters]);

  return { filteredCars, isLoading };
}
