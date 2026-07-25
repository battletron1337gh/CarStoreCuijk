'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Star, FileText, Lightbulb, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinematicReveal, { SplitTextReveal, CinematicLine } from '@/components/CinematicReveal';
import StatsSection from '@/components/StatsSection';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewMarquee from '@/components/ReviewMarquee';
import CTASection from '@/components/CTASection';
import GarageDoorIntro from '@/components/GarageDoorIntro';
import Image from 'next/image';
import { contactInfo } from '@/data/cars';
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented, try again after user interaction
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
      {/* Video Background — desktop only, mobile gets optimized poster */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: static poster (no video download, saves data) */}
        <div
          className="absolute inset-0 sm:hidden bg-cover bg-center scale-[0.92]"
          style={{ backgroundImage: 'url(/images/hero-poster.jpg)' }}
        />
        {/* Desktop: optimized WebM + MP4 fallback */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center scale-[0.92] sm:scale-100"
          poster="/images/hero-poster.jpg"
          preload="metadata"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/90 z-[1]" />
      
      {/* Accent Lines - Hidden on mobile */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#c8102e]/50 to-transparent hidden sm:block z-[2]" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-[#c8102e]/30 to-transparent hidden sm:block z-[2]" />
      
      {/* Glow Effects - Smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/10 rounded-full blur-3xl z-[2]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c8102e]/5 rounded-full blur-3xl z-[2]" />

      {/* Cinematic film grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
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
          <span className="text-white/80 text-xs sm:text-sm font-medium">Bereikbaar tot 22:00 · Altijd bereikbaar voor spoed</span>
        </motion.div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          <SplitTextReveal text="Vind uw" className="text-white" delay={0.3} />
          {' '}
          <SplitTextReveal text="droomoccasion" className="text-[#c8102e]" delay={0.5} />
          <br />
          <SplitTextReveal text="bij Car Store Cuijk" className="text-white/40" delay={0.7} />
        </h1>

        <motion.p
          variants={heroItemVariants}
          className="text-base sm:text-xl text-white/50 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0"
        >
          Ruim aanbod tweedehands auto's en gebruikte auto's van alle merken.
          Bereikbaar tot 22:00 voor spoed reparatie. Showroom: 07:30–18:00 (daarna op afspraak). Auto inkoop, onderhoud, reparatie en airco vullen.
        </motion.p>

        {/* Review Stats Badge - Google only */}
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
          <span className="hidden sm:inline">Bereikbaar tot 22:00</span>
        </motion.div>
      </motion.div>

    </section>
  );
}



