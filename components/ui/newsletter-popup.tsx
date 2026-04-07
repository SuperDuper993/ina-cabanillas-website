'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY_SUBSCRIBED = 'newsletter_subscribed';
const STORAGE_KEY_DISMISSED = 'newsletter_dismissed';
const SCROLL_THRESHOLD = 0.6;
const DELAY_MS = 30_000;

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const shouldSuppress = useCallback(() => {
    if (typeof window === 'undefined') return true;
    if (localStorage.getItem(STORAGE_KEY_SUBSCRIBED) === 'true') return true;
    const dismissed = parseInt(localStorage.getItem(STORAGE_KEY_DISMISSED) || '0', 10);
    if (dismissed >= 2) return true;
    return false;
  }, []);

  useEffect(() => {
    if (shouldSuppress()) return;

    let triggered = false;
    const show = () => {
      if (!triggered) {
        triggered = true;
        setVisible(true);
      }
    };

    // Timer trigger: 30 seconds
    const timer = setTimeout(show, DELAY_MS);

    // Scroll trigger: 60%
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_THRESHOLD) {
        show();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [shouldSuppress]);

  const dismiss = () => {
    setVisible(false);
    const count = parseInt(localStorage.getItem(STORAGE_KEY_DISMISSED) || '0', 10);
    localStorage.setItem(STORAGE_KEY_DISMISSED, String(count + 1));
  };

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
      localStorage.setItem(STORAGE_KEY_SUBSCRIBED, 'true');
    } catch {
      setStatus('error');
      setMessage('Noe gikk galt. Prøv igjen senere.');
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-[480px] bg-white rounded-2xl shadow-2xl p-8 pointer-events-auto">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 text-brand-muted hover:text-foreground transition-colors"
                aria-label="Lukk"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {status === 'success' ? (
                <div className="text-center py-6">
                  <p className="text-2xl font-serif text-foreground mb-2">
                    Du er med!
                  </p>
                  <p className="text-brand-muted text-sm">
                    Sjekk innboksen din.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif text-foreground mb-2 pr-8">
                    Forstå Gen Z før alle andre.
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">
                    Jeg deler innsikt om unge, ledelse og fremtidens arbeidsliv.
                    Direkte i innboksen — ingen spam.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      placeholder="E-postadresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lavender text-foreground text-sm placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                    />
                    <input
                      type="text"
                      placeholder="Fornavn (valgfritt)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-lavender text-foreground text-sm placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full px-6 py-3.5 rounded-full bg-brand-indigo text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                    >
                      {status === 'loading'
                        ? 'Sender...'
                        : 'Ja, send meg innsikt →'}
                    </button>
                  </form>

                  {status === 'error' && message && (
                    <p className="text-red-600 text-xs mt-2 text-center">
                      {message}
                    </p>
                  )}

                  <p className="text-brand-muted text-xs text-center mt-4">
                    Gratis. Kun relevant innhold. Meld av når du vil.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
