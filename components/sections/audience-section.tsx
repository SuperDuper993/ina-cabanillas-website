'use client';

import { motion } from 'framer-motion';
import Link from "next/link";

const audiences = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21V19C23 17.59 22.06 16.38 20.75 16.04" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.75 3.04C18.06 3.38 19 4.59 19 6C19 7.41 18.06 8.62 16.75 8.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Virksomheter som ansetter og leder unge",
    description: "Få konkrete verktøy for å tiltrekke, forstå og beholde Gen Z. Reduser turnover og bygg en arbeidsplass unge faktisk vil bli på.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 8H17M7 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "HR-ledere og mellomledere",
    description: "Forstå hva Gen Z faktisk trenger fra sine ledere. Få innsikt i motivasjon, forventninger og hvordan du bygger tilhørighet på tvers av generasjoner.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Konferanser og fagdager",
    description: "Et foredrag som engasjerer, utfordrer og inspirerer. Humor, forskning og ærlighet, levert av en Gen Z-er som snakker fra innsiden.",
  },
];

export function AudienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground">
              Hvem passer foredraget for?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="bg-brand-lavender rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light-lav text-brand-indigo flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <Link
              href="/foredrag#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
            >
              Book foredrag
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
