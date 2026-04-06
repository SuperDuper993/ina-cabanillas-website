import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BRAND, IMAGES } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hvordan forstå og lede Gen Z",
  description: "Bonusmateriale fra boken «Hvordan forstå og lede Gen Z» av Ina Cabanillas Hansen.",
  robots: { index: false, follow: false }, // Skjult side — kun via QR-kode i boken
};

const resources = [
  {
    icon: "🧠",
    title: "Mer om Gen Z og arbeidslivet",
    description: "Forskning på hvordan ulik skolegang former generasjonen. Montessori-pedagogikken vs. tradisjonell undervisning og hva det betyr for arbeidslivet.",
    href: "/hvordan-lede-genz/gen-z",
  },
  {
    icon: "💡",
    title: "Mer om å skape bedre arbeidsplasser",
    description: "Er unge virkelig late og sykemelder seg for lett? Fakta og forskning som nyanserer debatten om sykefravær blant unge arbeidstakere.",
    href: "/hvordan-lede-genz/arbeid",
  },
  {
    icon: "🌉",
    title: "Mer om å være en brobyggende leder",
    description: "Gen Z sitt digitale panser. Om kommunikasjon, generasjonskløften, og hvorfor stillhet i møterommet ikke betyr det du tror.",
    href: "/hvordan-lede-genz/leder",
  },
  {
    icon: "🎯",
    title: "Mer om å tiltrekke og beholde talenter",
    description: "Praktisk guide for arbeidsgivere. Hvordan oppleves rekrutteringsprosessen deres? Spørsmål dere som bedrift må stille dere.",
    href: "/hvordan-lede-genz/talent",
  },
  {
    icon: "❤️",
    title: "Praktiske verktøy: HEART-modellen",
    description: "Utviklet for å hjelpe ledere med å bygge sterke, høytytende team gjennom ekte lagånd, individuell utvikling og gjensidig tillit.",
    href: "/hvordan-lede-genz/heart",
  },
  {
    icon: "📝",
    title: "Mine egne tips til jobbintervju",
    description: "Inas personlige historie: 500 søknader, 100 avslag. Hva som snudde, og praktiske tips for å skrive en CV som viser kompetanse.",
    href: "/hvordan-lede-genz/tips",
  },
];

export default function HvordanLedeGenZ() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs font-medium tracking-[3px] uppercase text-white/40 mb-4">
              Bonusmateriale fra boken
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Hvordan forstå og lede Gen Z
            </h1>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Her finner du gratis artikler, verktøy og dypere innsikt som utfyller boken. Skann QR-koden i boken for å komme rett hit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={BRAND.vippsLink}
                target="_blank"
                className="px-8 py-3 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-brand-lavender transition-all"
              >
                Kjøp boken
              </Link>
              <Link
                href={BRAND.arkBook}
                target="_blank"
                className="px-8 py-3 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:bg-white/10 transition-all"
              >
                Kjøp på Ark.no
              </Link>
            </div>
          </div>
        </section>

        {/* Resources grid */}
        <section className="py-20 bg-brand-lavender">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid gap-4">
              {resources.map((resource, i) => (
                <Link
                  key={i}
                  href={resource.href}
                  className="group bg-white rounded-xl p-6 flex items-start gap-5 border border-brand-border hover:border-brand-indigo/20 hover:shadow-lg hover:shadow-brand-indigo/5 transition-all duration-300"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{resource.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-foreground group-hover:text-brand-indigo transition-colors mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {resource.description}
                    </p>
                    <span className="inline-block mt-3 text-xs font-medium text-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity">
                      Les artikkelen →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Book CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl mb-3">Har du ikke boken ennå?</h2>
            <p className="text-brand-muted text-sm mb-6">
              En ærlig og praktisk guide for alle ledere og HR-folk som vil forstå fremtidens arbeidsstyrke.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={BRAND.vippsLink}
                target="_blank"
                className="px-8 py-3 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all"
              >
                Kjøp via Vipps
              </Link>
              <Link
                href="/"
                className="px-8 py-3 rounded-full border border-brand-border text-foreground font-medium text-sm hover:bg-brand-lavender transition-all"
              >
                ← Tilbake til forsiden
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
