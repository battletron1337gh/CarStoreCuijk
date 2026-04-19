'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ClipboardCheck, 
  Droplets, 
  Wrench, 
  Wind, 
  CircleDot, 
  CarFront,
  ArrowRight
} from 'lucide-react';
import { services, contactInfo } from '@/data/cars';

const iconMap: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  CircleDot: <CircleDot className="w-8 h-8" />,
  CarFront: <CarFront className="w-8 h-8" />,
};

// Hook for intersection observer
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasAnimated(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold, rootMargin: '-50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView, hasAnimated };
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isInView } = useInView(0.15);
  
  return (
    <div
      ref={ref}
      className={`group bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all duration-500 hover:-translate-y-1 ${
        isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-90 translate-y-5 scale-[0.98]'
      }`}
      style={{ 
        transitionDelay: `${index * 80}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-[#c8102e]/10 text-[#c8102e] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">
        {iconMap[service.icon]}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c8102e] transition-colors">
        {service.title}
      </h3>
      <p className="text-white/50 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-white/40">
            <span className="w-1.5 h-1.5 bg-[#c8102e] rounded-full" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      {service.price && (
        <div className="mb-6">
          <span className="text-2xl font-bold text-[#c8102e]">
            €{service.price}
          </span>
          <span className="text-white/40 text-sm"> vanaf</span>
        </div>
      )}

      {/* CTA */}
      <Link
        href="/onderhoud"
        className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#c8102e] transition-colors"
      >
        Meer info
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export default function Services() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.3);

  return (
    <section className="py-20 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-600 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-5'
          }`}
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
            Onderhoud & Service
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Auto Onderhoud & Reparatie Cuijk
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Professioneel auto onderhoud voor alle merken. APK, kleine en grote beurt, 
            distributieriem, koppeling, remblokken. 168 reviews, 5 sterren.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-white/50 mb-6">
            Heeft u vragen over onze diensten? Neem gerust contact op.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Bel {contactInfo.telefoon}
            </Link>
            <Link
              href="/onderhoud"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#c8102e] transition-colors"
            >
              Bekijk alle diensten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