// ==================== FEATURED CARS (3 uitgelicht) ====================
function FeaturedCarsSection() {
  const { cars: dbCars, isLoading } = useCars();
  // Toon de 3 duurste beschikbare auto's
  const featuredCars = dbCars
    .filter(car => car.afbeeldingen.length > 0 && car.status === 'beschikbaar')
    .sort((a, b) => b.prijs - a.prijs)
    .slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (isLoading || featuredCars.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-20 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
            Uitgelicht
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Onze Top Occasions
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Bekijk onze nieuwste aanbod. Alle auto's worden geleverd met garantie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredCars.map((car, index) => (
            <Link 
              key={car.id} 
              href={`/occasions/${car.id}`}
              className="group block"
            >
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c8102e]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c8102e]/10">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                    alt={`${car.merk} ${car.model} - Occasion te koop bij Car Store Cuijk`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#c8102e] transition-colors line-clamp-1 mb-1">
                    {car.merk} {car.model}
                  </h3>
                  <p className="text-sm text-white/50 mb-3">{car.bouwjaar} • {car.kilometerstand?.toLocaleString('nl-NL')} km</p>
                  <p className="text-2xl font-bold text-[#c8102e]">
                    {formatPrice(car.prijs)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/occasions"
            className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25"
          >
            Bekijk Alle Occasions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==================== HANDIGE TIPS & ADVIES ====================
const featuredTips = [
  {
    id: 1,
    title: 'APK Keuring Cuijk - Direct Terecht',
    excerpt: 'RDW erkende APK keuring in Cuijk. Geen wachttijd, vaak zelfde week terecht. Direct afspraak maken online of bellen.',
    icon: Shield,
    href: '/apk-keuring',
  },
  {
    id: 2,
    title: 'Occasions Kopen - Bekijk Ons Aanbod',
    excerpt: 'Ruim aanbod tweedehands auto&apos;s in Cuijk. Alle merken, met garantie. Bekijk direct onze occasions online.',
    icon: FileText,
    href: '/occasions',
  },
  {
    id: 3,
    title: 'Auto Verkopen - Vrijblijvende Taxatie',
    excerpt: 'Auto verkopen in Cuijk? Wij kopen uw auto direct of verkopen deze in consignatie. Vrijblijvende taxatie aanvragen.',
    icon: Lightbulb,
    href: '/auto-inkoop',
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



// ==================== SEO CONTENT SECTION ====================
function SEOContentSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Services */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Auto Garage Cuijk - <span className="text-[#c8102e]">Alle Diensten</span>
            </h2>
            <div className="space-y-4 text-white/60">
              <p>
                Bij Car Store Cuijk bent u aan het juiste adres voor <strong className="text-white">auto inkoop</strong> en <strong className="text-white">auto verkoop</strong>. 
                Wij zijn uw betrouwbare partner voor alle auto diensten in Cuijk en omgeving.
              </p>
              <p>
                Onze <strong className="text-white">RDW erkende garage</strong> biedt professionele <strong className="text-white">APK check</strong>, 
                <strong className="text-white"> diagnose</strong>, <strong className="text-white">onderhoud</strong> en <strong className="text-white">reparaties</strong>. 
                Van distributieriem vervangen tot koppeling reparatie - wij doen het allemaal.
              </p>
              <p>
                Daarnaast zijn wij gespecialiseerd in <strong className="text-white">airco vullen</strong> (R134a en R1234yf), 
                <strong className="text-white"> bandenservice</strong>, en <strong className="text-white">koplampen polijsten</strong>. 
                Kortom: alles voor uw auto onder één dak.
              </p>
            </div>
          </div>

          {/* Right Column - USPs */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Waarom Car Store Cuijk? <span className="text-[#c8102e]">Onze USP's</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8102e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c8102e] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Altijd Bereikbaar</h3>
                  <p className="text-white/60 text-sm">Bereikbaar tot 22:00 voor spoed reparatie. Showroom: 07:30–18:00 (daarna op afspraak).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8102e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c8102e] font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Geen Late Afspraken</h3>
                  <p className="text-white/60 text-sm">Bijna altijd zelfde week terecht. Geen wachttijd van 3 weken zoals bij andere garages.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8102e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c8102e] font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">175+ Reviews, 5 Sterren</h3>
                  <p className="text-white/60 text-sm">RDW erkend met uitstekende beoordelingen. Klanten waarderen onze service.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8102e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c8102e] font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Specialisatie 1ste Eigenaar</h3>
                  <p className="text-white/60 text-sm">Wij richten ons op 1ste eigenaar autos van alle merken. Kwaliteit staat voorop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO - Areas */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Wij zijn actief in <span className="text-[#c8102e]">Cuijk</span> en omgeving
          </h3>
          <p className="text-white/50 text-center max-w-3xl mx-auto">
            Garage Cuijk • Auto onderhoud Cuijk • APK keuring Cuijk • Auto inkoop Cuijk • 
            Auto verkoop Cuijk • Occasions Cuijk • Garage Boxmeer • Garage Grave • 
            Auto reparatie Linden • Auto service Molenhoek
          </p>
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
      <GarageDoorIntro />
      <main>
        {/* 1. Originele Hero (exact zoals /page.tsx) */}
        <Hero />

        {/* 2. Stats (origineel) */}
        <StatsSection />

        <CinematicLine delay={0.2} />

        {/* Featured Cars - 3 duurste auto's */}
        <CinematicReveal direction="up" duration={0.9}>
          <FeaturedCarsSection />
        </CinematicReveal>

        <CinematicLine delay={0.2} />

        {/* Rest van originele home */}
        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
          <WhyChooseUs />
        </CinematicReveal>

        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
          <Services />
        </CinematicReveal>

        <CinematicLine delay={0.2} />

        {/* Handige Tips & Advies Sectie */}
        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
          <TipsSection />
        </CinematicReveal>

        {/* SEO Content voor betere ranking */}
        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
          <SEOContentSection />
        </CinematicReveal>

        <CinematicLine delay={0.2} />

        <CinematicReveal direction="scale" duration={0.9} delay={0.1}>
          <ReviewMarquee />
        </CinematicReveal>

        <CinematicReveal direction="up" duration={0.9} delay={0.1}>
          <CTASection />
        </CinematicReveal>
      </main>
      <Footer />
    </>
  );
}
