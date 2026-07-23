'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfigOption, OverlayType } from '@/lib/configurator-options';

const RDW_COLOR_MAP: Record<string, string> = {
  ZWART: '#1a1a1a',
  WIT: '#f5f5f5',
  ROOD: '#c62828',
  BLAUW: '#1565c0',
  GRIJS: '#757575',
  ZILVER: '#bdbdbd',
  GROEN: '#2e7d32',
  GEEL: '#f9a825',
  ORANJE: '#ef6c00',
  BRUIN: '#5d4037',
  PAARS: '#6a1b9a',
  BEIGE: '#d6c6a8',
  BRONS: '#8c6239',
  CREME: '#f5f5dc',
  GOUD: '#d4af37',
  ROZE: '#e91e63',
  TURQUOISE: '#009688',
  ANTRACIET: '#2b2b2b',
  BLAUW_GRIJS: '#607d8b',
  GRIJS_BLUW: '#607d8b',
};

function rdwColorToHex(color?: string | null): string | null {
  if (!color) return null;
  const normalized = color.toUpperCase().replace(/[\s\-]/g, '_');
  return RDW_COLOR_MAP[normalized] || null;
}

interface VehiclePreviewProps {
  selectedOptions: ConfigOption[];
  selectedColors?: Record<string, string>;
  vehicleColor?: string | null;
  className?: string;
}

interface OverlayState {
  wheels?: string;
  calipers?: string;
  roof?: string;
  windows?: string;
  mirrors?: string;
  skirts?: string;
  splitter?: string;
  spoiler?: string;
  diffuser?: string;
  exhaust?: boolean;
  suspension?: boolean;
  lights?: string;
  'wheel-rim-protectors'?: string;
  'chrome-delete'?: boolean;
}

const BASE_IMAGE_URL =
  'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=85';

