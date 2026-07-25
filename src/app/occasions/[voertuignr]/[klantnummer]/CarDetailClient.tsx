'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  Fuel,
  Gauge,
  Settings2,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Clock,
  Wrench,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  X,
  Car,
  Palette,
  Users,
  Weight,
  Hash,
  Info,
  ZoomIn,
  Scale,
} from 'lucide-react';
import { Car as CarType } from '@/types';
import ImageLightbox from '@/components/ImageLightbox';
import { useCompare } from '@/context/CompareContext';

interface CarDetailClientProps {
  car: CarType;
}

export default function CarDetailClient({ car }: CarDetailClientProps) {
  const { isSelected, toggleCar } = useCompare();
  const inCompare = isSelected(car.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formType, setFormType] = useState<'contact' | 'proefrit'>('contact');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatKilometers = (km: number) => {
    return new Intl.NumberFormat('nl-NL').format(km);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === car.afbeeldingen.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? car.afbeeldingen.length - 1 : prev - 1
    );
  };

  // Haal VWE data op voor extra details
  const vweData = car.vweData || {};
  const apkTot = vweData.apk?.['@attributes']?.tot || car.apk || '';
  
  // Extra specificaties uit VWE data
  const cilinderInhoud = vweData.cilinder_inhoud || '';
  const vermogenPk = vweData.vermogen_motor_pk || '';
  const aantalDeuren = vweData.aantal_deuren || '';
  const aantalZitplaatsen = vweData.aantal_zitplaatsen || '';
  const massa = vweData.massa || '';
  const btwMarge = vweData.btw_marge === 'M' ? 'Marge' : 'BTW';

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 sm:pt-28 lg:pt-28">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Right Column - Sticky Sidebar (shown first on mobile) */}
          <div className="order-1 lg:order-2 space-y-3 px-4 sm:px-0 min-w-0">
            {/* Car Title & Price - Sticky on desktop */}
            <div className="lg:sticky lg:top-28 space-y-3">
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4">
                <h1 className="text-2xl font-bold text-white mb-1">
                  {car.merk} {car.model}
                </h1>
                <p className="text-white/60 text-sm">{car.variant}</p>
              </div>

              {/* Price Card */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4">
                <span className="text-white/50 text-sm block mb-1">Prijs</span>
                <span className="text-3xl font-bold text-[#c8102e]">
                  {formatPrice(car.prijs)}
                </span>
                <span className="text-white/50 text-sm ml-2">({btwMarge})</span>
                {car.kenteken && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="text-white/50 text-sm block">Kenteken</span>
                    <span className="text-lg font-semibold text-white uppercase">{car.kenteken}</span>
                  </div>
                )}
              </div>

              {/* Compare & Contact Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleCar(car)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border ${
                    inCompare
                      ? 'bg-[#c8102e] border-[#c8102e] text-white'
                      : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {inCompare ? <CheckCircle className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
                  {inCompare ? 'In vergelijking' : 'Voeg toe aan vergelijking'}
                </button>
                <button
                  onClick={() => {
                    setFormType('proefrit');
                    setShowContactForm(true);
                  }}
                  className="w-full bg-[#c8102e] hover:bg-[#a00d24] text-white py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Car className="w-5 h-5" />
                  Plan proefrit
                </button>
                <button
                  onClick={() => {
                    setFormType('contact');
                    setShowContactForm(true);
                  }}
                  className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactformulier
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:+31687118768`}
                    className="bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-white/10"
                  >
                    <Phone className="w-4 h-4" />
                    Bel ons
                  </a>
                  <a
                    href={`https://wa.me/31687118768`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-white/10"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4 hidden sm:block">
                <h3 className="text-lg font-bold text-white mb-3">Waarom Car Store Cuijk?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/80 text-sm">3 maanden garantie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/80 text-sm">Onderhoudsbeurt bij aflevering</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/80 text-sm">Nieuwe APK bij aflevering</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-white/80 text-sm">RDW erkend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Images & Details */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-4 lg:space-y-6 min-w-0">
            {/* Back Button - NOT sticky */}
            <Link
              href="/occasions"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8102e] transition-colors text-sm px-4 sm:px-0"
            >
              <ArrowLeft className="w-4 h-4" />
              Terug
            </Link>

            {/* Image Gallery — full width on mobile */}
            <div className="space-y-2 sm:space-y-3">
              {/* Main Image — full image visible on mobile, cropped on desktop */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] bg-[#0d0d0d] sm:rounded-xl lg:rounded-2xl overflow-hidden min-w-0">
                <Image
                  src={car.afbeeldingen[currentImageIndex] || '/cars/placeholder.svg'}
                  alt={`${car.merk} ${car.model} - Afbeelding ${currentImageIndex + 1}`}
                  fill
                  className="object-contain sm:object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                
                {/* Navigation Arrows */}
                {car.afbeeldingen.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                  </>
                )}
                
                {/* Image Counter & Zoom Button */}
                <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 flex items-center gap-2">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="bg-black/60 hover:bg-black/80 text-white px-3 py-1.5 rounded-full text-xs lg:text-sm flex items-center gap-1.5 transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span className="hidden sm:inline">Vergroot</span>
                  </button>
                  <div className="bg-black/60 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm">
                    {currentImageIndex + 1} / {car.afbeeldingen.length}
                  </div>
                </div>
              </div>

              {/* Thumbnail Strip - Horizontal scroll */}
              {car.afbeeldingen.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 px-4 sm:px-0 scrollbar-hide max-w-full min-w-0">
                  {car.afbeeldingen.slice(0, 10).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                        idx === currentImageIndex
                          ? 'border-[#c8102e]'
                          : 'border-transparent hover:border-white/30'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                  {car.afbeeldingen.length > 10 && (
                    <button
                      onClick={() => setCurrentImageIndex(10)}
                      className="relative w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 border-transparent bg-[#1a1a1a] flex items-center justify-center text-white/60 text-sm font-medium"
                    >
                      +{car.afbeeldingen.length - 10}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Details sections with mobile padding */}
            <div className="space-y-4 lg:space-y-6 px-4 sm:px-0">
              {/* Specs Grid - Compact */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden">
              <div className="p-4 border-b border-white/5">
                <h2 className="text-lg font-bold text-white">Specificaties</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/5">
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <Calendar className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">Bouwjaar</p>
                    <p className="text-white font-semibold truncate">{car.bouwjaar}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <Gauge className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">KM-stand</p>
                    <p className="text-white font-semibold truncate">{formatKilometers(car.kilometerstand)} km</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <Fuel className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">Brandstof</p>
                    <p className="text-white font-semibold truncate">{car.brandstof}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <Settings2 className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">Transmissie</p>
                    <p className="text-white font-semibold truncate">{car.transmissie}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <Car className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">Carrosserie</p>
                    <p className="text-white font-semibold truncate">{car.carrosserie || '-'}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <Palette className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">Kleur</p>
                    <p className="text-white font-semibold truncate capitalize">{car.kleur || '-'}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <FileCheck className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">APK tot</p>
                    <p className="text-white font-semibold truncate">{apkTot || 'Onbekend'}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3 min-w-0">
                  <CheckCircle className="w-5 h-5 text-[#c8102e] flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs">NAP</p>
                    <p className="text-white font-semibold truncate">Gecertificeerd</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            {(cilinderInhoud || vermogenPk || aantalDeuren || aantalZitplaatsen || massa) && (
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden">
                <div className="p-4 border-b border-white/5">
                  <h2 className="text-lg font-bold text-white">Technische gegevens</h2>
                </div>
                <div className="divide-y divide-white/5">
                  {vermogenPk && (
                    <div className="p-4 flex justify-between items-center gap-4">
                      <span className="text-white/60 flex-shrink-0">Vermogen</span>
                      <span className="text-white font-medium text-right break-words min-w-0">{vermogenPk} pk</span>
                    </div>
                  )}
                  {cilinderInhoud && (
                    <div className="p-4 flex justify-between items-center gap-4">
                      <span className="text-white/60 flex-shrink-0">Motor</span>
                      <span className="text-white font-medium text-right break-words min-w-0">{cilinderInhoud} cc</span>
                    </div>
                  )}
                  {aantalDeuren && (
                    <div className="p-4 flex justify-between items-center gap-4">
                      <span className="text-white/60 flex-shrink-0">Deuren</span>
                      <span className="text-white font-medium text-right break-words min-w-0">{aantalDeuren}</span>
                    </div>
                  )}
                  {aantalZitplaatsen && (
                    <div className="p-4 flex justify-between items-center gap-4">
                      <span className="text-white/60 flex-shrink-0">Zitplaatsen</span>
                      <span className="text-white font-medium text-right break-words min-w-0">{aantalZitplaatsen}</span>
                    </div>
                  )}
                  {massa && (
                    <div className="p-4 flex justify-between items-center gap-4">
                      <span className="text-white/60 flex-shrink-0">Gewicht</span>
                      <span className="text-white font-medium text-right break-words min-w-0">{massa} kg</span>
                    </div>
                  )}
                  {car.kenteken && (
                    <div className="p-4 flex justify-between items-center gap-4">
                      <span className="text-white/60 flex-shrink-0">Kenteken</span>
                      <span className="text-white font-medium text-right uppercase break-words min-w-0">{car.kenteken}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            {(vweData.omschrijving || car.beschrijving) && (
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4 lg:p-6">
                <h2 className="text-lg font-bold text-white mb-3">Beschrijving</h2>
                <div
                  className="text-white/70 text-sm leading-relaxed break-words"
                  dangerouslySetInnerHTML={{
                    __html: vweData.omschrijving || car.beschrijving || '',
                  }}
                />
              </div>
            )}

            {/* Features */}
            {car.features.length > 0 && (
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4 lg:p-6">
                <h2 className="text-lg font-bold text-white mb-3">Uitrusting</h2>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 text-white/80 px-2 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 break-words max-w-full min-w-0"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#c8102e] flex-shrink-0" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={car.afbeeldingen}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        alt={`${car.merk} ${car.model}`}
      />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {formType === 'proefrit'
                  ? `Proefrit plannen: ${car.merk} ${car.model}`
                  : `Interesse in ${car.merk} ${car.model}`}
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-white/50 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Simple Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm mb-1">Auto *</label>
                <input
                  type="text"
                  readOnly
                  value={`${car.merk} ${car.model} ${car.variant} (${car.kenteken || 'Kenteken onbekend'})`}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1">Naam *</label>
                <input
                  type="text"
                  placeholder="Uw naam"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8102e]"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1">E-mail *</label>
                <input
                  type="email"
                  placeholder="uw@email.nl"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8102e]"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1">Telefoon *</label>
                <input
                  type="tel"
                  placeholder="06 - 123 456 78"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8102e]"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-1">
                  {formType === 'proefrit' ? 'Gewenste dag/tijd (optioneel)' : 'Opmerkingen (optioneel)'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    formType === 'proefrit'
                      ? 'Wanneer wilt u langskomen voor een proefrit?'
                      : 'Eventuele vragen of opmerkingen...'
                  }
                  defaultValue={
                    formType === 'proefrit'
                      ? `Ik wil graag een proefrit maken in de ${car.merk} ${car.model} ${car.variant}.`
                      : ''
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c8102e] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8102e] hover:bg-[#a00d24] text-white py-3 rounded-xl font-semibold transition-all"
              >
                {formType === 'proefrit' ? 'Proefrit aanvragen' : 'Verstuur bericht'}
              </button>
              <p className="text-white/40 text-xs text-center">
                Door het versturen gaat u akkoord met onze{' '}
                <Link href="/privacy" className="text-[#c8102e] hover:underline">
                  privacyverklaring
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}
