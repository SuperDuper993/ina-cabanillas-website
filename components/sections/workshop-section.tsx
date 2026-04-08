'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const workshops = [
  {
    tag: "Halvdag",
    duration: "3–4 timer",
    title: "Workshop: Tilhørighet i praksis",
    description:
      "Intro til Gen Z og tilhørighet, etterfulgt av refleksjon og praktiske verktøy i grupper. Passer som oppstart av fagdag eller kick-off. Deltakerne går hjem med konkrete grep de kan bruke mandag morgen.",
  },
  {
    tag: "Heldag",
    duration: "6–7 timer",
    title: "Workshop: Bygg en kultur som beholder",
    description:
      "Dypdykk i organisasjonskultur, generasjonsdynamikk og psykologisk trygghet. Inkluderer casearbeid og en felles handlingsplan for teamet. Tilpasses din bransje og dine konkrete utfordringer.",
  },
];

export function WorkshopSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="workshop" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
              Workshop
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">
              Mer enn et foredrag
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Trenger dere mer tid og dybde? Workshopene kombinerer innsikt med praktisk arbeid i grupper. Halvdag eller heldag, alltid skreddersydd.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {workshops.map((w, i) => (
              <div key={w.title} className="bg-brand-lavender rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-lavender/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                        {w.tag}
                      </span>
                      <span className="text-xs text-brand-muted">{w.duration}</span>
                    </div>
                    <h3 className="font-serif text-lg text-foreground leading-snug">
                      {w.title}
                    </h3>
                  </div>
                  <svg
                    className={`flex-shrink-0 text-brand-muted transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-brand-muted text-base leading-relaxed">
                        {w.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
            >
              Ta kontakt om workshop
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
