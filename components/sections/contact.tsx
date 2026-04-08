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
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left column — info + trust signals */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Book Ina som foredragsholder
            </h2>
            <p className="text-brand-muted leading-relaxed text-base">
              Planlegger du konferanse, fagdag eller kick-off? Ta kontakt, så finner vi et format som passer.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-lavender flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1C4.69 1 2 3.69 2 7C2 11.5 8 15 8 15C8 15 14 11.5 14 7C14 3.69 11.31 1 8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-brand-indigo" />
                    <circle cx="8" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" className="text-brand-indigo" />
                  </svg>
                </div>
                <span className="text-foreground text-base">Oslo, Norge (tilgjengelig nasjonalt)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-lavender flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" className="text-brand-indigo" />
                    <path d="M2 8H14M8 2C6 4 5.5 6 5.5 8C5.5 10 6 12 8 14M8 2C10 4 10.5 6 10.5 8C10.5 10 10 12 8 14" stroke="currentColor" strokeWidth="1.2" className="text-brand-indigo" />
                  </svg>
                </div>
                <span className="text-foreground text-base">Norsk og engelsk</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-lavender flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2C4.69 2 2 4.69 2 8C2 11.31 4.69 14 8 14Z" stroke="currentColor" strokeWidth="1.5" className="text-brand-indigo" />
                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-brand-indigo" />
                  </svg>
                </div>
                <span className="text-foreground text-base">Svar innen 24 timer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-lavender flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 3C3 2.5 3.5 2 4 2H5.5L6.5 5L5.5 6C6 7.5 7.5 9 9 9.5L10 8.5L13 9.5V11C13 11.5 12.5 12 12 12C7 12 3 8 3 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" className="text-brand-indigo" />
                  </svg>
                </div>
                <a href="tel:+4797424957" className="text-foreground text-base hover:text-brand-indigo transition-colors">
                  Foretrekker du å ringe? <span className="font-medium">+47 974 24 957</span>
                </a>
              </div>
            </div>

            {/* LinkedIn button */}
            <Link
              href={BRAND.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-border text-brand-indigo font-medium text-sm hover:bg-brand-lavender transition-colors self-start mt-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Finn meg på LinkedIn
            </Link>

            {/* Pricing */}
            <div className="bg-brand-lavender rounded-xl px-6 py-4 mt-2">
              <p className="font-semibold text-foreground text-base">Foredrag fra 35 000 kr + mva</p>
              <p className="text-brand-muted text-base mt-1">
                Veiledende pris for 45 min foredrag inkl. for- og ettermøte. Reise kommer i tillegg. Workshop prises etter behov.
              </p>
              <p className="text-brand-muted text-base mt-1">
                Alt tilpasses — ta kontakt for et uforpliktende tilbud.
              </p>
            </div>

            {/* What happens next */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">Hva skjer videre?</p>
              <ol className="flex flex-col gap-1.5">
                {[
                  'Du sender skjema',
                  'Jeg svarer innen 24 timer. Vi setter opp en 15 min samtale.',
                  'Vi tilpasser innhold og format',
                ].map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-muted text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-indigo/10 text-brand-indigo text-xs flex items-center justify-center font-semibold flex-shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

          </div>

          {/* Right column — form */}
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
                  {status === 'sending' ? 'Sender...' : status === 'error' ? 'Prøv igjen \u2192' : 'Send henvendelse \u2192'}
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
