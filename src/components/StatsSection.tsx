'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Tevreden klanten' },
  { value: '5+', label: 'Jaar ervaring' },
  { value: '7', label: 'Dagen per week open' },
  { value: '100%', label: 'Servicegericht' },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#c8102e] mb-2">
                {stat.value}
              </div>
              <div className="text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
