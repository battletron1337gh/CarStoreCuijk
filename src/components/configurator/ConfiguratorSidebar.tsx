'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ConfigCategory, ConfigCategoryId } from '@/lib/configurator-options';

interface ConfiguratorSidebarProps {
  categories: ConfigCategory[];
  activeCategory: ConfigCategoryId;
  onSelect: (id: ConfigCategoryId) => void;
  selectedCounts: Record<ConfigCategoryId, number>;
}

export default function ConfiguratorSidebar({
  categories,
  activeCategory,
  onSelect,
  selectedCounts,
}: ConfiguratorSidebarProps) {
  return (
    <nav className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md">
      <div className="mb-3 px-3 pt-1">
        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
          Categorieën
        </h3>
      </div>

      <div className="flex flex-row gap-2 overflow-x-auto pb-2 sm:flex-col sm:overflow-visible sm:pb-0">
        {categories.map((category) => {
          const Icon =
            (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[
              category.iconName
            ] || LucideIcons.Circle;
          const count = selectedCounts[category.id] || 0;
          const isActive = activeCategory === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => onSelect(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex min-w-[8.5rem] shrink-0 items-center justify-between gap-3 rounded-xl border px-3 py-3 text-left transition-all sm:min-w-0 ${
                isActive
                  ? 'border-[#c8102e]/50 bg-[#c8102e]/15 text-white shadow-md shadow-[#c8102e]/10'
                  : 'border-transparent bg-white/[0.03] text-white/70 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isActive ? 'bg-[#c8102e] text-white' : 'bg-white/10 text-white/60'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">{category.name}</span>
              </div>

              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#c8102e] px-1 text-[10px] font-bold text-white"
                >
                  {count}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
