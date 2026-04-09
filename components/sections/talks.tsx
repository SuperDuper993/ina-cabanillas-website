'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";
import { TALKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TalksSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="foredrag" className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">
              Foredragstemaer
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Hvert foredrag varer ca. 45 minutter og tilpasses din bransje, ditt publikum og dine utfordringer. Passer for alt fra 10 til 2000 deltakere.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {TALKS.map((talk, i) => (
              <div key={talk.title} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-lavender/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full flex-shrink-0",
                        talk.tagVariant === "primary"
                          ? "bg-brand-indigo text-white"
                          : "bg-brand-light-lav text-brand-indigo"
                      )}
                    >
                      {talk.tag}
                    </span>
                    <h3 className="font-serif text-lg text-foreground leading-snug">
                      {talk.title}
                    </h3>
                  </div>
                  <svg
                    className={cn("flex-shrink-0 text-brand-muted transition-transform duration-300", openIndex === i ? "rotate-180" : "")}
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
                        {talk.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/foredrag#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
            >
              Ta kontakt om foredrag
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
