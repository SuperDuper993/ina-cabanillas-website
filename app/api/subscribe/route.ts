import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendWelcomeEmail(email: string, name: string | null) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set — skipping welcome email');
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Ina Cabanillas <onboarding@resend.dev>',
      to: [email],
      subject: 'Velkommen — du er med på listen 👋',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: auto; padding: 40px 24px;">
          <h2 style="font-size: 22px; font-weight: 700; color: #1E1A3A; margin-bottom: 16px;">
            Hei${name ? ` ${name}` : ''}! 👋
          </h2>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Takk for at du meldte deg på. Du vil nå motta innsikt om Gen Z, ledelse og fremtidens arbeidsliv — direkte i innboksen din.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Ingen spam. Bare innhold som faktisk er verdt å lese.
          </p>
          <a href="https://www.linkedin.com/in/ina-cabanillas"
             style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #2B1FA0; color: #fff; text-decoration: none; border-radius: 999px; font-weight: 600; font-size: 14px;">
            Følg meg på LinkedIn →
          </a>
          <p style="margin-top: 40px; font-size: 13px; color: #999;">
            Du kan melde deg av når som helst. Bare svar på denne e-posten.
          </p>
          <p style="font-size: 14px; color: #555; margin-top: 8px;">– Ina</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend send error:', error);
    }
  } catch (err) {
    console.error('Failed to send welcome email:', err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'E-postadresse er påkrevd.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Vennligst oppgi en gyldig e-postadresse.' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('newsletter_subscribers').insert({
      email: trimmedEmail,
      name: name?.trim() || null,
      source: source || 'website',
    });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({
          success: true,
          message: 'Du er allerede påmeldt! Sjekk innboksen din.',
          alreadySubscribed: true,
        });
      }
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Noe gikk galt. Prøv igjen senere.' },
        { status: 500 }
      );
    }

    // Send welcome email (non-blocking)
    sendWelcomeEmail(trimmedEmail, name?.trim() || null);

    return NextResponse.json({
      success: true,
      message: 'Påmeldt! Sjekk innboksen din.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Ugyldig forespørsel.' },
      { status: 400 }
    );
  }
}
