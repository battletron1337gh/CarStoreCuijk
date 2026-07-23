'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Gauge, Timer, TrendingUp } from 'lucide-react';
import { RdwVehicle } from './VehicleInfo';
import { ConfigOption } from '@/lib/configurator-options';
import { estimateBaseStats, calculateTunedStats } from '@/lib/performance';

interface PerformancePanelProps {
  vehicle: RdwVehicle;
  selectedOptions: ConfigOption[];
}

export default function PerformancePanel({ vehicle, selectedOptions }: PerformancePanelProps) {
  const base = useMemo(() => estimateBaseStats(vehicle), [vehicle]);

  const { powerGain, torqueGain } = useMemo(() => {
    return selectedOptions.reduce(
      (acc, opt) => {
        acc.powerGain += opt.powerGainPercent || 0;
        acc.torqueGain += opt.torqueGainPercent || 0;
        return acc;
      },
      { powerGain: 0, torqueGain: 0 }
    );
  }, [selectedOptions]);

  const tuned = useMemo(
    () => calculateTunedStats(base, powerGain, torqueGain),
    [base, powerGain, torqueGain]
  );

  const hasTuning = selectedOptions.length > 0;

  const stats = [
    {
      icon: Zap,
      label: 'Vermogen',
      unit: 'pk',
      base: base.hp,
      tuned: tuned.hp,
      max: Math.max(tuned.hp, base.hp) * 1.2,
    },
    {
      icon: Gauge,
      label: 'Koppel',
      unit: 'Nm',
      base: base.nm,
      tuned: tuned.nm,
      max: Math.max(tuned.nm, base.nm) * 1.2,
    },
    {
      icon: Timer,
      label: '0-100 km/u',
      unit: 'sec',
      base: base.zeroToHundred,
      tuned: tuned.zeroToHundred,
      max: Math.max(base.zeroToHundred, tuned.zeroToHundred) * 1.2,
      lowerIsBetter: true,
    },
  ];

  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-[#c8102e]" />
          <h3 className="text-lg font-bold text-white">Prestaties</h3>
        </div>
        {hasTuning && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-full border border-[#c8102e]/30 bg-[#c8102e]/10 px-3 py-1 text-xs font-semibold text-[#c8102e]"
          >
            +{powerGain}% pk / +{torqueGain}% Nm
          </motion.span>
        )}
      </div>

      <p className="text-xs text-white/50">
        Geschatte waarden op basis van het kenteken. Exacte cijfers kunnen per auto verschillen.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat, idx) => {
          const improvement = stat.lowerIsBetter
            ? ((stat.base - stat.tuned) / stat.base) * 100
            : ((stat.tuned - stat.base) / stat.base) * 100;
          const basePct = (stat.base / stat.max) * 100;
          const tunedPct = (stat.tuned / stat.max) * 100;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-xl border border-white/5 bg-black/30 p-4"
            >
              <div className="mb-2 flex items-center gap-2 text-white/70">
                <stat.icon className="h-4 w-4 text-[#c8102e]" />
                <span className="text-xs font-semibold uppercase tracking-wider">{stat.label}</span>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-white">{stat.tuned}</span>
                <span className="text-xs text-white/50">{stat.unit}</span>
              </div>

              {hasTuning && (
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="text-white/40 line-through">{stat.base}</span>
                  <span
                    className={`font-semibold ${
                      stat.lowerIsBetter ? 'text-green-400' : 'text-green-400'
                    }`}
                  >
                    {improvement > 0 ? (stat.lowerIsBetter ? '-' : '+') : ''}
                    {Math.abs(improvement).toFixed(0)}%
                  </span>
                </div>
              )}

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="relative h-full w-full">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-white/20 transition-all duration-700"
                    style={{ width: `${basePct}%` }}
                  />
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full bg-[#c8102e]"
                    initial={{ width: `${basePct}%` }}
                    animate={{ width: `${tunedPct}%` }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
