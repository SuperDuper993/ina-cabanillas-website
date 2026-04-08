'use client';

import { motion } from 'framer-motion';

const scenarios = [
  {
    emoji: '😮‍💨',
    text: 'Du har gjort alt etter boka, og likevel slutter de yngste etter kort tid. Hva gjør du feil?',
  },
  {
    emoji: '🙄',
    text: 'Du er lei av at debatten handler om hvilken generasjon som tar feil. Du vil heller forstå hvordan du bygger en arbeidsplass der folk faktisk vil bli.',
  },
  {
    emoji: '🤯',
    text: 'AI endrer alt, og du vet at du må gjøre noe. Men du vet ikke hva. Og ingen snakker om menneskene bak teknologien.',
  },
];

export function EmpatiSection() {
  return (
    <section className="py-20 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">
            Kjenner du deg igjen?
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug mb-10 max-w-xl">
            Du er ikke alene om å lure på dette.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                className={`bg-white rounded-2xl p-6 border border-brand-border shadow-sm${i > 0 ? ' hidden md:flex md:flex-col' : ''}`}
              >
                <span className="text-2xl mb-4 block">{s.emoji}</span>
                <p className="text-brand-dark text-base leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-brand-muted text-base leading-relaxed max-w-2xl">
            Det er akkurat disse spørsmålene jeg jobber med. Gjennom forskning, foredrag og erfaring fra 20+ scener hjelper jeg ledere å finne svarene, og faktisk bruke dem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
