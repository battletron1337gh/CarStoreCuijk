'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check of dit de eerste keer is dat de gebruiker de site bezoekt in deze sessie
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (!hasSeenLoading) {
      // Eerste bezoek - toon loading screen
      setIsLoading(true);
      
      // 4 seconden loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoading', 'true');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Car Store Logo */}
              <motion.img
                src="/images/logo.png"
                alt="Car Store Cuijk - Welkom bij onze RDW erkende garage"
                width="640"
                height="640"
                className="object-contain"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h1 className="text-3xl font-bold text-white tracking-wider">
                WELKOM
              </h1>
              <p className="text-[#c8102e] text-lg font-semibold tracking-[0.3em] mt-1">
                BIJ ONS FAMILIEBEDRIJF
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#c8102e] to-[#ff3333]"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-white/50 text-sm"
            >
              Laden...
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-12 text-white/30 text-sm"
            >
              Vind jouw droomauto
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
