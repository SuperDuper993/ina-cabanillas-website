'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const highlights = [
  { value: "6/6", label: "Talerlisten" },
  { value: "BI + UC Berkeley", label: "HR og ledelse" },
  { value: "Topp 200", label: "LinkedIn Voices" },
  { value: "StudyBuddies", label: "Gründer" },
];

export function AboutTeaser() {
  return (
    <section className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="order-2 md:order-1">
            <Image
              src="/images/ina-om-meg.jpg"
              alt="Ina Cabanillas Hansen"
              width={520}
              height={650}
              className="w-full rounded-2xl object-cover"
            />
          </div>

          <div className="order-1 md:order-2 flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
              Om Ina
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Gen Z som forsker på sin egen generasjon
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                Ina Cabanillas Hansen er en av Norges mest etterspurte stemmer på Gen Z, ledelse og tilhørighet i arbeidslivet. Hun er foredragsholder, forfatter og gründer av StudyBuddies — en plattform som hjelper studenter med å finne fellesskap og faglig støtte.
              </p>
              <p>
                Med bakgrunn fra BI og UC Berkeley kombinerer hun forskning, egne erfaringer og et skarpt blikk på generasjonskløften til å gi ledere konkrete verktøy. Hennes foredrag er kjent for å kombinere humor, ærlighet og innsikt som faktisk sitter.
              </p>
              <p>
                Hun er kåret til Årets unge inspirasjon 2025, er en av LinkedIns globale Topp 200 Voices innen inkludering og mangfold, og har holdt foredrag for alt fra statlige etater til private konferanser.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white rounded-xl px-5 py-4"
                >
                  <p className="font-semibold text-brand-indigo text-base">
                    {h.value}
                  </p>
                  <p className="text-brand-muted text-sm mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/om"
              className="inline-flex items-center gap-2 text-brand-indigo font-semibold text-sm hover:gap-3 transition-all mt-2"
            >
              Les mer om Ina
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
