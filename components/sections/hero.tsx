'use client';

import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/constants";
import ShimmerButton from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-end md:justify-center overflow-hidden">
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
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent md:bg-brand-dark/65" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6 pt-24 pb-12 md:pb-16 flex flex-col gap-6 md:gap-8">
        {/* Social proof strip — above fold */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            {[...Array(6)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
            <span className="text-white/70 text-sm ml-1">6/6 på Talerlisten</span>
          </div>
          <span className="text-white/30">·</span>
          <span className="text-white/70 text-sm">Årets unge inspirasjon 2024</span>
          <span className="text-white/30">·</span>
          <span className="text-white/70 text-sm">20+ scener nasjonalt</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-4 md:mb-6">
            {BRAND.tagline}
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            {BRAND.description}
          </p>
        </div>

        {/* Authority badges */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-white/60 border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
            HER Awards 2024
          </span>
          <span className="text-sm font-medium text-white/60 border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
            NRK &middot; TV2 &middot; Dagsnytt 18
          </span>
          <span className="text-sm font-medium text-white/60 border border-white/20 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
            LinkedIn Topp 200 Voices
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/#kontakt">
            <ShimmerButton className="w-full sm:w-auto min-h-[52px] md:min-h-0">
              Book foredrag
            </ShimmerButton>
          </Link>
          <Link
            href="/om"
            className="inline-flex items-center justify-center px-8 py-3.5 min-h-[52px] md:min-h-0 rounded-full border border-white/40 text-white/90 font-medium text-sm hover:bg-white/10 transition-all"
          >
            Les mer om meg
          </Link>
        </div>
        <Link href="/foredrag" className="text-white/50 text-sm hover:text-white/80 transition-colors self-start">
          Se foredragstemaer og workshop →
        </Link>
      </div>
    </section>
  );
}
