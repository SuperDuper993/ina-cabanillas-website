'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ShimmerButton from "@/components/ui/shimmer-button";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-brand-lavender/50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-foreground">{q}</span>
        <span className="text-brand-indigo text-lg ml-4 flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-brand-muted text-base leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqs = [
  {
    q: 'What does a keynote cost?',
    a: 'Keynotes from NOK 35,000 + VAT. Indicative price for 45 minutes including pre- and post-meeting. Travel is billed separately. Get in touch for a no-obligation quote.',
  },
  {
    q: 'Does Ina speak in English?',
    a: 'Yes — Ina delivers keynotes in both Norwegian and English and is available for events across the Nordics and internationally.',
  },
  {
    q: 'How quickly will I get a response?',
    a: 'Usually within 24 hours on weekdays. You can also call directly on +47 974 24 957.',
  },
  {
    q: 'Can I order the book for my team?',
    a: 'Yes — we offer discounts for orders of 10+ copies. The book is currently available in Norwegian. Select "Book order" in the form below.',
  },
];

const occasions = [
  "",
  "Keynote / conference",
  "Workshop",
  "Leadership meeting / professional day",
  "Kick-off / team building",
  "Media enquiry",
  "Book order",
  "Other",
];

export default function ContactPageEN() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [newsletter, setNewsletter] = useState(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organisation') as HTMLInputElement).value,
      occasion: (form.elements.namedItem('occasion') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
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
    <>
      <Navbar lang="en" />
      <main className="pt-28 pb-24 bg-white min-h-screen">
        <div className="max-w-[680px] mx-auto px-6">
          <p className="text-base font-semibold tracking-widest uppercase text-brand-indigo mb-4">Contact</p>
          <h1 className="text-3xl md:text-4xl text-foreground font-bold leading-snug mb-3">
            Get in touch
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-10">
            Whether you want to book a keynote, have a media enquiry, explore a partnership, or simply have a question — fill in the form or call me directly on{' '}
            <a href="tel:+4797424957" className="text-brand-indigo font-medium hover:underline">+47 974 24 957</a>.
          </p>

          {/* FAQ */}
          <div className="mb-12 space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-4 text-center bg-brand-lavender rounded-2xl p-12">
              <div className="w-14 h-14 rounded-full bg-brand-indigo/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-indigo" />
                </svg>
              </div>
              <h2 className="text-xl text-foreground font-semibold">Thank you for your message!</h2>
              <p className="text-brand-muted text-base">I&apos;ll get back to you as soon as possible, usually within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="text-brand-indigo text-base mt-2 hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-foreground text-base font-medium mb-2" htmlFor="en-c-name">
                    Name <span className="text-brand-indigo">*</span>
                  </label>
                  <input
                    id="en-c-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground text-base font-medium mb-2" htmlFor="en-c-email">
                    Email <span className="text-brand-indigo">*</span>
                  </label>
                  <input
                    id="en-c-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground text-base font-medium mb-2" htmlFor="en-c-org">
                  Organisation <span className="text-brand-muted font-normal">(optional)</span>
                </label>
                <input
                  id="en-c-org"
                  name="organisation"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base placeholder-brand-muted/40 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all"
                  placeholder="Company or organisation"
                />
              </div>

              <div>
                <label className="block text-foreground text-base font-medium mb-2" htmlFor="en-c-occasion">
                  What is this about? <span className="text-brand-muted font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="en-c-occasion"
                    name="occasion"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-foreground text-base focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo/20 transition-all appearance-none pr-10"
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o}>{o || 'Select...'}</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-foreground text-base font-medium mb-2" htmlFor="en-c-message">
                  Message
                </label>
                <textarea
                  id="en-c-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a bit about what you have in mind..."
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
                  Keep me updated on new keynotes and articles
                </span>
              </label>

              <ShimmerButton
                type="submit"
                disabled={status === 'sending'}
                className="w-full mt-1 h-auto py-4 text-base disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending...' : status === 'error' ? 'Try again →' : 'Send message →'}
              </ShimmerButton>

              {status === 'error' && (
                <p className="text-red-600 text-base text-center">Something went wrong. Please try again.</p>
              )}

              <p className="text-brand-muted/60 text-base text-center">
                Or call me directly:{" "}
                <a href="tel:+4797424957" className="text-brand-indigo hover:underline font-medium">
                  +47 974 24 957
                </a>
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
