'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Star } from 'lucide-react';
import { contactInfo } from '@/data/cars';
import { reviewStats } from '@/data/google-reviews';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/90" />
      
      {/* Accent Lines - Hidden on mobile */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#c8102e]/50 to-transparent hidden sm:block" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-[#c8102e]/30 to-transparent hidden sm:block" />
      
      {/* Glow Effects - Smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/5 rounded-full blur-3xl" />

      {/* Content - Gebruik initial/animate voor Hero (geen whileInView nodig) */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-[#c8102e] rounded-full animate-pulse" />
          <span className="text-white/80 text-xs sm:text-sm font-medium">Garage open tot 22:00 - Altijd bereikbaar voor spoed</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Vind uw <span className="text-[#c8102e]">droomoccasion</span>
          <br />
          <span className="text-white/40">bij Car Store Cuijk</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-white/50 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0"
        >
          Ruim aanbod tweedehands auto's en gebruikte auto's van alle merken. 
          Garage open tot 22:00, bereikbaar voor spoed reparatie. Auto inkoop, onderhoud, reparatie en airco vullen.
        </motion.p>

        {/* Review Stats Badge - Stacked on mobile */}
        <motion.div
          variants={itemVariants}
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

        {/* CTA Buttons - Full width on mobile */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Link
            href="/occasions"
            className="group flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25 w-full sm:w-auto"
          >
            Bekijk Occasions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/31687118768"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Ons
          </a>
        </motion.div>

        {/* Quick Contact - Simplified on mobile */}
        <motion.div
          variants={itemVariants}
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
