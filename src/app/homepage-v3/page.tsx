'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle, Phone, ChevronDown, Star, Shield, Users, Clock, Award, Wrench, BadgeCheck } from 'lucide-react';
import CarMarquee from '@/components/CarMarquee';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cars, services, contactInfo, testimonials } from '@/data/cars';

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
          <span className="text-white/80 text-sm font-medium">7 dagen per week open</span>
        </motion.div>

        <motion.h1 variants={heroItemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Vind uw <span className="text-[#c8102e]">droomoccasion</span>
          <br /><span className="text-white/40">bij Car Store Cuijk</span>
        </motion.h1>

        <motion.p variants={heroItemVariants} className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10">
          Ruim aanbod occasions, professioneel onderhoud en persoonlijke service. 
          Wij helpen u graag bij het vinden van de perfecte auto.
        </motion.p>

        <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/occasions" className="group flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25">
            Bekijk Occasions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            <MessageCircle className="w-5 h-5" />WhatsApp Ons
          </a>
        </motion.div>

        <motion.div variants={heroItemVariants} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40">
          <a href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-5 h-5 text-[#c8102e]" /><span>{contactInfo.telefoon}</span>
          </a>
          <span className="hidden sm:block text-white/20">•</span>
          <span>{contactInfo.adres}, {contactInfo.plaats}</span>
          <span className="hidden sm:block text-white/20">•</span>
          <span>7 dagen open</span>
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
        gsap.set(carEl, { opacity: 0, scale: 0.5, rotateY: isLeft ? -90 : 90, rotateX: 15, z: -500, x: isLeft ? -100 : 100 });
        
        gsap.timeline({ scrollTrigger: { trigger: carEl, start: "top 90%", end: "center center", scrub: 1 }})
          .to(carEl, { opacity: 1, scale: 1, rotateY: isLeft ? -15 : 15, rotateX: 0, z: 0, x: isLeft ? -50 : 50, duration: 1, ease: "power2.out" });
        
        gsap.timeline({ scrollTrigger: { trigger: carEl, start: "center center", end: "bottom 10%", scrub: 1 }})
          .to(carEl, { opacity: 0, scale: 0.5, rotateY: isLeft ? 90 : -90, rotateX: -15, z: -500, x: isLeft ? 100 : -100, duration: 1, ease: "power2.in" });
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

        <div className="relative" style={{ transformStyle: 'preserve-3d', minHeight: `${featuredCars.length * 100}vh` }}>
          {featuredCars.map((car, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={car.id} ref={(el) => { carRefs.current[index] = el; }} className={`sticky top-20 mb-32 ${isLeft ? 'mr-auto' : 'ml-auto'}`} style={{ width: '100%', maxWidth: '600px', transformStyle: 'preserve-3d' }}>
                <div className={`absolute top-1/2 ${isLeft ? 'right-full mr-8' : 'left-full ml-8'} w-32 h-px bg-gradient-to-r ${isLeft ? 'from-[#c8102e]/50 to-transparent' : 'from-transparent to-[#c8102e]/50'} hidden lg:block`} />
                <Link href={`/occasions/${car.id}`} className="group block">
                  <div className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#c8102e]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c8102e]/10">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0d]">
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

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mt-20 lg:mt-32">
          <Link href="/occasions" className="group inline-flex items-center gap-3 bg-[#c8102e] hover:bg-[#a00d24] text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25">
            Bekijk Alle Occasions<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Shield, title: 'Betrouwbaar', description: 'Al onze occasions worden grondig gecontroleerd. U koopt met vertrouwen.' },
  { icon: Users, title: 'Persoonlijk', description: 'Wij denken met u mee en vinden de auto die bij u past. Geen standaard verhaal.' },
  { icon: Clock, title: '7 Dagen Open', description: "Wij zijn 7 dagen per week open. Ook 's avonds op afspraak mogelijk." },
  { icon: Award, title: 'Erkend', description: 'BOVAG en RDW erkend. U bent verzekerd van kwaliteit en zekerheid.' },
  { icon: Wrench, title: 'Vakkundig', description: 'Onze monteurs werken volgens fabrieksvoorschriften met moderne apparatuur.' },
  { icon: BadgeCheck, title: 'Transparant', description: 'Duidelijke prijzen zonder verborgen kosten. U weet precies waar u aan toe bent.' },
];

function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8102e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8102e]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">Waarom Wij</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Waarom Car Store Cuijk?</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Al jaren de vertrouwde partner voor occasions en onderhoud in Cuijk en omgeving.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#c8102e]/10 text-[#c8102e] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/50 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  ClipboardCheck: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  Droplets: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  Wrench: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  Wind: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  CircleDot: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" /></svg>,
  CarFront: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l2-6h10l2 6M5 10h14M5 10v6a2 2 0 002 2h10a2 2 0 002-2v-6M7 16h10M9 20v2m6-2v2" /></svg>,
};

function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">Onderhoud & Service</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Onderhoud bij Car Store Cuijk</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Van APK-keuring tot complete onderhoudsbeurten – wij zorgen ervoor dat uw auto in topconditie blijft.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#c8102e]/10 text-[#c8102e] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">{iconMap[service.icon]}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c8102e] transition-colors">{service.title}</h3>
              <p className="text-white/50 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => <li key={i} className="flex items-center gap-2 text-sm text-white/40"><span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full" />{feature}</li>)}
              </ul>
              {service.price && <div className="mb-6"><span className="text-2xl font-bold text-[#c8102e]">€{service.price}</span><span className="text-white/40 text-sm"> vanaf</span></div>}
              <Link href="/onderhoud" className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#c8102e] transition-colors">Meer info <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviewsMulti = [...testimonials, ...testimonials];
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <span className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">Wat Klanten Zeggen</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Reviews van Onze Klanten</h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <motion.div className="flex gap-6 px-4" animate={{ x: [0, -50 * testimonials.length * 6] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }}}>
          {reviewsMulti.map((review, index) => (
            <div key={`${review.id}-${index}`} className="flex-shrink-0 w-[350px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < review.sterren ? 'text-[#c8102e] fill-[#c8102e]' : 'text-white/20'}`} />)}
              </div>
              <p className="text-white/70 leading-relaxed mb-4">&ldquo;{review.beoordeling}&rdquo;</p>
              <div>
                <p className="font-semibold text-white">{review.naam}</p>
                {review.auto && <p className="text-white/40 text-sm">{review.auto}</p>}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[#c8102e] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Klaar om uw nieuwe auto te vinden?</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">Bekijk ons complete aanbod occasions of neem contact met ons op. Wij helpen u graag bij het vinden van de perfecte auto die bij u past.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/occasions" className="group inline-flex items-center justify-center gap-2 bg-white text-[#c8102e] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl">Bekijk Occasions<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"><MessageCircle className="w-5 h-5" />WhatsApp</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:pl-12">
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contactgegevens</h3>
              <div className="space-y-4">
                <a href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors"><Phone className="w-5 h-5" /></div>
                  <div><p className="text-sm text-white/60">Telefoon</p><p className="font-semibold">{contactInfo.telefoon}</p></div>
                </a>
                <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors"><MessageCircle className="w-5 h-5" /></div>
                  <div><p className="text-sm text-white/60">WhatsApp</p><p className="font-semibold">{contactInfo.whatsapp}</p></div>
                </a>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5" /></div>
                  <div><p className="text-sm text-white/60">Openingstijden</p><p className="font-semibold">7 dagen: 07:30 - 18:00</p></div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div><p className="text-sm text-white/60">Adres</p><p className="font-semibold">{contactInfo.adres}, {contactInfo.plaats}</p></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomeV3() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <DNASpiralSection />
        <CarMarquee />
        <WhyChooseUsSection />
        <ServicesSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
