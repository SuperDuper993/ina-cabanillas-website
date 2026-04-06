import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, occasion, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Navn og e-post er påkrevd' }, { status: 400 });
    }

    const { error } = await supabase.from('contacts').insert({
      name,
      email,
      organization: organization || null,
      occasion: occasion || null,
      message: message || null,
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Noe gikk galt' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Takk for henvendelsen! Jeg svarer så snart jeg kan.' });
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel' }, { status: 400 });
  }
}