export default function VehiclePreview({
  selectedOptions,
  selectedColors = {},
  vehicleColor,
  className = '',
}: VehiclePreviewProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [bump, setBump] = useState(0);

  const optionSignature = selectedOptions.map((o) => o.id).join(',');
  useEffect(() => {
    setBump((n) => n + 1);
  }, [optionSignature]);

  const { overlays, visualOptions, nonVisualOptions } = useMemo(() => {
    const state: OverlayState = {};
    const visual: ConfigOption[] = [];
    const nonVisual: ConfigOption[] = [];

    selectedOptions.forEach((opt) => {
      if (opt.overlayType) {
        visual.push(opt);
        const color = selectedColors[opt.id] || opt.overlayColor || '#c8102e';
        if (
          opt.overlayType === 'exhaust' ||
          opt.overlayType === 'suspension' ||
          opt.overlayType === 'chrome-delete'
        ) {
          if (opt.overlayType === 'exhaust') state.exhaust = true;
          if (opt.overlayType === 'suspension') state.suspension = true;
          if (opt.overlayType === 'chrome-delete') state['chrome-delete'] = true;
        } else {
          state[opt.overlayType] = color;
        }
      } else {
        nonVisual.push(opt);
      }
    });

    return { overlays: state, visualOptions: visual, nonVisualOptions: nonVisual };
  }, [selectedOptions, selectedColors]);

  const bodyDrop = overlays.suspension ? 14 : 0;
  const wheelColor = overlays.wheels || '#1f2937';
  const rimProtectorColor = overlays['wheel-rim-protectors'] || '#c8102e';
  const showRimProtectors = !!overlays['wheel-rim-protectors'];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#141414] to-[#0a0a0a] shadow-2xl backdrop-blur-md ${className}`}
    >
      {/* Studio background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(60,60,70,0.35),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(200,16,46,0.06),transparent_50%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[90%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-3xl" />

      {/* Reflection strip */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent" />

      {/* Base car image */}
      <div className="relative z-10 w-full max-w-[1100px] px-4 sm:px-8">
        <motion.div
          animate={bump > 0 ? { scale: [1, 1.012, 1] } : { scale: 1 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="relative aspect-[16/9] w-full"
        >
          <img
            src={BASE_IMAGE_URL}
            alt="Voertuig preview"
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ${
              imageLoaded && !imageError ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
            }`}
          />

          {/* RDW body color overlay */}
          {imageLoaded && !imageError && rdwColorToHex(vehicleColor) && (
            <svg
              viewBox="0 0 1000 560"
              preserveAspectRatio="xMidYMid meet"
              className="pointer-events-none absolute inset-0 z-[15] h-full w-full"
            >
              <g transform="scale(1.25 1.555556)">
                <path
                  d="M 120 210 C 120 185, 150 160, 200 155 L 260 150 C 300 120, 360 100, 440 100 C 520 100, 600 120, 660 155 C 710 165, 740 185, 740 210 C 745 235, 730 250, 700 255 L 680 255 C 670 225, 640 205, 600 205 C 560 205, 530 225, 520 255 L 300 255 C 290 225, 260 205, 220 205 C 180 205, 150 225, 140 255 L 120 255 C 100 250, 100 230, 120 210 Z"
                  fill={rdwColorToHex(vehicleColor) || undefined}
                  style={{ mixBlendMode: 'color', opacity: 0.85 }}
                />
              </g>
            </svg>
          )}

          {/* Premium placeholder / fallback */}
          {(!imageLoaded || imageError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg
                viewBox="0 0 800 360"
                className="h-full w-full max-w-[900px] opacity-60"
                role="img"
                aria-label="Voertuig silhouet"
              >
                <defs>
                  <linearGradient id="fallbackBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111111" />
                  </linearGradient>
                </defs>
                <path
                  d="M 120 210 C 120 185, 150 160, 200 155 L 260 150 C 300 120, 360 100, 440 100 C 520 100, 600 120, 660 155 C 710 165, 740 185, 740 210 C 745 235, 730 250, 700 255 L 680 255 C 670 225, 640 205, 600 205 C 560 205, 530 225, 520 255 L 300 255 C 290 225, 260 205, 220 205 C 180 205, 150 225, 140 255 L 120 255 C 100 250, 100 230, 120 210 Z"
                  fill="url(#fallbackBody)"
                  stroke="#3f3f46"
                  strokeWidth="1.5"
                />
              </svg>
              {imageError && (
                <p className="absolute bottom-4 text-xs text-white/40">Afbeelding kon niet worden geladen</p>
              )}
            </div>
          )}

          {/* SVG overlay layer */}
          <svg
            viewBox="0 0 1000 560"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 z-20 h-full w-full"
            role="img"
            aria-label="Configuratie overlays"
          >
            <defs>
              <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Body + suspension drop group */}
            <motion.g
              animate={{ y: bodyDrop }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            >
              {/* Window tint overlay */}
              <AnimatePresence>
                {overlays.windows && (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    d="M 360 142 C 420 118, 520 112, 600 128 L 640 150 L 610 170 C 540 152, 440 152, 380 170 Z"
                    fill={overlays.windows}
                    style={{ mixBlendMode: 'multiply' }}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Chrome delete — window trim */}
              <AnimatePresence>
                {overlays['chrome-delete'] && (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    d="M 355 145 C 415 120, 520 114, 605 130 L 650 152 L 645 158 L 600 136 C 520 120, 420 126, 360 150 Z"
                    fill="#111827"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                )}
              </AnimatePresence>

              {/* Roof wrap */}
              <AnimatePresence>
                {overlays.roof && (
                  <motion.path
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    d="M 430 108 C 485 100, 565 108, 610 125 L 615 132 C 565 116, 485 108, 430 116 C 400 122, 375 132, 360 142 L 355 136 C 375 124, 400 114, 430 108 Z"
                    fill={overlays.roof}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Side mirrors */}
              <AnimatePresence>
                {overlays.mirrors && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ellipse cx="315" cy="175" rx="22" ry="13" fill={overlays.mirrors} filter="url(#softShadow)" />
                    <ellipse cx="313" cy="173" rx="14" ry="8" fill="#00000030" />
                  </motion.g>
                )}
              </AnimatePresence>

              {/* Front splitter */}
              <AnimatePresence>
                {overlays.splitter && (
                  <motion.path
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    d="M 145 385 L 240 392 L 235 405 L 140 398 Z"
                    fill={overlays.splitter}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Side skirts */}
              <AnimatePresence>
                {overlays.skirts && (
                  <motion.path
                    initial={{ opacity: 0, scaleX: 0.92 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0.92 }}
                    transition={{ duration: 0.3 }}
                    d="M 260 395 L 720 395 L 720 412 L 260 412 Z"
                    fill={overlays.skirts}
                    opacity={0.95}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Rear spoiler */}
              <AnimatePresence>
                {overlays.spoiler && (
                  <motion.path
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    d="M 720 168 L 810 155 L 812 170 L 725 182 Z"
                    fill={overlays.spoiler}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Rear diffuser */}
              <AnimatePresence>
                {overlays.diffuser && (
                  <motion.path
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    d="M 740 388 L 820 388 L 815 420 L 735 415 Z"
                    fill={overlays.diffuser}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Headlight / taillight glow */}
              <AnimatePresence>
                {overlays.lights && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <path
                      d="M 165 205 L 135 212 L 148 235 Z"
                      fill={overlays.lights}
                      filter="url(#glow)"
                      opacity={0.85}
                    />
                    <path
                      d="M 815 218 L 845 225 L 835 245 Z"
                      fill="#ef4444"
                      filter="url(#glow)"
                      opacity={0.75}
                    />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>

            {/* Wheels — front (larger, 3/4 view) */}
            <Wheel
              cx={235}
              cy={360}
              r={58}
              color={wheelColor}
              showRimProtectors={showRimProtectors}
              rimProtectorColor={rimProtectorColor}
            />

            {/* Rear wheel (smaller, further back) */}
            <Wheel
              cx={735}
              cy={355}
              r={50}
              color={wheelColor}
              showRimProtectors={showRimProtectors}
              rimProtectorColor={rimProtectorColor}
            />

            {/* Calipers */}
            <AnimatePresence>
              {overlays.calipers && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <circle cx="265" cy="350" r="12" fill={overlays.calipers} filter="url(#softShadow)" />
                  <circle cx="710" cy="350" r="10" fill={overlays.calipers} filter="url(#softShadow)" />
                </motion.g>
              )}
            </AnimatePresence>

            {/* Exhaust tips */}
            <AnimatePresence>
              {overlays.exhaust && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <rect x="775" y="395" width="22" height="12" rx="5" fill="#c0c0c0" filter="url(#softShadow)" />
                  <rect x="800" y="393" width="22" height="12" rx="5" fill="#c0c0c0" filter="url(#softShadow)" />
                </motion.g>
              )}
            </AnimatePresence>
          </svg>
        </motion.div>
      </div>

      {/* Non-visual option badges */}
      <AnimatePresence>
        {nonVisualOptions.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-4 right-4 z-30 flex flex-wrap justify-center gap-2"
          >
            <AnimatePresence>
              {nonVisualOptions.map((opt) => (
                <motion.span
                  key={opt.id}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8102e] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8102e]" />
                  </span>
                  {opt.name}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Option-change pulse ring */}
      <AnimatePresence>
        {visualOptions.length > 0 && (
          <motion.div
            key={visualOptions.map((o) => o.id).join(',')}
            initial={{ opacity: 0.6, scale: 0.95 }}
            animate={{ opacity: 0, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute inset-0 z-0 rounded-3xl border-2 border-[#c8102e]/30"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Wheel({
  cx,
  cy,
  r,
  color,
  showRimProtectors,
  rimProtectorColor,
}: {
  cx: number;
  cy: number;
  r: number;
  color: string;
  showRimProtectors: boolean;
  rimProtectorColor: string;
}) {
  return (
    <g>
      {/* Tire */}
      <circle cx={cx} cy={cy} r={r} fill="#0a0a0a" stroke="#27272a" strokeWidth="2" />
      {/* Rim */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r - 12}
        fill={color}
        stroke="#4b5563"
        strokeWidth="1"
        initial={false}
        animate={{ fill: color }}
        transition={{ duration: 0.35 }}
      />
      {/* Spokes */}
      <g stroke="#9ca3af" strokeWidth={r > 54 ? 4 : 3} strokeLinecap="round">
        <line x1={cx} y1={cy - (r - 16)} x2={cx} y2={cy + (r - 16)} />
        <line x1={cx - (r - 16)} y1={cy} x2={cx + (r - 16)} y2={cy} />
        <line x1={cx - (r - 22)} y1={cy - (r - 22)} x2={cx + (r - 22)} y2={cy + (r - 22)} />
        <line x1={cx + (r - 22)} y1={cy - (r - 22)} x2={cx - (r - 22)} y2={cy + (r - 22)} />
      </g>
      <circle cx={cx} cy={cy} r="7" fill="#6b7280" />
      {/* Rim protectors */}
      <AnimatePresence>
        {showRimProtectors && (
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            cx={cx}
            cy={cy}
            r={r - 3}
            fill="none"
            stroke={rimProtectorColor}
            strokeWidth="5"
          />
        )}
      </AnimatePresence>
    </g>
  );
}
