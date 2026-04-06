import Image from "next/image";
import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/constants";

export function BookSection() {
  return (
    <section className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Image
              src={IMAGES.portrait}
              alt="Hvordan forstå og lede Gen Z — bok av Ina Cabanillas"
              width={520}
              height={600}
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
              Aktuell bok
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground leading-snug">
              Hvordan forstå og lede Gen Z
            </h2>
            <p className="text-brand-muted leading-relaxed">
              En praktisk og lettlest guide til ledere, HR-ansvarlige og alle som jobber med unge mennesker. Boken gir deg forskningsbasert innsikt og konkrete grep for å forstå, motivere og beholde Gen Z — den generasjonen som er i ferd med å ta over arbeidslivet.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Tilgjengelig som fysisk bok via Vipps eller kjøp den hos Ark.no.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
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
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-indigo text-brand-indigo font-semibold text-sm hover:bg-brand-indigo/5 transition-all hover:-translate-y-0.5"
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
