/**
 * Vehicle-specific modular configuration types for the Auto Configurator.
 */

export interface VehicleYearRange {
  from: number;
  to?: number;
}

export type BodyStyle = 'hatchback' | 'sedan' | 'stationwagon' | 'suv' | 'coupe' | 'cabriolet' | 'mpv';

export interface CameraAngle {
  id: string;
  name: string;
  imageUrl: string;
}

export interface VehicleConfig {
  /** Unique config identifier, e.g. "volkswagen-golf-7" */
  id: string;
  /** Display name */
  name: string;
  brand: string;
  model: string;
  /** Generation / chassis code, e.g. "Mk7" or "G20" */
  generation: string;
  /** Compatible body styles */
  bodyStyles: BodyStyle[];
  /** Model year range */
  yearRange: VehicleYearRange;
  /** IDs from CONFIG_OPTIONS that are available for this vehicle */
  compatibleOptionIds: string[];
  /** Default exterior preview image */
  defaultImageUrl: string;
  /** Interior view preview image */
  interiorImageUrl: string;
  /** Default wheel option id */
  defaultWheelId: string;
  /** Wheel option ids allowed for this vehicle */
  wheelOptions: string[];
  /** Whether lowering / suspension options are available */
  loweringAvailable: boolean;
  /** Optional camera angles for future expansion */
  cameraAngles?: CameraAngle[];
}

export interface RdwMatchingInput {
  merk: string | null;
  model: string | null;
  handelsbenaming: string | null;
  bouwjaar: string | number | null;
}
