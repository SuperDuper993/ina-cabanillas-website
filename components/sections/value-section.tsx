'use client';
import { motion } from 'framer-motion';
import Link from "next/link";

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.09 7.26L17.66 7.64L13.59 11.22L14.9 16.64L10 13.4L5.1 16.64L6.41 11.22L2.34 7.64L7.91 7.26L10 2Z" fill="currentColor" />
      </svg>
    ),
    text: "Konkrete verktøy dine ledere kan bruke med én gang",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Innsikt i hva Gen Z faktisk trenger for å bli værende",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3C7.24 3 5 5.24 5 8C5 10.08 6.21 11.88 8 12.73V14H12V12.73C13.79 11.88 15 10.08 15 8C15 5.24 12.76 3 10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 16H12M9 18H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "En foredragsholder som snakker fra innsiden av generasjonen",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      </svg>
    ),
    text: "Engasjement som får salen til å nikke, le og reflektere",
  },
];

export function ValueSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <div>
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug mb-5">
              Ikke bare inspirasjon — verktøy
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Et foredrag med Ina gir lederne dine noe de kan bruke med én gang. Forskning, ærlighet og konkrete grep for å skape tilhørighet — pakket inn i en time som faktisk sitter.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {values.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light-lav text-brand-indigo flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-foreground leading-relaxed pt-1.5">{item.text}</p>
              </div>
            ))}

            <div className="mt-4">
              <Link
                href="/foredrag#kontakt"
                className="inline-flex items-center gap-2 text-brand-indigo font-semibold text-sm hover:gap-3 transition-all"
              >
                Book en samtale
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
