'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const roles = [
  {
    emoji: "🎤",
    title: "Foredragsholder",
    description: "Keynote-speaker om Gen Z, ledelse og tilhørighet. Har holdt foredrag for alt fra statlige etater til internasjonale konferanser. Kjent for å kombinere humor, ærlighet og innsikt som faktisk sitter.",
  },
  {
    emoji: "🚀",
    title: "Gründer",
    description: "Founder og daglig leder av StudyBuddies — en EdTech-plattform for høyere utdanning. Bygget fordi ingen verktøy fantes da hun selv slet. Nå hjelper den tusenvis av studenter med å finne fellesskap og faglig støtte.",
  },
  {
    emoji: "📖",
    title: "Forfatter",
    description: "Skrev «Hvordan forstå og lede Gen Z» (2025) — en praktisk guide til ledere som vil forstå, motivere og beholde unge talent. Ikke teori, men verktøy.",
  },
];

const awards = [
  { year: "2024", name: "Årets unge inspirasjon", org: "HER Awards" },
  { year: "2025", name: "LinkedIn Topp 200 Voices", org: "Inkludering og mangfold, globalt" },
  { year: "2024", name: "Finalist: Tech Star og Young Inspiration", org: "HER Awards" },
];

const education = [
  { school: "BI Handelshøyskolen", field: "Organisasjonspsykologi, HR og ledelse" },
  { school: "UC Berkeley Haas", field: "Entrepreneurship" },
  { school: "UiO", field: "Entreprenørskap" },
];

const mediaLogos = ["NRK", "TV 2", "Dagsnytt 18", "Dagsavisen", "kode24", "forskning.no", "Khrono"];

