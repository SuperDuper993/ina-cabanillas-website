'use client';
import { motion } from 'framer-motion';
import { TESTIMONIALS_TALERLISTEN, RECOMMENDATIONS_LINKEDIN } from "@/lib/constants";

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

function renderQuoteWithHighlight(quote: string, highlight: string) {
  if (!highlight || !quote.includes(highlight)) {
    return <span>{quote}</span>;
  }
  const parts = quote.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="text-brand-indigo font-medium">{highlight}</span>
      {parts[1]}
    </>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
              Hva kundene sier
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              7 av 7 gir toppkarakter
            </h2>
            <blockquote className="border-l-4 border-brand-indigo pl-5 max-w-2xl">
              <p className="text-brand-muted italic leading-relaxed">
                Alle anmeldelser på Talerlisten er verifiserte av arrangøren etter foredraget. Ina har mottatt toppkarakter på samtlige bookinger.
              </p>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {TESTIMONIALS_TALERLISTEN.map((t) => (
              <div
                key={`${t.author}-${t.date}`}
                className="border border-brand-border rounded-2xl p-6 flex flex-col gap-4 bg-white"
              >
                <StarRow count={t.stars} />
                <p className="text-foreground text-sm leading-relaxed">
                  &ldquo;{renderQuoteWithHighlight(t.quote, t.highlight)}&rdquo;
                </p>
                <div className="mt-auto pt-2 border-t border-brand-border flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.author}</p>
                    <p className="text-brand-muted text-xs">{t.org}</p>
                  </div>
                  <p className="text-brand-muted text-xs">{t.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-5">
              LinkedIn-anbefalinger
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {RECOMMENDATIONS_LINKEDIN.map((rec) => (
                <div
                  key={rec.author}
                  className="bg-brand-lavender rounded-2xl p-5 flex flex-col gap-3"
                >
                  <p className="text-foreground text-sm leading-relaxed">
                    &ldquo;{renderQuoteWithHighlight(rec.quote, rec.highlight)}&rdquo;
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-sm text-foreground">{rec.author}</p>
                    <p className="text-brand-muted text-xs">{rec.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
