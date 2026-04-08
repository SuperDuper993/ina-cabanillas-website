'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: "01",
    title: "Send en forespørsel",
    description: "Fyll ut skjema nedenfor. Fortell om anledning, publikum og ønsket dato. Det tar 2 minutter.",
  },
  {
    number: "02",
    title: "Vi snakkes innen 24 timer",
    description: "Jeg svarer raskt, stiller noen spørsmål og tilpasser temaet til akkurat din gruppe og ditt behov.",
  },
  {
    number: "03",
    title: "Foredrag levert",
    description: "Tilpasset innhold, klart til å sette i gang en samtale i organisasjonen din. Praktisk og direkte.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="slik-fungerer-det" className="py-20 bg-white border-y border-brand-border">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">
            Slik fungerer det
          </p>
          <h2 className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug mb-12 max-w-lg">
            Fra forespørsel til foredrag. Enkelt og raskt.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-serif text-3xl text-brand-indigo">{step.number}</span>
                  <div className="flex-1 h-px bg-brand-border" />
                </div>
                <h3 className="font-serif text-xl text-brand-dark">{step.title}</h3>
                <p className="text-brand-muted text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/#kontakt"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
            >
              Send forespørsel →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
