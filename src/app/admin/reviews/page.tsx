'use client';

import { useState, useEffect } from 'react';
import { getReviews, ReviewsCache } from '@/lib/reviews-cache';

export default function AdminReviewsPage() {
  const [reviewsData, setReviewsData] = useState<ReviewsCache | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Fetch reviews bij laden
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getReviews();
        setReviewsData(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  async function handleRefresh() {
    setLoading(true);
    setMessage('');

    try {
      const data = await getReviews(true); // force refresh
      setReviewsData(data);
      setMessage('Reviews ververst!');
    } catch (error) {
      console.error('Error refreshing reviews:', error);
      setMessage('Fout bij verversen');
    } finally {
      setLoading(false);
    }
  }

  if (loading && !reviewsData) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Reviews Admin</h1>
          <div className="animate-pulse bg-[#1a1a1a] rounded-xl p-6 h-64" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Reviews Admin</h1>

        <div className="bg-[#1a1a1a] rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Cache Status</h2>
          
          {reviewsData ? (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Laatste update:</span>
                <span>{new Date(reviewsData.lastUpdated).toLocaleString('nl-NL')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Bron:</span>
                <span className="capitalize">{reviewsData.source}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Totaal reviews:</span>
                <span className="font-semibold">{reviewsData.stats.totaal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Gemiddelde beoordeling:</span>
                <span className="font-semibold">{reviewsData.stats.gemiddelde.toFixed(1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Trustpilot reviews:</span>
                <span className="font-semibold">{reviewsData.trustpilotStats.totaal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Trustpilot gemiddelde:</span>
                <span className="font-semibold">{reviewsData.trustpilotStats.gemiddelde.toFixed(1)}</span>
              </div>
            </div>
          ) : (
            <p className="text-white/60">Geen data beschikbaar.</p>
          )}
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Reviews Verversen</h2>
          
          {message && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 mb-4">
              {message}
            </div>
          )}

          <p className="text-white/60 text-sm mb-4">
            Klik op onderstaande knop om de reviews te verversen van de server.
            Dit haalt de nieuwste data op uit <code className="bg-[#0d0d0d] px-2 py-1 rounded">/data/reviews-cache.json</code>.
          </p>

          <button
            onClick={handleRefresh}
            disabled={loading}
            className="w-full bg-[#c8102e] hover:bg-[#a00d24] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {loading ? 'Bezig...' : 'Ververs Reviews'}
          </button>
        </div>

        <div className="mt-8 text-sm text-white/40 space-y-2">
          <p><strong>Hoe werkt het?</strong></p>
          <p>
            Reviews worden opgeslagen in <code className="bg-[#0d0d0d] px-1 rounded">public/data/reviews-cache.json</code>.
            Deze file wordt bij elke deploy geüpdatet.
          </p>
          <p>
            Op de client wordt de data gecached in localStorage voor 24 uur.
            Na 24 uur wordt automatisch de nieuwste data opgehaald.
          </p>
          <p>
            <strong>Om reviews te updaten:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Pas <code className="bg-[#0d0d0d] px-1 rounded">public/data/reviews-cache.json</code> aan</li>
            <li>Commit en push de wijzigingen</li>
            <li>Deploy de site opnieuw</li>
          </ol>
        </div>
      </div>
    </div>
  );
}