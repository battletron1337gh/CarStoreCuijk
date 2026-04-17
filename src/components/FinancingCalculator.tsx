'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Calculator, Euro, Calendar, Percent, TrendingUp, Wallet } from 'lucide-react';
import { trackCalculatorUse } from '@/lib/analytics';

interface CalculationResult {
  maandbedrag: number;
  totaleKosten: number;
  totaleRente: number;
}

export default function FinancingCalculator() {
  const [aankoopbedrag, setAankoopbedrag] = useState(15000);
  const [aanbetaling, setAanbetaling] = useState(10); // percentage
  const [looptijd, setLooptijd] = useState(60); // maanden
  const [rentevoet, setRentevoet] = useState(6.9);
  const [result, setResult] = useState<CalculationResult>({
    maandbedrag: 0,
    totaleKosten: 0,
    totaleRente: 0,
  });
  
  // Use ref to track if we've already tracked this calculation
  const hasTrackedRef = useRef(false);
  const trackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculate = useCallback(() => {
    const aanbetalingBedrag = (aankoopbedrag * aanbetaling) / 100;
    const teFinancieren = aankoopbedrag - aanbetalingBedrag;
    const maandRente = rentevoet / 100 / 12;
    
    let maandbedrag: number;
    
    if (maandRente === 0) {
      maandbedrag = teFinancieren / looptijd;
    } else {
      maandbedrag = teFinancieren * 
        (maandRente * Math.pow(1 + maandRente, looptijd)) / 
        (Math.pow(1 + maandRente, looptijd) - 1);
    }

    const totaleKosten = (maandbedrag * looptijd) + aanbetalingBedrag;
    const totaleRente = (maandbedrag * looptijd) - teFinancieren;

    const newResult = {
      maandbedrag: Math.round(maandbedrag * 100) / 100,
      totaleKosten: Math.round(totaleKosten * 100) / 100,
      totaleRente: Math.round(totaleRente * 100) / 100,
    };

    setResult(newResult);

    // Debounce tracking - only track after user stops adjusting for 2 seconds
    if (trackTimeoutRef.current) {
      clearTimeout(trackTimeoutRef.current);
    }
    
    trackTimeoutRef.current = setTimeout(() => {
      trackCalculatorUse({
        amount: aankoopbedrag,
        downPayment: aanbetaling,
        term: looptijd,
        monthlyPayment: newResult.maandbedrag,
      });
    }, 2000);
  }, [aankoopbedrag, aanbetaling, looptijd, rentevoet]);

  useEffect(() => {
    calculate();
    return () => {
      if (trackTimeoutRef.current) {
        clearTimeout(trackTimeoutRef.current);
      }
    };
  }, [calculate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  const aanbetalingBedrag = Math.round((aankoopbedrag * aanbetaling) / 100);
  const teFinancieren = aankoopbedrag - aanbetalingBedrag;

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 border border-white/5">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-[#c8102e]/10 text-[#c8102e] rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Financieringscalculator</h3>
          <p className="text-white/50 text-sm">Bereken uw maandlasten</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Aankoopbedrag */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Euro className="w-4 h-4" />
              Aankoopbedrag
            </label>
            <span className="text-[#c8102e] font-bold">{formatCurrency(aankoopbedrag)}</span>
          </div>
          <input
            type="range"
            min="5000"
            max="100000"
            step="500"
            value={aankoopbedrag}
            onChange={(e) => setAankoopbedrag(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8102e]"
          />
          <div className="flex justify-between text-xs text-white/40 mt-1">
            <span>€5.000</span>
            <span>€100.000</span>
          </div>
        </div>

        {/* Aanbetaling */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Wallet className="w-4 h-4" />
              Aanbetaling
            </label>
            <div className="text-right">
              <span className="text-[#c8102e] font-bold">{aanbetaling}%</span>
              <span className="text-white/50 text-sm ml-2">({formatCurrency(aanbetalingBedrag)})</span>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={aanbetaling}
            onChange={(e) => setAanbetaling(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8102e]"
          />
          <div className="flex justify-between text-xs text-white/40 mt-1">
            <span>0%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Looptijd */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Calendar className="w-4 h-4" />
              Looptijd
            </label>
            <span className="text-[#c8102e] font-bold">{looptijd} maanden</span>
          </div>
          <input
            type="range"
            min="12"
            max="84"
            step="12"
            value={looptijd}
            onChange={(e) => setLooptijd(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8102e]"
          />
          <div className="flex justify-between text-xs text-white/40 mt-1">
            <span>12 maand</span>
            <span>84 maand</span>
          </div>
        </div>

        {/* Rentevoet */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Percent className="w-4 h-4" />
              Rentevoet
            </label>
            <span className="text-[#c8102e] font-bold">{rentevoet}%</span>
          </div>
          <input
            type="range"
            min="3"
            max="12"
            step="0.1"
            value={rentevoet}
            onChange={(e) => setRentevoet(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c8102e]"
          />
          <div className="flex justify-between text-xs text-white/40 mt-1">
            <span>3%</span>
            <span>12%</span>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#0d0d0d] rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-white/50">Te financieren</span>
            <span className="text-white font-semibold">{formatCurrency(teFinancieren)}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/70 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#c8102e]" />
              Maandbedrag
            </span>
            <span className="text-2xl font-bold text-[#c8102e]">{formatCurrency(result.maandbedrag)}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-white/40 text-sm block">Totale kosten</span>
              <span className="text-white font-semibold">{formatCurrency(result.totaleKosten)}</span>
            </div>
            <div>
              <span className="text-white/40 text-sm block">Totale rente</span>
              <span className="text-white font-semibold">{formatCurrency(result.totaleRente)}</span>
            </div>
          </div>
        </div>

        <p className="text-white/40 text-xs text-center">
          * Dit is een indicatie. De werkelijke rente kan afwijken afhankelijk van uw persoonlijke situatie.
        </p>
      </div>
    </div>
  );
}
