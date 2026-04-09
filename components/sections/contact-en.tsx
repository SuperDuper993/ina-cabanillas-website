'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from "@/components/ui/neon-button";

const occasions = [
  "",
  "Conference / Annual gathering",
  "Leadership meeting / Professional day",
  "Kick-off / Team building",
  "HR event",
  "Other",
];

export function ContactSectionEN() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [newsletter, setNewsletter] = useState(false);

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
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
        >
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/50">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-snug">
              Book Ina
            </h2>
            <p className="text-white/60 leading-relaxed">
              Planning a conference, leadership day, or HR event? Get in touch to discuss how Ina can bring Nordic insight on Gen Z to your audience.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3">
                <span className="text-sm">📍</span>
                <span className="text-white/50 text-sm">Oslo, Norway — available internationally</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm">🌐</span>
                <span className="text-white/50 text-sm">English & Norwegian</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ina-cabanillas/"
                target="_blank"
                rel="noopener"
                className="text-white/40 text-sm hover:text-white/70 transition-colors mt-2"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <span className="text-4xl">✓</span>
                <h3 className="text-xl text-white font-serif">Thank you for your enquiry!</h3>
                <p className="text-white/50 text-sm">I&apos;ll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('idle')} className="text-white/70 text-sm mt-4 hover:underline hover:text-white">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="en-name">Name *</label>
                    <input
                      id="en-name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="en-email">Email *</label>
                    <input
                      id="en-email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="en-org">Organisation</label>
                  <input
                    id="en-org"
                    name="organisation"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="en-occasion">Event type</label>
                  <select
                    id="en-occasion"
                    name="occasion"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors appearance-none"
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o} className="bg-brand-dark">{o || 'Select event type...'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5" htmlFor="en-message">Message</label>
                  <textarea
                    id="en-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about your event..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-brand-indigo/50 transition-colors resize-none"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-0.5 rounded border-white/20 bg-white/5 text-brand-indigo focus:ring-brand-indigo/20"
                  />
                  <span className="text-white/50 text-sm leading-relaxed">
                    Keep me updated on new keynotes and articles
                  </span>
                </label>
                <NeonButton variant="solid" size="lg" type="submit" className="w-full mt-2" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : status === 'error' ? 'Try again' : 'Send enquiry'}
                </NeonButton>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
