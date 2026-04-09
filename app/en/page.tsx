import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSectionEN } from "@/components/sections/contact-en";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { IMAGES, BRAND, CLIENTS } from "@/lib/constants";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ina Cabanillas | Gen Z Keynote Speaker — Nordic Perspective on Young Talent",
  description: "Gen Z keynote speaker, author, and founder. Ina Cabanillas Hansen helps leaders understand, retain, and develop young talent through insight, research, and technology. Available for international conferences and HR events.",
  keywords: ["Gen Z keynote speaker", "Ina Cabanillas", "young talent leadership", "Nordic speaker", "Scandinavian leadership", "Gen Z workplace", "belonging HR", "international keynote"],
  alternates: {
    canonical: "https://www.inacabanillas.com/en",
  },
  openGraph: {
    title: "Ina Cabanillas | Gen Z Keynote Speaker",
    description: "Belonging is the competitive advantage you're missing. Gen Z speaker helping leaders understand and retain young talent.",
    type: "website",
    locale: "en_GB",
    siteName: "Ina Cabanillas",
    url: "https://www.inacabanillas.com/en",
  },
};


const englishTalks = [
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
    tag: "Tailored",
    tagVariant: "soft" as const,
    title: "Your Challenge, Ina's Perspective",
    description: "A customised talk built around your organisation's specific challenges with young talent. Get in touch to discuss.",
  },
];


const englishStats = [
  { value: "1 in 3", label: "Gen Z plans to leave their job within 6 months", source: "TriNet, 2025" },
  { value: "0.5–2x", label: "annual salary is the cost of losing one employee", source: "Gallup / SHRM" },
  { value: "65%", label: "of Gen Z leave within 12 months of starting", source: "Randstad, 2025" },
];



export default function EnglishHome() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col justify-end md:justify-center overflow-hidden">
          {/* Desktop background */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${IMAGES.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
          {/* Mobile background */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${IMAGES.heroMobile})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-transparent md:bg-brand-dark/70 md:bg-none" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 pt-24 pb-16 flex flex-col gap-8">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Belonging is the competitive advantage you&apos;re missing
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
                Gen Z keynote speaker, author, and founder. I help leaders understand, retain, and develop young talent through insight, research, and technology.
              </p>
            </div>

            <Link
              href="/en/keynotes"
              className="text-white/50 text-sm hover:text-white/80 transition-colors self-start"
            >
              View keynotes and workshops →
            </Link>
          </div>
        </section>

        {/* Logo cloud — infinite scroll like NO version */}
        <section className="border-y border-brand-border py-10 bg-white">
          <p className="text-center text-sm font-medium tracking-widest uppercase text-brand-muted mb-6">
            Has spoken for
          </p>
          <InfiniteSlider gap={32} duration={30} durationOnHover={60}>
            {CLIENTS.map((client) => (
              <span
                key={client.domain}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-brand-muted/70 tracking-wide whitespace-nowrap select-none hover:text-brand-indigo transition-colors duration-300"
              >
                {client.name}
              </span>
            ))}
          </InfiniteSlider>
        </section>

        {/* Stats */}
        <section className="bg-brand-dark py-20">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {englishStats.map((stat) => (
                <div key={stat.value} className="text-center md:text-left">
                  <p className="text-white text-5xl md:text-6xl font-serif mb-3">
                    {stat.value}
                  </p>
                  <p className="text-white/45 text-base leading-snug mb-2">
                    {stat.label}
                  </p>
                  <p className="text-white/25 text-xs">
                    {stat.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="py-16 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                Gen Z speaking from the inside. HR &amp; Leadership from BI + UC Berkeley. Founder of StudyBuddies. LinkedIn Top 200 Voices.
              </p>
              <Link href="/en/about" className="text-brand-indigo text-sm font-medium hover:underline">
                Read more about Ina →
              </Link>
            </div>
          </div>
        </section>

        {/* Does this sound familiar? */}
        <section className="py-20 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">Does this sound familiar?</p>
            <h2 className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug mb-10 max-w-xl">You&apos;re not alone in wondering about this.</h2>

            <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 -mx-6 px-6 pb-2 no-scrollbar">
              {[
                { emoji: '😮‍💨', text: "You've done everything by the book, yet the youngest employees still leave after a short time. What are you getting wrong?" },
                { emoji: '🙄', text: "You're tired of the debate about which generation is right or wrong. You'd rather understand how to build a workplace where people actually want to stay." },
                { emoji: '🤯', text: "AI is changing everything. You know you need to act, but you don't know how. And nobody's talking about the people behind the technology." },
              ].map((s, i) => (
                <div key={i} className="snap-start flex-shrink-0 w-[85vw] bg-white rounded-2xl p-6 border border-brand-border shadow-sm">
                  <span className="text-2xl mb-4 block">{s.emoji}</span>
                  <p className="text-brand-dark text-base leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {[
                { emoji: '😮‍💨', text: "You've done everything by the book, yet the youngest employees still leave after a short time. What are you getting wrong?" },
                { emoji: '🙄', text: "You're tired of the debate about which generation is right or wrong. You'd rather understand how to build a workplace where people actually want to stay." },
                { emoji: '🤯', text: "AI is changing everything. You know you need to act, but you don't know how. And nobody's talking about the people behind the technology." },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col">
                  <span className="text-2xl mb-4 block">{s.emoji}</span>
                  <p className="text-brand-dark text-base leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-brand-muted text-base leading-relaxed max-w-2xl">
              As founder of StudyBuddies and one of Norway&apos;s leading voices on Gen Z, I work with these questions every day. Through research, lived experience and 20+ stages, I help leaders find the answers — and actually use them.
            </p>
          </div>
        </section>

        {/* Talks */}
        <section id="talks" className="py-24 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Keynotes
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground">
                Keynote topics
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {englishTalks.map((talk) => (
                <div
                  key={talk.title}
                  className="bg-white rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <span
                    className={
                      "text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full self-start " +
                      (talk.tagVariant === "primary"
                        ? "bg-brand-indigo text-white"
                        : "bg-brand-light-lav text-brand-indigo")
                    }
                  >
                    {talk.tag}
                  </span>
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    {talk.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {talk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials — carousel with all EN translations */}
        <TestimonialsSection lang="en" />

        {/* Book — compact mention */}
        <section className="py-12 bg-brand-lavender">
          <div className="max-w-[680px] mx-auto px-6 flex items-center gap-6">
            <p className="text-[10px] font-bold tracking-widest uppercase text-brand-indigo shrink-0">Book</p>
            <p className="text-sm text-brand-muted">
              <span className="font-semibold text-foreground">How to Understand and Lead Gen Z</span> — available in Norwegian.{' '}
              <Link href={BRAND.arkBook} target="_blank" rel="noopener noreferrer" className="text-brand-indigo underline">
                Ark.no →
              </Link>
            </p>
          </div>
        </section>

        <ContactSectionEN />
      </main>
      <Footer />
    </>
  );
}
