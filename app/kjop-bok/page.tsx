import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BRAND, IMAGES, TESTIMONIALS_TALERLISTEN } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kjøp boken: Hvordan forstå og lede Gen Z",
  description: "Bestill «Hvordan forstå og lede Gen Z» av Ina Cabanillas Hansen. En ærlig og praktisk guide for ledere og HR-folk. 349 NOK.",
};

export default function KjopBokPage() {
  const bookQuotes = TESTIMONIALS_TALERLISTEN.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* Hero */}
        <section className="bg-brand-dark py-20">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-end">
              <Image
                src={IMAGES.portrait}
                alt="Hvordan forstå og lede Gen Z"
                width={320}
                height={480}
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">Debutbok</p>
              <h1 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
                Hvordan forstå og lede Gen Z
              </h1>
              <p className="text-white/50 mb-3 leading-relaxed">
                En ærlig og praktisk guide for alle ledere og HR-folk som vil forstå fremtidens arbeidsstyrke. Kombinerer forskning, erfaring og historier.
              </p>
              <p className="text-white/30 text-sm mb-6">Ina Cabanillas Hansen · 2025 · 349 NOK</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={BRAND.vippsLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-white text-brand-indigo font-semibold text-sm text-center hover:bg-brand-lavender transition-all">
                  Kjøp via Vipps
                </a>
                <a href={BRAND.arkBook} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/20 text-white/70 font-medium text-sm text-center hover:bg-white/10 transition-all">
                  Kjøp på Ark.no
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Om boken */}
        <section className="py-16 bg-brand-lavender">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl mb-4">Hva handler boken om?</h2>
            <p className="text-brand-muted leading-relaxed mb-4">
              Hva motiverer Gen Z, hvorfor tenker de annerledes, og hvordan kan du tiltrekke, utvikle og beholde den neste generasjonen med arbeidskraft?
            </p>
            <p className="text-brand-muted leading-relaxed">
              Boken er både personlig og praktisk: den kombinerer forskning, erfaring og historier som åpner for en mer konstruktiv og ærlig generasjonsdebatt.
            </p>
          </div>
        </section>

        {/* Sitater */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl mb-8 text-center">Hva folk sier</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bookQuotes.map((t) => (
                <div key={t.author} className="p-5 border border-brand-border rounded-xl">
                  <p className="text-brand-indigo text-xs mb-3 tracking-widest">★★★★★★</p>
                  <blockquote className="text-sm italic text-foreground mb-4 leading-relaxed">
                    &ldquo;{t.highlight}&rdquo;
                  </blockquote>
                  <p className="text-xs font-semibold">{t.author}</p>
                  <p className="text-xs text-brand-muted">{t.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus CTA */}
        <section className="py-12 bg-brand-lavender">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="font-serif text-xl mb-3">Har du allerede boken?</h2>
            <p className="text-brand-muted text-sm mb-5">Skann QR-koden i boken for bonusmateriale, verktøy og dypere innsikt.</p>
            <Link href="/hvordan-lede-genz" className="text-sm font-semibold text-brand-indigo hover:underline">
              Gå til bonusmateriale →
            </Link>
          </div>
        </section>

        {/* Kjøp CTA */}
        <section className="py-16 bg-brand-dark text-center">
          <div className="max-w-md mx-auto px-6">
            <h2 className="font-serif text-2xl text-white mb-4">Bestill i dag</h2>
            <p className="text-white/40 text-sm mb-6">349 NOK</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={BRAND.vippsLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-brand-lavender transition-all">
                Kjøp via Vipps
              </a>
              <a href={BRAND.arkBook} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/20 text-white/70 font-medium text-sm hover:bg-white/10 transition-all">
                Kjøp på Ark.no
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
