// Email Provider Interface
// Ondersteunt zowel EmailJS als SMTP

import emailjs from '@emailjs/browser';
import nodemailer from 'nodemailer';

// Configuratie
export const EMAIL_CONFIG = {
  // SMTP (Hostinger) - HUIDIGE DEFAULT
  SMTP_HOST: process.env.NEXT_PUBLIC_SMTP_HOST || 'smtp.hostinger.com',
  SMTP_PORT: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || '465'),
  SMTP_USER: process.env.NEXT_PUBLIC_SMTP_USER || 'info@carstorecuijk.nl',
  SMTP_PASS: process.env.NEXT_PUBLIC_SMTP_PASS || '',
  
  // EmailJS - ALTERNATIEF (uitgeschakeld)
  EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID_INTERESSE: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_INTERESSE || 'template_rk0kuiv',
  EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  
  // Provider keuze: 'smtp' of 'emailjs'
  PROVIDER: (process.env.NEXT_PUBLIC_EMAIL_PROVIDER || 'smtp') as 'smtp' | 'emailjs',
};

// Interface voor email data
interface EmailData {
  naam: string;
  email: string;
  telefoon: string;
  onderwerp: string;
  to_email: string;
  // Optionele velden voor verschillende formulieren
  auto_kenteken?: string;
  auto_merk_model?: string;
  auto_id?: string;
  gewenste_datum?: string;
  opmerkingen?: string;
  bericht?: string;
  type_aanvraag?: string;
  kenteken?: string;
  merk_model?: string;
  kilometerstand?: string;
  type_werkzaamheden?: string;
  bouwjaar?: string;
  brandstof?: string;
  transmissie?: string;
  apk_tot?: string;
  vraagprijs?: string;
  gewenste_prijs?: string;
}

// SMTP Provider via PHP (HUIDIGE DEFAULT)
async function sendViaSMTP(data: EmailData): Promise<void> {
  // PHP endpoint op Hostinger
  const response = await fetch('/api/send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'SMTP email failed');
  }
}

// EmailJS Provider (ALTERNATIEF - UITGESCHAKELD)
// Gebruik dit als een klant EmailJS prefereert
async function sendViaEmailJS(data: EmailData): Promise<void> {
  /* 
  // UNCOMMENT OM EMAILJS TE GEBRUIKEN:
  
  await emailjs.send(
    EMAIL_CONFIG.EMAILJS_SERVICE_ID,
    EMAIL_CONFIG.EMAILJS_TEMPLATE_ID_INTERESSE,
    {
      naam: data.naam,
      email: data.email,
      telefoon: data.telefoon,
      auto_kenteken: data.auto_kenteken,
      auto_merk_model: data.auto_merk_model,
      auto_id: data.auto_id,
      gewenste_datum: data.gewenste_datum,
      opmerkingen: data.opmerkingen,
      onderwerp: data.onderwerp,
      to_email: data.to_email,
    },
    EMAIL_CONFIG.EMAILJS_PUBLIC_KEY
  );
  */
  
  throw new Error('EmailJS is momenteel uitgeschakeld. Gebruik SMTP.');
}

// Main send function
export async function sendEmail(data: EmailData): Promise<void> {
  console.log('Email provider:', EMAIL_CONFIG.PROVIDER);
  console.log('Email data:', data);
  
  if (EMAIL_CONFIG.PROVIDER === 'emailjs') {
    return sendViaEmailJS(data);
  } else {
    return sendViaSMTP(data);
  }
}

// Voor backward compatibility
export const EMAILJS_CONFIG = {
  SERVICE_ID: EMAIL_CONFIG.EMAILJS_SERVICE_ID,
  TEMPLATE_ID: '',
  TEMPLATE_ID_INKOOP: '',
  TEMPLATE_ID_ONDERHOUD: '',
  TEMPLATE_ID_INTERESSE: EMAIL_CONFIG.EMAILJS_TEMPLATE_ID_INTERESSE,
  PUBLIC_KEY: EMAIL_CONFIG.EMAILJS_PUBLIC_KEY,
};
