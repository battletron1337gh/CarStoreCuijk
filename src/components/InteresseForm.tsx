'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, Calendar, Car, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

interface Auto {
  merk: string;
  model: string;
  kenteken?: string;
  id: string | number;
}

interface FormData {
  naam: string;
  email: string;
  telefoon: string;
  gewensteDatum: string;
  opmerkingen: string;
}

interface FormErrors {
  naam?: string;
  email?: string;
  telefoon?: string;
}

interface InteresseFormProps {
  auto: Auto;
  onSuccess?: () => void;
}

export default function InteresseForm({ auto, onSuccess }: InteresseFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    telefoon: '',
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
        auto_kenteken: auto.kenteken || 'Onbekend',
        auto_merk_model: `${auto.merk} ${auto.model}`,
        auto_id: auto.id.toString(),
        gewenste_datum: formData.gewensteDatum || 'Niet opgegeven',
        opmerkingen: formData.opmerkingen || 'Geen opmerkingen',
        onderwerp: 'Interesse in occasion',
        to_email: 'info@carstorecuijk.nl',
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error('EmailJS error:', error);
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

  if (isSubmitted) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Bedankt voor uw interesse!</h3>
        <p className="text-white/60 mb-6">
          We hebben uw verzoek ontvangen en nemen zo snel mogelijk contact met u op over de {auto.merk} {auto.model}.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              naam: '',
              email: '',
              telefoon: '',
              gewensteDatum: '',
              opmerkingen: '',
            });
            setSubmitError(null);
          }}
          className="text-[#c8102e] hover:underline font-medium"
        >
          Nieuw bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
      <h3 className="text-xl font-bold text-white mb-2">Interesse in deze auto?</h3>
      <p className="text-white/50 mb-6">
        Laat uw gegevens achter en we nemen contact met u op over de {auto.merk} {auto.model}
      </p>
      
      {/* Auto info display */}
      <div className="mb-6 p-4 bg-[#0d0d0d] rounded-xl border border-white/5">
        <div className="flex items-center gap-3 mb-2">
          <Car className="w-5 h-5 text-[#c8102e]" />
          <span className="font-semibold text-white">{auto.merk} {auto.model}</span>
        </div>
        {auto.kenteken && (
          <p className="text-white/50 text-sm ml-8">Kenteken: {auto.kenteken}</p>
        )}
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

        {/* Gewenste bezichtiging datum */}
        <div>
          <label htmlFor="gewensteDatum" className="block text-sm font-medium text-white/70 mb-2">
            Gewenste bezichtiging datum (optioneel)
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
              placeholder="Eventuele vragen of opmerkingen..."
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
              Verstuur bericht
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
