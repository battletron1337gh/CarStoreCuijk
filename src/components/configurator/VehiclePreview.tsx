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

const BODY_PATH =
  'M 110 360 L 110 300 C 110 250, 130 240, 170 235 L 260 225 C 300 165, 350 150, 430 148 L 570 148 C 650 150, 700 165, 740 225 L 830 235 C 870 240, 890 250, 890 300 L 890 360 L 802 360 A 62 62 0 0 0 678 360 L 600 360 A 62 62 0 0 0 476 360 L 304 360 A 62 62 0 0 0 180 360 L 110 360 Z';

const WINDOW_PATH = 'M 305 230 L 370 155 L 630 155 L 690 230 Z';
const DOOR_LINE_PATH = 'M 435 232 L 435 358 M 565 232 L 565 358';
const HIGHLIGHT_PATH =
  'M 140 290 C 220 275, 400 270, 620 275 C 760 278, 840 285, 860 295 C 840 300, 760 295, 620 292 C 400 287, 220 292, 140 305 Z';

export default function VehiclePreview({
  selectedOptions,
  selectedColors = {},
  vehicleColor,
  className = '',
}: VehiclePreviewProps) {
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

      {/* Car preview */}
      <div className="relative z-10 w-full max-w-[1100px] px-4 sm:px-8">
        <motion.div
          animate={bump > 0 ? { scale: [1, 1.012, 1] } : { scale: 1 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="relative aspect-[16/9] w-full"
        >
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
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.22" />
                <stop offset="45%" stopColor="white" stopOpacity="0.05" />
                <stop offset="55%" stopColor="black" stopOpacity="0.1" />
                <stop offset="100%" stopColor="black" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
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

            {/* Ground shadow */}
            <ellipse cx="500" cy="430" rx="420" ry="24" fill="#000000" opacity="0.55" filter="url(#softShadow)" />

            {/* Body + suspension drop group */}
            <motion.g
              animate={{ y: bodyDrop }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
            >
              {/* Base car body */}
              <path
                d={BODY_PATH}
                fill={rdwColorToHex(vehicleColor) || '#1f2937'}
                stroke="#000000"
                strokeWidth="1"
                filter="url(#softShadow)"
              />
              {/* Metallic gradient overlay for shine */}
              <path
                d={BODY_PATH}
                fill="url(#bodyGrad)"
                opacity={0.8}
                style={{ mixBlendMode: 'overlay' }}
              />
              {/* Gloss highlight */}
              <path
                d={HIGHLIGHT_PATH}
                fill="white"
                opacity={0.15}
                filter="url(#softShadow)"
              />
              {/* Side window */}
              <path
                d={WINDOW_PATH}
                fill="url(#windowGrad)"
                opacity={0.95}
              />
              {/* Window frame */}
              <path
                d={WINDOW_PATH}
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />
              {/* Door lines */}
              <path
                d={DOOR_LINE_PATH}
                stroke="#000000"
                strokeWidth="1.5"
                opacity={0.45}
                fill="none"
              />
              {/* Door handles */}
              <rect x="395" y="245" width="22" height="5" rx="2" fill="#0f172a" opacity={0.7} />
              <rect x="525" y="245" width="22" height="5" rx="2" fill="#0f172a" opacity={0.7} />
              {/* Side mirror */}
              <ellipse cx="300" cy="168" rx="20" ry="11" fill={rdwColorToHex(vehicleColor) || '#1f2937'} stroke="#000000" strokeWidth="1" />
              <ellipse cx="300" cy="168" rx="20" ry="11" fill="url(#bodyGrad)" opacity="0.6" />
              {/* Front headlight */}
              <path d="M 118 250 L 145 253 L 132 270 Z" fill="#e2e8f0" opacity="0.9" filter="url(#glow)" />
              {/* Rear taillight */}
              <path d="M 882 252 L 855 255 L 868 272 Z" fill="#991b1b" opacity="0.95" filter="url(#glow)" />
              {/* Front grille intake */}
              <path d="M 125 315 L 170 320 L 165 345 L 120 340 Z" fill="#0a0a0a" opacity="0.85" />

              {/* Window tint overlay */}
              <AnimatePresence>
                {overlays.windows && (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    d={WINDOW_PATH}
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
                    d="M 302 230 L 368 152 L 632 152 L 693 230 L 687 234 L 628 160 L 372 160 L 308 234 Z"
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
                    d="M 380 148 C 430 142, 570 142, 620 148 L 625 155 C 570 150, 430 150, 380 155 C 360 158, 345 165, 335 172 L 330 166 C 345 156, 360 150, 380 148 Z"
                    fill={overlays.roof}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Side mirrors overlay */}
              <AnimatePresence>
                {overlays.mirrors && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ellipse cx="300" cy="168" rx="20" ry="11" fill={overlays.mirrors} filter="url(#softShadow)" />
                    <ellipse cx="298" cy="166" rx="13" ry="7" fill="#00000030" />
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
                    d="M 115 385 L 230 392 L 225 405 L 110 398 Z"
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
                    d="M 310 395 L 670 395 L 670 412 L 310 412 Z"
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
                    d="M 740 222 L 830 210 L 832 225 L 745 237 Z"
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
                    d="M 800 388 L 880 388 L 875 420 L 795 415 Z"
                    fill={overlays.diffuser}
                    filter="url(#softShadow)"
                  />
                )}
              </AnimatePresence>

              {/* Headlight / taillight glow overlay */}
              <AnimatePresence>
                {overlays.lights && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <path
                      d="M 118 250 L 148 253 L 135 270 Z"
                      fill={overlays.lights}
                      filter="url(#glow)"
                      opacity={0.85}
                    />
                    <path
                      d="M 882 252 L 852 255 L 865 272 Z"
                      fill="#ef4444"
                      filter="url(#glow)"
                      opacity={0.75}
                    />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>

            {/* Wheels — front */}
            <Wheel
              cx={242}
              cy={360}
              r={60}
              color={wheelColor}
              showRimProtectors={showRimProtectors}
              rimProtectorColor={rimProtectorColor}
            />

            {/* Rear wheel */}
            <Wheel
              cx={740}
              cy={355}
              r={58}
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
                  <circle cx="272" cy="350" r="13" fill={overlays.calipers} filter="url(#softShadow)" />
                  <circle cx="715" cy="350" r="12" fill={overlays.calipers} filter="url(#softShadow)" />
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
                  <rect x="845" y="395" width="22" height="12" rx="5" fill="#c0c0c0" filter="url(#softShadow)" />
                  <rect x="870" y="393" width="22" height="12" rx="5" fill="#c0c0c0" filter="url(#softShadow)" />
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
