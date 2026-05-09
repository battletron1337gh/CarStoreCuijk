'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCarStats } from '@/lib/cars-database';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    beschikbaar: 0,
    gereserveerd: 0,
    verkocht: 0,
    gemiddeldePrijs: 0,
    merken: [] as string[],
  });

  useEffect(() => {
    setStats(getCarStats());
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-white/60">Beheer Car Store Cuijk</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
            <p className="text-white/40 text-sm mb-1">Totaal Occasions</p>
            <p className="text-3xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
            <p className="text-white/40 text-sm mb-1">Beschikbaar</p>
            <p className="text-3xl font-bold text-green-500">{stats.beschikbaar}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
            <p className="text-white/40 text-sm mb-1">Gereserveerd</p>
            <p className="text-3xl font-bold text-yellow-500">{stats.gereserveerd}</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
            <p className="text-white/40 text-sm mb-1">Gem. Prijs</p>
            <p className="text-3xl font-bold">{formatPrice(stats.gemiddeldePrijs)}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold mb-4">Snelle Acties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link
            href="/admin/occasions"
            className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10 hover:border-[#c8102e] transition-colors group"
          >
            <div className="w-12 h-12 bg-[#c8102e]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c8102e]/30 transition-colors">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="font-bold mb-1">Occasions Beheer</h3>
            <p className="text-sm text-white/50">Voeg, bewerk of verwijder auto's</p>
          </Link>

          <Link
            href="/admin/vwe"
            className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10 hover:border-[#c8102e] transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="font-bold mb-1">VWE Koppeling</h3>
            <p className="text-sm text-white/50">Beheer VWE API integratie</p>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10 hover:border-[#c8102e] transition-colors group"
          >
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="font-bold mb-1">Website Bekijken</h3>
            <p className="text-sm text-white/50">Bekijk de live website</p>
          </Link>
        </div>

        {/* Instructions */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-4">Hoe werkt het?</h2>
          <div className="space-y-4 text-white/70">
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <div>
                <p className="font-semibold text-white">Occasions toevoegen</p>
                <p className="text-sm">Gebruik het "Occasions Beheer" om nieuwe auto's toe te voegen. Je kunt alle details invullen inclusief foto's en opties.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <div>
                <p className="font-semibold text-white">Status beheren</p>
                <p className="text-sm">Zet auto's op "gereserveerd" of "verkocht" om ze te verbergen van de website.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <div>
                <p className="font-semibold text-white">Backup maken</p>
                <p className="text-sm">Exporteer regelmatig je occasions naar JSON als backup. Je kunt deze later weer importeren.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
              <div>
                <p className="font-semibold text-white">VWE Koppeling (optioneel)</p>
                <p className="text-sm">Als je VWE gebruikt voor voertuigbeheer, kun je de API koppeling instellen voor automatische synchronisatie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
