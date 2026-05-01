'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, Car, Calendar, Gauge, Fuel, Settings2, Euro, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

interface FormData {
  typeAanvraag: string;
  naam: string;
  email: string;
  telefoon: string;
  kenteken: string;
  merkModel: string;
  bouwjaar: string;
  kilometerstand: string;
  brandstof: string;
  transmissie: string;
  gewenstePrijs: string;
  opmerkingen: string;
}

interface FormErrors {
  typeAanvraag?: string;
  naam?: string;
  email?: string;
  telefoon?: string;
  kenteken?: string;
  merkModel?: string;
  bouwjaar?: string;
  kilometerstand?: string;
  brandstof?: string;
  transmissie?: string;
}

interface AutoInruilFormProps {
  onSuccess?: () => void;
  defaultType?: string;
}

export default function AutoInruilForm({ onSuccess, defaultType = '' }: AutoInruilFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    typeAanvraag: defaultType,
    naam: '',
    email: '',
    telefoon: '',
    kenteken: '',
    merkModel: '',
    bouwjaar: '',
    kilometerstand: '',
    brandstof: '',
    transmissie: '',
    gewenstePrijs: '',
    opmerkingen: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.typeAanvraag.trim()) {
      newErrors.typeAanvraag = 'Type aanvraag is verplicht';
    }

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
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.telefoon.replace(/\s/g, ''))) {
      newErrors.telefoon = 'Voer een geldig telefoonnummer in';
    }

    if (!formData.kenteken.trim()) {
      newErrors.kenteken = 'Kenteken is verplicht';
    }

    if (!formData.merkModel.trim()) {
      newErrors.merkModel = 'Merk/Model is verplicht';
    }

    if (!formData.bouwjaar.trim()) {
      newErrors.bouwjaar = 'Bouwjaar is verplicht';
    }

    if (!formData.kilometerstand.trim()) {
      newErrors.kilometerstand = 'Kilometerstand is verplicht';
    }

    if (!formData.brandstof.trim()) {
      newErrors.brandstof = 'Brandstof is verplicht';
    }

    if (!formData.transmissie.trim()) {
      newErrors.transmissie = 'Transmissie is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID_INKOOP || !EMAILJS_CONFIG.PUBLIC_KEY) {
      setSubmitError('EmailJS is niet correct geconfigureerd. Neem contact op met de beheerder.');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        type_aanvraag: formData.typeAanvraag,
        naam: formData.naam,
        email: formData.email,
        telefoon: formData.telefoon,
        kenteken: formData.kenteken,
        merk_model: formData.merkModel,
        bouwjaar: formData.bouwjaar,
        kilometerstand: formData.kilometerstand,
        brandstof: formData.brandstof,
        transmissie: formData.transmissie,
        gewenste_prijs: formData.gewenstePrijs || 'Niet opgegeven',
        opmerkingen: formData.opmerkingen || 'Geen opmerkingen',
        onderwerp: 'Auto inruil aanbod',
        to_email: 'info@carstorecuijk.nl',
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_INKOOP,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
      setSubmitError('Er is iets misgegaan bij het versturen van uw aanbod. Probeer het later opnieuw of neem telefonisch contact op.');
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

  if (isSubmitted) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Bedankt voor uw aanbod!</h3>
        <p className="text-white/60 mb-6">
          We hebben uw auto-inruil aanbod ontvangen en nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              typeAanvraag: defaultType,
              naam: '',
              email: '',
              telefoon: '',
              kenteken: '',
              merkModel: '',
              bouwjaar: '',
              kilometerstand: '',
              brandstof: '',
              transmissie: '',
              gewenstePrijs: '',
              opmerkingen: '',
            });
            setSubmitError(null);
          }}
          className="text-[#c8102e] hover:underline font-medium"
        >
          Nieuw aanbod indienen
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5" id="formulier">
      <h3 className="text-xl font-bold text-white mb-2">Auto aanbieden</h3>
      <p className="text-white/50 mb-6">Bied uw auto aan voor inruil, verkoop of consignatie</p>
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-400 text-sm">{submitError}</p>
        </div>
      )}

      <div className="space-y-5">
        {/* Type Aanvraag */}
        <div>
          <label htmlFor="typeAanvraag" className="block text-sm font-medium text-white/70 mb-2">
            Type aanvraag *
          </label>
          <div className="relative">
            <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <select
              id="typeAanvraag"
              name="typeAanvraag"
              value={formData.typeAanvraag}
              onChange={handleChange}
              className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all appearance-none cursor-pointer ${
                errors.typeAanvraag ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
              }`}
            >
              <option value="">Kies type aanvraag</option>
              <option value="Auto verkopen (directe inkoop)">Auto verkopen (directe inkoop)</option>
              <option value="Auto inruilen">Auto inruilen</option>
              <option value="Consignatie (verkopen via ons)">Consignatie (verkopen via ons)</option>
            </select>
          </div>
          {errors.typeAanvraag && (
            <p className="text-red-500 text-sm mt-1">{errors.typeAanvraag}</p>
          )}
        </div>

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

        {/* Kenteken & Merk/Model */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="kenteken" className="block text-sm font-medium text-white/70 mb-2">
              Kenteken *
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                id="kenteken"
                name="kenteken"
                value={formData.kenteken}
                onChange={handleChange}
                placeholder="XX-123-XX"
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                  errors.kenteken ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              />
            </div>
            {errors.kenteken && (
              <p className="text-red-500 text-sm mt-1">{errors.kenteken}</p>
            )}
          </div>

          <div>
            <label htmlFor="merkModel" className="block text-sm font-medium text-white/70 mb-2">
              Merk/Model *
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                id="merkModel"
                name="merkModel"
                value={formData.merkModel}
                onChange={handleChange}
                placeholder="Bijv. Volkswagen Golf"
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                  errors.merkModel ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              />
            </div>
            {errors.merkModel && (
              <p className="text-red-500 text-sm mt-1">{errors.merkModel}</p>
            )}
          </div>
        </div>

        {/* Bouwjaar & Kilometerstand */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="bouwjaar" className="block text-sm font-medium text-white/70 mb-2">
              Bouwjaar *
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                id="bouwjaar"
                name="bouwjaar"
                value={formData.bouwjaar}
                onChange={handleChange}
                placeholder="Bijv. 2019"
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                  errors.bouwjaar ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              />
            </div>
            {errors.bouwjaar && (
              <p className="text-red-500 text-sm mt-1">{errors.bouwjaar}</p>
            )}
          </div>

          <div>
            <label htmlFor="kilometerstand" className="block text-sm font-medium text-white/70 mb-2">
              Kilometerstand *
            </label>
            <div className="relative">
              <Gauge className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                id="kilometerstand"
                name="kilometerstand"
                value={formData.kilometerstand}
                onChange={handleChange}
                placeholder="Bijv. 75000"
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all ${
                  errors.kilometerstand ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              />
            </div>
            {errors.kilometerstand && (
              <p className="text-red-500 text-sm mt-1">{errors.kilometerstand}</p>
            )}
          </div>
        </div>

        {/* Brandstof & Transmissie */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="brandstof" className="block text-sm font-medium text-white/70 mb-2">
              Brandstof *
            </label>
            <div className="relative">
              <Fuel className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <select
                id="brandstof"
                name="brandstof"
                value={formData.brandstof}
                onChange={handleChange}
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all appearance-none cursor-pointer ${
                  errors.brandstof ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              >
                <option value="">Kies brandstof</option>
                <option value="Benzine">Benzine</option>
                <option value="Diesel">Diesel</option>
                <option value="Elektrisch">Elektrisch</option>
                <option value="Hybride">Hybride</option>
                <option value="LPG">LPG</option>
              </select>
            </div>
            {errors.brandstof && (
              <p className="text-red-500 text-sm mt-1">{errors.brandstof}</p>
            )}
          </div>

          <div>
            <label htmlFor="transmissie" className="block text-sm font-medium text-white/70 mb-2">
              Transmissie *
            </label>
            <div className="relative">
              <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <select
                id="transmissie"
                name="transmissie"
                value={formData.transmissie}
                onChange={handleChange}
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all appearance-none cursor-pointer ${
                  errors.transmissie ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              >
                <option value="">Kies transmissie</option>
                <option value="Handgeschakeld">Handgeschakeld</option>
                <option value="Automaat">Automaat</option>
              </select>
            </div>
            {errors.transmissie && (
              <p className="text-red-500 text-sm mt-1">{errors.transmissie}</p>
            )}
          </div>
        </div>

        {/* Gewenste prijs */}
        <div>
          <label htmlFor="gewenstePrijs" className="block text-sm font-medium text-white/70 mb-2">
            Gewenste prijs (optioneel)
          </label>
          <div className="relative">
            <Euro className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              id="gewenstePrijs"
              name="gewenstePrijs"
              value={formData.gewenstePrijs}
              onChange={handleChange}
              placeholder="Bijv. 15000"
              className="w-full bg-[#0d0d0d] border border-white/10 focus:border-[#c8102e] rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all"
            />
          </div>
        </div>

        {/* Opmerkingen */}
        <div>
          <label htmlFor="opmerkingen" className="block text-sm font-medium text-white/70 mb-2">
            Opmerkingen/Staat (optioneel)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/30" />
            <textarea
              id="opmerkingen"
              name="opmerkingen"
              value={formData.opmerkingen}
              onChange={handleChange}
              placeholder="Beschrijf de staat van de auto, eventuele schade, onderhoudshistorie..."
              rows={4}
              className="w-full bg-[#0d0d0d] border border-white/10 focus:border-[#c8102e] rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
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
              Auto aanbieden
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
