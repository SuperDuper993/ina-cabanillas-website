'use client';
import { motion } from 'framer-motion';

const before = [
  "Frustrasjon over unge ansatte",
  "Høy turnover i teamet",
  "Kommunikasjonsgap mellom generasjoner",
  "Usikkerhet rundt ledelse av Gen Z",
];

const after = [
  "Forståelse for hva som driver unge",
  "Lavere turnover og sterkere kultur",
  "Bedre dialog på tvers av generasjoner",
  "Trygghet i ledelse av en ny generasjon",
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">
              Resultater
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-snug">
              Hva endrer seg
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Before */}
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 2V7M7 10V12" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-white/60 font-semibold text-sm uppercase tracking-wide">Før</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/25 mt-2" />
                    <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-brand-indigo/30 p-8 bg-brand-indigo/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-indigo/30 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Etter</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-indigo mt-2" />
                    <span className="text-white text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
