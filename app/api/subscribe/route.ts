import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

async function addToBeehiiv(email: string, name: string | null, source: string) {
  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    console.warn('Beehiiv not configured — skipping');
    return;
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: source || 'website',
          utm_medium: 'organic',
          ...(name ? { custom_fields: [{ name: 'First Name', value: name }] } : {}),
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('Beehiiv error:', res.status, err);
    }
  } catch (err) {
    console.error('Failed to add to Beehiiv:', err);
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

    // Save to Supabase (local backup)
    const { error } = await supabase.from('newsletter_subscribers').insert({
      email: trimmedEmail,
      name: name?.trim() || null,
      source: source || 'website',
    });

    if (error) {
      if (error.code === '23505') {
        // Already exists in Supabase — still try Beehiiv (might be new there)
        addToBeehiiv(trimmedEmail, name?.trim() || null, source || 'website');
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

    // Add to Beehiiv (sends welcome email automatically)
    addToBeehiiv(trimmedEmail, name?.trim() || null, source || 'website');

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
