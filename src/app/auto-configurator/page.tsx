'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VehicleInfo, { RdwVehicle } from '@/components/configurator/VehicleInfo';
import VehiclePreview from '@/components/configurator/VehiclePreview';
import PerformancePanel from '@/components/configurator/PerformancePanel';
import MaintenancePanel from '@/components/configurator/MaintenancePanel';
import ConfiguratorSidebar from '@/components/configurator/ConfiguratorSidebar';
import ConfigCategory from '@/components/configurator/ConfigCategory';
import Cart from '@/components/configurator/Cart';
import ContactForm, { MontageType } from '@/components/configurator/ContactForm';
import {
  CONFIG_CATEGORIES,
  CONFIG_OPTIONS,
  ConfigCategoryId,
  ConfigOption,
} from '@/lib/configurator-options';
import {
  Search,
  Loader2,
  AlertCircle,
  Check,
  Wrench,
  Sparkles,
} from 'lucide-react';

export default function AutoConfiguratorPage() {
  // ─── RDW state ───
  const [kenteken, setKenteken] = useState('');
  const [vehicle, setVehicle] = useState<RdwVehicle | null>(null);
  const [loading, setLoading] = useState(false);
  const [rdwError, setRdwError] = useState<string | null>(null);

  // ─── Configurator state ───
  const [activeCategory, setActiveCategory] = useState<ConfigCategoryId>('exterieur');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [optionColors, setOptionColors] = useState<Record<string, string>>({});
  const [currentKm, setCurrentKm] = useState<number>(0);

  // ─── Contact / submit state ───
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [montage, setMontage] = useState<MontageType>('werkplaats');
  const [gewensteDatum, setGewensteDatum] = useState('');
  const [opmerkingen, setOpmerkingen] = useState('');
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);

  // Load / persist current km-stand per kenteken
  useEffect(() => {
    if (!vehicle?.kenteken) return;
    const key = `cfg-km-${vehicle.kenteken.toUpperCase()}`;
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) setCurrentKm(parsed);
    }
  }, [vehicle?.kenteken]);

  const handleKmChange = (km: number) => {
    setCurrentKm(km);
    if (vehicle?.kenteken && typeof window !== 'undefined') {
      const key = `cfg-km-${vehicle.kenteken.toUpperCase()}`;
      window.localStorage.setItem(key, String(km));
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [submitted]);

  const selectedItems = Object.entries(quantities)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const option = CONFIG_OPTIONS.find((o) => o.id === id);
      return option ? { option, quantity: qty } : null;
    })
    .filter(Boolean) as Array<{ option: ConfigOption; quantity: number }>;

  const selectedOptions = selectedItems.map((i) => i.option);

  const subtotal = selectedItems.reduce(
    (sum, { option, quantity }) => sum + option.price * quantity,
    0
  );
  const total = subtotal * 1.21;

  const categoryCounts = CONFIG_CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = selectedItems
      .filter((i) => i.option.category === cat.id)
      .reduce((sum, i) => sum + i.quantity, 0);
    return acc;
  }, {} as Record<ConfigCategoryId, number>);

  // ─── Handlers ───
  const handleKentekenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9\-]/g, '');
    setKenteken(value);
    setRdwError(null);
  };

  const lookupKenteken = async () => {
    const cleaned = kenteken.replace(/[^A-Z0-9]/gi, '');
    if (cleaned.length < 6) {
      setRdwError('Voer een geldig kenteken in');
      return;
    }
    setLoading(true);
    setRdwError(null);
    try {
      const res = await fetch(`/api/rdw.php?kenteken=${encodeURIComponent(cleaned)}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        setRdwError(data.error || 'Kenteken niet gevonden');
        setVehicle(null);
      } else {
        setVehicle(data.data);
      }
    } catch {
      setRdwError('RDW lookup mislukt, probeer opnieuw');
      setVehicle(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleOption = (option: ConfigOption) => {
    setQuantities((prev) => {
      const currentlySelected = (prev[option.id] || 0) > 0;

      if (currentlySelected) {
        const next = { ...prev };
        delete next[option.id];
        return next;
      }

      const next = { ...prev };

      // Handle mutually exclusive overlay-based options.
      if (option.exclusive && option.overlayType) {
        Object.keys(next).forEach((id) => {
          const other = CONFIG_OPTIONS.find((o) => o.id === id);
          if (
            other &&
            other.overlayType === option.overlayType &&
            other.exclusive
          ) {
            delete next[id];
          }
        });
      }

      // Handle mutually exclusive groups.
      if (option.exclusiveGroup) {
        Object.keys(next).forEach((id) => {
          const other = CONFIG_OPTIONS.find((o) => o.id === id);
          if (other?.exclusiveGroup === option.exclusiveGroup) {
            delete next[id];
          }
        });
      }

      next[option.id] = 1;
      return next;
    });
  };

  const handleColorChange = (optionId: string, color: string) => {
    setOptionColors((prev) => ({ ...prev, [optionId]: color }));
  };

  const changeQuantity = (optionId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[optionId] || 0;
      const nextQty = Math.max(1, current + delta);
      return { ...prev, [optionId]: nextQty };
    });
  };

  const removeOption = (optionId: string) => {
    setQuantities((prev) => {
      const next = { ...prev };
      delete next[optionId];
      return next;
    });
    setOptionColors((prev) => {
      const next = { ...prev };
      delete next[optionId];
      return next;
    });
  };

  const resetAll = () => {
    setSubmitted(false);
    setKenteken('');
    setVehicle(null);
    setQuantities({});
    setOptionColors({});
    setNaam('');
    setEmail('');
    setTelefoon('');
    setOpmerkingen('');
    setGewensteDatum('');
    setMontage('werkplaats');
    setHcaptchaToken(null);
    setSubmitError(null);
  };

  const validateForm = (): boolean => {
    if (!vehicle) return false;
    if (selectedItems.length === 0) {
      setSubmitError('Selecteer minimaal één optie');
      return false;
    }
    if (!naam.trim() || naam.length < 2) {
      setSubmitError('Voer een geldige naam in');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError('Voer een geldig e-mailadres in');
      return false;
    }
    if (!telefoon.trim() || telefoon.replace(/\s/g, '').length < 10) {
      setSubmitError('Voer een geldig telefoonnummer in');
      return false;
    }
    if (!hcaptchaToken) {
      setSubmitError('Bevestig dat u geen robot bent');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const payload = {
        kenteken: vehicle!.kenteken,
        merk: vehicle!.merk || 'Onbekend',
        model: vehicle!.model || 'Onbekend',
        kleur: vehicle!.kleur || 'Onbekend',
        brandstof: vehicle!.brandstof || 'Onbekend',
        bouwjaar: vehicle!.bouwjaar || 'Onbekend',
        huidige_km: currentKm,
        montage,
        gewenste_datum: gewensteDatum,
        naam,
        email,
        telefoon,
        opmerkingen,
        parts: selectedItems.map(({ option, quantity }) => ({
          name: quantity > 1 ? `${option.name} (x${quantity})` : option.name,
          price: option.price * quantity,
        })),
        totaal: total,
        hcaptcha_token: hcaptchaToken,
      };

      const res = await fetch('/api/configurator-submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Verzenden mislukt');
        setHcaptchaToken(null);
      }
    } catch {
      setSubmitError('Verzenden mislukt, probeer opnieuw');
      setHcaptchaToken(null);
    } finally {
      setSubmitting(false);
    }
  };

  // ─── Success view ───
  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-10 h-10 text-green-500" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Aanvraag verstuurd!
            </h1>
            <p className="text-white/70 mb-8 text-lg">
              Bedankt voor je aanvraag. We nemen zo snel mogelijk contact met je op om de
              mogelijkheden te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Terug naar home
              </Link>
              <button
                onClick={resetAll}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Nieuwe configuratie
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* Hero / kenteken lookup */}
        <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c8102e]/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-[#c8102e]/10 text-[#c8102e] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Visual live configurator
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Auto configurator
              </h1>
              <p className="text-lg text-white/70 mb-10">
                Vul je kenteken in, zie jouw auto verschijnen en stel live je opties samen.
                Direct een offerte of afspraak aanvragen.
              </p>

              <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-2 flex items-center gap-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="w-5 h-5 text-white/40 mr-3" />
                  <input
                    type="text"
                    value={kenteken}
                    onChange={handleKentekenChange}
                    onKeyDown={(e) => e.key === 'Enter' && lookupKenteken()}
                    placeholder="Bv. AB-123-CD"
                    className="w-full bg-transparent text-white placeholder-white/40 outline-none py-3 uppercase font-semibold tracking-wider"
                    maxLength={12}
                  />
                </div>
                <button
                  onClick={lookupKenteken}
                  disabled={loading}
                  className="bg-[#c8102e] hover:bg-[#a00d24] disabled:opacity-50 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                  Zoeken
                </button>
              </div>
              {rdwError && (
                <div className="mt-3 text-red-400 text-sm flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {rdwError}
                </div>
              )}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {vehicle && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                <VehicleInfo vehicle={vehicle} />
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {vehicle && (
          <section className="pb-20">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mobile layout */}
              <div className="flex flex-col gap-6 lg:hidden">
                <VehiclePreview selectedOptions={selectedOptions} selectedColors={optionColors} vehicleColor={vehicle?.kleur} className="min-h-[300px]" />

                <ConfiguratorSidebar
                  categories={CONFIG_CATEGORIES}
                  activeCategory={activeCategory}
                  onSelect={setActiveCategory}
                  selectedCounts={categoryCounts}
                />

                <ConfigCategory
                  category={CONFIG_CATEGORIES.find((c) => c.id === activeCategory)!}
                  options={CONFIG_OPTIONS.filter((o) => o.category === activeCategory)}
                  quantities={quantities}
                  optionColors={optionColors}
                  onToggleOption={toggleOption}
                  onChangeQuantity={changeQuantity}
                  onColorChange={handleColorChange}
                />

                {activeCategory === 'tuning' && (
                  <PerformancePanel
                    vehicle={vehicle}
                    selectedOptions={selectedOptions.filter((o) => o.category === 'tuning')}
                  />
                )}

                {activeCategory === 'onderhoud' && (
                  <MaintenancePanel
                    currentKm={currentKm}
                    onKmChange={handleKmChange}
                    quantities={quantities}
                    onToggleOption={toggleOption}
                  />
                )}

                <Cart
                  items={selectedItems}
                  onRemove={removeOption}
                  onChangeQuantity={changeQuantity}
                />

                <ContactForm
                  naam={naam}
                  setNaam={setNaam}
                  email={email}
                  setEmail={setEmail}
                  telefoon={telefoon}
                  setTelefoon={setTelefoon}
                  montage={montage}
                  setMontage={setMontage}
                  gewensteDatum={gewensteDatum}
                  setGewensteDatum={setGewensteDatum}
                  opmerkingen={opmerkingen}
                  setOpmerkingen={setOpmerkingen}
                  hcaptchaToken={hcaptchaToken}
                  setHcaptchaToken={setHcaptchaToken}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  submitError={submitError}
                  disabled={false}
                  total={total}
                />
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-6">
                {/* Left sidebar */}
                <div className="lg:col-span-2 xl:col-span-2">
                  <div className="sticky top-28">
                    <ConfiguratorSidebar
                      categories={CONFIG_CATEGORIES}
                      activeCategory={activeCategory}
                      onSelect={setActiveCategory}
                      selectedCounts={categoryCounts}
                    />
                  </div>
                </div>

                {/* Center preview + options */}
                <div className="lg:col-span-7 xl:col-span-7 space-y-6">
                  <VehiclePreview selectedOptions={selectedOptions} selectedColors={optionColors} vehicleColor={vehicle?.kleur} className="min-h-[520px]" />

                  {activeCategory === 'tuning' && (
                    <PerformancePanel
                      vehicle={vehicle}
                      selectedOptions={selectedOptions.filter((o) => o.category === 'tuning')}
                    />
                  )}

                  {activeCategory === 'onderhoud' && (
                    <MaintenancePanel
                      currentKm={currentKm}
                      onKmChange={handleKmChange}
                      quantities={quantities}
                      onToggleOption={toggleOption}
                    />
                  )}

                  <ConfigCategory
                    category={CONFIG_CATEGORIES.find((c) => c.id === activeCategory)!}
                    options={CONFIG_OPTIONS.filter((o) => o.category === activeCategory)}
                    quantities={quantities}
                    optionColors={optionColors}
                    onToggleOption={toggleOption}
                    onChangeQuantity={changeQuantity}
                    onColorChange={handleColorChange}
                  />
                </div>

                {/* Right cart + form */}
                <div className="lg:col-span-3 xl:col-span-3">
                  <div className="sticky top-28 space-y-6">
                    <Cart
                      items={selectedItems}
                      onRemove={removeOption}
                      onChangeQuantity={changeQuantity}
                    />
                    <ContactForm
                      naam={naam}
                      setNaam={setNaam}
                      email={email}
                      setEmail={setEmail}
                      telefoon={telefoon}
                      setTelefoon={setTelefoon}
                      montage={montage}
                      setMontage={setMontage}
                      gewensteDatum={gewensteDatum}
                      setGewensteDatum={setGewensteDatum}
                      opmerkingen={opmerkingen}
                      setOpmerkingen={setOpmerkingen}
                      hcaptchaToken={hcaptchaToken}
                      setHcaptchaToken={setHcaptchaToken}
                      onSubmit={handleSubmit}
                      submitting={submitting}
                      submitError={submitError}
                      disabled={false}
                      total={total}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
