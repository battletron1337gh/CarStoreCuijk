'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, Car, Calculator, AlertCircle } from 'lucide-react';
import { trackContactFormSubmit } from '@/lib/analytics';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { HCAPTCHA_CONFIG } from '@/lib/hcaptcha';
import { Car as CarType } from '@/types';

interface FinancingFormData {
  naam: string;
  email: string;
  telefoon: string;
  geselecteerdeAuto: string;
  bericht: string;
  aankoopbedrag: number;
  aanbetaling: number;
  looptijd: number;
  maandbedrag: number;
}

interface FormErrors {
  naam?: string;
  email?: string;
  telefoon?: string;
  geselecteerdeAuto?: string;
  bericht?: string;
  hcaptcha?: string;
}

interface FinancingContactFormProps {
  cars: CarType[];
  calculatorData?: {
    aankoopbedrag: number;
    aanbetaling: number;
    looptijd: number;
    maandbedrag: number;
  };
}

export default function FinancingContactForm({ cars, calculatorData }: FinancingContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const hcaptchaRef = useRef<HCaptcha>(null);
  const [formData, setFormData] = useState<FinancingFormData>({
    naam: '',
    email: '',
    telefoon: '',
    geselecteerdeAuto: '',
    bericht: '',
    aankoopbedrag: calculatorData?.aankoopbedrag || 15000,
    aanbetaling: calculatorData?.aanbetaling || 10,
    looptijd: calculatorData?.looptijd || 60,
    maandbedrag: calculatorData?.maandbedrag || 0,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);

  // Update form when calculator data changes
  useEffect(() => {
    if (calculatorData) {
      setFormData(prev => ({
        ...prev,
        aankoopbedrag: calculatorData.aankoopbedrag,
        aanbetaling: calculatorData.aanbetaling,
        looptijd: calculatorData.looptijd,
        maandbedrag: calculatorData.maandbedrag,
      }));
    }
  }, [calculatorData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    } else if (formData.naam.length < 2) {
      newErrors.naam = 'Naam moet minimaal 2 karakters bevatten';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    }

    if (!formData.telefoon.trim()) {
      newErrors.telefoon = 'Telefoonnummer is verplicht';
    } else if (!/[\d\s\-\+\(\)]{10,}$/.test(formData.telefoon.replace(/\s/g, ''))) {
      newErrors.telefoon = 'Voer een geldig telefoonnummer in';
    }

    if (!formData.geselecteerdeAuto.trim()) {
      newErrors.geselecteerdeAuto = 'Selecteer een auto';
    }

    if (!hcaptchaToken) {
      newErrors.hcaptcha = 'Bevestig dat u geen robot bent';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Find selected car details
      const selectedCar = cars.find(c => c.id === formData.geselecteerdeAuto);
      const autoOmschrijving = selectedCar 
        ? `${selectedCar.merk} ${selectedCar.model} ${selectedCar.variant} (€${selectedCar.prijs.toLocaleString('nl-NL')})`
        : formData.geselecteerdeAuto;

      // Send email with hCaptcha token
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: formData.naam,
          email: formData.email,
          telefoon: formData.telefoon,
          onderwerp: 'Financieringsaanvraag',
          auto_merk_model: autoOmschrijving,
          aankoopbedrag: formData.aankoopbedrag,
          aanbetaling: formData.aanbetaling,
          looptijd: formData.looptijd,
          maandbedrag: formData.maandbedrag.toFixed(2),
          bericht: formData.bericht || 'Geen extra bericht',
          to_email: 'info@carstorecuijk.nl',
          hcaptcha_token: hcaptchaToken,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to send email');
      }

      trackContactFormSubmit('Financieringsaanvraag');

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Email error:', error);
      setIsSubmitting(false);
      setSubmitError('Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw of neem telefonisch contact op.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const onHCaptchaVerify = (token: string) => {
    setHcaptchaToken(token);
    if (errors.hcaptcha) {
      setErrors(prev => ({ ...prev, hcaptcha: undefined }));
    }
  };

  const onHCaptchaExpire = () => {
    setHcaptchaToken(null);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Bedankt voor uw aanvraag!</h3>
        <p className="text-white/60 mb-6">
          We hebben uw financieringsaanvraag ontvangen en nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              naam: '',
              email: '',
              telefoon: '',
              geselecteerdeAuto: '',
              bericht: '',
              aankoopbedrag: calculatorData?.aankoopbedrag || 15000,
              aanbetaling: calculatorData?.aanbetaling || 10,
              looptijd: calculatorData?.looptijd || 60,
              maandbedrag: calculatorData?.maandbedrag || 0,
            });
            setSubmitError(null);
            setHcaptchaToken(null);
            hcaptchaRef.current?.resetCaptcha();
          }}
          className="text-[#c8102e] hover:underline font-medium"
        >
          Verstuur nog een aanvraag
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-6 lg:p-8 border border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#c8102e]/10 text-[#c8102e] rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Vraag financiering aan</h3>
          <p className="text-white/50 text-sm">Vul uw gegevens in voor een vrijblijvende offerte</p>
        </div>
      </div>
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-400 text-sm">{submitError}</p>
        </div>
      )}

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="naam" className="block text-sm font-medium text-white/70 mb-2">
            Naam *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              id="naam"
              name="naam"
              value={formData.naam}
              onChange={handleChange}
              placeholder="Uw naam"
              className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                errors.naam ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
              }`}
            />
          </div>
          {errors.naam && (
            <p className="text-red-500 text-sm mt-1">{errors.naam}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
              E-mail *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="uw@email.nl"
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                  errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefoon" className="block text-sm font-medium text-white/70 mb-2">
              Telefoon *
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="tel"
                id="telefoon"
                name="telefoon"
                value={formData.telefoon}
                onChange={handleChange}
                placeholder="06 - 123 456 78"
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                  errors.telefoon ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              />
            </div>
            {errors.telefoon && (
              <p className="text-red-500 text-sm mt-1">{errors.telefoon}</p>
            )}
          </div>
        </div>

        {/* Car Selection */}
        <div>
          <label htmlFor="geselecteerdeAuto" className="block text-sm font-medium text-white/70 mb-2">
            Geselecteerde auto *
          </label>
          <div className="relative">
            <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <select
              id="geselecteerdeAuto"
              name="geselecteerdeAuto"
              value={formData.geselecteerdeAuto}
              onChange={handleChange}
              className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all appearance-none cursor-pointer ${
                errors.geselecteerdeAuto ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
              }`}
            >
              <option value="">Kies een auto uit ons aanbod</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.merk} {car.model} {car.variant} - €{car.prijs.toLocaleString('nl-NL')} ({car.bouwjaar}, {car.kilometerstand.toLocaleString('nl-NL')} km)
                </option>
              ))}
              <option value="anders">Andere auto / Nog niet gekozen</option>
            </select>
          </div>
          {errors.geselecteerdeAuto && (
            <p className="text-red-500 text-sm mt-1">{errors.geselecteerdeAuto}</p>
          )}
        </div>

        {/* Calculator Summary */}
        {calculatorData && calculatorData.maandbedrag > 0 && (
          <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#c8102e]/20">
            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#c8102e]" />
              Uw berekening
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-white/50 block">Aankoopbedrag</span>
                <span className="text-white">€{calculatorData.aankoopbedrag.toLocaleString('nl-NL')}</span>
              </div>
              <div>
                <span className="text-white/50 block">Aanbetaling</span>
                <span className="text-white">{calculatorData.aanbetaling}%</span>
              </div>
              <div>
                <span className="text-white/50 block">Looptijd</span>
                <span className="text-white">{calculatorData.looptijd} maanden</span>
              </div>
              <div>
                <span className="text-white/50 block">Maandbedrag</span>
                <span className="text-[#c8102e] font-semibold">€{calculatorData.maandbedrag.toLocaleString('nl-NL', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="bericht" className="block text-sm font-medium text-white/70 mb-2">
            Extra opmerkingen (optioneel)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/30" />
            <textarea
              id="bericht"
              name="bericht"
              value={formData.bericht}
              onChange={handleChange}
              placeholder="Heeft u nog vragen of opmerkingen?"
              rows={3}
              className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all resize-none ${
                errors.bericht ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
              }`}
            />
          </div>
        </div>

        {/* hCaptcha */}
        <div className="flex justify-center">
          <HCaptcha
            ref={hcaptchaRef}
            sitekey={HCAPTCHA_CONFIG.SITE_KEY}
            onVerify={onHCaptchaVerify}
            onExpire={onHCaptchaExpire}
            theme="dark"
          />
        </div>
        {errors.hcaptcha && (
          <p className="text-red-500 text-sm text-center">{errors.hcaptcha}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !hcaptchaToken}
          className="w-full flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] disabled:bg-[#c8102e]/50 text-white py-4 rounded-xl font-semibold transition-all disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Verzenden...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Vraag financiering aan
            </>
          )}
        </button>

        <p className="text-white/40 text-sm text-center">
          Door het versturen gaat u akkoord met onze{' '}
          <a href="/privacy" className="text-[#c8102e] hover:underline">
            privacyverklaring
          </a>
        </p>
      </div>
    </form>
  );
}
