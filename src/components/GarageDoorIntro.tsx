'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function GarageDoorIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [skipVisible, setSkipVisible] = useState(true);

  useEffect(() => {
    // Toon de intro alleen bij het eerste bezoek per browser.
    // Verwijder de check hieronder als je hem bij elke bezoek wilt tonen.
    if (typeof window !== 'undefined' && window.localStorage.getItem('garageDoorIntroSeen') === '1') {
      setShowIntro(false);
      return;
    }

    // Korte pauze zodat het logo leesbaar is, dan openen.
    const timer = setTimeout(() => {
      setIsOpening(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('garageDoorIntroSeen', '1');
    }
    setShowIntro(false);
  };

  const skip = () => {
    setIsOpening(true);
  };

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Achtergrond licht dat tevoorschijn komt */}
          <motion.div
            className="absolute inset-0 bg-[#0a0a0a]"
            initial={{ opacity: 1 }}
            animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Overslaan knop */}
          <AnimatePresence>
            {skipVisible && !isOpening && (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8 }}
                onClick={skip}
                className="absolute top-6 right-6 z-[110] text-white/40 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                Overslaan
              </motion.button>
            )}
          </AnimatePresence>

          {/* Logo in het midden, gloeiend op de deur */}
          <motion.div
            className="relative z-[105] flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              isOpening
                ? { opacity: 0, scale: 1.1, y: -40 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <Image
                src="/logo.png"
                alt="Car Store Cuijk"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(200,16,46,0.35)]"
                priority
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-white/50 text-sm sm:text-base tracking-[0.2em] uppercase"
            >
              Garage • Occasions • Onderhoud
            </motion.p>
          </motion.div>

          {/* De garagedeur zelf */}
          <motion.div
            className="absolute inset-0 z-[110] pointer-events-none"
            initial={{ y: 0 }}
            animate={isOpening ? { y: '-100%' } : { y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
              delay: isOpening ? 0 : 0,
            }}
            onAnimationComplete={() => {
              if (isOpening) handleComplete();
            }}
          >
            {/* Door achtergrond met horizontale panelen */}
            <div
              className="absolute inset-0 bg-[#0d0d0d]"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 60px,
                  rgba(255,255,255,0.03) 60px,
                  rgba(255,255,255,0.03) 62px
                )`,
              }}
            />

            {/* Rode accent lijnen / kader */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c8102e] to-transparent opacity-80" />
            <div className="absolute inset-x-0 bottom-0 h-2 bg-[#c8102e] shadow-[0_0_40px_rgba(200,16,46,0.6)]" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#c8102e]/40 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#c8102e]/40 to-transparent" />

            {/* Centraal logo op de deur (silhouet / reflectie) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
              <div className="relative w-64 h-64 sm:w-96 sm:h-96">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Onder lichtstrip op de deur */}
            <div className="absolute bottom-2 inset-x-0 h-[2px] bg-[#ff2a4d] shadow-[0_0_20px_#c8102e]" />
          </motion.div>

          {/* Licht sweep die naar beneden valt zodra de deur opengaat */}
          <motion.div
            className="absolute inset-0 z-[104] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isOpening ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(180deg, rgba(200,16,46,0.25) 0%, transparent 60%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
