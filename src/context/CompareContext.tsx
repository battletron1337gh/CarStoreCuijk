'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Car } from '@/types';

interface CompareContextType {
  selectedCars: Car[];
  addCar: (car: Car) => void;
  removeCar: (carId: string) => void;
  isSelected: (carId: string) => boolean;
  toggleCar: (car: Car) => void;
  clearCars: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const STORAGE_KEY = 'carstore-compare';

export function CompareProvider({ children }: { children: ReactNode }) {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSelectedCars(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load compare list:', e);
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCars));
    } catch (e) {
      console.error('Failed to save compare list:', e);
    }
  }, [selectedCars, hydrated]);

  const addCar = useCallback((car: Car) => {
    setSelectedCars(prev => {
      if (prev.find(c => c.id === car.id)) return prev;
      if (prev.length >= 3) return prev; // max 3 cars
      return [...prev, car];
    });
  }, []);

  const removeCar = useCallback((carId: string) => {
    setSelectedCars(prev => prev.filter(c => c.id !== carId));
  }, []);

  const isSelected = useCallback((carId: string) => {
    return selectedCars.some(c => c.id === carId);
  }, [selectedCars]);

  const toggleCar = useCallback((car: Car) => {
    if (isSelected(car.id)) {
      removeCar(car.id);
    } else {
      addCar(car);
    }
  }, [isSelected, addCar, removeCar]);

  const clearCars = useCallback(() => {
    setSelectedCars([]);
  }, []);

  return (
    <CompareContext.Provider
      value={{ selectedCars, addCar, removeCar, isSelected, toggleCar, clearCars }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
