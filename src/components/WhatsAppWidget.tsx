'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { contactInfo } from '@/data/cars';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    // Toon kleine notificatie dot na 3 seconden
    const timer = setTimeout(() => setHasNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = contactInfo.whatsapp.replace(/\s|-/g, '').replace(/^\+/g, '');
  const message = encodeURIComponent('Hoi, ik heb een vraag over een auto op jullie website.');

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat bubble */}
      {isOpen && (
        <div className="mb-3 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-4 w-72 animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">Car Store Cuijk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-white/70 text-sm mb-3">
            Hoi! Heb je een vraag over een occasion of dienst? We reageren meestal binnen enkele minuten.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-2.5 rounded-xl font-semibold text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Start WhatsApp chat
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNotification(false);
        }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
        {hasNotification && !isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#c8102e] rounded-full border-2 border-[#0a0a0a]" />
        )}
      </button>
    </div>
  );
}
