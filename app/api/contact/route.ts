import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, occasion, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Navn og e-post er påkrevd' }, { status: 400 });
    }

    // Lagre til Supabase
    const { error: dbError } = await supabase.from('contacts').insert({
      name,
      email,
      organization: organization || null,
      occasion: occasion || null,
      message: message || null,
    });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 });
    }

    // Send e-post til Ina
    await transporter.sendMail({
      from: `"Foredrag nettside" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🎤 Ny forespørsel: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f4f2f9; border-radius: 12px;">
          <h2 style="color: #2B1FA0; margin-top: 0;">Ny forespørsel fra nettsiden</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 140px; vertical-align: top;">Navn</td>
              <td style="padding: 10px 0; color: #1E1A3A; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">E-post</td>
              <td style="padding: 10px 0; color: #1E1A3A;"><a href="mailto:${email}" style="color: #2B1FA0;">${email}</a></td>
            </tr>
            ${organization ? `
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Organisasjon</td>
              <td style="padding: 10px 0; color: #1E1A3A;">${organization}</td>
            </tr>` : ''}
            ${occasion ? `
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Anledning</td>
              <td style="padding: 10px 0; color: #1E1A3A;">${occasion}</td>
            </tr>` : ''}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">Melding</td>
              <td style="padding: 10px 0; color: #1E1A3A; white-space: pre-wrap;">${message}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #2B1FA0;">
            <p style="margin: 0; color: #666; font-size: 14px;">Svar direkte på denne e-posten for å svare til ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Takk for henvendelsen! Jeg svarer så snart jeg kan.' });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Ugyldig forespørsel' }, { status: 400 });
  }
}
