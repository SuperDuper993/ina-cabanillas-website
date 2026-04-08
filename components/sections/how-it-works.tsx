'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Vi snakkes",
    description: "En kort samtale om behovet ditt — arrangement, publikum, og hva du ønsker at folk skal ta med seg hjem.",
  },
  {
    number: "2",
    title: "Skreddersydd",
    description: "Foredraget tilpasses tema, format og din organisasjons utfordringer. Ingen hyllevare.",
  },
  {
    number: "3",
    title: "Foredrag",
    description: "Et engasjerende og praktisk foredrag som gir salen noe å tenke på — og noe de kan gjøre med én gang.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-14 text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Slik fungerer det
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center gap-4">
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px border-t border-dashed border-brand-border" aria-hidden="true" />
                )}

                <div className="w-12 h-12 rounded-full bg-brand-indigo text-white font-serif text-xl flex items-center justify-center relative z-10">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
