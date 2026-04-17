'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';
import { trackContactFormSubmit } from '@/lib/analytics';

interface FormData {
  naam: string;
  email: string;
  telefoon: string;
  onderwerp: string;
  bericht: string;
}

interface FormErrors {
  naam?: string;
  email?: string;
  telefoon?: string;
  onderwerp?: string;
  bericht?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (!formData.onderwerp.trim()) {
      newErrors.onderwerp = 'Onderwerp is verplicht';
    }

    if (!formData.bericht.trim()) {
      newErrors.bericht = 'Bericht is verplicht';
    } else if (formData.bericht.length < 10) {
      newErrors.bericht = 'Bericht moet minimaal 10 karakters bevatten';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Track the form submission
    trackContactFormSubmit(formData.onderwerp);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Bedankt voor uw bericht!</h3>
        <p className="text-white/60 mb-6">
          We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              naam: '',
              email: '',
              telefoon: '',
              onderwerp: '',
              bericht: '',
            });
          }}
          className="text-[#c8102e] hover:underline font-medium"
        >
          Verstuur nog een bericht
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
      <h3 className="text-xl font-bold text-white mb-6">Stuur ons een bericht</h3>
      
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

        {/* Subject */}
        <div>
          <label htmlFor="onderwerp" className="block text-sm font-medium text-white/70 mb-2">
            Onderwerp *
          </label>
          <div className="relative">
            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <select
              id="onderwerp"
              name="onderwerp"
              value={formData.onderwerp}
              onChange={handleChange}
              className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all appearance-none cursor-pointer ${
                errors.onderwerp ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
              }`}
            >
              <option value="">Kies een onderwerp</option>
              <option value="occasion">Vraag over een occasion</option>
              <option value="onderhoud">Onderhoud / APK</option>
              <option value="reparatie">Reparatie</option>
              <option value="financiering">Financiering</option>
              <option value="inkoop">Auto inkoop</option>
              <option value="overig">Overig</option>
            </select>
          </div>
          {errors.onderwerp && (
            <p className="text-red-500 text-sm mt-1">{errors.onderwerp}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="bericht" className="block text-sm font-medium text-white/70 mb-2">
            Bericht *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/30" />
            <textarea
              id="bericht"
              name="bericht"
              value={formData.bericht}
              onChange={handleChange}
              placeholder="Typ hier uw bericht..."
              rows={5}
              className={`w-full bg-[#0d0d0d] border rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#c8102e]/50 transition-all resize-none ${
                errors.bericht ? 'border-red-500' : 'border-white/10 focus:border-[#c8102e]'
              }`}
            />
          </div>
          {errors.bericht && (
            <p className="text-red-500 text-sm mt-1">{errors.bericht}</p>
          )}
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
              Verstuur Bericht
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
