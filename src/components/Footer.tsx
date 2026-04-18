import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { contactInfo, openingHours } from '@/data/cars';

const quickLinks = [
  { href: '/occasions', label: 'Onze Occasions' },
  { href: '/onderhoud', label: 'Onderhoud' },
  { href: '/financiering', label: 'Financiering' },
  { href: '/kennisbank', label: 'Tips & Advies' },
  { href: '/contact', label: 'Contact' },
  { href: '/algemene-voorwaarden', label: 'Algemene Voorwaarden' },
];

const services = [
  'APK Keuring',
  'Onderhoud',
  'Airco Service',
  'Bandenwissel',
  'Diagnose',
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                Car Store <span className="text-[#c8102e]">Cuijk</span>
              </span>
            </Link>
            <p className="text-white/50 mb-6 leading-relaxed">
              Uw betrouwbare partner voor occasions en onderhoud in Cuijk en omgeving.
              Al jaren de beste service tegen scherpe prijzen.
            </p>
            {contactInfo.kvk && (
              <p className="text-white/40 text-sm mb-4">
                KvK: {contactInfo.kvk}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Snelle Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#c8102e] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Onze Diensten</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/onderhoud"
                    className="text-white/50 hover:text-[#c8102e] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${contactInfo.adres}, ${contactInfo.postcode} ${contactInfo.plaats}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 text-[#c8102e] shrink-0" />
                  <span>
                    {contactInfo.adres}<br />
                    {contactInfo.postcode} {contactInfo.plaats}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#c8102e] shrink-0" />
                  {contactInfo.telefoon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#c8102e] shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#c8102e] shrink-0" />
                  {contactInfo.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Opening Hours Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-white/50">
              <Clock className="w-5 h-5 text-[#c8102e]" />
              <span className="font-medium">7 dagen per week open:</span>
              <span className="text-white">07:30 - 18:00 (na 18:00 op afspraak)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-sm">
                © {new Date().getFullYear()} Car Store Cuijk. Alle rechten voorbehouden.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
