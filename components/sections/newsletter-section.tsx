'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  variant?: 'default' | 'early';
}

export function NewsletterSection({ variant = 'default' }: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: name || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Noe gikk galt.');
        return;
      }

      setStatus('success');
      setMessage(data.message);

      if (typeof window !== 'undefined') {
        localStorage.setItem('newsletter_subscribed', 'true');
      }
    } catch {
      setStatus('error');
      setMessage('Noe gikk galt. Prøv igjen senere.');
    }
  };

  const form = (dark: boolean) => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="E-postadresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 ${
            dark
              ? 'bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:ring-brand-indigo/50'
              : 'bg-brand-lavender border border-brand-border text-brand-dark placeholder:text-brand-muted/60 focus:ring-brand-indigo/40'
          }`}
        />
        <input
          type="text"
          placeholder="Fornavn (valgfritt)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 ${
            dark
              ? 'bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:ring-brand-indigo/50'
              : 'bg-brand-lavender border border-brand-border text-brand-dark placeholder:text-brand-muted/60 focus:ring-brand-indigo/40'
          }`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-indigo text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === 'loading' ? 'Sender...' : 'Ja, jeg vil ha med meg dette →'}
      </button>
      {status === 'error' && message && (
        <p className={`text-xs ${dark ? 'text-red-400' : 'text-red-500'}`}>{message}</p>
      )}
      <p className={`text-xs ${dark ? 'text-white/40' : 'text-brand-muted'}`}>
        Gratis. Meld av når du vil.
      </p>
    </form>
  );

  const successBox = (dark: boolean) => (
    <div className={`rounded-2xl p-6 ${dark ? 'bg-white/10 text-center' : 'bg-brand-lavender'}`}>
      <p className={`text-lg font-serif ${dark ? 'text-white' : 'text-brand-dark'}`}>Du er med!</p>
      <p className={`text-base mt-1 ${dark ? 'text-white/60' : 'text-brand-muted'}`}>
        Sjekk innboksen. Sjekklisten er på vei til deg.
      </p>
    </div>
  );

  if (variant === 'early') {
    return (
      <section className="py-20 bg-white border-y border-brand-border">
        <div className="max-w-[1080px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          >
            {/* Left — value prop */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Ikke gå glipp av noe
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug mb-4">
                Få oppdateringer om bok, foredrag og fremtidens arbeidsliv.
              </h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                Meld deg på The Human ROI. Annenhver uke deler jeg innsikt om samspillet mellom mennesker, teknologi og ledelse. Direkte i innboksen din.
              </p>

              {/* Bonus box */}
              <div className="bg-brand-lavender border border-brand-border rounded-2xl p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-2">
                  Velkomstgave
                </p>
                <p className="text-brand-dark text-base font-medium mb-1">
                  5 grep for å beholde unge talent
                </p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Praktisk sjekkliste du får rett etter påmelding. Gratis.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="pt-2">
              {status === 'success' ? successBox(false) : form(false)}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Left — value prop */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">
              Ikke gå glipp av noe
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-white leading-snug mb-3">
              Oppdateringer om bok, foredrag og fremtidens arbeidsliv.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-5">
              The Human ROI. Annenhver uke, rett i innboksen.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Innsikt om samspillet mellom mennesker og teknologi',
                'Oppdateringer fra scenen og ny forskning',
                'Tips du kan bruke med en gang',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                  <span className="text-brand-indigo mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            {/* Bonus */}
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">Velkomstgave</p>
              <p className="text-white text-sm">«5 grep for å beholde unge talent» — sjekkliste sendes ved påmelding.</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? successBox(true) : form(true)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
