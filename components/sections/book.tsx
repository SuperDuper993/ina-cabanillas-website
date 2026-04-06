'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/constants";

const bookImages = [
  { src: IMAGES.bookPortrait, alt: "Ina Cabanillas Hansen med boken" },
  { src: IMAGES.bookStack, alt: "Hvordan forstå og lede Gen Z — bokstabel" },
  { src: IMAGES.talkDscf2554, alt: "Ina Cabanillas på scenen" },
  { src: IMAGES.talkDscf2561, alt: "Ina Cabanillas foredrag" },
  { src: IMAGES.talkImg1465, alt: "Ina Cabanillas i aksjon" },
];

export function BookSection() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={bookImages[activeImg].src}
                alt={bookImages[activeImg].alt}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-2">
              {bookImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 h-20 rounded-lg overflow-hidden transition-all ${
                    activeImg === i ? "ring-2 ring-brand-indigo opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 md:pt-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
              Aktuell bok
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Hvordan forstå og lede Gen Z
            </h2>
            <p className="text-brand-muted leading-relaxed">
              En praktisk og lettlest guide til ledere, HR-ansvarlige og alle som jobber med unge mennesker. Forskningsbasert innsikt og konkrete grep for å forstå, motivere og beholde Gen Z.
            </p>
            <p className="text-sm text-brand-muted/70">
              349 NOK · Fysisk bok
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href={BRAND.vippsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
              >
                Kjøp via Vipps
              </Link>
              <Link
                href={BRAND.arkBook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-indigo text-brand-indigo font-semibold text-sm hover:bg-brand-indigo/5 transition-all"
              >
                Kjøp på Ark.no
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
