'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import { TALKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TalksSection() {
  return (
    <section id="foredrag" className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
              Foredrag
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground mb-3">
              Foredragstemaer
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Hvert foredrag varer ca. 45 minutter og tilpasses din bransje, ditt publikum og dine utfordringer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TALKS.map((talk) => (
              <div
                key={talk.title}
                className="bg-white rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <span
                  className={cn(
                    "text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full self-start",
                    talk.tagVariant === "primary"
                      ? "bg-brand-indigo text-white"
                      : "bg-brand-light-lav text-brand-indigo"
                  )}
                >
                  {talk.tag}
                </span>
                <h3 className="font-serif text-xl text-foreground leading-snug">
                  {talk.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {talk.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <Link
              href="/#kontakt"
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
