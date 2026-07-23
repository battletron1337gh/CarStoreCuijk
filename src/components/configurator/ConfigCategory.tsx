'use client';

import { motion } from 'framer-motion';
import ConfigOption from './ConfigOption';
import { ConfigOption as ConfigOptionType, ConfigCategory as ConfigCategoryType } from '@/lib/configurator-options';

interface ConfigCategoryProps {
  category: ConfigCategoryType;
  options: ConfigOptionType[];
  quantities: Record<string, number>;
  optionColors?: Record<string, string>;
  onToggleOption: (option: ConfigOptionType) => void;
  onChangeQuantity: (optionId: string, delta: number) => void;
  onColorChange?: (optionId: string, color: string) => void;
}

export default function ConfigCategory({
  category,
  options,
  quantities,
  optionColors,
  onToggleOption,
  onChangeQuantity,
  onColorChange,
}: ConfigCategoryProps) {
  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">
          {category.name}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => (
          <ConfigOption
            key={option.id}
            option={option}
            quantity={quantities[option.id] || 0}
            selectedColor={optionColors?.[option.id]}
            onToggle={() => onToggleOption(option)}
            onChangeQuantity={(delta) => onChangeQuantity(option.id, delta)}
            onColorChange={onColorChange ? (color) => onColorChange(option.id, color) : undefined}
          />
        ))}
      </div>
    </motion.div>
  );
}
