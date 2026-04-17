'use client';

import { useState, useEffect } from 'react';
import { X, Settings, Cookie } from 'lucide-react';

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(stored));
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowSettings(false);

    // Initialize GA if analytics is accepted
    if (prefs.analytics && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {!showSettings ? (
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-6 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c8102e]/10 text-[#c8102e] rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">
                  Cookie Voorkeuren
                </h3>
                <p className="text-white/60 text-sm">
                  Wij gebruiken cookies om uw ervaring te verbeteren, analysegegevens te verzamelen en marketing te personaliseren. 
                  Door op "Accepteren" te klikken, gaat u akkoord met ons gebruik van cookies. 
                  <a href="/privacy" className="text-[#c8102e] hover:underline ml-1">
                    Meer informatie
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all text-sm font-medium"
                >
                  <Settings className="w-4 h-4" />
                  Instellingen
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all text-sm font-medium"
                >
                  Weigeren
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#c8102e] hover:bg-[#a00d24] text-white rounded-xl transition-all text-sm font-medium"
                >
                  Accepteren
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Cookie Instellingen</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white">Essentiële Cookies</h4>
                    <span className="px-2 py-0.5 bg-[#c8102e]/20 text-[#c8102e] text-xs rounded-full">
                      Verplicht
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">
                    Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-[#c8102e] rounded-full relative cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Analytische Cookies</h4>
                  <p className="text-white/50 text-sm">
                    Help ons de website te verbeteren door anonieme gebruiksgegevens te verzamelen.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-[#c8102e]' : 'bg-white/20'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                      preferences.analytics ? 'right-1' : 'left-1'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Marketing Cookies</h4>
                  <p className="text-white/50 text-sm">
                    Worden gebruikt om gepersonaliseerde advertenties te tonen.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-[#c8102e]' : 'bg-white/20'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                      preferences.marketing ? 'right-1' : 'left-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2.5 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all text-sm font-medium"
              >
                Annuleren
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2.5 bg-[#c8102e] hover:bg-[#a00d24] text-white rounded-xl transition-all text-sm font-medium"
              >
                Voorkeuren Opslaan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
