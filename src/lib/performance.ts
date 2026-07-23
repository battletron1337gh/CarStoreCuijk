import { RdwVehicle } from '@/components/configurator/VehicleInfo';

export interface PerformanceStats {
  hp: number;
  nm: number;
  zeroToHundred: number;
}

function typicalMassKg(body?: string | null): number {
  const b = (body || '').toLowerCase();
  if (b.includes('suv') || b.includes('terrein')) return 1800;
  if (b.includes('station') || b.includes('mpv')) return 1600;
  if (b.includes('coupe') || b.includes('cabrio')) return 1400;
  if (b.includes('hatchback')) return 1300;
  return 1450;
}

function typicalMaxPowerRpm(fuel?: string | null): number {
  const f = (fuel || '').toLowerCase();
  if (f.includes('diesel')) return 4000;
  if (f.includes('elek')) return 1; // not used
  return 5500;
}

function isTurboFuel(fuel?: string | null): boolean {
  const f = (fuel || '').toLowerCase();
  return f.includes('diesel') || f.includes('turbo') || f.includes('hybride');
}

export function estimateBaseStats(vehicle: RdwVehicle): PerformanceStats {
  const displacement = vehicle.cilinderinhoud ? parseInt(vehicle.cilinderinhoud, 10) : 0;
  const kw = vehicle.vermogen_kw ?? null;
  const mass = vehicle.massa_rijklaar ?? typicalMassKg(vehicle.carrosserie);
  const fuel = vehicle.brandstof;

  let hp: number;
  if (kw) {
    hp = Math.round(kw * 1.362);
  } else if (displacement > 0) {
    const liters = displacement / 1000;
    const hpPerLiter = isTurboFuel(fuel) ? 100 : 70;
    hp = Math.round(liters * hpPerLiter);
  } else {
    hp = 150;
  }

  let nm: number;
  if (kw) {
    const rpm = typicalMaxPowerRpm(fuel);
    nm = rpm === 1 ? Math.round(kw * 8) : Math.round((kw * 9549) / rpm);
  } else if (displacement > 0) {
    const liters = displacement / 1000;
    const nmPerLiter = isTurboFuel(fuel) ? 200 : 95;
    nm = Math.round(liters * nmPerLiter);
  } else {
    nm = 220;
  }

  // Electric fallback
  if (fuel && fuel.toLowerCase().includes('elek')) {
    hp = kw ? Math.round(kw * 1.362) : 200;
    nm = kw ? Math.round(kw * 8) : 300;
  }

  let zeroToHundred = 2.2 + Math.sqrt(mass / Math.max(hp, 1)) * 1.5;
  // Clamp to sane range
  zeroToHundred = Math.max(2.5, Math.min(20, zeroToHundred));

  return { hp, nm, zeroToHundred: Number(zeroToHundred.toFixed(1)) };
}

export function calculateTunedStats(
  base: PerformanceStats,
  powerGainPercent: number,
  torqueGainPercent: number,
): PerformanceStats {
  const powerMultiplier = 1 + powerGainPercent / 100;
  const torqueMultiplier = 1 + torqueGainPercent / 100;
  const hp = Math.round(base.hp * powerMultiplier);
  const nm = Math.round(base.nm * torqueMultiplier);
  // Roughly: acceleration scales with power^0.7
  const zeroToHundred = base.zeroToHundred / Math.pow(powerMultiplier, 0.7);
  return {
    hp,
    nm,
    zeroToHundred: Number(zeroToHundred.toFixed(1)),
  };
}
