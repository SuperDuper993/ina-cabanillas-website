'use client';

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSectionEN } from "@/components/sections/contact-en";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

/* ─── Data ─── */

const scenarios = [
  { emoji: '😮‍💨', text: "You've done everything by the book, yet the youngest employees still leave after a short time. What are you getting wrong?" },
  { emoji: '🙄', text: "You're tired of the debate about which generation is right or wrong. You'd rather understand how to build a workplace where people actually want to stay." },
  { emoji: '🤯', text: "AI is changing everything. You know you need to act, but you don't know how. And nobody's talking about the people behind the technology." },
];

const talks = [
  {
    tag: "Most booked",
    tagVariant: "primary" as const,
    title: "Gen Z & Leadership: What Young Talent Actually Needs to Stay",
    description: "How Gen Z thinks, works, and what motivates them. Practical tools you can use immediately — grounded in research and lived experience.",
  },
  {
    tag: "New",
    tagVariant: "soft" as const,
    title: "Attract & Retain: Recruitment That Actually Works",
    description: "What young talent really looks for in an employer — and what makes them stay beyond the first year.",
  },
  {
    tag: "Keynote",
    tagVariant: "primary" as const,
    title: "Belonging in a Technology-Driven World",
    description: "The interplay between people and AI, and why belonging becomes more critical the more technology we adopt. A Nordic perspective on the future of work.",
  },
  {
    tag: "Custom",
    tagVariant: "soft" as const,
    title: "Your Topic, Ina's Perspective",
    description: "A tailored keynote based on your organisation's specific challenges. Get in touch to discuss.",
  },
];

const workshops = [
  {
    tag: "Half-day",
    duration: "3–4 hours",
    title: "Workshop: Belonging in Practice",
    description: "Introduction to Gen Z and belonging, followed by reflection and practical tools in groups. Ideal as a kick-off to a professional day or team event. Participants leave with concrete steps they can implement on Monday morning.",
  },
  {
    tag: "Full-day",
    duration: "6–7 hours",
    title: "Workshop: Building a Culture That Retains",
    description: "A deep dive into organisational culture, generational dynamics and psychological safety. Includes case work and a shared action plan for the team. Tailored to your industry and specific challenges.",
  },
];

const audiences = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21V19C23 17.59 22.06 16.38 20.75 16.04" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.75 3.04C18.06 3.38 19 4.59 19 6C19 7.41 18.06 8.62 16.75 8.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Organisations hiring and leading young talent",
    description: "Get practical tools to attract, understand and retain Gen Z. Reduce turnover and build a workplace where young talent actually wants to stay.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 8H17M7 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "HR leaders and middle management",
    description: "Understand what Gen Z actually needs from their leaders. Gain insight into motivation, expectations, and how to build belonging across generations.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Conferences and professional events",
    description: "A keynote that engages, challenges and inspires. Humour, research and honesty — delivered by a Gen Z insider.",
  },
];

const steps = [
  { number: "01", title: "Send an enquiry", description: "Fill in the form below. Tell us about the event, audience and preferred date. It takes 2 minutes." },
  { number: "02", title: "We'll talk within 24 hours", description: "I respond quickly, ask a few questions and tailor the topic to your group and your needs." },
  { number: "03", title: "Keynote delivered", description: "Tailored content that sparks a conversation. Organisers report they've changed recruitment, job ads, leadership style and internal culture." },
];

const faqItems = [
  { question: "Who is Ina Cabanillas?", answer: "Ina is a Gen Z keynote speaker, author and founder of StudyBuddies. She helps leaders create belonging for young employees — with insight from inside the generation. Winner of HER Awards 2024 and one of LinkedIn's Top 200 Voices globally." },
  { question: "What does Ina speak about?", answer: "Belonging — why young people leave, what they actually need from leaders, and concrete steps you can take to retain them. Every keynote is tailored to your industry and audience." },
  { question: "Who is the keynote for?", answer: "HR leaders, middle managers, conferences and professional events. Especially organisations that hire young talent or want to keep them." },
  { question: "What does a keynote cost?", answer: "From NOK 35,000 + VAT. Tailored to format, duration and audience. Get in touch for a no-obligation quote." },
  { question: "How do I book Ina?", answer: "Fill in the contact form on this page. Ina responds within 24 hours." },
  { question: "What is StudyBuddies?", answer: "StudyBuddies is an AI-powered EdTech platform for universities that helps students collaborate better and complete their studies. Learn more at studybuddies.no" },
];

