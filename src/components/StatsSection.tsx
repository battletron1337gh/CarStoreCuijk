'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ReviewStats {
  gemiddelde: number;
  totaal: number;
}

interface StatsData {
  google: ReviewStats;
  trustpilot: ReviewStats;
  loading: boolean;
}

export default function StatsSection() {
  const [stats, setStats] = useState<StatsData>({
    google: { gemiddelde: 5.0, totaal: 168 },
    trustpilot: { gemiddelde: 4.7, totaal: 25 },
    loading: true,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setStats({
              google: result.data.stats,
              trustpilot: result.data.trustpilotStats,
              loading: false,
            });
          }
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
        setStats(prev => ({ ...prev, loading: false }));
      }
    }

    fetchStats();
  }, []);

  const statsItems = [
    { 
      value: stats.loading ? '168+' : `${stats.google.totaal}+`, 
      label: 'Tevreden klanten' 
    },
    { value: '5+', label: 'Jaar ervaring' },
    { value: '7', label: 'Dagen per week open' },
    { 
      value: stats.loading ? '5.0' : stats.google.gemiddelde.toFixed(1), 
      label: 'Google beoordeling' 
    },
  ];

  return (
    <section id="stats" className="py-10 sm:py-16 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {statsItems.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#c8102e] mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}