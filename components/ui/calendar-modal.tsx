'use client';

import { useState } from 'react';

const CALENDAR_URL = 'https://calendar.app.google/DdqRYwRpniLiXgcm6';

interface CalendarModalProps {
  label?: string;
  className?: string;
  lang?: 'nb' | 'en';
}

export function CalendarModal({ label, className, lang = 'nb' }: CalendarModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const t = lang === 'en'
    ? {
        heading: 'One quick thing before you book',
        body: 'Join the newsletter and get weekly insights on Gen Z and leadership — straight to your inbox. Free.',
        placeholder: 'your@email.com',
        cta: 'Sign me up →',
        sending: 'Signing up...',
        skip: 'No thanks — go straight to calendar',
        badge: 'The Human ROI',
        done: 'You\'re in! Taking you to the calendar...',
      }
    : {
        heading: 'Et lite steg før du booker',
        body: 'Meld deg på nyhetsbrevet og få ukentlig innsikt om Gen Z og ledelse — direkte i innboksen. Gratis.',
        placeholder: 'din@epost.no',
        cta: 'Meld meg på →',
        sending: 'Melder på...',
        skip: 'Nei takk — gå direkte til kalender',
        badge: 'The Human ROI',
        done: 'Du er med! Sender deg til kalenderen...',
      };

  const defaultLabel = lang === 'en' ? 'Book a 15-min call →' : 'Book 15 min samtale →';

  function openCalendar() {
    window.open(CALENDAR_URL, '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'calendar_booking' }),
      });
    } catch { /* silent */ }
    setStatus('done');
    setTimeout(openCalendar, 700);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label ?? defaultLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {status === 'done' ? (
              <div className="text-center py-4">
                <p className="text-2xl mb-3">🎉</p>
                <p className="font-semibold text-foreground">{t.done}</p>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">{t.badge}</p>
                <h2 className="font-serif text-2xl text-foreground mb-2">{t.heading}</h2>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">{t.body}</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-3 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? t.sending : t.cta}
                  </button>
                </form>
                <button
                  onClick={openCalendar}
                  className="w-full mt-3 text-sm text-brand-muted hover:text-foreground transition-colors text-center"
                >
                  {t.skip}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
