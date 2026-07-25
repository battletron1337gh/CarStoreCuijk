'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface CinematicServiceHeroProps {
  badge?: {
    icon: ReactNode;
    text: string;
  };
  title: string;
  highlightWord?: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export default function CinematicServiceHero({
  badge,
  title,
  highlightWord,
  subtitle,
  children,
  className = '',
}: CinematicServiceHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const words = title.split(' ');
  const titleParts = words.map((word) => ({
    word,
    highlighted: word.toLowerCase() === (highlightWord || '').toLowerCase(),
  }));

  if (shouldReduceMotion) {
    return (
      <section className={`relative overflow-hidden bg-[#0a0a0a] py-20 lg:py-32 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2 mb-6">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {titleParts.map((part, i) => (
                <span key={i} className={part.highlighted ? 'text-[#c8102e]' : 'text-white'}>
                  {part.word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">{subtitle}</p>
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden bg-[#0a0a0a] py-20 lg:py-32 ${className}`}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#c8102e]/10 via-transparent to-[#0a0a0a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(200,16,46,0.15),transparent_60%)]" />

      {/* Accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#c8102e]/40 via-transparent to-transparent hidden sm:block" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[#c8102e]/20 via-transparent to-transparent hidden sm:block" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.5)_100%)]" />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-[#c8102e]/20 border border-[#c8102e]/40 text-white rounded-full px-4 py-2 mb-6"
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {titleParts.map((part, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  className={`inline-block ${part.highlighted ? 'text-[#c8102e]' : 'text-white'}`}
                  initial={{ y: '110%', rotate: 3 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {part.word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
