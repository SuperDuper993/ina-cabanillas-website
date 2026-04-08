'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/constants";

export function BookSection() {
  return (
    <section className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl text-foreground leading-snug mb-12">
            Boken ledere snakker om
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Book cover — prominent */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[300px] md:max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={IMAGES.bookPortrait}
                  alt="Hvordan forstå og lede Gen Z — bok av Ina Cabanillas Hansen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sales copy */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl text-foreground leading-snug font-serif">
                Hvordan forstå og lede Gen Z
              </h3>
              <p className="text-brand-muted leading-relaxed text-lg">
                Unge slutter ikke fordi jobben er kjedelig. De slutter fordi de ikke hører til. Denne boken gir deg verktøyene til å gjøre noe med det.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 text-foreground text-base">
                <li className="flex items-start gap-3">
                  <span className="text-brand-indigo font-bold mt-0.5">✓</span>
                  <span>Forstå hva Gen Z faktisk trenger fra en leder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-indigo font-bold mt-0.5">✓</span>
                  <span>Praktiske verktøy du kan bruke fra dag én</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-indigo font-bold mt-0.5">✓</span>
                  <span>Innsikt fra innsiden — skrevet av en som er Gen Z selv</span>
                </li>
              </ul>

              <p className="text-base text-brand-muted/70">
                349 kr · Fysisk bok · Utgitt 2025
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mt-2">
                <Link
                  href={BRAND.vippsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#FF5B24' }}
                >
                  Kjøp med Vipps
                </Link>
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-border text-foreground font-medium text-sm hover:bg-brand-lavender transition-all"
                >
                  Bestille til ansatte? Ta kontakt →
                </Link>
                <p className="text-brand-muted/60 text-xs text-center">
                  Vi tilbyr rabatt ved kjøp av 10+ eksemplarer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
