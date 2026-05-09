'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/occasions', label: 'Occasions' },
  { href: '/auto-verkopen', label: 'Inkoop' },
  { href: '/onderhoud', label: 'Onderhoud' },
  { href: '/financiering', label: 'Financiering' },
  { href: '/kennisbank', label: 'Tips' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header');
  };

  const handlePhoneClick = () => {
    trackPhoneClick('header');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Desktop: Logo - Left */}
          <Link href="/" className="hidden lg:flex items-center -my-4 lg:-my-6">
            <img
              src="/images/logo.png"
              alt="Car Store Cuijk - Garage en Occasion Dealer in Cuijk"
              className="h-40 lg:h-52 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-[#c8102e] bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0687118768"
              onClick={handlePhoneClick}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
              aria-label="Bel ons"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/31687118768"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c8102e]/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile: Menu Button - Left */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white z-10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile: Logo - Center */}
          <Link href="/" className="lg:hidden flex items-center absolute left-1/2 -translate-x-1/2 -my-4">
            <img
              src="/images/logo.png"
              alt="Car Store Cuijk - Garage en Occasion Dealer in Cuijk"
              className="h-40 w-auto object-contain"
            />
          </Link>

          {/* Mobile: Phone Icon - Right */}
          <a
            href="tel:0687118768"
            onClick={handlePhoneClick}
            className="lg:hidden p-2 text-white z-10"
            aria-label="Bel ons"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(item.href)
                      ? 'text-[#c8102e] bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:0687118768"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors py-3"
                >
                  <Phone className="w-4 h-4" />
                  06 - 871 187 68
                </a>
                <a
                  href="https://wa.me/31687118768"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-5 py-3 rounded-full font-semibold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Ons
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
