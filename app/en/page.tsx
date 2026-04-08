import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSectionEN } from "@/components/sections/contact-en";
import { IMAGES, BRAND, TESTIMONIALS_TALERLISTEN, RECOMMENDATIONS_LINKEDIN } from "@/lib/constants";
import Image from "next/image";
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

const credentials = [
  "Gen Z speaking from the inside",
  "HR & Leadership, BI + UC Berkeley",
  "Founder, StudyBuddies",
  "LinkedIn Top 200 Voices",
];

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

const aboutHighlights = [
  { value: "6/6", label: "Speaker rating" },
  { value: "BI + UC Berkeley", label: "HR & Leadership" },
  { value: "Top 200", label: "LinkedIn Voices" },
  { value: "StudyBuddies", label: "Founder" },
];

const englishStats = [
  { value: "1 in 3", label: "Gen Z plans to leave their job within 6 months", source: "TriNet, 2025" },
  { value: "0.5–2x", label: "annual salary is the cost of losing one employee", source: "Gallup / SHRM" },
  { value: "65%", label: "of Gen Z leave within 12 months of starting", source: "Randstad, 2025" },
];

// Use English-language testimonials from constants
const englishTestimonials = TESTIMONIALS_TALERLISTEN.filter(t =>
  t.quote.match(/[a-zA-Z]{4,}/) && !t.quote.match(/[æøåÆØÅ]/)
);

// Fallback: include all if filter returns too few
const displayTestimonials = englishTestimonials.length >= 2
  ? englishTestimonials
  : TESTIMONIALS_TALERLISTEN.slice(0, 4);

const englishLinkedIn = RECOMMENDATIONS_LINKEDIN.filter(r =>
  r.quote.match(/[a-zA-Z]{4,}/) && !r.quote.match(/[æøåÆØÅ]/)
);

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

function renderHighlight(quote: string, highlight: string) {
  if (!highlight || !quote.includes(highlight)) return <span>{quote}</span>;
  const parts = quote.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="text-brand-indigo font-medium">{highlight}</span>
      {parts[1]}
    </>
  );
}


export default function EnglishHome() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-screen flex flex-col justify-center"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-brand-dark/70" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-6 pt-24 pb-16 flex flex-col gap-8">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Belonging is the competitive advantage you&apos;re missing
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
                Gen Z keynote speaker, author, and founder. I help leaders understand, retain, and develop young talent through insight, research, and technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                Book Ina for your event
              </Link>
              <Link
                href="#talks"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                View keynotes ↓
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="text-xs font-medium text-white/60 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Logo cloud */}
        <section className="border-y border-brand-border py-10 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-center text-xs font-medium tracking-widest uppercase text-brand-muted mb-6">
              Has spoken for
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["NAV", "Politiet", "Falck", "University of Oslo", "WOW-konferansen", "SHE Conference", "Arendalsuka", "BISO", "Katapult Future Fest"].map((logo) => (
                <span key={logo} className="text-sm font-medium text-brand-muted/70 tracking-wide">{logo}</span>
              ))}
            </div>
          </div>
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

        {/* About */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src={IMAGES.bookPortrait}
                  alt="Ina Cabanillas Hansen — Gen Z keynote speaker"
                  width={520}
                  height={650}
                  className="w-full rounded-2xl object-cover"
                  priority
                />
              </div>

              <div className="order-1 md:order-2 flex flex-col gap-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
                  About Ina
                </p>
                <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
                  A Gen Z researcher studying her own generation
                </h2>
                <div className="space-y-4 text-brand-muted leading-relaxed">
                  <p>
                    Ina Cabanillas Hansen is one of Scandinavia&apos;s most in-demand voices on Gen Z, leadership, and belonging in the workplace. She is a keynote speaker, author, and founder of StudyBuddies — a platform helping students build community and academic support networks.
                  </p>
                  <p>
                    With a background in HR and leadership from BI Norwegian Business School and UC Berkeley, she combines research, lived experience as a Gen Z professional, and a sharp eye on the generational divide to give leaders practical tools they can use immediately.
                  </p>
                  <p>
                    Named &ldquo;Young Inspiration of the Year 2025&rdquo; in Norway, she is one of LinkedIn&apos;s global Top 200 Voices in inclusion and diversity, and has spoken at events from government agencies to international innovation festivals.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  {aboutHighlights.map((h) => (
                    <div key={h.label} className="bg-brand-lavender rounded-xl px-5 py-4">
                      <p className="font-semibold text-brand-indigo text-base">{h.value}</p>
                      <p className="text-brand-muted text-sm mt-0.5">{h.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                What clients say
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground mb-6">
                Top-rated on every booking
              </h2>
              <blockquote className="border-l-4 border-brand-indigo pl-5 max-w-2xl">
                <p className="text-brand-muted italic leading-relaxed">
                  All reviews on Talerlisten (Norway&apos;s leading speaker agency platform) are verified by the event organiser after the talk. Ina has received the highest possible rating on every single booking.
                </p>
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
              {displayTestimonials.map((t) => (
                <div
                  key={`${t.author}-${t.date}`}
                  className="border border-brand-border rounded-2xl p-6 flex flex-col gap-4 bg-white"
                >
                  <StarRow count={t.stars} />
                  <p className="text-foreground text-sm leading-relaxed">
                    &ldquo;{renderHighlight(t.quote, t.highlight)}&rdquo;
                  </p>
                  <div className="mt-auto pt-2 border-t border-brand-border flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm text-foreground">{t.author}</p>
                      <p className="text-brand-muted text-xs">{t.org}</p>
                    </div>
                    <p className="text-brand-muted text-xs">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {englishLinkedIn.length > 0 && (
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-5">
                  LinkedIn recommendations
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {englishLinkedIn.map((rec) => (
                    <div
                      key={rec.author}
                      className="bg-brand-lavender rounded-2xl p-5 flex flex-col gap-3"
                    >
                      <p className="text-foreground text-sm leading-relaxed">
                        &ldquo;{renderHighlight(rec.quote, rec.highlight)}&rdquo;
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-sm text-foreground">{rec.author}</p>
                        <p className="text-brand-muted text-xs">{rec.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

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
