// Cars Database - JSON-based storage for occasions
// This module provides CRUD operations for car inventory
// Designed to work with static export (Next.js)

import { Car } from '@/types';
import { cars as defaultCars } from '@/data/cars';

// Storage key for localStorage (client-side)
const STORAGE_KEY = 'carstore_cars_database';

// Initialize with default cars if no data exists
export function initializeCarsDatabase(): Car[] {
  if (typeof window === 'undefined') {
    return defaultCars;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultCars;
    }
  }
  return defaultCars;
}

// Get all cars
export function getAllCars(): Car[] {
  return initializeCarsDatabase();
}

// Get car by ID
export function getCarById(id: string): Car | undefined {
  const cars = getAllCars();
  return cars.find(car => car.id === id);
}

// Get cars by status
export function getCarsByStatus(status: Car['status']): Car[] {
  const cars = getAllCars();
  return cars.filter(car => car.status === status);
}

// Add new car
export function addCar(car: Omit<Car, 'id'>): Car {
  const cars = getAllCars();
  const newCar: Car = {
    ...car,
    id: generateCarId(car),
  };
  
  const updatedCars = [...cars, newCar];
  saveCars(updatedCars);
  return newCar;
}

// Update car
export function updateCar(id: string, updates: Partial<Car>): Car | null {
  const cars = getAllCars();
  const index = cars.findIndex(car => car.id === id);
  
  if (index === -1) return null;
  
  const updatedCar = { ...cars[index], ...updates };
  cars[index] = updatedCar;
  saveCars(cars);
  return updatedCar;
}

// Delete car
export function deleteCar(id: string): boolean {
  const cars = getAllCars();
  const filtered = cars.filter(car => car.id !== id);
  
  if (filtered.length === cars.length) return false;
  
  saveCars(filtered);
  return true;
}

// Save cars to storage
export function saveCars(cars: Car[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
  }
}

// Export cars to JSON file format (for backup)
export function exportCarsToJSON(): string {
  const cars = getAllCars();
  return JSON.stringify(cars, null, 2);
}

// Import cars from JSON
export function importCarsFromJSON(json: string): Car[] {
  try {
    const cars = JSON.parse(json) as Car[];
    saveCars(cars);
    return cars;
  } catch {
    throw new Error('Invalid JSON format');
  }
}

// Generate unique car ID
function generateCarId(car: Omit<Car, 'id'>): string {
  const prefix = `${car.merk.toLowerCase()}-${car.model.toLowerCase().replace(/\s+/g, '-')}`;
  const random = Math.floor(Math.random() * 10000000);
  return `${prefix}-${random}`;
}

// Get statistics
export function getCarStats() {
  const cars = getAllCars();
  return {
    total: cars.length,
    beschikbaar: cars.filter(c => c.status === 'beschikbaar').length,
    gereserveerd: cars.filter(c => c.status === 'gereserveerd').length,
    verkocht: cars.filter(c => c.status === 'verkocht').length,
    merken: [...new Set(cars.map(c => c.merk))].sort(),
    gemiddeldePrijs: Math.round(cars.reduce((sum, c) => sum + c.prijs, 0) / cars.length) || 0,
  };
}

// Search cars
export function searchCars(query: string): Car[] {
  const cars = getAllCars();
  const lowerQuery = query.toLowerCase();
  
  return cars.filter(car => 
    car.merk.toLowerCase().includes(lowerQuery) ||
    car.model.toLowerCase().includes(lowerQuery) ||
    car.variant.toLowerCase().includes(lowerQuery) ||
    car.brandstof.toLowerCase().includes(lowerQuery) ||
    car.carrosserie.toLowerCase().includes(lowerQuery) ||
    (car.kenteken && car.kenteken.toLowerCase().includes(lowerQuery))
  );
}

// Filter cars
export function filterCars(filters: {
  merk?: string;
  carrosserie?: string;
  brandstof?: string;
  minPrijs?: number;
  maxPrijs?: number;
  minBouwjaar?: number;
  maxBouwjaar?: number;
}): Car[] {
  let cars = getAllCars();
  
  if (filters.merk) {
    cars = cars.filter(c => c.merk === filters.merk);
  }
  if (filters.carrosserie) {
    cars = cars.filter(c => c.carrosserie === filters.carrosserie);
  }
  if (filters.brandstof) {
    cars = cars.filter(c => c.brandstof === filters.brandstof);
  }
  if (filters.minPrijs !== undefined) {
    cars = cars.filter(c => c.prijs >= filters.minPrijs!);
  }
  if (filters.maxPrijs !== undefined) {
    cars = cars.filter(c => c.prijs <= filters.maxPrijs!);
  }
  if (filters.minBouwjaar !== undefined) {
    cars = cars.filter(c => c.bouwjaar >= filters.minBouwjaar!);
  }
  if (filters.maxBouwjaar !== undefined) {
    cars = cars.filter(c => c.bouwjaar <= filters.maxBouwjaar!);
  }
  
  return cars;
}

// Reset to default cars
export function resetToDefault(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}