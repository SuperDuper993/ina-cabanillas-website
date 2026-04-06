import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json({ error: 'E-post er påkrevd' }, { status: 400 });
    }

    const { error } = await supabase.from('newsletter_subscribers').insert({
      email,
      name: name || null,
    });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ success: true, message: 'Du er allerede påmeldt!' });
      }
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Takk! Du er nå påmeldt nyhetsbrevet.' });
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel' }, { status: 400 });
  }
}
