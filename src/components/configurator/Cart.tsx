'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Clock, Truck, Package } from 'lucide-react';
import { ConfigOption } from '@/lib/configurator-options';

interface CartProps {
  items: Array<{ option: ConfigOption; quantity: number }>;
  onRemove: (optionId: string) => void;
  onChangeQuantity: (optionId: string, delta: number) => void;
}

export default function Cart({ items, onRemove, onChangeQuantity }: CartProps) {
  const subtotal = items.reduce((sum, { option, quantity }) => sum + option.price * quantity, 0);
  const btw = subtotal * 0.21;
  const eindtotaal = subtotal + btw;
  const totalInstallHours = items.reduce(
    (sum, { option, quantity }) => sum + option.installTimeHours * quantity,
    0
  );
  const maxDeliveryDays = items.reduce(
    (max, { option, quantity }) => (quantity > 0 ? Math.max(max, option.deliveryDays) : max),
    0
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c8102e]/15 text-[#c8102e]">
          <ShoppingCart className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-white">Jouw configuratie</h3>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] py-10 text-center">
          <Package className="mb-2 h-8 w-8 text-white/20" />
          <p className="text-sm text-white/50">Nog geen opties geselecteerd.</p>
          <p className="text-xs text-white/30">Klik op een optie om toe te voegen.</p>
        </div>
      ) : (
        <>
          <div className="mb-4 max-h-[260px] space-y-2 overflow-y-auto pr-1">
            <AnimatePresence initial={false}>
              {items.map(({ option, quantity }) => (
                <motion.div
                  key={option.id}
                  layout
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-3 transition-colors hover:border-white/10 hover:bg-white/[0.06]"
                >
                  <button
                    type="button"
                    onClick={() => onRemove(option.id)}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/40 transition-colors hover:bg-red-500/20 hover:text-red-400"
                    aria-label={`Verwijder ${option.name}`}
                  >
                    <X className="h-3 w-3" />
                  </button>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white/90">{option.name}</p>
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <span>€ {option.price.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}</span>
                      {quantity > 1 && <span className="text-[#c8102e]">× {quantity}</span>}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold text-white">
                      € {(option.price * quantity).toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
            <div className="flex items-center justify-between text-white/60">
              <span>Subtotaal</span>
              <span>€ {subtotal.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center justify-between text-white/60">
              <span>BTW (21%)</span>
              <span>€ {btw.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center justify-between pt-2 text-lg">
              <span className="font-bold text-white">Eindtotaal</span>
              <span className="font-extrabold text-[#c8102e]">
                € {eindtotaal.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.04] p-3">
              <Clock className="h-4 w-4 shrink-0 text-[#c8102e]" />
              <div>
                <p className="font-semibold text-white/80">Montagetijd</p>
                <p className="text-white/50">~{totalInstallHours.toFixed(1)} uur</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.04] p-3">
              <Truck className="h-4 w-4 shrink-0 text-[#c8102e]" />
              <div>
                <p className="font-semibold text-white/80">Levertijd</p>
                <p className="text-white/50">~{maxDeliveryDays} dagen</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
