'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: "Hvem er Ina Cabanillas?",
    answer:
      "Ina Cabanillas Hansen er en Gen Z-foredragsholder, forfatter og gründer fra Bodø, Norge. Hun hjelper ledere og organisasjoner med å forstå, tiltrekke og beholde unge talenter. Hun er grunnlegger av StudyBuddies og forfatter av boken «Hvordan forstå og lede Gen Z» (2025). Hun har vunnet prisen Årets unge inspirasjon (2025) og er kåret til LinkedIn Topp 200 Voices innen inkludering og mangfold.",
  },
  {
    question: "Hva snakker Ina Cabanillas om?",
    answer:
      "Ina holder foredrag om Gen Z og ledelse, rekruttering og medarbeiderretensjon, tilhørighet i en teknologidrevet verden — og skreddersydde temaer tilpasset organisasjonens utfordringer. Hennes mest bookede foredrag er «Gen Z og ledelse: Hva unge faktisk trenger for å bli», der hun gir konkrete verktøy til ledere basert på forskning og egne erfaringer.",
  },
  {
    question: "Hvordan booker man Ina som foredragsholder?",
    answer:
      "Fyll ut kontaktskjemaet lenger opp på denne siden, eller ta kontakt via LinkedIn. Ina holder foredrag på konferanser, fagdager, kick-offer, ledermøter og HR-arrangementer — på norsk og engelsk.",
  },
  {
    question: "Hva er StudyBuddies?",
    answer:
      "StudyBuddies er en startup grunnlagt av Ina som kobler sammen studenter for å motvirke ensomhet og frafall i høyere utdanning. Plattformen hjelper studenter med å finne medstudenter å samarbeide med, noe som forbedrer både faglige resultater og psykisk helse.",
  },
  {
    question: "Hvilke priser har Ina Cabanillas vunnet?",
    answer:
      "Årets unge inspirasjon (2025) — nasjonal pris for inkludering, fellesskap og studenters psykiske helse. LinkedIn Topp 200 Voices (2025) — globalt anerkjent innen inkludering og mangfold. Nominert til Årets kvinnelige gründer i Vestland (2024).",
  },
  {
    question: "Where can I book Ina Cabanillas as a speaker?",
    answer:
      "Ina Cabanillas Hansen is available for speaking engagements worldwide and speaks in both Norwegian and English on Gen Z leadership, workplace belonging, recruitment, and AI in the workplace. Use the contact form on this page or connect on LinkedIn at linkedin.com/in/ina-cabanillas. She has spoken at Arendalsuka, SHE Conference, Katapult Future Fest, WOW-konferansen, and many corporate events.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="text-white/90 text-sm md:text-base font-medium group-hover:text-white transition-colors">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-brand-indigo group-hover:text-brand-indigo transition-colors"
          aria-hidden="true"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          >
            <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-white/55 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
              Ofte stilte spørsmål
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-snug">
              Spørsmål og svar
            </h2>
          </div>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
