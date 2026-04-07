'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export function NewsletterSection() {
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
          {/* Left column — text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">
              Nyhetsbrev
            </p>
            <h2 className="text-2xl md:text-3xl text-white leading-snug mb-3">
              Få innsikt rett i innboksen.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Ledelse, Gen Z og fremtidens arbeidsliv.
            </p>
          </div>

          {/* Right column — form */}
          <div>
            {status === 'success' ? (
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <p className="text-white text-lg font-serif">Du er med!</p>
                <p className="text-white/60 text-sm mt-1">
                  Sjekk innboksen din.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="E-postadresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-indigo/50"
                  />
                  <input
                    type="text"
                    placeholder="Fornavn (valgfritt)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-indigo/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-indigo text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === 'loading'
                    ? 'Sender...'
                    : 'Ja, send meg innsikt →'}
                </button>

                {status === 'error' && message && (
                  <p className="text-red-400 text-xs">{message}</p>
                )}

                <p className="text-white/40 text-xs">
                  Gratis. Kun relevant innhold. Meld av når du vil.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
