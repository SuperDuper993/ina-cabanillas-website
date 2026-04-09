'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const choices = [
  {
    emoji: "🎤",
    title: "Book foredrag",
    description: "For HR-sjefer og event-arrangører som vil gi teamet noe som faktisk sitter.",
    cta: "Se temaer og pris →",
    href: "/foredrag#kontakt",
    bg: "bg-brand-indigo",
    textColor: "text-white",
    descColor: "text-white/70",
    ctaColor: "text-white/90 hover:text-white",
  },
  {
    emoji: "📚",
    title: "Kjøp boken",
    description: "For ledere som vil forstå Gen Z — og hva tilhørighet faktisk krever av dem.",
    cta: "Se boken →",
    href: "/kjop-bok",
    bg: "bg-white",
    textColor: "text-foreground",
    descColor: "text-brand-muted",
    ctaColor: "text-brand-indigo hover:text-brand-indigo/80",
    border: true,
  },
  {
    emoji: "👤",
    title: "Lær om Ina",
    description: "Bakgrunn, media, verdier — og hvorfor hun begynte å snakke om tilhørighet.",
    cta: "Les mer →",
    href: "/om",
    bg: "bg-white",
    textColor: "text-foreground",
    descColor: "text-brand-muted",
    ctaColor: "text-brand-indigo hover:text-brand-indigo/80",
    border: true,
  },
];

export function ThreeChoiceSection() {
  return (
    <section className="py-16 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {choices.map((choice, i) => (
            <motion.div
              key={choice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
            >
              <Link
                href={choice.href}
                className={`group flex flex-col gap-4 p-7 rounded-2xl h-full transition-all hover:-translate-y-1 hover:shadow-lg ${choice.bg} ${choice.border ? "border border-brand-border" : ""}`}
              >
                <span className="text-3xl">{choice.emoji}</span>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className={`font-serif text-xl leading-snug ${choice.textColor}`}>
                    {choice.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${choice.descColor}`}>
                    {choice.description}
                  </p>
                </div>
                <span className={`text-sm font-medium transition-colors ${choice.ctaColor}`}>
                  {choice.cta}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
