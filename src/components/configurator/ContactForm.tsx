'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
  Send,
  User,
  Mail,
  Phone,
  Wrench,
  Calendar,
  MessageSquare,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export type MontageType = 'werkplaats' | 'zelf' | 'alleen-onderdelen' | 'advies';

interface ContactFormProps {
  naam: string;
  setNaam: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  telefoon: string;
  setTelefoon: (v: string) => void;
  montage: MontageType;
  setMontage: (v: MontageType) => void;
  gewensteDatum: string;
  setGewensteDatum: (v: string) => void;
  opmerkingen: string;
  setOpmerkingen: (v: string) => void;
  hcaptchaToken: string | null;
  setHcaptchaToken: (v: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitting: boolean;
  submitError: string | null;
  disabled: boolean;
  total: number;
}

const HCAPTCHA_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001'; // hCaptcha test key — vervang door eigen sitekey in productie

export default function ContactForm({
  naam,
  setNaam,
  email,
  setEmail,
  telefoon,
  setTelefoon,
  montage,
  setMontage,
  gewensteDatum,
  setGewensteDatum,
  opmerkingen,
  setOpmerkingen,
  hcaptchaToken,
  setHcaptchaToken,
  onSubmit,
  submitting,
  submitError,
  disabled,
  total,
}: ContactFormProps) {
  const hcaptchaRef = useRef<HCaptcha>(null);

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c8102e]/15 text-[#c8102e]">
          <Send className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-white">Offerte aanvragen</h3>
      </div>

      <div className="space-y-4">
        <Field label="Naam *" icon={User}>
          <input
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c8102e]/50"
            placeholder="Jouw naam"
            required
          />
        </Field>

        <Field label="E-mail *" icon={Mail}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c8102e]/50"
            placeholder="info@voorbeeld.nl"
            required
          />
        </Field>

        <Field label="Telefoon *" icon={Phone}>
          <input
            type="tel"
            value={telefoon}
            onChange={(e) => setTelefoon(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c8102e]/50"
            placeholder="06-12345678"
            required
          />
        </Field>

        <Field label="Afhandeling" icon={Wrench}>
          <select
            value={montage}
            onChange={(e) => setMontage(e.target.value as MontageType)}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-10 text-white outline-none transition-colors focus:border-[#c8102e]/50"
          >
            <option value="werkplaats" className="bg-[#1a1a1a]">
              In onze werkplaats laten monteren
            </option>
            <option value="zelf" className="bg-[#1a1a1a]">
              Onderdelen zelf ophalen
            </option>
            <option value="alleen-onderdelen" className="bg-[#1a1a1a]">
              Onderdelen laten bezorgen
            </option>
            <option value="advies" className="bg-[#1a1a1a]">
              Eerst adviesgesprek
            </option>
          </select>
        </Field>

        <Field label="Gewenste datum" icon={Calendar}>
          <input
            type="date"
            value={gewensteDatum}
            onChange={(e) => setGewensteDatum(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white outline-none transition-colors focus:border-[#c8102e]/50"
          />
        </Field>

        <Field label="Opmerkingen" icon={MessageSquare}>
          <textarea
            value={opmerkingen}
            onChange={(e) => setOpmerkingen(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c8102e]/50"
            placeholder="Bijv. specifieke wensen of vragen"
          />
        </Field>

        <div className="flex justify-center py-2">
          <HCaptcha
            ref={hcaptchaRef}
            sitekey={HCAPTCHA_SITE_KEY}
            onVerify={(token) => setHcaptchaToken(token)}
            onExpire={() => setHcaptchaToken(null)}
          />
        </div>

        {submitError && (
          <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={disabled || submitting || total <= 0}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c8102e] py-4 text-lg font-bold text-white transition-all hover:bg-[#a00d24] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Versturen...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Aanvraag versturen
            </>
          )}
        </button>

        <p className="text-center text-xs text-white/40">
          Door te versturen ga je akkoord met onze{' '}
          <Link href="/privacy" className="text-[#c8102e] hover:underline">
            privacyverklaring
          </Link>
          .
        </p>
      </div>
    </motion.form>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-white/70">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
        {children}
      </div>
    </div>
  );
}
