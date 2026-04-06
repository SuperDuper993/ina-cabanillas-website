'use client';

import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/constants";

const credentials = [
  "Gen Z som snakker fra innsiden",
  "HR og ledelse, BI + UC Berkeley",
  "Gründer, StudyBuddies",
  "Årets unge inspirasjon 2025",
];

export function HeroSection() {
  return (
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
      {/* Mobile background — different crop showing Ina clearly */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${IMAGES.heroMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Gradient overlay — darker at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/30 md:bg-brand-dark/65" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6 pt-24 pb-12 md:pb-16 flex flex-col gap-6 md:gap-8">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-4 md:mb-6">
            {BRAND.tagline}
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            {BRAND.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
          >
            Book Ina til ditt arrangement
          </Link>
          <Link
            href="/#foredrag"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white/90 font-medium text-sm hover:bg-white/10 transition-all"
          >
            Se foredrag ↓
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          {credentials.map((cred) => (
            <span
              key={cred}
              className="text-[11px] font-medium text-white/50 border border-white/15 rounded-full px-3 py-1 backdrop-blur-sm bg-white/5"
            >
              {cred}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
