import { RdwMatchingInput, VehicleConfig } from './types';
import golf7 from './volkswagen/golf7';
import golf8 from './volkswagen/golf8';
import g20 from './bmw/g20';
import f30 from './bmw/f30';
import a3 from './audi/a3';
import defaultVehicle from './default';

export * from './types';
export { defaultVehicle };

export const VEHICLE_REGISTRY: VehicleConfig[] = [golf7, golf8, g20, f30, a3, defaultVehicle];

function normalize(value: string | null | undefined): string {
  return (value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function parseYear(bouwjaar: string | number | null | undefined): number | null {
  if (!bouwjaar) return null;
  const parsed = typeof bouwjaar === 'number' ? bouwjaar : parseInt(bouwjaar.replace(/\D/g, ''), 10);
  return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Determine the matching VehicleConfig from RDW data.
 */
export function findVehicleConfigByRdw(data: RdwMatchingInput): VehicleConfig {
  const merk = normalize(data.merk);
  const model = normalize(data.model);
  const handelsbenaming = normalize(data.handelsbenaming);
  const year = parseYear(data.bouwjaar);

  // Volkswagen Golf
  if (merk.includes('volkswagen') && model.includes('golf')) {
    if (year !== null) {
      if (year >= 2020) return golf8;
      if (year >= 2013 && year <= 2019) return golf7;
    }
    return golf7;
  }

  // BMW 3-serie
  if (merk.includes('bmw') && (model.includes('3') || handelsbenaming.includes('3'))) {
    const handleModel = handelsbenaming;
    if (handleModel.includes('g20') || (year !== null && year >= 2019)) return g20;
    if (year !== null && year >= 2012 && year <= 2018) return f30;
    return g20;
  }

  // Audi A3
  if (merk.includes('audi') && model.includes('a3')) {
    return a3;
  }

  return defaultVehicle;
}

export function getVehicleConfigById(id: string): VehicleConfig | undefined {
  return VEHICLE_REGISTRY.find((v) => v.id === id);
}
