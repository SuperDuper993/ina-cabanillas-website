'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    question: "Hvem er Ina Cabanillas?",
    answer:
      "Ina er Gen Z-er, foredragsholder, forfatter og gründer av StudyBuddies. Hun hjelper ledere med å skape tilhørighet for unge ansatte — med innsikt fra innsiden av generasjonen. Vinner av HER Awards 2024 og en av LinkedIns Topp 200 Voices globalt.",
  },
  {
    question: "Hva snakker Ina om?",
    answer:
      "Ina snakker om tilhørighet — hvorfor unge slutter, hva de faktisk trenger fra ledere, og konkrete grep du kan ta for å beholde dem. Foredraget tilpasses din bransje og ditt publikum.",
  },
  {
    question: "Hvem passer foredraget for?",
    answer:
      "HR-ledere, mellomledere, konferanser og fagdager. Særlig virksomheter som ansetter unge eller ønsker å beholde dem.",
  },
  {
    question: "Hva koster et foredrag?",
    answer:
      "Pris fra 35 000 kr + mva. Tilpasses format, varighet og publikum. Ta kontakt for et uforpliktende tilbud.",
  },
  {
    question: "Hvordan booker man Ina?",
    answer:
      "Fyll ut kontaktskjemaet på denne siden, så svarer Ina innen 24 timer.",
  },
  {
    question: "Hva er StudyBuddies?",
    answer:
      "StudyBuddies er en AI-drevet EdTech-plattform for universiteter og høyskoler som hjelper studenter med å samarbeide bedre og gjennomføre studiene. Lær mer på studybuddies.no",
  },
  {
    question: "Where can I book Ina as a speaker?",
    answer:
      "You can reach out via the contact form on this page. Ina speaks in both Norwegian and English and usually responds within 24 hours.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-brand-border last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-foreground text-base font-medium group-hover:text-brand-indigo transition-colors">
          {question}
        </span>
        <span
          className="flex-shrink-0 text-brand-muted group-hover:text-brand-indigo transition-all"
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-10">
              <p className="text-brand-muted text-base leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Spørsmål og svar
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