/* ─── Sub-components ─── */

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-brand-border last:border-b-0">
      <button className="w-full flex items-center justify-between gap-4 py-5 text-left group" onClick={onToggle} aria-expanded={isOpen}>
        <span className="text-foreground text-base font-medium group-hover:text-brand-indigo transition-colors">{question}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`flex-shrink-0 text-brand-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="pb-5 pr-10"><p className="text-brand-muted text-base leading-relaxed">{answer}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page ─── */

export default function KeynotesPage() {
  const [talkOpen, setTalkOpen] = useState<number | null>(0);
  const [workshopOpen, setWorkshopOpen] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">Keynotes & Workshops</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6 max-w-2xl">
              Insight that sparks a conversation in your organisation
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-xl mb-8">
              Tailored to private and public sector — tech, industry and government. Works for a kick-off of 15 or a conference of 2,000. Norwegian and English.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5">
                Book a keynote →
              </a>
              <a href="tel:+4797424957" className="text-sm text-brand-muted hover:text-brand-indigo transition-colors">
                Prefer to call? <span className="font-medium text-foreground">+47 974 24 957</span>
              </a>
            </div>
          </div>
        </section>

        {/* Does this sound familiar? */}
        <section className="py-20 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">Does this sound familiar?</p>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug mb-10 max-w-xl">You&apos;re not alone in wondering about this.</h2>

              <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 -mx-6 px-6 pb-2 no-scrollbar">
                {scenarios.map((s, i) => (
                  <div key={i} className="snap-start flex-shrink-0 w-[85vw] bg-white rounded-2xl p-6 border border-brand-border shadow-sm">
                    <span className="text-2xl mb-4 block">{s.emoji}</span>
                    <p className="text-brand-dark text-base leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {scenarios.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }} className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col">
                    <span className="text-2xl mb-4 block">{s.emoji}</span>
                    <p className="text-brand-dark text-base leading-relaxed">{s.text}</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-10 text-brand-muted text-base leading-relaxed max-w-2xl">
                As founder of StudyBuddies and one of Norway&apos;s leading voices on Gen Z, I work with these questions every day. Through research, lived experience and 20+ stages, I help leaders find the answers — and actually use them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Keynote topics */}
        <section id="keynotes" className="py-24 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl text-foreground mb-3">Keynote topics</h2>
                <p className="text-brand-muted leading-relaxed">Each keynote is approximately 45 minutes and tailored to your industry, audience and challenges. Suitable for 10 to 2,000 participants.</p>
              </div>
              <div className="flex flex-col gap-3">
                {talks.map((talk, i) => (
                  <div key={talk.title} className="bg-white rounded-2xl overflow-hidden">
                    <button onClick={() => setTalkOpen(talkOpen === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-lavender/40 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full flex-shrink-0 ${talk.tagVariant === "primary" ? "bg-brand-indigo text-white" : "bg-brand-light-lav text-brand-indigo"}`}>{talk.tag}</span>
                        <h3 className="font-serif text-lg text-foreground leading-snug">{talk.title}</h3>
                      </div>
                      <svg className={`flex-shrink-0 text-brand-muted transition-transform duration-300 ${talkOpen === i ? "rotate-180" : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {talkOpen === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden">
                          <p className="px-6 pb-6 text-brand-muted text-base leading-relaxed">{talk.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Workshops */}
        <section id="workshops" className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="mb-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">Workshop</p>
                <h2 className="text-3xl md:text-4xl text-foreground mb-3">More than a keynote</h2>
                <p className="text-brand-muted leading-relaxed">Need more time and depth? The workshops combine insight with hands-on group work. Half-day or full-day, always tailored.</p>
              </div>
              <div className="flex flex-col gap-3">
                {workshops.map((w, i) => (
                  <div key={w.title} className="bg-brand-lavender rounded-2xl overflow-hidden">
                    <button onClick={() => setWorkshopOpen(workshopOpen === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-brand-lavender/60 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-amber-100 text-amber-800">{w.tag}</span>
                          <span className="text-xs text-brand-muted">{w.duration}</span>
                        </div>
                        <h3 className="font-serif text-lg text-foreground leading-snug">{w.title}</h3>
                      </div>
                      <svg className={`flex-shrink-0 text-brand-muted transition-transform duration-300 ${workshopOpen === i ? "rotate-180" : ""}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {workshopOpen === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden">
                          <p className="px-6 pb-6 text-brand-muted text-base leading-relaxed">{w.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5">
                  Enquire about workshops
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who is this for? */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="mb-12"><h2 className="text-3xl md:text-4xl text-foreground">Who is this for?</h2></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {audiences.map((item) => (
                  <div key={item.title} className="bg-brand-lavender rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-brand-light-lav text-brand-indigo flex items-center justify-center">{item.icon}</div>
                    <h3 className="font-serif text-lg text-foreground leading-snug">{item.title}</h3>
                    <p className="text-brand-muted text-base leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col items-center gap-2">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5">Book a keynote</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white border-y border-brand-border">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">How it works</p>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug mb-12 max-w-lg">From enquiry to keynote. Simple and fast.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                  <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl text-brand-indigo">{step.number}</span>
                      <div className="flex-1 h-px bg-brand-border" />
                    </div>
                    <h3 className="font-serif text-xl text-brand-dark">{step.title}</h3>
                    <p className="text-brand-muted text-base leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "💰", text: "From NOK 35,000 + VAT. Pre-meeting included, travel separate." },
                  { icon: "👥", text: "10–2,000 participants — kick-off, conference, professional day." },
                  { icon: "🎯", text: "HR, leaders and conferences — tech, industry, public sector." },
                  { icon: "⚡", text: "Unsure about the budget? We'll find a format that works." },
                ].map((item) => (
                  <div key={item.icon} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="text-base leading-none mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5">Send enquiry →</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection lang="en" />

        {/* FAQ */}
        <section id="faq" className="py-24 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }} className="max-w-2xl mx-auto">
              <div className="mb-10 text-center"><h2 className="text-3xl md:text-4xl text-foreground leading-snug">Questions & Answers</h2></div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                {faqItems.map((item, i) => (
                  <FaqItem key={item.question} question={item.question} answer={item.answer} isOpen={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <ContactSectionEN />
      </main>
      <Footer />
    </>
  );
}
