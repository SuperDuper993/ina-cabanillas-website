'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(mixedTestimonials.length / ITEMS_PER_PAGE);

function TestimonialCard({ item }: { item: typeof mixedTestimonials[0] }) {
  if (item.type === 'talerlisten') {
    const t = item.data as typeof TESTIMONIALS_TALERLISTEN[0];
    return (
      <div className="border border-brand-border rounded-2xl p-6 flex flex-col gap-4 bg-white h-full">
        <StarRow count={t.stars} />
        <p className="text-foreground text-base leading-relaxed flex-1">
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
    );
  }

  const r = item.data as typeof RECOMMENDATIONS_LINKEDIN[0];
  return (
    <div className="bg-brand-lavender rounded-2xl p-6 flex flex-col gap-4 h-full">
      <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted">LinkedIn</p>
      <p className="text-foreground text-base leading-relaxed flex-1">
        &ldquo;{renderQuoteWithHighlight(r.quote, r.highlight)}&rdquo;
      </p>
      <div className="mt-auto">
        <p className="font-semibold text-base text-foreground">{r.author}</p>
        <p className="text-brand-muted text-sm">{r.role}</p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  function goTo(next: number) {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  }

  const visible = mixedTestimonials.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section id="testimonials" className="py-24 bg-white">
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
              <div key={i} className="snap-start flex-shrink-0 w-[85vw]">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* Desktop: 3-om-gangen karusell */}
          <div className="hidden md:block px-6">
            <div className="relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-5 items-stretch"
                >
                  {visible.map((item, i) => (
                    <TestimonialCard key={i} item={item} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigasjon */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === page ? 'bg-brand-indigo w-5' : 'bg-brand-border hover:bg-brand-indigo/40'}`}
                    aria-label={`Side ${i + 1}`}
                  />
                ))}
              </div>

              {/* Piler */}
              <div className="flex gap-2">
                <button
                  onClick={() => goTo(page - 1)}
                  disabled={page === 0}
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-indigo hover:border-brand-indigo transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Forrige"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L6 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => goTo(page + 1)}
                  disabled={page === TOTAL_PAGES - 1}
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-indigo hover:border-brand-indigo transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Neste"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L10 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
