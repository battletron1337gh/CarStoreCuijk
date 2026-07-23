'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, Plus, Palette } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { ConfigOption as ConfigOptionType } from '@/lib/configurator-options';

interface ConfigOptionProps {
  option: ConfigOptionType;
  quantity: number;
  selectedColor?: string;
  onToggle: () => void;
  onChangeQuantity: (delta: number) => void;
  onColorChange?: (color: string) => void;
}

const PRESET_COLORS = [
  '#c8102e',
  '#0a0a0a',
  '#111111',
  '#1a1a1a',
  '#c0c0c0',
  '#facc15',
  '#8c6239',
  '#3b82f6',
  '#22c55e',
  '#a855f7',
  '#f97316',
  '#ffffff',
];

export default function ConfigOption({
  option,
  quantity,
  selectedColor,
  onToggle,
  onChangeQuantity,
  onColorChange,
}: ConfigOptionProps) {
  const selected = quantity > 0;
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const Icon =
    (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
      option.iconName
    ] || LucideIcons.Circle;

  // Close picker on outside click
  useEffect(() => {
    if (!showPicker) return;
    const handleClick = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPicker]);

  const effectiveColor = selectedColor || option.overlayColor || '#c8102e';

  return (
    <motion.button
      layout
      onClick={onToggle}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full overflow-hidden rounded-2xl border text-left transition-all ${
        selected
          ? 'border-[#c8102e]/60 bg-gradient-to-br from-[#c8102e]/15 to-[#c8102e]/5 shadow-lg shadow-[#c8102e]/10'
          : 'border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]'
      }`}
    >
      {selected && (
        <motion.div
          layoutId={`active-glow-${option.id}`}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.18),transparent_60%)]"
        />
      )}

      <div className="relative p-4 sm:p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                selected ? 'bg-[#c8102e] text-white' : 'bg-white/10 text-white/60 group-hover:text-white/80'
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">{option.name}</h4>
              <p className="line-clamp-2 text-xs text-white/50 sm:text-sm">{option.description}</p>
            </div>
          </div>

          <div
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
              selected ? 'border-[#c8102e] bg-[#c8102e]' : 'border-white/30'
            }`}
          >
            {selected && <Check className="h-3.5 w-3.5 text-white" />}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-[#c8102e]">
            € {option.price.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
          </div>

          {selected && (
            <div
              className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2 py-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => onChangeQuantity(-1)}
                disabled={quantity <= 1}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-40"
                aria-label="Verminder"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="min-w-[1.5rem] text-center text-sm font-semibold text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => onChangeQuantity(1)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Verhoog"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Color picker */}
        {selected && option.allowColor && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 border-t border-white/10 pt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
              <Palette className="h-3.5 w-3.5" />
              Kies kleur
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => onColorChange?.(color)}
                  className={`h-7 w-7 rounded-full border-2 transition-transform hover:scale-110 ${
                    effectiveColor.toLowerCase() === color.toLowerCase()
                      ? 'border-white shadow-[0_0_0_2px_rgba(200,16,46,0.5)]'
                      : 'border-white/10'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Kleur ${color}`}
                />
              ))}
              <div className="relative" ref={pickerRef}>
                <button
                  type="button"
                  onClick={() => setShowPicker((v) => !v)}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-transform hover:scale-110 ${
                    !PRESET_COLORS.includes(effectiveColor.toLowerCase())
                      ? 'border-white shadow-[0_0_0_2px_rgba(200,16,46,0.5)]'
                      : 'border-white/10'
                  }`}
                  style={{
                    background: !PRESET_COLORS.includes(effectiveColor.toLowerCase())
                      ? effectiveColor
                      : 'conic-gradient(from 180deg at 50% 50%, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
                  }}
                  aria-label="Eigen kleur kiezen"
                >
                  <Palette className="h-3.5 w-3.5 text-white mix-blend-difference" />
                </button>
                {showPicker && (
                  <div className="absolute left-0 top-full z-50 mt-2 rounded-xl border border-white/10 bg-[#141414] p-3 shadow-2xl">
                    <input
                      type="color"
                      value={effectiveColor}
                      onChange={(e) => onColorChange?.(e.target.value)}
                      className="h-8 w-32 cursor-pointer rounded-lg border-0 bg-transparent p-0"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
          <span className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5">
            {option.installTimeHours} uur montage
          </span>
          <span className="rounded-full border border-white/5 bg-white/5 px-2 py-0.5">
            {option.deliveryDays} dagen levertijd
          </span>
        </div>
      </div>
    </motion.button>
  );
}
