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

// Bland Talerlisten og LinkedIn om hverandre for karusellen
const allTestimonials = [
  ...TESTIMONIALS_TALERLISTEN.map(t => ({ type: 'talerlisten' as const, data: t })),
  ...RECOMMENDATIONS_LINKEDIN.map(r => ({ type: 'linkedin' as const, data: r })),
].sort((a, b) => {
  // Annen-annenhver: start med Talerlisten, veksle
  const ai = TESTIMONIALS_TALERLISTEN.findIndex(t => t === (a.data as any)) * 2;
  const bi = RECOMMENDATIONS_LINKEDIN.findIndex(r => r === (b.data as any)) * 2 + 1;
  return a.type === 'talerlisten'
    ? TESTIMONIALS_TALERLISTEN.indexOf(a.data as any) * 2
    : RECOMMENDATIONS_LINKEDIN.indexOf(b.data as any) * 2 + 1;
});

// Enklere: bare sleng dem etter hverandre
const mixedTestimonials = [
  { type: 'talerlisten' as const, data: TESTIMONIALS_TALERLISTEN[0] },
  { type: 'linkedin' as const, data: RECOMMENDATIONS_LINKEDIN[0] },
  { type: 'talerlisten' as const, data: TESTIMONIALS_TALERLISTEN[1] },
  { type: 'linkedin' as const, data: RECOMMENDATIONS_LINKEDIN[1] },
  { type: 'talerlisten' as const, data: TESTIMONIALS_TALERLISTEN[2] },
  { type: 'linkedin' as const, data: RECOMMENDATIONS_LINKEDIN[2] },
  ...TESTIMONIALS_TALERLISTEN.slice(3).map(t => ({ type: 'talerlisten' as const, data: t })),
  ...RECOMMENDATIONS_LINKEDIN.slice(3).map(r => ({ type: 'linkedin' as const, data: r })),
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-10 px-6">
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              7 av 7 gir toppkarakter
            </h2>
            <blockquote className="border-l-4 border-brand-indigo pl-5 max-w-2xl">
              <p className="text-brand-muted italic leading-relaxed">
                Alle anmeldelser på Talerlisten er verifiserte av arrangøren etter foredraget. Ina har mottatt toppkarakter på samtlige bookinger.
              </p>
            </blockquote>
          </div>

          {/* Mobil: swipeable karusell */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-6 pb-4 no-scrollbar">
            {mixedTestimonials.map((item, i) => (
              item.type === 'talerlisten' ? (
                <div
                  key={`t-${i}`}
                  className="snap-start flex-shrink-0 w-[85vw] border border-brand-border rounded-2xl p-6 flex flex-col gap-4 bg-white"
                >
                  <StarRow count={(item.data as typeof TESTIMONIALS_TALERLISTEN[0]).stars} />
                  <p className="text-foreground text-base leading-relaxed flex-1">
                    &ldquo;{renderQuoteWithHighlight(
                      (item.data as typeof TESTIMONIALS_TALERLISTEN[0]).quote,
                      (item.data as typeof TESTIMONIALS_TALERLISTEN[0]).highlight
                    )}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-brand-border flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-base text-foreground">{(item.data as typeof TESTIMONIALS_TALERLISTEN[0]).author}</p>
                      <p className="text-brand-muted text-sm">{(item.data as typeof TESTIMONIALS_TALERLISTEN[0]).org}</p>
                    </div>
                    <p className="text-brand-muted text-sm">{(item.data as typeof TESTIMONIALS_TALERLISTEN[0]).date}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={`l-${i}`}
                  className="snap-start flex-shrink-0 w-[85vw] bg-brand-lavender rounded-2xl p-6 flex flex-col gap-4"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted">LinkedIn</p>
                  <p className="text-foreground text-base leading-relaxed flex-1">
                    &ldquo;{renderQuoteWithHighlight(
                      (item.data as typeof RECOMMENDATIONS_LINKEDIN[0]).quote,
                      (item.data as typeof RECOMMENDATIONS_LINKEDIN[0]).highlight
                    )}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-base text-foreground">{(item.data as typeof RECOMMENDATIONS_LINKEDIN[0]).author}</p>
                    <p className="text-brand-muted text-sm">{(item.data as typeof RECOMMENDATIONS_LINKEDIN[0]).role}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Desktop: original grid */}
          <div className="hidden md:block px-6">
            <div className="grid grid-cols-2 gap-5 mb-16">
              {TESTIMONIALS_TALERLISTEN.map((t) => (
                <div
                  key={`${t.author}-${t.date}`}
                  className="border border-brand-border rounded-2xl p-6 flex flex-col gap-4 bg-white"
                >
                  <StarRow count={t.stars} />
                  <p className="text-foreground text-base leading-relaxed">
                    &ldquo;{renderQuoteWithHighlight(t.quote, t.highlight)}&rdquo;
                  </p>
                  <div className="mt-auto pt-2 border-t border-brand-border flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-base text-foreground">{t.author}</p>
                      <p className="text-brand-muted text-sm">{t.org}</p>
                    </div>
                    <p className="text-brand-muted text-sm">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-5">
                LinkedIn-anbefalinger
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {RECOMMENDATIONS_LINKEDIN.map((rec) => (
                  <div
                    key={rec.author}
                    className="bg-brand-lavender rounded-2xl p-5 flex flex-col gap-3"
                  >
                    <p className="text-foreground text-base leading-relaxed">
                      &ldquo;{renderQuoteWithHighlight(rec.quote, rec.highlight)}&rdquo;
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-base text-foreground">{rec.author}</p>
                      <p className="text-brand-muted text-sm">{rec.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