const stages = ["SHE Conference", "Katapult Future Fest", "NRK Debatten", "Arendalsuka", "WOW-konferansen"];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function OmPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">
                  Om Ina
                </p>
                <h1 className="text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                  Hun får folk til å komme i gang
                </h1>
                <p className="text-brand-muted text-lg leading-relaxed mb-8">
                  Gründer, foredragsholder og stemme for en generasjon. Ina gir folk verktøy til å mestre og tro på seg selv — ikke bare inspirasjon, men konkrete neste steg.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
                  >
                    Book meg som foredragsholder
                  </Link>
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-indigo text-brand-indigo font-semibold text-sm hover:bg-brand-indigo/5 transition-all"
                  >
                    Ta kontakt
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/images/ina-om-meg.jpg"
                  alt="Ina Cabanillas Hansen"
                  width={520}
                  height={650}
                  className="w-full rounded-2xl object-cover object-top shadow-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Min historie */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Min historie
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground leading-snug mb-8">
                Hvorfor jeg gjør dette
              </h2>
              <div className="space-y-5 text-brand-muted leading-relaxed text-lg">
                <p>
                  Jeg er ikke et produkt av systemet. Jeg er et resultat av å ha overlevd det — og valgt å gjøre det bedre for andre.
                </p>
                <p>
                  Da jeg startet på universitetet, slet jeg. Jeg fant ikke noen å skrive oppgave med, ble ensom og var nær ved å droppe ut. Jeg spurte professoren om hjelp. Han hadde ingen verktøy. Jeg ville ikke at andre skulle ha den opplevelsen — så jeg bygde løsningen selv. Det ble starten på StudyBuddies.
                </p>
                <p>
                  Det som reddet meg var tilhørighet: en venn fra Nord-Norge som flyttet ned, og idretten som ga meg en arena for mestring. De erfaringene er grunnlaget for alt jeg bygger og sier.
                </p>
                <p>
                  Underveis oppdaget jeg noe viktig: de samme utfordringene jeg opplevde som student, opplever Gen Z i arbeidslivet. Mangel på tilhørighet, forståelse og gode ledere som ser oss. Så jeg begynte å holde foredrag om det — og snur narrativet fra «Gen Z er problemet» til «ledere er problemet».
                </p>
                <p>
                  I dag gir jeg ledere, HR-ansvarlige og organisasjoner konkrete verktøy for å forstå hva unge faktisk trenger for å trives og bli. Ikke bare inspirasjon — men innsikt og spark bak.
                </p>
              </div>

              {/* Sitat */}
              <div className="mt-10 border-l-4 border-brand-indigo pl-6">
                <p className="text-foreground text-xl font-serif italic leading-relaxed">
                  «Hun fikk meg til å føle at jeg hørte til, og at jeg kunne få til det jeg ville.»
                </p>
                <p className="text-brand-muted text-sm mt-3">
                  — Slik vil Ina bli husket.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bilder fra scenen */}
        <section className="py-16 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Image
                src="/images/ina-ganeshfoto.jpg"
                alt="Ina Cabanillas Hansen"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 rounded-2xl object-cover object-top"
              />
              <Image
                src="/images/ina-mo-i-rana.jpg"
                alt="Ina Cabanillas Hansen"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 rounded-2xl object-cover object-top"
              />
              <Image
                src="/images/ina-wow.jpg"
                alt="Ina Cabanillas Hansen"
                width={400}
                height={500}
                className="w-full h-64 md:h-80 rounded-2xl object-cover object-top col-span-2 md:col-span-1"
              />
            </motion.div>
          </div>
        </section>

        {/* Kjerneverdier */}
        <section className="py-24 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Verdier
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground mb-12">
                Det jeg står for
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "Tilhørighet", desc: "Folk skal føle at de hører til. Alltid." },
                  { title: "Inkludering", desc: "Aktivt, ikke performativt. Nysgjerrighet på mennesket foran deg." },
                  { title: "Mot", desc: "Si det som er sant, selv om det er ubehagelig." },
                  { title: "Mestring", desc: "Gi folk verktøy — ikke bare inspirasjon." },
                  { title: "Ærlighet", desc: "Ingen fluff. Ingen fasade." },
                ].map((v) => (
                  <div
                    key={v.title}
                    className="bg-white rounded-2xl p-7 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mine roller */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Mine roller
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground mb-12">
                Tre roller, ett mål
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role) => (
                  <div
                    key={role.title}
                    className="bg-brand-lavender rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="text-3xl">{role.emoji}</span>
                    <h3 className="font-serif text-xl text-foreground">{role.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{role.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Utdanning + Awards */}
        <section className="py-24 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                  Utdanning
                </p>
                <h2 className="text-3xl md:text-4xl text-foreground leading-snug mb-8">
                  Akademisk bakgrunn
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.school} className="bg-white rounded-xl px-6 py-4">
                      <p className="font-semibold text-foreground">{edu.school}</p>
                      <p className="text-brand-muted text-sm mt-1">{edu.field}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                  Priser og anerkjennelse
                </p>
                <h2 className="text-3xl md:text-4xl text-foreground leading-snug mb-8">
                  Awards
                </h2>
                <div className="space-y-4">
                  {awards.map((award) => (
                    <div key={award.name} className="bg-white rounded-xl px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-brand-indigo bg-brand-light-lav px-2.5 py-0.5 rounded-full">
                          {award.year}
                        </span>
                        <p className="font-semibold text-foreground">{award.name}</p>
                      </div>
                      <p className="text-brand-muted text-sm mt-1">{award.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sett og hørt */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Sett og hørt
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                Omtalt i media
              </h2>
              <p className="text-brand-muted mb-10 max-w-lg mx-auto">
                Ina er en av Norges mest siterte stemmer på Gen Z og ledelse.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {mediaLogos.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-semibold text-brand-muted/60 border border-brand-border rounded-full px-5 py-2 bg-brand-lavender"
                  >
                    {name}
                  </span>
                ))}
              </div>

              <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
                Scener
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {stages.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-brand-indigo bg-brand-lavender border border-brand-indigo/20 rounded-full px-5 py-2"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fra scenen */}
        <section className="py-24 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
                Fra scenen
              </p>
              <h2 className="text-3xl md:text-4xl text-foreground mb-8">
                Hva folk sier etter et foredrag
              </h2>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-brand-indigo pl-6 text-left">
                  <p className="text-foreground text-lg font-serif italic leading-relaxed">
                    «Hun gir deg innsikt og spark bak.»
                  </p>
                </blockquote>
                <blockquote className="border-l-4 border-brand-indigo pl-6 text-left">
                  <p className="text-foreground text-lg font-serif italic leading-relaxed">
                    «Hun endrer måten du tenker på folk — og får deg til å gjøre noe med det.»
                  </p>
                </blockquote>
              </div>
              <p className="text-brand-muted text-base mt-8 leading-relaxed">
                Folk sier at foredraget fikk dem til å reflektere. At hun er litt voksen sjef med humor. Hun utfordrer og underholder på samme tid.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-brand-dark">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="flex flex-col items-center gap-7 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50">
                Neste steg
              </p>
              <h2 className="text-2xl md:text-3xl text-white leading-snug max-w-lg">
                Klar for et foredrag som faktisk sitter?
              </h2>
              <p className="text-white/60 max-w-md">
                Ta kontakt for å diskutere et foredrag tilpasset din organisasjon, konferanse eller fagdag.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
              >
                Book meg som foredragsholder
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
