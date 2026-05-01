'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, Car, Wrench, Calendar, Gauge, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

interface FormData {
  naam: string;
  email: string;
  telefoon: string;
  kenteken: string;
  merkModel: string;
  kilometerstand: string;
  typeWerkzaamheden: string;
  gewensteDatum: string;
  opmerkingen: string;
}

interface FormErrors {
  naam?: string;
  email?: string;
  telefoon?: string;
  kenteken?: string;
  merkModel?: string;
  kilometerstand?: string;
  typeWerkzaamheden?: string;
}

interface OnderhoudOfferteFormProps {
  onSuccess?: () => void;
}

export default function OnderhoudOfferteForm({ onSuccess }: OnderhoudOfferteFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    telefoon: '',
    kenteken: '',
    merkModel: '',
    kilometerstand: '',
    typeWerkzaamheden: '',
    gewensteDatum: '',
    opmerkingen: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.telefoon.replace(/\s/g, ''))) {
      newErrors.telefoon = 'Voer een geldig telefoonnummer in';
    }

    if (!formData.kenteken.trim()) {
      newErrors.kenteken = 'Kenteken is verplicht';
    }

    if (!formData.merkModel.trim()) {
      newErrors.merkModel = 'Merk/Model is verplicht';
    }

    if (!formData.kilometerstand.trim()) {
      newErrors.kilometerstand = 'Kilometerstand is verplicht';
    }

    if (!formData.typeWerkzaamheden.trim()) {
      newErrors.typeWerkzaamheden = 'Type werkzaamheden is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      setSubmitError('EmailJS is niet correct geconfigureerd. Neem contact op met de beheerder.');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        naam: formData.naam,
        email: formData.email,
        telefoon: formData.telefoon,
        kenteken: formData.kenteken,
        merk_model: formData.merkModel,
        kilometerstand: formData.kilometerstand,
        type_werkzaamheden: formData.typeWerkzaamheden,
        gewenste_datum: formData.gewensteDatum || 'Niet opgegeven',
        opmerkingen: formData.opmerkingen || 'Geen opmerkingen',
        onderwerp: 'Onderhoud offerte aanvraag',
        to_email: 'info@carstorecuijk.nl',
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_ONDERHOUD,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
      setSubmitError('Er is iets misgegaan bij het versturen van uw aanvraag. Probeer het later opnieuw of neem telefonisch contact op.');
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
        <h3 className="text-2xl font-bold text-white mb-2">Bedankt voor uw aanvraag!</h3>
        <p className="text-white/60 mb-6">
          We hebben uw offerte aanvraag ontvangen en nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              naam: '',
              email: '',
              telefoon: '',
              kenteken: '',
              merkModel: '',
              kilometerstand: '',
              typeWerkzaamheden: '',
              gewensteDatum: '',
              opmerkingen: '',
            });
            setSubmitError(null);
          }}
          className="text-[#c8102e] hover:underline font-medium"
        >
          Nieuwe aanvraag indienen
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
      <h3 className="text-xl font-bold text-white mb-2">Offerte aanvragen</h3>
      <p className="text-white/50 mb-6">Vraag een vrijblijvende offerte aan voor onderhoud of reparatie</p>
      
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

        {/* Kilometerstand & Type werkzaamheden */}
        <div className="grid sm:grid-cols-2 gap-5">
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

          <div>
            <label htmlFor="typeWerkzaamheden" className="block text-sm font-medium text-white/70 mb-2">
              Type werkzaamheden *
            </label>
            <div className="relative">
              <Wrench className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <select
                id="typeWerkzaamheden"
                name="typeWerkzaamheden"
                value={formData.typeWerkzaamheden}
                onChange={handleChange}
                className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all appearance-none cursor-pointer ${
                  errors.typeWerkzaamheden ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
                }`}
              >
                <option value="">Kies een type</option>
                <option value="APK">APK</option>
                <option value="Kleine beurt">Kleine beurt</option>
                <option value="Grote beurt">Grote beurt</option>
                <option value="Reparatie">Reparatie</option>
                <option value="Overig">Overig</option>
              </select>
            </div>
            {errors.typeWerkzaamheden && (
              <p className="text-red-500 text-sm mt-1">{errors.typeWerkzaamheden}</p>
            )}
          </div>
        </div>

        {/* Gewenste datum */}
        <div>
          <label htmlFor="gewensteDatum" className="block text-sm font-medium text-white/70 mb-2">
            Gewenste datum (optioneel)
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="date"
              id="gewensteDatum"
              name="gewensteDatum"
              value={formData.gewensteDatum}
              onChange={handleChange}
              className="w-full bg-[#0d0d0d] border border-white/10 focus:border-[#c8102e] rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all"
            />
          </div>
        </div>

        {/* Opmerkingen */}
        <div>
          <label htmlFor="opmerkingen" className="block text-sm font-medium text-white/70 mb-2">
            Opmerkingen (optioneel)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/30" />
            <textarea
              id="opmerkingen"
              name="opmerkingen"
              value={formData.opmerkingen}
              onChange={handleChange}
              placeholder="Beschrijf eventuele klachten of specifieke wensen..."
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
              Offerte aanvragen
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
