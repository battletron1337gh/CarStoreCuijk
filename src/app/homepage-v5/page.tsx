'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, Phone, ChevronDown, Star, FileText, Lightbulb, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewMarquee from '@/components/ReviewMarquee';
import CTASection from '@/components/CTASection';
import { cars, contactInfo } from '@/data/cars';
import { reviewStats } from '@/data/google-reviews';

gsap.registerPlugin(ScrollTrigger);

// ==================== SEO METADATA (in aparte file) ====================
// Metadata wordt geëxporteerd uit layout.tsx of aparte metadata.ts

// ==================== DNA BACKGROUND COMPONENT ====================
function DNABackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number, time = 0;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2, amplitude = 100, frequency = 0.003, speed = 0.02;
      for (let y = 0; y < canvas.height; y += 5) {
        const phase = y * frequency + time * speed;
        const x1 = centerX + Math.sin(phase) * amplitude;
        const x2 = centerX + Math.sin(phase + Math.PI) * amplitude;
        if (y % 30 < 15) {
          const opacity = 0.1 + Math.sin(phase) * 0.05;
          ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y);
          ctx.strokeStyle = `rgba(200, 16, 46, ${opacity})`; ctx.lineWidth = 1; ctx.stroke();
        }
        const pointOpacity = 0.3 + Math.sin(phase) * 0.2;
        ctx.fillStyle = `rgba(200, 16, 46, ${pointOpacity})`;
        ctx.beginPath(); ctx.arc(x1, y, 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x2, y, 1.5, 0, Math.PI * 2); ctx.fill();
      }
      time++; animationId = requestAnimationFrame(draw);
    };
    resize(); window.addEventListener('resize', resize); draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

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
      {/* DNA Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <DNABackground />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/90" />
      
      {/* Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#c8102e]/50 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-[#c8102e]/30 to-transparent" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8102e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8102e]/5 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={heroItemVariants}
          className="inline-flex items-center gap-2 bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-[#c8102e] rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Garage open tot 22:00 - Altijd bereikbaar voor spoed</span>
        </motion.div>

        <motion.h1
          variants={heroItemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Vind uw <span className="text-[#c8102e]">droomoccasion</span>
          <br />
          <span className="text-white/40">bij Car Store Cuijk</span>
        </motion.h1>

        <motion.p
          variants={heroItemVariants}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10"
        >
          Ruim aanbod tweedehands auto's en gebruikte auto's van alle merken. 
          Garage open tot 22:00, bereikbaar voor spoed reparatie. Auto inkoop, onderhoud, reparatie en airco vullen. 168 reviews, 5 sterren.
        </motion.p>

        {/* Review Stats Badge */}
        <motion.div
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#c8102e] fill-[#c8102e]" />
              <span className="text-white font-bold">{reviewStats.gemiddelde.toFixed(1)}</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-white/60 text-sm">
              <span className="font-medium text-white">{reviewStats.totaal}</span> Google reviews
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/occasions"
            className="group flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25"
          >
            Bekijk Occasions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Ons
          </a>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          variants={heroItemVariants}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40"
        >
          <a href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-5 h-5 text-[#c8102e]" />
            <span>{contactInfo.telefoon}</span>
          </a>
          <span className="hidden sm:block text-white/20">•</span>
          <span>{contactInfo.adres}, {contactInfo.plaats}</span>
          <span className="hidden sm:block text-white/20">•</span>
          <span>168 reviews, 5 sterren</span>
          <span className="hidden sm:block text-white/20">•</span>
          <span>Open tot 22:00</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#dna-spiral" className="flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors">
          <span className="text-sm">Scroll naar beneden</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

// ==================== DNA SPIRAL SECTIE (Verbeterd met betere timing & easing) ====================
const featuredCars = cars.filter(car => car.status === 'beschikbaar').sort((a, b) => b.bouwjaar - a.bouwjaar).slice(0, 3);

function DNASpiralSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      carRefs.current.forEach((carEl, index) => {
        if (!carEl) return;
        const isLeft = index % 2 === 0;
        
        // Verbeterde waarden voor dramatischer maar soepeler effect
        const rotateYStart = isLeft ? (isMobile ? -60 : -85) : (isMobile ? 60 : 85);
        const rotateYEnd = isLeft ? (isMobile ? 8 : -8) : (isMobile ? -8 : 8);
        const rotateYExit = isLeft ? (isMobile ? 60 : 85) : (isMobile ? -60 : -85);
        const xOffset = isMobile ? (isLeft ? -30 : 30) : (isLeft ? -80 : 80);
        const zStart = isMobile ? -300 : -600;
        const zExit = isMobile ? -300 : -600;
        
        // Initiële state - auto's starten ver weg en gedraaid
        gsap.set(carEl, { 
          opacity: 0, 
          scale: isMobile ? 0.7 : 0.6, 
          rotateY: rotateYStart, 
          rotateX: isMobile ? 8 : 12, 
          z: zStart, 
          x: xOffset,
          transformOrigin: isLeft ? 'right center' : 'left center'
        });
        
        // ENTRY animation - auto draait naar voren met scale up
        gsap.timeline({ 
          scrollTrigger: { 
            trigger: carEl, 
            start: isMobile ? "top 90%" : "top 80%", 
            end: isMobile ? "center 60%" : "center center", 
            scrub: isMobile ? 0.8 : 1.2
          }
        })
          .to(carEl, { 
            opacity: 1, 
            scale: isMobile ? 1.02 : 1.05, // Iets groter dan 1 voor "pop" effect
            rotateY: rotateYEnd, 
            rotateX: 0, 
            z: isMobile ? 50 : 100, // Komt iets naar voren
            x: isLeft ? (isMobile ? -5 : -10) : (isMobile ? 5 : 10), // Subtiele offset voor diepte
            duration: 1, 
            ease: "power3.out" // Soepelere easing
          })
          .to(carEl, {
            scale: 1, // Terug naar normaal op het einde
            x: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        
        // EXIT animation - auto draait weg met scale down
        gsap.timeline({ 
          scrollTrigger: { 
            trigger: carEl, 
            start: isMobile ? "center 40%" : "center center", 
            end: isMobile ? "bottom 20%" : "bottom 15%", 
            scrub: isMobile ? 0.8 : 1.2
          }
        })
          .to(carEl, { 
            opacity: 0, 
            scale: isMobile ? 0.75 : 0.65, 
            rotateY: rotateYExit, 
            rotateX: isMobile ? -8 : -12, 
            z: zExit, 
            x: isMobile ? (isLeft ? 30 : -30) : (isLeft ? 80 : -80), 
            duration: 1, 
            ease: "power3.in" // Soepelere exit easing
          });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile]);

  const formatPrice = (price: number) => new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(price);

  return (
    <section ref={sectionRef} id="dna-spiral" className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden" style={{ perspective: '1500px' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c8102e]/20 to-transparent" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="dna-ladder-line absolute left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#c8102e]/30 to-transparent" style={{ top: `${(i + 1) * 5}%` }} />
        ))}
      </div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#c8102e]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#c8102e]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-center mb-20 lg:mb-32">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">DNA Spiral Experience</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Ontdek Onze Occasions</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto">Scroll door onze collectie en zie de auto&apos;s in een unieke 3D spiraal. Elke auto draait naar je toe en weer verder.</motion.p>
        </motion.div>

        {/* Verbeterde spacing voor betere scroll ervaring */}
        <div className="relative" style={{ transformStyle: 'preserve-3d', minHeight: `${featuredCars.length * (isMobile ? 60 : 70)}vh` }}>
          {featuredCars.map((car, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={car.id} ref={(el) => { carRefs.current[index] = el; }} className={`sticky top-24 md:top-32 mb-12 md:mb-20 ${isLeft ? 'mr-auto' : 'ml-auto'}`} style={{ width: '100%', maxWidth: isMobile ? '95%' : '600px', transformStyle: 'preserve-3d' }}>
                <div className={`absolute top-1/2 ${isLeft ? 'right-full mr-8' : 'left-full ml-8'} w-32 h-px bg-gradient-to-r ${isLeft ? 'from-[#c8102e]/50 to-transparent' : 'from-transparent to-[#c8102e]/50'} hidden lg:block`} />
                <Link href={`/occasions/${car.id}`} className="group block">
                  <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#c8102e]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c8102e]/10">
                    <div className="relative aspect-[16/9] md:aspect-[16/10] overflow-hidden bg-[#0d0d0d] will-change-transform">
                      <Image src={car.afbeeldingen[0] || '/cars/placeholder.svg'} alt={`${car.merk} ${car.model}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out" sizes="(max-width: 768px) 100vw, 600px" priority={index < 2} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 left-4 bg-[#c8102e] text-white px-3 py-1 rounded-full text-sm font-semibold">{car.bouwjaar}</div>
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full text-xs font-mono">{String(index + 1).padStart(2, '0')} / {String(featuredCars.length).padStart(2, '0')}</div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#c8102e] transition-colors">{car.merk} {car.model}</h3>
                          <p className="text-white/50 text-lg">{car.variant}</p>
                        </div>
                        <div className="text-right"><p className="text-3xl lg:text-4xl font-bold text-[#c8102e]">{formatPrice(car.prijs)}</p></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                        <div className="text-center"><p className="text-white/40 text-sm mb-1">Km-stand</p><p className="text-white font-semibold">{car.kilometerstand.toLocaleString('nl-NL')}</p></div>
                        <div className="text-center border-x border-white/10"><p className="text-white/40 text-sm mb-1">Brandstof</p><p className="text-white font-semibold">{car.brandstof}</p></div>
                        <div className="text-center"><p className="text-white/40 text-sm mb-1">Transmissie</p><p className="text-white font-semibold">{car.transmissie}</p></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex gap-2 flex-wrap">
                          {car.features.slice(0, 2).map((feature, i) => <span key={i} className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded">{feature}</span>)}
                        </div>
                        <span className="flex items-center gap-2 text-[#c8102e] font-semibold group-hover:gap-3 transition-all">Bekijk details <ArrowRight className="w-4 h-4" /></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bekijk Alle Occasions Button */}
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-center mt-12 md:mt-16">
          <Link href="/occasions" className="group inline-flex items-center gap-3 bg-[#c8102e] hover:bg-[#a00d24] text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25">
            Bekijk Alle Occasions<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
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
        <div className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-[#c8102e]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c8102e]/10 hover:-translate-y-2 h-full flex flex-col">
          {/* Icon with pulse effect */}
          <div className={`w-14 h-14 bg-[#c8102e]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-all duration-500 ${isInView ? 'scale-100' : 'scale-90'}`}>
            <tip.icon className="w-7 h-7 text-[#c8102e] group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Content */}
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#c8102e] transition-colors duration-300">
            {tip.title}
          </h3>
          <p className="text-white/50 leading-relaxed mb-6 flex-grow">
            {tip.excerpt}
          </p>

          {/* Read More Link with arrow animation */}
          <div className="flex items-center gap-2 text-[#c8102e] font-semibold group-hover:gap-3 transition-all duration-300">
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
    <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#c8102e]/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#c8102e]/10 to-transparent" />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#c8102e]/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#c8102e]/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-8'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-flex items-center gap-2 text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
            <Lightbulb className="w-4 h-4" />
            Kennisbank
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Handige Tips <span className="text-[#c8102e]">&</span> Advies
          </h2>
          <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto">
            Ontdek nuttige artikelen over auto onderhoud, aankoop tips en meer. 
            Geschreven door onze ervaren monteurs.
          </p>
        </div>

        {/* Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredTips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/kennisbank"
            className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#c8102e]/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c8102e]/10"
          >
            Bekijk alle tips
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== CAR MARQUEE (swipe bar) ====================
function CarMarqueeSection() {
  const availableCars = cars.filter(car => car.status === 'beschikbaar');
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
        scrollPos.current += 1.2;
        
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
    <section className="py-10 sm:py-16 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      <div className="mb-4 sm:mb-8 text-center px-4">
        <h3 className="text-base sm:text-xl font-semibold text-white/80">
          Bekijk al onze occasions
        </h3>
        <p className="text-white/40 text-xs sm:text-sm mt-1">
          Raak aan om te pauzeren, swipe om te scrollen
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
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
              className="group block flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[280px] mx-1.5 sm:mx-2 lg:mx-3"
            >
              <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-[#c8102e]/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                    alt={`${car.merk} ${car.model}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#c8102e] transition-colors line-clamp-1 mb-0.5 sm:mb-1">
                    {car.merk} {car.model}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#c8102e]">
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
        
        {/* 3. DNA Spiral (van v3/v4) */}
        <DNASpiralSection />
        
        {/* 4. Car Marquee (swipe bar) */}
        <CarMarqueeSection />
        
        {/* 5. Rest van originele home */}
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
