'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Clock, Award, Wrench, BadgeCheck } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Betrouwbaar',
    description: 'Al onze tweedehands auto\'s worden grondig gecontroleerd. U koopt met vertrouwen.'
  },
  {
    icon: Users,
    title: 'Persoonlijk',
    description: 'Als familiebedrijf denken we met u mee en vinden de auto die bij u past. Geen standaard verhaal, maar persoonlijke aandacht.'
  },
  {
    icon: Clock,
    title: '7 Dagen Open',
    description: 'Wij zijn 7 dagen per week open. Ook \'s avonds op afspraak mogelijk.'
  },
  {
    icon: Award,
    title: 'Erkend',
    description: 'RDW erkend. 168 reviews, 5 sterren op Google reviews.'
  },
  {
    icon: Wrench,
    title: 'Alle Merken',
    description: 'Wij onderhouden en repareren alle automerken. Van VW tot BMW, Audi tot Mercedes.'
  },
  {
    icon: BadgeCheck,
    title: 'Transparant',
    description: 'Duidelijke prijzen zonder verborgen kosten. U weet precies waar u aan toe bent.'
  }
];

// Hook for intersection observer with proper cleanup
function useInView(threshold = 0.1) {
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
      { threshold, rootMargin: '0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isInView, hasAnimated };
}

function AnimatedCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const { ref, isInView, hasAnimated } = useInView(0.15);
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className="group bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 hover:border-[#c8102e]/30 transition-all duration-300 card-animate"
      style={{
        opacity: hasAnimated ? 1 : 0.9,
        transform: isInView 
          ? 'translateY(0) scale(1)' 
          : `translateY(${20 + index * 5}px) scale(0.98)`,
        transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s`,
        willChange: 'transform, opacity'
      }}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-[#c8102e]/10 text-[#c8102e] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-300">
        <Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">
        {reason.title}
      </h3>
      <p className="text-white/50 leading-relaxed">
        {reason.description}
      </p>
    </div>
  );
}

function AnimatedHeader() {
  const { ref, isInView, hasAnimated } = useInView(0.2);

  return (
    <div
      ref={ref}
      className="text-center mb-16"
      style={{
        opacity: hasAnimated ? 1 : 0.9,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        willChange: 'transform, opacity'
      }}
    >
      <span className="inline-block text-[#c8102e] font-semibold text-sm uppercase tracking-wider mb-4">
        Waarom Wij
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
        Waarom Car Store Cuijk?
      </h2>
      <p className="text-lg text-white/50 max-w-2xl mx-auto">
        Al jaren de vertrouwde partner voor tweedehands auto&apos;s en onderhoud in Cuijk. 
        Een echt familiebedrijf met passie voor auto&apos;s. 168 reviews, 5 sterren op Google reviews.
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8102e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8102e]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedHeader />

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <AnimatedCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
