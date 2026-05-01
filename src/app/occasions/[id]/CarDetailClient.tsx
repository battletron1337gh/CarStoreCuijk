'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Calendar, 
  Fuel, 
  Gauge, 
  Settings2,
  Car as CarIcon,
  Check,
  MessageCircle,
  Phone,
  Share2,
  Heart,
  AlertCircle,
  Palette,
  Shield,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';
import { vweCars } from '@/data/vwe-cars';
import type { Car } from '@/types';

interface CarDetailClientProps {
  car: Car | undefined;
}

export default function CarDetailClient({ car }: CarDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Get similar cars (same brand, different id)
  const similarCars = car ? vweCars
    .filter(c => c.id !== car.id && c.merk === car.merk && c.status === 'beschikbaar')
    .slice(0, 3) : [];

  if (!car) {
    return (
      <main className="min-h-screen pt-32 flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Auto niet gevonden</h1>
          <Link href="/occasions" className="text-[#c8102e] hover:underline">
            Terug naar occasions
          </Link>
        </div>
      </main>
    );
  }

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

  const getStatusBadge = () => {
    switch (car.status) {
      case 'gereserveerd':
        return (
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-500 px-4 py-2 rounded-full font-semibold border border-amber-500/30">
            <AlertCircle className="w-4 h-4" />
            Gereserveerd
          </span>
        );
      case 'verkocht':
        return (
          <span className="inline-flex items-center gap-2 bg-gray-500/20 text-gray-400 px-4 py-2 rounded-full font-semibold border border-gray-500/30">
            Verkocht
          </span>
        );
      default:
        return null;
    }
  };

  // Haal VWE raw data op als die bestaat
  const vweData = (car as any).vweData;
  const fotos = vweData?.afbeeldingen?.afbeelding || [];
  const opties = Array.isArray(vweData?.accessoires?.accessoire) ? vweData.accessoires.accessoire : [];
  const optieGroepen = Array.isArray(vweData?.accessoiregroepen?.accessoiregroep) ? vweData.accessoiregroepen.accessoiregroep : [];
  const apkTot = vweData?.apk?.tot || '';
  const napWeblabel = vweData?.nap_weblabel === 'j';
  const cilinders = vweData?.cilinder_aantal;
  const inhoud = vweData?.cilinder_inhoud;
  const vermogenPk = vweData?.vermogen_motor_pk;
  const vermogenKw = vweData?.vermogen_motor_kw;
  const topsnelheid = vweData?.topsnelheid;
  const acceleratie = vweData?.acceleratie;
  const verbruik = vweData?.gemiddeld_verbruik;
  const co2 = vweData?.co2_uitstoot;
  const aantalDeuren = vweData?.aantal_deuren;
  const aantalZitplaatsen = vweData?.aantal_zitplaatsen;
  const gewicht = vweData?.massa;
  const trekgewicht = vweData?.max_trekgewicht;
  const btwMarge = vweData?.btw_marge;
  
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % fotos.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <main className="min-h-screen pt-24 lg:pt-28 bg-[#0a0a0a]">
      {/* Breadcrumb & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/occasions" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar occasions
          </Link>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-lg transition-colors ${isFavorite ? 'bg-[#c8102e]/20 text-[#c8102e]' : 'bg-[#1a1a1a] text-white/40 hover:text-white'}`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 bg-[#1a1a1a] text-white/40 hover:text-white rounded-lg transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image Gallery */}
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5">
              <div className="relative aspect-[16/10] bg-[#0d0d0d]">
                {fotos.length > 0 ? (
                  <Image
                    src={fotos[selectedImage]?.url || car.afbeeldingen[0] || '/cars/placeholder.svg'}
                    alt={`${car.merk} ${car.model}`}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <Image
                    src={car.afbeeldingen[0] || '/cars/placeholder.svg'}
                    alt={`${car.merk} ${car.model}`}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                
                {/* Navigation Arrows */}
                {fotos.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {getStatusBadge() && (
                  <div className="absolute top-4 left-4">
                    {getStatusBadge()}
                  </div>
                )}

                {/* Image Counter */}
                {fotos.length > 0 && (
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {fotos.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              {fotos.length > 1 && (
                <div className="p-4 border-t border-white/5">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {fotos.slice(0, 10).map((foto: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === idx ? 'border-[#c8102e]' : 'border-transparent hover:border-white/30'
                        }`}
                      >
                        <Image
                          src={foto.url}
                          alt={`${car.merk} ${car.model} foto ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Key Specifications */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Specificaties</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <Calendar className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">Bouwjaar</p>
                    <p className="font-semibold text-white">{car.bouwjaar}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <Gauge className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">Kilometerstand</p>
                    <p className="font-semibold text-white">{formatKilometers(car.kilometerstand)} km</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <Fuel className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">Brandstof</p>
                    <p className="font-semibold text-white">{car.brandstof}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <Settings2 className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">Transmissie</p>
                    <p className="font-semibold text-white">{car.transmissie}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <CarIcon className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">Carrosserie</p>
                    <p className="font-semibold text-white">{car.carrosserie}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <Palette className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">Kleur</p>
                    <p className="font-semibold text-white">{vweData?.basiskleur || car.kleur || 'Onbekend'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <Clock className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">APK tot</p>
                    <p className="font-semibold text-white">{apkTot || 'Onbekend'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0a] rounded-xl border border-white/5">
                  <FileCheck className="w-5 h-5 text-[#c8102e]" />
                  <div>
                    <p className="text-sm text-white/50">NAP</p>
                    <p className="font-semibold text-white">{napWeblabel ? 'Gecertificeerd' : 'Onbekend'}</p>
                  </div>
                </div>
              </div>

              {/* Extra Technical Details */}
              {(vermogenPk || verbruik || co2 || topsnelheid) && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4">Technische gegevens</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {vermogenPk && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Vermogen</p>
                        <p className="font-semibold text-white">{vermogenPk} pk ({vermogenKw} kW)</p>
                      </div>
                    )}
                    {cilinders && inhoud && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Motor</p>
                        <p className="font-semibold text-white">{cilinders} cil. / {inhoud} cc</p>
                      </div>
                    )}
                    {verbruik && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Verbruik</p>
                        <p className="font-semibold text-white">{verbruik} l/100km</p>
                      </div>
                    )}
                    {co2 && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">CO₂ uitstoot</p>
                        <p className="font-semibold text-white">{co2} g/km</p>
                      </div>
                    )}
                    {topsnelheid && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Topsnelheid</p>
                        <p className="font-semibold text-white">{topsnelheid} km/h</p>
                      </div>
                    )}
                    {acceleratie && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">0-100 km/h</p>
                        <p className="font-semibold text-white">{acceleratie} sec</p>
                      </div>
                    )}
                    {aantalDeuren && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Deuren</p>
                        <p className="font-semibold text-white">{aantalDeuren}</p>
                      </div>
                    )}
                    {aantalZitplaatsen && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Zitplaatsen</p>
                        <p className="font-semibold text-white">{aantalZitplaatsen}</p>
                      </div>
                    )}
                    {trekgewicht && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Trekgewicht</p>
                        <p className="font-semibold text-white">{trekgewicht} kg</p>
                      </div>
                    )}
                    {gewicht && (
                      <div className="p-3 bg-[#0a0a0a] rounded-lg">
                        <p className="text-sm text-white/50">Gewicht</p>
                        <p className="font-semibold text-white">{gewicht} kg</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            {vweData?.opmerkingen && (
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-4">Beschrijving</h2>
                <div 
                  className="text-white/60 leading-relaxed prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: vweData.opmerkingen }}
                />
              </div>
            )}

            {/* Options/Equipment */}
            {optieGroepen.length > 0 && (
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-6">Uitrusting</h2>
                <div className="space-y-6">
                  {optieGroepen.map((groep: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-[#c8102e] mb-3">{groep.naam}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {Array.isArray(groep.accessoire) ? groep.accessoire.map((optie: any, optieIdx: number) => (
                          <div key={optieIdx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#c8102e] flex-shrink-0" />
                            <span className="text-white/60 text-sm">{optie.description || optie.naam}</span>
                          </div>
                        )) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Options (if no groups) */}
            {opties.length > 0 && optieGroepen.length === 0 && (
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-4">Uitrusting</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {opties.map((optie: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#c8102e]" />
                      <span className="text-white/60 text-sm">{optie.naam}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features from Car object */}
            {car.features && car.features.length > 0 && (
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-4">Kenmerken</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#c8102e]" />
                      <span className="text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Price & Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Price Card */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-white">
                    {car.merk} {car.model}
                  </h1>
                  <p className="text-white/50">{car.variant || car.beschrijving}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-white/40 mb-1">Prijs</p>
                  <p className="text-4xl font-bold text-[#c8102e]">{formatPrice(car.prijs)}</p>
                  <p className="text-sm text-white/40 mt-1">
                    {btwMarge === 'M' ? 'Marge (BTW verrekenbaar)' : 'Incl. BTW & BPM'}
                  </p>
                </div>

                {car.kenteken && (
                  <div className="mb-4 p-3 bg-[#0a0a0a] rounded-lg border border-white/5">
                    <p className="text-sm text-white/50">Kenteken</p>
                    <p className="font-mono font-bold text-white text-lg">{car.kenteken}</p>
                  </div>
                )}

                {car.status === 'beschikbaar' ? (
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/31687118768?text=Ik ben geïnteresseerd in de ${car.merk} ${car.model} (${car.kenteken || car.id})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white py-4 rounded-xl font-semibold transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Ons
                    </a>
                    <a
                      href="tel:31687118768"
                      className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 rounded-xl font-semibold transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      Bel voor meer info
                    </a>
                    <button
                      onClick={() => setShowContactForm(!showContactForm)}
                      className="w-full flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white border border-white/10 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Contactformulier
                    </button>
                  </div>
                ) : (
                  <div className="p-4 bg-white/5 rounded-xl text-center border border-white/5">
                    <p className="text-white/60 font-medium">
                      Deze auto is {car.status === 'gereserveerd' ? 'gereserveerd' : 'verkocht'}
                    </p>
                    <Link 
                      href="/occasions" 
                      className="text-[#c8102e] hover:underline text-sm mt-2 inline-block"
                    >
                      Bekijk andere occasions →
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Form */}
              {showContactForm && (
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">
                  <h3 className="font-bold text-white mb-4">Stuur een bericht</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Naam</label>
                      <input 
                        type="text" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#c8102e] focus:outline-none"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Telefoon</label>
                      <input 
                        type="tel" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#c8102e] focus:outline-none"
                        placeholder="06-12345678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-1">E-mail</label>
                      <input 
                        type="email" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#c8102e] focus:outline-none"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Bericht</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#c8102e] focus:outline-none resize-none"
                        placeholder={`Ik ben geïnteresseerd in de ${car.merk} ${car.model}...`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#c8102e] hover:bg-[#a00d24] text-white py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Verstuur
                    </button>
                  </form>
                </div>
              )}

              {/* Dealer Info */}
              <div className="bg-[#0d0d0d] rounded-2xl p-6 text-white border border-white/5">
                <h3 className="font-bold mb-4">Car Store Cuijk</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-white/50">Veldweg 28<br />5431 NS Cuijk</p>
                  <p className="text-white/50">
                    <span className="text-white/70">Tel:</span> 0485 - 451 234<br />
                    <span className="text-white/70">WhatsApp:</span> 06 - 1234 5678
                  </p>
                  <p className="text-white/50">7 dagen per week open<br />08:00 - 23:59 op afspraak</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#c8102e]" />
                    <span className="text-sm text-white/70">3 maanden huisgarantie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Vergelijkbare occasions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCars.map((similarCar) => (
                <Link
                  key={similarCar.id}
                  href={`/occasions/${similarCar.id}`}
                  className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c8102e]/30 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={similarCar.afbeeldingen[0] || '/cars/placeholder.svg'}
                      alt={`${similarCar.merk} ${similarCar.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#c8102e] text-white px-4 py-2 rounded-lg font-bold text-lg">
                        € {similarCar.prijs.toLocaleString('nl-NL')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c8102e] transition-colors">
                      {similarCar.merk} {similarCar.model}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{similarCar.transmissie} | {similarCar.carrosserie}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-white/40 block text-xs">Bouwjaar</span>
                        <span className="text-white font-medium">{similarCar.bouwjaar}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-xs">KM-stand</span>
                        <span className="text-white font-medium">{similarCar.kilometerstand?.toLocaleString('nl-NL') || '-'}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-xs">Brandstof</span>
                        <span className="text-white font-medium">{similarCar.brandstof}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
