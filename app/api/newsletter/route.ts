import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json({ error: 'E-post er påkrevd' }, { status: 400 });
    }

    // Save to Supabase (local backup)
    const { error } = await supabase.from('newsletter_subscribers').insert({
      email,
      name: name || null,
    });

    if (error && error.code !== '23505') {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 });
    }

    // Add to Beehiiv
    if (BEEHIIV_API_KEY && BEEHIIV_PUBLICATION_ID) {
      try {
        await fetch(
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
              utm_source: 'website',
              utm_medium: 'contact_form',
              ...(name ? { custom_fields: [{ name: 'First Name', value: name }] } : {}),
            }),
          }
        );
      } catch (err) {
        console.error('Beehiiv error:', err);
      }
    }

    return NextResponse.json({ success: true, message: 'Takk! Du er nå påmeldt nyhetsbrevet.' });
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel' }, { status: 400 });
  }
}
