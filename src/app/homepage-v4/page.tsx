'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, Phone, ChevronDown, Star, Shield, Users, Clock, Award, Wrench, BadgeCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewMarquee from '@/components/ReviewMarquee';
import CTASection from '@/components/CTASection';
import { cars, contactInfo, testimonials } from '@/data/cars';

gsap.registerPlugin(ScrollTrigger);

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <DNABackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]/90" />
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#c8102e]/50 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-[#c8102e]/30 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8102e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8102e]/5 rounded-full blur-3xl" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2 bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#c8102e] rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Garage open tot 22:00 - Altijd bereikbaar voor spoed</span>
        </motion.div>

        <motion.h1 variants={heroItemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Vind uw <span className="text-[#c8102e]">droomoccasion</span>
          <br /><span className="text-white/40">bij Car Store Cuijk</span>
        </motion.h1>

        <motion.p variants={heroItemVariants} className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10">
          Ruim aanbod tweedehands auto's en gebruikte auto's van alle merken. 
          Garage open tot 22:00, bereikbaar voor spoed reparatie. Auto inkoop, onderhoud, reparatie en airco vullen. 168 reviews, 5 sterren.
        </motion.p>

        <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/occasions" className="group flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25">
            Bekijk Occasions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            <MessageCircle className="w-5 h-5" />WhatsApp Ons
          </a>
        </motion.div>

        {/* Review Stats Badge */}
        <motion.div
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#c8102e] fill-[#c8102e]" />
              <span className="text-white font-bold">5.0</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-white/60 text-sm">
              <span className="font-medium text-white">168</span> Google reviews
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

        <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/occasions" className="group flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25">
            Bekijk Occasions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            <MessageCircle className="w-5 h-5" />WhatsApp Ons
          </a>
        </motion.div>

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

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#dna-spiral" className="flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors">
          <span className="text-sm">Scroll naar beneden</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

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

const stats = [
  { value: '500+', label: 'Tevreden klanten' },
  { value: '5+', label: 'Jaar ervaring' },
  { value: '7', label: 'Dagen per week open' },
  { value: '100%', label: 'Servicegericht' },
];

function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#c8102e] mb-2">{stat.value}</div>
              <div className="text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredCars = cars.filter(car => car.status === 'beschikbaar').sort((a, b) => b.bouwjaar - a.bouwjaar).slice(0, 3);

function DNASpiralSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      carRefs.current.forEach((carEl, index) => {
        if (!carEl) return;
        const isLeft = index % 2 === 0;
        
        // Mobile-optimized: smaller rotations and translations
        const isMobile = window.innerWidth < 768;
        const rotateYStart = isLeft ? (isMobile ? -45 : -90) : (isMobile ? 45 : 90);
        const rotateYEnd = isLeft ? (isMobile ? 15 : -15) : (isMobile ? -15 : 15);
        const rotateYExit = isLeft ? (isMobile ? 45 : 90) : (isMobile ? -45 : -90);
        const xOffset = isMobile ? (isLeft ? -20 : 20) : (isLeft ? -50 : 50);
        
        gsap.set(carEl, { opacity: 0, scale: 0.5, rotateY: rotateYStart, rotateX: isMobile ? 5 : 15, z: -500, x: xOffset });
        
        gsap.timeline({ scrollTrigger: { trigger: carEl, start: "top 85%", end: "center center", scrub: 1 }})
          .to(carEl, { opacity: 1, scale: 1, rotateY: rotateYEnd, rotateX: 0, z: 0, x: 0, duration: 1, ease: "power2.out" });
        
        gsap.timeline({ scrollTrigger: { trigger: carEl, start: "center center", end: "bottom 10%", scrub: 1 }})
          .to(carEl, { opacity: 0, scale: 0.5, rotateY: rotateYExit, rotateX: isMobile ? -5 : -15, z: -500, x: isMobile ? (isLeft ? 20 : -20) : (isLeft ? 50 : -50), duration: 1, ease: "power2.in" });
      });

      const ladderLines = document.querySelectorAll('.dna-ladder-line');
      ladderLines.forEach((line, index) => {
        gsap.fromTo(line, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 0.3, duration: 0.8, delay: index * 0.1, scrollTrigger: { trigger: line, start: "top 80%", toggleActions: "play none none reverse" }});
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-20 lg:mb-32">
          <span className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">DNA Spiral Experience</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Ontdek Onze Occasions</h2>
          <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto">Scroll door onze collectie en zie de auto&apos;s in een unieke 3D spiraal. Elke auto draait naar je toe en weer verder.</p>
        </motion.div>

        {/* Mobile-optimized: reduced spacing between cards */}
        <div className="relative" style={{ transformStyle: 'preserve-3d', minHeight: `${featuredCars.length * 80}vh` }}>
          {featuredCars.map((car, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={car.id} ref={(el) => { carRefs.current[index] = el; }} className={`sticky top-20 mb-16 md:mb-32 ${isLeft ? 'mr-auto' : 'ml-auto'}`} style={{ width: '100%', maxWidth: '600px', transformStyle: 'preserve-3d' }}>
                <div className={`absolute top-1/2 ${isLeft ? 'right-full mr-8' : 'left-full ml-8'} w-32 h-px bg-gradient-to-r ${isLeft ? 'from-[#c8102e]/50 to-transparent' : 'from-transparent to-[#c8102e]/50'} hidden lg:block`} />
                <Link href={`/occasions/${car.id}`} className="group block">
                  <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#c8102e]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c8102e]/10">
                    {/* Mobile-optimized: shorter aspect ratio */}
                    <div className="relative aspect-[16/9] md:aspect-[16/10] overflow-hidden bg-[#0d0d0d]">
                      <Image src={car.afbeeldingen[0] || '/cars/placeholder.svg'} alt={`${car.merk} ${car.model}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 600px" priority={index < 2} />
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mt-20 lg:mt-32">
          <Link href="/occasions" className="group inline-flex items-center gap-3 bg-[#c8102e] hover:bg-[#a00d24] text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25">
            Bekijk Alle Occasions<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Car Marquee Section with swipe functionality
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

  // Auto-scroll animation
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

export default function HomeV4() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <DNASpiralSection />
        <CarMarqueeSection />
        <WhyChooseUs />
        <Services />
        <ReviewMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
