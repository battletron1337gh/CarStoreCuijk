'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { googleReviews, reviewStats } from '@/data/google-reviews';

interface Review {
  id: string;
  naam: string;
  beoordeling: string;
  sterren: number;
  bron: 'Google' | 'Trustpilot';
  auto?: string;
}

// Converteer google reviews naar het formaat voor de marquee
const reviews: Review[] = googleReviews.map(review => ({
  id: review.id,
  naam: review.naam,
  beoordeling: review.beoordeling,
  sterren: review.sterren,
  bron: 'Google',
  auto: review.auto,
}));

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-2xl p-5 sm:p-6 mx-2 sm:mx-3 select-none">
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < review.sterren
                ? 'text-[#c8102e] fill-[#c8102e]'
                : 'text-white/20'
            }`}
          />
        ))}
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-5 sm:line-clamp-6">
        &ldquo;{review.beoordeling}&rdquo;
      </p>

      <div className="mt-auto">
        <p className="font-semibold text-white text-sm sm:text-base">{review.naam}</p>
        {review.auto && (
          <p className="text-[#c8102e] text-xs sm:text-sm">{review.auto}</p>
        )}
        <p className="text-white/40 text-xs sm:text-sm">via {review.bron}</p>
      </div>
    </div>
  );
}

// Stats Badge Component
function StatsBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
      <div className="flex items-center gap-3 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-[#c8102e] fill-[#c8102e]" />
          <span className="text-white font-bold text-lg">{reviewStats.gemiddelde.toFixed(1)}</span>
        </div>
        <div className="h-6 w-px bg-white/20" />
        <div className="text-white/70 text-sm">
          <span className="font-semibold text-white">{reviewStats.totaal}</span> Google reviews
        </div>
      </div>
      
      <div className="flex items-center gap-3 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-[#c8102e] fill-[#c8102e]" />
          <span className="text-white font-bold text-lg">4.7</span>
        </div>
        <div className="h-6 w-px bg-white/20" />
        <div className="text-white/70 text-sm">
          <span className="font-semibold text-white">25</span> Trustpilot reviews
        </div>
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  const reviewsMulti = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollPos = useRef(0);

  // Auto-scroll animatie
  const animate = useCallback(() => {
    if (!isPaused && containerRef.current) {
      scrollPos.current += 0.8;
      
      // Reset bij het einde
      const maxScroll = containerRef.current.scrollWidth / 2;
      if (scrollPos.current >= maxScroll) {
        scrollPos.current = 0;
      }
      
      containerRef.current.scrollLeft = scrollPos.current;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Touch handling
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Update scrollPos zodat animatie verder gaat vanaf nieuwe positie
    if (containerRef.current) {
      scrollPos.current = containerRef.current.scrollLeft;
    }
    setIsPaused(false);
  };

  const handleScroll = () => {
    if (containerRef.current && isPaused) {
      scrollPos.current = containerRef.current.scrollLeft;
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-12">
        <div className="text-center">
          <span className="inline-block text-[#c8102e] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">
            Wat Klanten Zeggen
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            Reviews van Onze Klanten
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Echte reviews van echte klanten. Wij zijn trots op onze uitstekende beoordelingen!
          </p>
          <StatsBadge />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

        <div 
          ref={containerRef}
          className={`flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4 ${isPaused ? '' : ''}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onScroll={handleScroll}
          style={{ 
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {reviewsMulti.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
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
