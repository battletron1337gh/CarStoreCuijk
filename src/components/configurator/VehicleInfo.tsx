'use client';

import { motion } from 'framer-motion';
import { Car, Fuel, Calendar, Palette, Layers, Users, Gauge } from 'lucide-react';

export interface RdwVehicle {
  kenteken: string;
  merk: string | null;
  model: string | null;
  kleur: string | null;
  brandstof: string | null;
  carrosserie: string | null;
  bouwjaar: string | null;
  cilinderinhoud: string | null;
  aantal_zitplaatsen: string | null;
}

interface VehicleInfoProps {
  vehicle: RdwVehicle;
}

function formatLicensePlate(input: string): string {
  const cleaned = input.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  if (cleaned.length < 6) return cleaned;
  if (cleaned.length === 6) {
    return `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(4, 6)}`;
  }
  return cleaned;
}

export default function VehicleInfo({ vehicle }: VehicleInfoProps) {
  const rows = [
    { icon: Calendar, label: 'Bouwjaar', value: vehicle.bouwjaar },
    { icon: Fuel, label: 'Brandstof', value: vehicle.brandstof },
    { icon: Palette, label: 'Kleur', value: vehicle.kleur },
    { icon: Layers, label: 'Carrosserie', value: vehicle.carrosserie },
    { icon: Gauge, label: 'Cilinderinhoud', value: vehicle.cilinderinhoud ? `${vehicle.cilinderinhoud} cm³` : null },
    { icon: Users, label: 'Zitplaatsen', value: vehicle.aantal_zitplaatsen },
  ].filter((r) => r.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-5 backdrop-blur-md"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c8102e]/10 blur-3xl" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#c8102e]/15 text-[#c8102e] shadow-inner shadow-black/20">
          <Car className="h-8 w-8" />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {vehicle.merk || 'Onbekend merk'} {vehicle.model || ''}
          </h2>
          <div className="mt-1.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-sm tracking-wider text-white/90">
            {formatLicensePlate(vehicle.kenteken)}
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {rows.map((row, idx) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 + 0.1 }}
            className="rounded-xl border border-white/5 bg-white/5 p-3 transition-colors hover:border-white/10 hover:bg-white/[0.06]"
          >
            <div className="mb-1 flex items-center gap-1.5 text-[#c8102e]">
              <row.icon className="h-3.5 w-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                {row.label}
              </span>
            </div>
            <div className="text-sm font-medium text-white/90">{row.value}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
