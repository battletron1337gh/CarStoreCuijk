'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Star, FileText, Lightbulb, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewMarquee from '@/components/ReviewMarquee';
import CTASection from '@/components/CTASection';
import Image from 'next/image';
import { cars as staticCars, contactInfo } from '@/data/cars';
import { reviewStats } from '@/data/google-reviews';
import { useCars } from '@/hooks/useCars';

// ==================== ORIGINELE HERO (exact zoals /page.tsx) ====================
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

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/90" />
      
      {/* Accent Lines - Hidden on mobile */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#c8102e]/50 to-transparent hidden sm:block" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-[#c8102e]/30 to-transparent hidden sm:block" />
      
      {/* Glow Effects - Smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/5 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={heroItemVariants}
          className="inline-flex items-center gap-2 bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-[#c8102e] rounded-full animate-pulse" />
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

        {/* Review Stats Badge - Stacked on mobile */}
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

        {/* CTA Buttons - Full width on mobile */}
        <motion.div
          variants={heroItemVariants}
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
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
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



// ==================== CAR MARQUEE (swipe bar) ====================
function CarMarqueeSection() {
  const { cars: dbCars, isLoading } = useCars();
  const availableCars = dbCars.filter(car => car.afbeeldingen.length > 0 && car.status === 'beschikbaar').slice(0, 8);
  const carsMulti = [...availableCars, ...availableCars, ...availableCars, ...availableCars, ...availableCars, ...availableCars];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollPos = useRef(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    const animate = () => {
      if (!isPaused && containerRef.current) {
        scrollPos.current += 1; // Slower on mobile
        
        const maxScroll = containerRef.current.scrollWidth / 2;
        if (scrollPos.current >= maxScroll) {
          scrollPos.current = 0;
        }
        
        containerRef.current.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    if (containerRef.current) {
      scrollPos.current = containerRef.current.scrollLeft;
    }
    setIsPaused(false);
  };

  return (
    <section className="py-6 sm:py-16 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="mb-3 sm:mb-8 text-center px-4">
        <h3 className="text-sm sm:text-xl font-semibold text-white/80">
          Bekijk al onze occasions
        </h3>
        <p className="text-white/40 text-xs sm:text-sm mt-1">
          Raak aan om te pauzeren, swipe om te scrollen
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-16 lg:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-16 lg:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-2 sm:pb-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
        >
          {carsMulti.map((car, index) => (
            <Link 
              key={`${car.id}-${index}`} 
              href={`/occasions/${car.id}`}
              className="group block flex-shrink-0 w-[160px] sm:w-[240px] lg:w-[280px] mx-1.5 sm:mx-2 lg:mx-3"
            >
              <div className="bg-[#1a1a1a] rounded-lg sm:rounded-2xl overflow-hidden border border-white/10 hover:border-[#c8102e]/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                    alt={`${car.merk} ${car.model} - Occasion te koop bij Car Store Cuijk`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>

                <div className="p-2 sm:p-4">
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-white group-hover:text-[#c8102e] transition-colors line-clamp-1 mb-0.5 sm:mb-1">
                    {car.merk} {car.model}
                  </h3>
                  <p className="text-sm sm:text-xl lg:text-2xl font-bold text-[#c8102e]">
                    {formatPrice(car.prijs)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// ==================== HANDIGE TIPS & ADVIES ====================
const featuredTips = [
  {
    id: 1,
    title: 'APK Keuring: Wat wordt er gecontroleerd?',
    excerpt: 'Een complete checklist van alle onderdelen die tijdens de APK worden geïnspecteerd en hoe u uw auto kunt voorbereiden.',
    icon: Shield,
    href: '/kennisbank/apk-keuring-wat-wordt-er-gecontroleerd',
  },
  {
    id: 2,
    title: 'Occasion Kopen: De Ultieme Checklist',
    excerpt: 'Waar moet u op letten bij het kopen van een tweedehands auto? Onze experts delen hun beste tips en valkuilen.',
    icon: FileText,
    href: '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-koopt',
  },
  {
    id: 3,
    title: 'Auto Verkopen: Tips voor de Beste Prijs',
    excerpt: 'Hoe bereidt u uw auto voor op verkoop? Tips over prijsbepaling, advertenties en papierwerk.',
    icon: Lightbulb,
    href: '/kennisbank/waar-moet-je-op-letten-als-je-een-auto-verkoopt',
  },
];

// Tip Card Component with animation
function TipCard({ tip, index }: { tip: typeof featuredTips[0]; index: number }) {
  const { ref, isInView } = useInView(0.15);
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isInView 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-10 scale-[0.95]'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        willChange: 'transform, opacity'
      }}
    >
      <Link href={tip.href} className="group block h-full">
        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-[#c8102e]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c8102e]/10 hover:-translate-y-1 sm:hover:-translate-y-2 h-full flex flex-col">
          {/* Icon with pulse effect */}
          <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-[#c8102e]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#c8102e]/20 transition-all duration-500 ${isInView ? 'scale-100' : 'scale-90'}`}>
            <tip.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#c8102e] group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Content */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#c8102e] transition-colors duration-300">
            {tip.title}
          </h3>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
            {tip.excerpt}
          </p>

          {/* Read More Link with arrow animation */}
          <div className="flex items-center gap-2 text-[#c8102e] font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-300">
            <span>Lees meer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </div>
  );
}

// Hook for intersection observer
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold, rootMargin: '-50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function TipsSection() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#c8102e]/20 to-transparent hidden sm:block" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#c8102e]/10 to-transparent hidden sm:block" />
      </div>
      
      {/* Glow Effects - Smaller on mobile */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-[#c8102e]/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-[#c8102e]/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-8'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-flex items-center gap-2 text-[#c8102e] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
            Kennisbank
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Handige Tips <span className="text-[#c8102e]">&</span> Advies
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto px-4 sm:px-0">
            Ontdek nuttige artikelen over auto onderhoud, aankoop tips en meer. 
            Geschreven door onze ervaren monteurs.
          </p>
        </div>

        {/* Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {featuredTips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/kennisbank"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#c8102e]/50 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c8102e]/10 w-full sm:w-auto"
          >
            Bekijk alle tips
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}



// ==================== MAIN PAGE ====================
export default function HomeV5() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Originele Hero (exact zoals /page.tsx) */}
        <Hero />
        
        {/* 2. Stats (origineel) */}
        <StatsSection />
        
        {/* Car Marquee (swipe bar) */}
        <CarMarqueeSection />
        
        {/* Rest van originele home */}
        <WhyChooseUs />
        <Services />
        
        {/* Handige Tips & Advies Sectie */}
        <TipsSection />
        
        <ReviewMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
