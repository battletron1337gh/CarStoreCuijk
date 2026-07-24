/**
 * Maintenance component definitions for the Auto Configurator.
 * Intervals are conservative real-world estimates for typical road use.
 */

import { ConfigOption } from './configurator-options';

export interface MaintenanceComponent {
  id: string;
  label: string;
  shortLabel: string;
  intervalKm: number;
  iconName: string;
  optionId: string;
  warningKm: number;
  dangerKm: number;
}

export const MAINTENANCE_COMPONENTS: MaintenanceComponent[] = [
  {
    id: 'remblokken',
    label: 'Remblokken',
    shortLabel: 'Remblokken',
    intervalKm: 50000,
    iconName: 'Square',
    optionId: 'remblokken-set',
    warningKm: 15000,
    dangerKm: 5000,
  },
  {
    id: 'remschijven',
    label: 'Remschijven',
    shortLabel: 'Remschijven',
    intervalKm: 90000,
    iconName: 'Disc',
    optionId: 'remschijven-set',
    warningKm: 20000,
    dangerKm: 8000,
  },
  {
    id: 'olie',
    label: 'Motorolie + filter',
    shortLabel: 'Olie',
    intervalKm: 15000,
    iconName: 'Droplets',
    optionId: 'olie-filter',
    warningKm: 4000,
    dangerKm: 1000,
  },
  {
    id: 'banden',
    label: 'Banden (set)',
    shortLabel: 'Banden',
    intervalKm: 45000,
    iconName: 'Circle',
    optionId: 'banden-set-4',
    warningKm: 12000,
    dangerKm: 4000,
  },
  {
    id: 'distributieriem',
    label: 'Distributieriem',
    shortLabel: 'Distributieriem',
    intervalKm: 120000,
    iconName: 'Cog',
    optionId: 'distributieriem',
    warningKm: 30000,
    dangerKm: 10000,
  },
];

export function calculateRemainingKm(currentKm: number, intervalKm: number): number {
  if (!intervalKm || currentKm <= 0) return intervalKm;
  const sinceLast = currentKm % intervalKm;
  return Math.max(0, intervalKm - sinceLast);
}

export function getWearStatus(
  remainingKm: number,
  warningKm: number,
  dangerKm: number
): 'good' | 'warning' | 'danger' {
  if (remainingKm <= dangerKm) return 'danger';
  if (remainingKm <= warningKm) return 'warning';
  return 'good';
}

export function formatKm(km: number): string {
  if (km >= 1000) {
    return `${Math.round(km / 1000)}k km`;
  }
  return `${km} km`;
}

export function findComponentByOptionId(optionId: string): MaintenanceComponent | undefined {
  return MAINTENANCE_COMPONENTS.find((c) => c.optionId === optionId);
}
