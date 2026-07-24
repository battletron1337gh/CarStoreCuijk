'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Activity, Gauge } from 'lucide-react';
import {
  MAINTENANCE_COMPONENTS,
  calculateRemainingKm,
  getWearStatus,
  formatKm,
} from '@/lib/maintenance';
import { ConfigOption, getOptionById } from '@/lib/configurator-options';

interface MaintenancePanelProps {
  currentKm: number;
  onKmChange: (km: number) => void;
  quantities: Record<string, number>;
  onToggleOption: (option: ConfigOption) => void;
}

export default function MaintenancePanel({
  currentKm,
  onKmChange,
  quantities,
  onToggleOption,
}: MaintenancePanelProps) {
  const statusColor = (status: 'good' | 'warning' | 'danger') => {
    switch (status) {
      case 'good':
        return 'bg-emerald-500';
      case 'warning':
        return 'bg-amber-500';
      case 'danger':
        return 'bg-[#c8102e]';
    }
  };

  const statusText = (status: 'good' | 'warning' | 'danger') => {
    switch (status) {
      case 'good':
        return 'text-emerald-400';
      case 'warning':
        return 'text-amber-400';
      case 'danger':
        return 'text-[#c8102e]';
    }
  };

  const statusLabel = (status: 'good' | 'warning' | 'danger') => {
    switch (status) {
      case 'good':
        return 'Goed';
      case 'warning':
        return 'Binnenkort vervangen';
      case 'danger':
        return 'Direct vervangen';
    }
  };

  const components = useMemo(() => {
    return MAINTENANCE_COMPONENTS.map((component) => {
      const remaining = calculateRemainingKm(currentKm, component.intervalKm);
      const status = getWearStatus(remaining, component.warningKm, component.dangerKm);
      const option = getOptionById(component.optionId);
      const selected = option ? (quantities[option.id] || 0) > 0 : false;
      return { component, remaining, status, option, selected };
    });
  }, [currentKm, quantities]);

  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-5 backdrop-blur-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-[#c8102e]" />
          <h3 className="text-lg font-bold text-white">Onderhoudsstatus</h3>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-2">
          <Gauge className="h-4 w-4 text-white/50" />
          <div className="flex items-center gap-2">
            <label htmlFor="current-km" className="text-xs font-medium text-white/60">
              Huidige km-stand
            </label>
            <input
              id="current-km"
              type="number"
              min={0}
              step={1000}
              value={currentKm > 0 ? currentKm : ''}
              onChange={(e) => onKmChange(Math.max(0, parseInt(e.target.value || '0', 10)))}
              placeholder="bv. 85000"
              className="w-28 bg-transparent text-right text-sm font-semibold text-white outline-none placeholder:text-white/30"
            />
            <span className="text-xs text-white/40">km</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/50">
        Geef je huidige km-stand op om te zien welke onderdelen binnenkort aan vervanging toe zijn.
        De indicaties zijn gebaseerd op gemiddelde gebruiksintervallen.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {components.map(({ component, remaining, status, option, selected }, idx) => {
          const Icon =
            (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
              component.iconName
            ] || LucideIcons.Circle;
          const pct = Math.max(0, Math.min(100, (remaining / component.intervalKm) * 100));

          return (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="flex flex-col rounded-xl border border-white/5 bg-black/30 p-4"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#c8102e]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{component.label}</div>
                    <div className={`text-xs font-medium ${statusText(status)}`}>
                      {statusLabel(status)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-1 flex items-baseline justify-between">
                <span className="text-xs text-white/40">Resterend</span>
                <span className="text-lg font-bold text-white">{formatKm(remaining)}</span>
              </div>

              <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className={`h-full rounded-full ${statusColor(status)}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />
              </div>

              {option ? (
                <button
                  type="button"
                  onClick={() => onToggleOption(option)}
                  className={`mt-auto w-full rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                    selected
                      ? 'bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25'
                      : 'bg-[#c8102e] text-white hover:bg-[#a00d24]'
                  }`}
                >
                  {selected ? '✓ In offerte' : '+ Bestel vervanging'}
                </button>
              ) : (
                <div className="mt-auto rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-white/40">
                  Optie niet beschikbaar
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
