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
            {BRAND.tagline}
          </h1>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
            {BRAND.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
          >
            Book Ina til ditt arrangement
          </Link>
          <Link
            href="#foredrag"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            Se foredrag ↓
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
  );
}
