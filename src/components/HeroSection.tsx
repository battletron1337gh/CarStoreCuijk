'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { reviewStats } from '@/data/google-reviews';
import { contactInfo } from '@/data/cars';

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        const playVideo = () => {
          video.play();
          document.removeEventListener('touchstart', playVideo);
          document.removeEventListener('click', playVideo);
        };
        document.addEventListener('touchstart', playVideo, { once: true });
        document.addEventListener('click', playVideo, { once: true });
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-[0.92] sm:scale-100"
          poster="/images/hero-poster.jpg"
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/90 z-[1]" />
      
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#c8102e]/50 to-transparent hidden sm:block z-[2]" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-[#c8102e]/30 to-transparent hidden sm:block z-[2]" />
      
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/10 rounded-full blur-3xl z-[2]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/5 rounded-full blur-3xl z-[2]" />

      <motion.div 
        className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={heroItemVariants}
          className="inline-flex items-center gap-2 bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white/80 text-xs sm:text-sm font-medium">Garage open tot 22:00 - Altijd bereikbaar voor spoed</span>
        </motion.div>

        <motion.h1
          variants={heroItemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Vind uw <span className="text-[#c8102e]">droomoccasion</span>
          <br />
          <span className="text-white/40">bij Car Store Cuijk</span>
        </motion.h1>

        <motion.p
          variants={heroItemVariants}
          className="text-base sm:text-xl text-white/50 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0"
        >
          Ruim aanbod tweedehands auto's en gebruikte auto's van alle merken. 
          Garage open tot 22:00, bereikbaar voor spoed reparatie. Auto inkoop, onderhoud, reparatie en airco vullen.
        </motion.p>

        <motion.div
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#c8102e] fill-[#c8102e]" />
              <span className="text-white font-bold">{reviewStats.gemiddelde.toFixed(1)}</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-white/60 text-sm">
              <span className="font-medium text-white">{reviewStats.totaal}</span> Google reviews
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#c8102e] fill-[#c8102e]" />
              <span className="text-white font-bold">4.7</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-white/60 text-sm">
              <span className="font-medium text-white">25</span> Trustpilot reviews
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/occasions"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25"
          >
            Bekijk Occasions
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Ons
          </Link>
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/40 text-sm sm:text-base"
        >
          <a href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#c8102e]" />
            <span>{contactInfo.telefoon}</span>
          </a>
          <span className="hidden sm:block text-white/20">•</span>
          <span className="text-center sm:text-left">{contactInfo.adres}, {contactInfo.plaats}</span>
          <span className="hidden sm:block text-white/20">•</span>
          <span className="hidden sm:inline">Open tot 22:00</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
