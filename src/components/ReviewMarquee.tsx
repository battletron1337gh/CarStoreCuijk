'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  naam: string;
  beoordeling: string;
  sterren: number;
  bron: 'Google' | 'Trustpilot';
  auto?: string;
}

interface ReviewStats {
  gemiddelde: number;
  totaal: number;
}

interface TrustpilotStats {
  gemiddelde: number;
  totaal: number;
}

interface ReviewsData {
  reviews: Review[];
  stats: ReviewStats;
  trustpilotStats: TrustpilotStats;
  lastUpdated: string;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[380px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mx-2 sm:mx-3 select-none">
      <div className="flex gap-1 mb-2 sm:mb-4">
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

      <p className="text-white/70 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-6">
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
function StatsBadge({ googleStats, trustpilotStats }: { 
  googleStats: ReviewStats; 
  trustpilotStats: TrustpilotStats;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mb-6 sm:mb-12">
      <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-full px-4 py-2 sm:px-6 sm:py-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#c8102e] fill-[#c8102e]" />
          <span className="text-white font-bold text-base sm:text-lg">{googleStats.gemiddelde.toFixed(1)}</span>
        </div>
        <div className="h-4 sm:h-6 w-px bg-white/20" />
        <div className="text-white/70 text-xs sm:text-sm">
          <span className="font-semibold text-white">{googleStats.totaal}</span> Google reviews
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-full px-4 py-2 sm:px-6 sm:py-3">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#c8102e] fill-[#c8102e]" />
          <span className="text-white font-bold text-base sm:text-lg">{trustpilotStats.gemiddelde.toFixed(1)}</span>
        </div>
        <div className="h-4 sm:h-6 w-px bg-white/20" />
        <div className="text-white/70 text-xs sm:text-sm">
          <span className="font-semibold text-white">{trustpilotStats.totaal}</span> Trustpilot reviews
        </div>
      </div>
    </div>
  );
}

// Loading skeleton
function ReviewMarqueeSkeleton() {
  return (
    <section className="py-10 sm:py-20 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-12">
        <div className="text-center">
          <div className="h-4 w-32 bg-white/10 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-8 w-64 bg-white/10 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-96 bg-white/10 rounded mx-auto mb-6 animate-pulse" />
          <div className="flex justify-center gap-4">
            <div className="h-12 w-48 bg-white/10 rounded-full animate-pulse" />
            <div className="h-12 w-48 bg-white/10 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 px-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] sm:w-[380px] h-48 bg-white/5 rounded-xl animate-pulse" />
        ))}
      </div>
    </section>
  );
}

export default function ReviewMarquee() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollPos = useRef(0);

  // Fetch reviews van API
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const result = await response.json();
        if (result.success) {
          setReviewsData(result.data);
        } else {
          throw new Error(result.error || 'Unknown error');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews');
        // Fallback data
        setReviewsData({
          reviews: [],
          stats: { gemiddelde: 5.0, totaal: 168 },
          trustpilotStats: { gemiddelde: 4.7, totaal: 25 },
          lastUpdated: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // Prepare reviews voor marquee (duplicate voor infinite scroll effect)
  const reviews = reviewsData?.reviews.map(review => ({
    ...review,
    bron: 'Google' as const,
  })) || [];
  
  const reviewsMulti = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews];

  // Auto-scroll animatie
  const animate = useCallback(() => {
    if (!isPaused && containerRef.current) {
      scrollPos.current += 0.5;
      
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

  const handleTouchStart = () => setIsPaused(true);

  const handleTouchEnd = () => {
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

  if (loading) {
    return <ReviewMarqueeSkeleton />;
  }

  // Fallback als er geen reviews zijn
  const displayReviews = reviews.length > 0 ? reviewsMulti : [];

  return (
    <section className="py-10 sm:py-20 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-12">
        <div className="text-center">
          <span className="inline-block text-[#c8102e] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">
            Wat Klanten Zeggen
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Reviews van Onze Klanten
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
            Echte reviews van echte klanten. Wij zijn trots op onze uitstekende beoordelingen!
          </p>
          {reviewsData && (
            <StatsBadge 
              googleStats={reviewsData.stats} 
              trustpilotStats={reviewsData.trustpilotStats} 
            />
          )}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-16 lg:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-16 lg:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
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
          {displayReviews.length > 0 ? (
            displayReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))
          ) : (
            <div className="w-full text-center py-8 text-white/50">
              Reviews laden...
            </div>
          )}
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