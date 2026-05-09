'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoLoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Minimaal 4 seconden tonen
    const minTimer = setTimeout(() => {
      if (videoLoaded) {
        setIsLoading(false);
      }
    }, 4000);

    return () => clearTimeout(minTimer);
  }, [videoLoaded]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoEnded = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            {/* Video Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onLoadedData={handleVideoLoaded}
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover scale-90"
              >
                <source src="/preloadvideos/preload5.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Skip button (optioneel) */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={() => setIsLoading(false)}
              className="absolute bottom-8 right-8 text-white/50 hover:text-white text-sm transition-colors"
            >
              Overslaan →
            </motion.button>
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
