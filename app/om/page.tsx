'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ShimmerButton from "@/components/ui/shimmer-button";

const roles = [
  {
    emoji: "🎤",
    title: "Foredragsholder",
    description: "Keynote-speaker om Gen Z, ledelse og tilhørighet. Kjent for å kombinere humor, ærlighet og innsikt som faktisk sitter.",
  },
  {
    emoji: "🚀",
    title: "Gründer",
    description: "Founder og daglig leder av StudyBuddies — en EdTech-plattform som hjelper studenter finne fellesskap og faglig støtte.",
  },
  {
    emoji: "📖",
    title: "Forfatter",
    description: "Skrev «Hvordan forstå og lede Gen Z» — en praktisk guide til ledere som vil forstå og beholde unge talent.",
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

/* Dyslexia-friendly text classes */
const bodyText = "text-[#1a1a1a] text-lg leading-[1.85] text-left";
const sectionPad = "py-20 md:py-28";
const textMax = "max-w-[680px]";

function InlineStory({ bodyText }: { bodyText: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-brand-border pt-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 text-left group"
        aria-expanded={open}
      >
        <span className="text-base text-[#666] group-hover:text-brand-indigo transition-colors">
          Lurer du på hvorfor jeg startet?{' '}
          <span className="font-semibold text-brand-indigo group-hover:underline">
            Les hele historien her {open ? '↑' : '↓'}
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-5">
              <p className="text-[#1a1a1a] font-serif text-lg leading-[1.7] italic">
                &ldquo;Hun pakket laptopen sin, gikk gjennom et bibliotek med 200 mennesker, og møtte blikkene til ingen.&rdquo;
              </p>
              <p className={bodyText}>Det var da jeg skjønte det.</p>
              <p className={bodyText}>Første studieår. Nord-Norge til Oslo. Pandemi.</p>
              <p className={bodyText}>Vi hadde gruppeeksamener ment for fem — jeg tok dem alle alene, hjemme, i stillhet. Dag etter dag. Nær ved å gi opp.</p>
              <p className={bodyText}>Det som reddet meg var ikke et program. Det var én venninne som sa: «Jeg tar eksamen med deg.»</p>
              <p className={bodyText}>Men bestevenninnen min hadde ikke den venninnen.</p>
              <p className={`${bodyText} text-brand-indigo font-semibold`}>Hun droppet ut av drømmestudiet sitt. Ikke fordi hun ikke var god nok. Fordi hun ikke hadde noen.</p>
              <p className={bodyText}>Det øyeblikket satt seg. Ikke som inspirasjon, men som sinne. Stille, bestemt sinne over at dette bare er sånn det er — og ingen gjør noe med det.</p>
              <p className={bodyText}>Jeg søkte etter løsninger. Fant ingen. Så jeg bestemte meg for å bygge en selv.</p>
              <p className={bodyText}>Det jeg fant gjennom forskning endret måten jeg ser på alt: problemene vi sliter med på studiet er de nøyaktig samme vi møter i arbeidslivet.</p>
              <p className="text-[#0f0f0f] text-base font-semibold">Det er ikke et Gen Z-problem. Det er et lederproblem.</p>
              <p className="text-brand-indigo text-base font-serif font-semibold">Er du fornøyd med det svaret?</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function OmPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO — Image + intro */}
        <section className="pt-28 pb-16 md:pb-20 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text — left on desktop */}
              <div className="order-2 md:order-1">
                <p className="text-base font-semibold tracking-widest uppercase text-brand-indigo mb-4">Om Ina</p>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] text-[#0f0f0f] leading-[1.15] mb-6 font-bold">
                  Jeg startet fordi ingen andre gjorde det.
                </h1>
                <p className={`${bodyText} mb-3`}>
                  En spicy nordlending med røtter fra Bodø og Spania — som endte opp som Norges fremste stemme på Gen Z og arbeidsliv.
                </p>
                <p className="text-[#666] text-base leading-[1.7]">
                  Ikke ved et uhell. Av nødvendighet.
                </p>

                <InlineStory bodyText={bodyText} />

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Årets unge inspirasjon 2025", "LinkedIn Topp 200", "BI + UC Berkeley", "Gründer, StudyBuddies"].map((tag) => (
                    <span key={tag} className="text-base font-medium text-brand-indigo bg-brand-lavender border border-brand-indigo/15 rounded-full px-4 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image — right on desktop, top on mobile */}
              <div className="order-1 md:order-2">
                <Image
                  src="/images/ina-om-meg.jpg"
                  alt="Ina Cabanillas Hansen"
                  width={520}
                  height={650}
                  className="w-full aspect-[3/4] rounded-2xl object-cover object-[center_20%] shadow-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. BIO */}
        <section className={`${sectionPad} bg-brand-lavender`}>
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <Image
                  src="/images/ina-mo-i-rana.jpg"
                  alt="Ina Cabanillas Hansen foredrag"
                  width={520}
                  height={650}
                  className="w-full rounded-2xl object-cover object-top shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-7">
                <h2 className="text-3xl md:text-4xl text-[#0f0f0f] leading-snug font-bold">
                  En Gen Z-er som forsker på sin egen generasjon
                </h2>
                <div className="space-y-6">
                  <p className={bodyText}>
                    Jeg er en av Skandinavias mest etterspurte stemmer innen Gen Z, ledelse og tilhørighet i arbeidslivet.
                  </p>
                  <p className={bodyText}>
                    Jeg er keynote-speaker, forfatter og gründer av StudyBuddies — en plattform som hjelper studenter bygge fellesskap og faglig støttenettverk.
                  </p>
                  <p className={bodyText}>
                    Med bakgrunn i HR og ledelse fra BI Handelshøyskolen og UC Berkeley kombinerer jeg forskning, egne erfaringer som Gen Z-profesjonell og et skarpt blikk på generasjonsskillet.
                  </p>
                  <p className={bodyText}>
                    Jeg gir ledere praktiske verktøy de kan bruke med én gang.
                  </p>
                  <p className={bodyText}>
                    Kåret til «Årets unge inspirasjon» i Norge. En av LinkedIns globale Topp 200 Voices innen inkludering og mangfold.
                  </p>
                  <p className={bodyText}>
                    Har holdt foredrag for alt fra statlige etater til internasjonale innovasjonsfestivaler.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  {[
                    { value: "6/6", label: "Talerlisten" },
                    { value: "BI + UC Berkeley", label: "HR og ledelse" },
                    { value: "Topp 200", label: "LinkedIn Voices" },
                    { value: "StudyBuddies", label: "Gründer" },
                  ].map((h) => (
                    <div key={h.label} className="bg-white rounded-xl px-5 py-4">
                      <p className="font-bold text-brand-indigo text-base">{h.value}</p>
                      <p className="text-[#555] text-base mt-0.5">{h.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Verdier */}
        <section className={`${sectionPad} bg-white`}>
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold mb-12">
                Det jeg står for
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "Tilhørighet", desc: "Folk skal føle at de hører til. Alltid.", traits: "Grunnlaget for alt jeg gjør" },
                  { title: "Mot", desc: "Si det som er sant, selv om det er ubehagelig.", traits: "Uredd · Rettferdig · Sta" },
                  { title: "Kreativitet", desc: "Se muligheter der andre ser begrensninger.", traits: "Nysgjerrig · Konseptuell · Oppfinnsom" },
                  { title: "Inkludering", desc: "Aktivt nysgjerrig på andre — og hva som skal til for dem.", traits: "Omsorgsfull · Raus · Lyttende" },
                  { title: "Autentisitet", desc: "Være sitt ekte selv. Tørre å skille seg ut.", traits: "Ærlig · Tydelig · Sårbar" },
                  { title: "Mestring", desc: "Gi folk verktøy — ikke bare inspirasjon.", traits: "Konkret · Praktisk · Handlingsrettet" },
                ].map((v) => (
                  <div key={v.title} className="bg-brand-lavender rounded-2xl p-7 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-serif text-xl text-[#0f0f0f] font-semibold">{v.title}</h3>
                    <p className="text-[#444] text-base leading-[1.7]">{v.desc}</p>
                    <p className="text-brand-indigo/60 text-base font-medium tracking-wide">{v.traits}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roller */}
        <section className={`${sectionPad} bg-brand-lavender`}>
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold mb-12">
                Tre roller, ett mål
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {roles.map((role) => (
                  <div key={role.title} className="bg-white rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                    <span className="text-3xl">{role.emoji}</span>
                    <h3 className="font-serif text-xl text-[#0f0f0f] font-semibold">{role.title}</h3>
                    <p className="text-[#444] text-base leading-[1.7]">{role.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Utdanning + Awards */}
        <section className={`${sectionPad} bg-white`}>
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold leading-snug mb-8">
                  Akademisk bakgrunn
                </h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.school} className="bg-brand-lavender rounded-xl px-6 py-5">
                      <p className="font-semibold text-[#0f0f0f] text-base">{edu.school}</p>
                      <p className="text-[#555] text-base mt-1">{edu.field}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold leading-snug mb-8">
                  Awards
                </h2>
                <div className="space-y-4">
                  {awards.map((award) => (
                    <div key={award.name} className="bg-brand-lavender rounded-xl px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-semibold text-brand-indigo bg-brand-light-lav px-2.5 py-0.5 rounded-full">
                          {award.year}
                        </span>
                        <p className="font-semibold text-[#0f0f0f] text-base">{award.name}</p>
                      </div>
                      <p className="text-[#555] text-base mt-1">{award.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sett og hørt */}
        <section className={`${sectionPad} bg-brand-lavender`}>
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="text-center">
              <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold mb-4">
                Omtalt i media
              </h2>
              <p className="text-[#555] text-lg mb-10 max-w-lg mx-auto leading-[1.7]">
                Jeg er en av Norges mest siterte stemmer på Gen Z og ledelse.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {mediaLogos.map((name) => (
                  <span key={name} className="text-base font-semibold text-[#666] border border-brand-border rounded-full px-5 py-2 bg-white">
                    {name}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {stages.map((name) => (
                  <span key={name} className="text-base font-medium text-brand-indigo bg-white border border-brand-indigo/20 rounded-full px-5 py-2">
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA — Foredrag */}
        <section className="py-24 md:py-32 bg-white">
          <div className={`${textMax} mx-auto px-6`}>
            <motion.div {...fadeUp} className="text-center">
              <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold mb-6">
                Book meg som foredragsholder
              </h2>
              <p className="text-[#444] text-lg leading-[1.8] mb-4">
                Foredraget varer ca. 45 minutter og tilpasses alltid ditt publikum, din bransje og dine utfordringer.
              </p>
              <p className="text-[#444] text-lg leading-[1.8] mb-6">
                Jeg kombinerer forskning, personlige erfaringer og humor — og gir salen noe de kan bruke med én gang.
              </p>
              <p className="text-[#0f0f0f] font-bold text-xl mb-10">
                Pris fra 35 000 kr + mva
              </p>
              <Link href="/#kontakt">
                <ShimmerButton className="mx-auto">
                  Book foredrag →
                </ShimmerButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
