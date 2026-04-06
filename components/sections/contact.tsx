'use client';

import { useState } from 'react';
import { NeonButton } from "@/components/ui/neon-button";

const occasions = [
  "",
  "Konferanse / årssamling",
  "Ledermøte / fagdag",
  "Kick-off / teamsamling",
  "HR-arrangement",
  "Annet",
];

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [newsletter, setNewsletter] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('navn') as HTMLInputElement).value,
      email: (form.elements.namedItem('epost') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organisasjon') as HTMLInputElement).value,
      occasion: (form.elements.namedItem('anledning') as HTMLSelectElement).value,
      message: (form.elements.namedItem('melding') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      if (newsletter) {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.email, name: data.name }),
        });
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-snug">
              Book Ina
            </h2>
            <p className="text-white/60 leading-relaxed">
              Planlegger du en konferanse, fagdag eller kick-off? Ta kontakt for å diskutere hvordan Ina kan bidra til ditt arrangement.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3">
                <span className="text-sm">📍</span>
                <span className="text-white/50 text-sm">Oslo, Norge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm">🌐</span>
                <span className="text-white/50 text-sm">Norsk & English</span>
              </div>
              <a href="https://www.linkedin.com/in/ina-cabanillas/" target="_blank" rel="noopener" className="text-white/40 text-sm hover:text-white/70 transition-colors mt-2">
                LinkedIn →
              </a>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <span className="text-4xl">✓</span>
                <h3 className="text-xl text-white font-serif">Takk for henvendelsen!</h3>
                <p className="text-white/50 text-sm">Jeg svarer så snart jeg kan.</p>
                <button onClick={() => setStatus('idle')} className="text-brand-indigo text-sm mt-4 hover:underline">
                  Send en ny henvendelse
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="navn">Navn *</label>
                    <input id="navn" name="navn" type="text" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="epost">E-post *</label>
                    <input id="epost" name="epost" type="email" required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="organisasjon">Organisasjon</label>
                  <input id="organisasjon" name="organisasjon" type="text" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="anledning">Anledning</label>
                  <select id="anledning" name="anledning" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors appearance-none">
                    {occasions.map((o) => (
                      <option key={o} value={o} className="bg-brand-dark">{o || 'Velg type arrangement...'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="melding">Melding</label>
                  <textarea id="melding" name="melding" rows={3} placeholder="Fortell gjerne litt om arrangementet..." className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors resize-none" />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="rounded border-white/20 bg-white/5 text-brand-indigo" />
                  <span className="text-white/40 text-xs">Hold meg oppdatert om nye foredrag og artikler</span>
                </label>
                <NeonButton variant="solid" size="lg" type="submit" className="w-full mt-2" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sender...' : status === 'error' ? 'Prøv igjen' : 'Send henvendelse'}
                </NeonButton>
                {status === 'error' && <p className="text-red-400 text-xs text-center">Noe gikk galt. Prøv igjen.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
