import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP configuratie
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'info@carstorecuijk.nl',
    pass: process.env.SMTP_PASS || '',
  },
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const {
      naam,
      email,
      telefoon,
      auto_kenteken,
      auto_merk_model,
      auto_id,
      gewenste_datum,
      opmerkingen,
      to_email,
    } = data;

    // Validatie
    if (!naam || !email || !telefoon) {
      return NextResponse.json(
        { error: 'Naam, email en telefoon zijn verplicht' },
        { status: 400 }
      );
    }

    // SMTP transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    // Email inhoud
    const mailOptions = {
      from: `"Car Store Cuijk" <${SMTP_CONFIG.auth.user}>`,
      to: to_email || 'info@carstorecuijk.nl',
      subject: `Interesse in ${auto_merk_model} (${auto_kenteken})`,
      html: `
        <h2>Nieuwe interesse in occasion</h2>
        
        <h3>Auto Details:</h3>
        <ul>
          <li><strong>Kenteken:</strong> ${auto_kenteken || 'Onbekend'}</li>
          <li><strong>Merk/Model:</strong> ${auto_merk_model}</li>
          <li><strong>Auto ID:</strong> ${auto_id}</li>
        </ul>

        <h3>Contact Gegevens:</h3>
        <ul>
          <li><strong>Naam:</strong> ${naam}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefoon:</strong> ${telefoon}</li>
        </ul>

        <h3>Gewenste Proefrit Datum:</h3>
        <p>${gewenste_datum || 'Niet opgegeven'}</p>

        <h3>Opmerkingen:</h3>
        <p>${opmerkingen || 'Geen opmerkingen'}</p>

        <hr>
        <p><small>Dit bericht is verstuurd via het contactformulier op carstorecuijk.nl</small></p>
      `,
      text: `
Nieuwe interesse in occasion

Auto Details:
- Kenteken: ${auto_kenteken || 'Onbekend'}
- Merk/Model: ${auto_merk_model}
- Auto ID: ${auto_id}

Contact Gegevens:
- Naam: ${naam}
- Email: ${email}
- Telefoon: ${telefoon}

Gewenste Proefrit Datum: ${gewenste_datum || 'Niet opgegeven'}

Opmerkingen:
${opmerkingen || 'Geen opmerkingen'}

---
Dit bericht is verstuurd via het contactformulier op carstorecuijk.nl
      `,
    };

    // Verstuur email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json(
      { error: 'Er is iets misgegaan bij het versturen van de email' },
      { status: 500 }
    );
  }
}
