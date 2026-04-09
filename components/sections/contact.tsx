'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { BRAND } from "@/lib/constants";
import ShimmerButton from "@/components/ui/shimmer-button";

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
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-[680px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl text-foreground leading-snug mb-2">
            Book Ina som foredragsholder
          </h2>
          <p className="text-brand-muted text-base mb-8">
            Planlegger du konferanse, fagdag eller kick-off? Fyll ut skjemaet — jeg svarer innen 24 timer.
          </p>

          {/* form wrapper */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center bg-brand-lavender rounded-2xl p-10">
                <div className="w-14 h-14 rounded-full bg-brand-indigo/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-indigo" />
                  </svg>
                </div>
                <h3 className="text-xl text-foreground font-serif">Takk for henvendelsen!</h3>
                <p className="text-brand-muted text-base">Jeg svarer så snart jeg kan, vanligvis innen 24 timer.</p>
                <button onClick={() => setStatus('idle')} className="text-brand-indigo text-sm mt-4 hover:underline">
                  Send en ny henvendelse
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-brand-lavender rounded-2xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-foreground text-base font-medium mb-2" htmlFor="navn">
                      Navn <span className="text-brand-indigo">*</span>
                    </label>
                    <input
                      id="navn"
                      name="navn"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-base font-medium mb-2" htmlFor="epost">
                      E-post <span className="text-brand-indigo">*</span>
                    </label>
                    <input
                      id="epost"
                      name="epost"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all"
                      placeholder="din@epost.no"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground text-base font-medium mb-2" htmlFor="organisasjon">
                    Organisasjon <span className="text-brand-muted text-xs font-normal">(valgfritt)</span>
                  </label>
                  <input
                    id="organisasjon"
                    name="organisasjon"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all"
                    placeholder="Bedrift eller organisasjon"
                  />
                </div>

                <div>
                  <label className="block text-foreground text-base font-medium mb-2" htmlFor="anledning">
                    Anledning <span className="text-brand-muted text-xs font-normal">(valgfritt)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="anledning"
                      name="anledning"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all appearance-none pr-10"
                    >
                      {occasions.map((o) => (
                        <option key={o} value={o}>{o || 'Velg type arrangement...'}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-foreground text-base font-medium mb-2" htmlFor="melding">
                    Melding
                  </label>
                  <textarea
                    id="melding"
                    name="melding"
                    rows={4}
                    placeholder="Fortell gjerne litt om arrangementet, dato og publikum..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-0.5 rounded border-brand-border bg-white text-brand-indigo focus:ring-brand-indigo/20"
                  />
                  <span className="text-brand-muted text-base leading-relaxed">
                    Hold meg oppdatert om nye foredrag og artikler
                  </span>
                </label>

                <ShimmerButton
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full mt-1 h-auto py-4 text-base disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === 'sending' ? 'Sender...' : status === 'error' ? 'Prøv igjen \u2192' : 'Send melding \u2192'}
                </ShimmerButton>

                {status === 'error' && (
                  <p className="text-red-600 text-xs text-center">Noe gikk galt. Prøv igjen.</p>
                )}

                <p className="text-brand-muted/60 text-xs text-center">
                  Eller ring meg direkte:{" "}
                  <a href="tel:+4797424957" className="text-brand-indigo hover:underline font-medium">
                    +47 974 24 957
                  </a>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>

  );
}
