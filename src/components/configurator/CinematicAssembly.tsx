'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

function rdwColorToHex(color?: string | null): string {
  if (!color) return '#1f2937';
  const normalized = color.toUpperCase().replace(/[\s\-]/g, '_');
  return RDW_COLOR_MAP[normalized] || '#1f2937';
}

const BODY_PATH =
  'M 110 360 L 110 300 C 110 250, 130 240, 170 235 L 260 225 C 300 165, 350 150, 430 148 L 570 148 C 650 150, 700 165, 740 225 L 830 235 C 870 240, 890 250, 890 300 L 890 360 L 802 360 A 62 62 0 0 0 678 360 L 600 360 A 62 62 0 0 0 476 360 L 304 360 A 62 62 0 0 0 180 360 L 110 360 Z';
const WINDOW_PATH = 'M 305 230 L 370 155 L 630 155 L 690 230 Z';
const HIGHLIGHT_PATH =
  'M 140 290 C 220 275, 400 270, 620 275 C 760 278, 840 285, 860 295 C 840 300, 760 295, 620 292 C 400 287, 220 292, 140 305 Z';

interface CinematicAssemblyProps {
  vehicleColor?: string | null;
  onComplete?: () => void;
  duration?: number;
}

export default function CinematicAssembly({
  vehicleColor,
  onComplete,
  duration = 2.8,
}: CinematicAssemblyProps) {
  const [phase, setPhase] = useState<'falling' | 'locking' | 'flash' | 'done'>('falling');
  const [showFlash, setShowFlash] = useState(false);
  const baseColor = rdwColorToHex(vehicleColor);

  useEffect(() => {
    const lockTimer = setTimeout(() => setPhase('locking'), duration * 380);
    const flashTimer = setTimeout(() => setShowFlash(true), duration * 520);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, duration * 1000);
    return () => {
      clearTimeout(lockTimer);
      clearTimeout(flashTimer);
      clearTimeout(doneTimer);
    };
  }, [duration, onComplete]);

  const partTransition = {
    type: 'spring' as const,
    stiffness: 85,
    damping: 13,
    mass: 1.2,
  };

  const wheelVariants = {
    hidden: (custom: number) => ({
      y: -500 - custom * 80,
      x: custom * 15,
      rotate: custom * 180,
      opacity: 0,
      scale: 0.85,
    }),
    visible: {
      y: 0,
      x: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: partTransition,
    },
  };

  const bodyVariants = {
    hidden: { y: -700, rotate: -8, opacity: 0, scale: 0.92 },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: { ...partTransition, stiffness: 70, damping: 15 },
    },
  };

  const smallPartVariants = {
    hidden: (custom: number) => ({
      y: -400 - custom * 120,
      x: (custom % 2 === 0 ? -1 : 1) * (custom * 25),
      rotate: custom * 45,
      opacity: 0,
    }),
    visible: (custom: number) => ({
      y: 0,
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        ...partTransition,
        delay: custom * 0.08,
      },
    }),
  };

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Dark vignette background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(20,20,25,0.9),rgba(0,0,0,0.98))]"
      />

      {/* Ambient falling particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -40 - Math.random() * 200,
              x: Math.random() * 1000,
              opacity: 0,
              scale: 0.3 + Math.random() * 0.7,
            }}
            animate={{
              y: 600 + Math.random() * 200,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.2 + Math.random() * 1.5,
              delay: Math.random() * 1.2,
              repeat: 1,
              ease: 'linear',
            }}
            className="absolute top-0 h-1.5 w-1.5 rounded-full bg-[#c8102e]/60 shadow-[0_0_6px_rgba(200,16,46,0.6)]"
          />
        ))}
      </div>

      {/* Assembly flash */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-white/10"
          />
        )}
      </AnimatePresence>

      {/* Main assembly SVG */}
      <svg
        viewBox="0 0 1000 560"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-10 h-full w-full max-w-[1100px]"
      >
        <defs>
          <linearGradient id="asmBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.22" />
            <stop offset="45%" stopColor="white" stopOpacity="0.05" />
            <stop offset="55%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="asmWindowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <filter id="asmGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="asmShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <motion.ellipse
          cx="500"
          cy="430"
          rx="420"
          ry="24"
          fill="#000000"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          filter="url(#asmShadow)"
        />

        {/* Wheels — rear */}
        <motion.g
          custom={0}
          variants={wheelVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
        >
          <Wheel cx={740} cy={355} r={58} color="#1f2937" />
        </motion.g>

        {/* Wheels — front */}
        <motion.g
          custom={1}
          variants={wheelVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <Wheel cx={242} cy={360} r={60} color="#1f2937" />
        </motion.g>

        {/* Car body */}
        <motion.g variants={bodyVariants} initial="hidden" animate="visible">
          <path d={BODY_PATH} fill={baseColor} stroke="#000000" strokeWidth="1" filter="url(#asmShadow)" />
          <path d={BODY_PATH} fill="url(#asmBodyGrad)" opacity={0.8} style={{ mixBlendMode: 'overlay' }} />
          <path d={HIGHLIGHT_PATH} fill="white" opacity={0.15} filter="url(#asmShadow)" />
        </motion.g>

        {/* Windows */}
        <motion.g custom={2} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d={WINDOW_PATH} fill="url(#asmWindowGrad)" opacity={0.95} />
          <path d={WINDOW_PATH} fill="none" stroke="#334155" strokeWidth="2" />
        </motion.g>

        {/* Door lines + handles */}
        <motion.g custom={3} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 435 232 L 435 358 M 565 232 L 565 358" stroke="#000000" strokeWidth="1.5" opacity={0.45} fill="none" />
          <rect x="395" y="245" width="22" height="5" rx="2" fill="#0f172a" opacity={0.7} />
          <rect x="525" y="245" width="22" height="5" rx="2" fill="#0f172a" opacity={0.7} />
        </motion.g>

        {/* Side mirror */}
        <motion.g custom={4} variants={smallPartVariants} initial="hidden" animate="visible">
          <ellipse cx="300" cy="168" rx="20" ry="11" fill={baseColor} stroke="#000000" strokeWidth="1" />
          <ellipse cx="300" cy="168" rx="20" ry="11" fill="url(#asmBodyGrad)" opacity={0.6} />
        </motion.g>

        {/* Lights */}
        <motion.g custom={5} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 118 250 L 145 253 L 132 270 Z" fill="#e2e8f0" opacity={0.9} filter="url(#asmGlow)" />
          <path d="M 882 252 L 855 255 L 868 272 Z" fill="#991b1b" opacity={0.95} filter="url(#asmGlow)" />
        </motion.g>

        {/* Front grille */}
        <motion.g custom={6} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 125 315 L 170 320 L 165 345 L 120 340 Z" fill="#0a0a0a" opacity={0.85} />
        </motion.g>

        {/* Spoiler */}
        <motion.g custom={7} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 740 222 L 830 210 L 832 225 L 745 237 Z" fill="#111827" filter="url(#asmShadow)" />
        </motion.g>

        {/* Diffuser */}
        <motion.g custom={8} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 800 388 L 880 388 L 875 420 L 795 415 Z" fill="#111827" filter="url(#asmShadow)" />
        </motion.g>

        {/* Splitter */}
        <motion.g custom={9} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 115 385 L 230 392 L 225 405 L 110 398 Z" fill="#111827" filter="url(#asmShadow)" />
        </motion.g>

        {/* Side skirts */}
        <motion.g custom={10} variants={smallPartVariants} initial="hidden" animate="visible">
          <path d="M 310 395 L 670 395 L 670 412 L 310 412 Z" fill="#1f2937" opacity={0.95} filter="url(#asmShadow)" />
        </motion.g>

        {/* Lock-in shockwave rings */}
        {phase === 'locking' && (
          <>
            <motion.circle
              cx="500"
              cy="320"
              r="20"
              fill="none"
              stroke="#c8102e"
              strokeWidth="2"
              initial={{ opacity: 0.8, scale: 0.5 }}
              animate={{ opacity: 0, scale: 3.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <motion.circle
              cx="500"
              cy="320"
              r="20"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              initial={{ opacity: 0.6, scale: 0.3 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            />
          </>
        )}
      </svg>

      {/* Completion text */}
      <AnimatePresence>
        {phase === 'locking' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-10 z-20 text-center"
          >
            <span className="text-lg font-bold tracking-wider text-white drop-shadow-lg">
              CONFIGURATIE GELADEN
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Wheel({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#0a0a0a" stroke="#27272a" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r - 12} fill={color} stroke="#4b5563" strokeWidth="1" />
      <g stroke="#9ca3af" strokeWidth={r > 54 ? 4 : 3} strokeLinecap="round">
        <line x1={cx} y1={cy - (r - 16)} x2={cx} y2={cy + (r - 16)} />
        <line x1={cx - (r - 16)} y1={cy} x2={cx + (r - 16)} y2={cy} />
        <line x1={cx - (r - 22)} y1={cy - (r - 22)} x2={cx + (r - 22)} y2={cy + (r - 22)} />
        <line x1={cx + (r - 22)} y1={cy - (r - 22)} x2={cx - (r - 22)} y2={cy + (r - 22)} />
      </g>
      <circle cx={cx} cy={cy} r="7" fill="#6b7280" />
    </g>
  );
}
