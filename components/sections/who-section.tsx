'use client';
import { motion } from 'framer-motion';

const forYou = [
  "Leder team med unge ansatte",
  "Planlegger konferanse om fremtidens arbeidsliv",
  "Vil forstå hvorfor unge slutter",
  "Ønsker konkrete verktøy, ikke bare inspirasjon",
];

const notForYou = [
  "Vil ha et generisk motivasjonsforedrag",
  "Ikke er villig til å utfordre egne antakelser",
  "Ser på Gen Z som et problem, ikke en mulighet",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill="#2B1FA0" fillOpacity="0.12" />
      <path d="M5 8L7 10L11 6" stroke="#2B1FA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill="#64608E" fillOpacity="0.1" />
      <path d="M10 6L6 10M6 6L10 10" stroke="#64608E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WhoSection() {
  return (
    <section className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
              Hvem er dette for?
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Er dette for deg?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* For you */}
            <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
              <div>
                <span className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-light-lav text-brand-indigo mb-3">
                  Dette passer for deg som
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div className="bg-white/60 rounded-2xl p-8 flex flex-col gap-5 border border-brand-border">
              <div>
                <span className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-brand-border text-brand-muted mb-3">
                  Dette er IKKE for deg som
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CrossIcon />
                    <span className="text-brand-muted text-sm leading-relaxed">{item}</span>
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
