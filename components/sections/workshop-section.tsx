'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="bg-brand-lavender rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-800 self-start">
                    {w.tag}
                  </span>
                  <span className="text-xs text-brand-muted">{w.duration}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground leading-snug">
                  {w.title}
                </h3>
                <p className="text-brand-muted text-base leading-relaxed">
                  {w.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
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
