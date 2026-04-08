'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BRAND, IMAGES, TESTIMONIALS_TALERLISTEN } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import ShimmerButton from "@/components/ui/shimmer-button";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const bookImages = [
  { src: IMAGES.bookPortrait, alt: "Ina Cabanillas Hansen med boken" },
  { src: IMAGES.bookStack, alt: "Hvordan forstå og lede Gen Z — bokstabel" },
  { src: IMAGES.portrait, alt: "Ina Cabanillas Hansen portrett" },
];

const occasions = [
  "Gave til ansatte",
  "Julegave til teamet",
  "Bursdagsgave",
  "Kick-off / fagdag",
  "Onboarding av nye ledere",
  "Annet",
];

export default function KjopBokPage() {
  const bookQuotes = TESTIMONIALS_TALERLISTEN.slice(0, 3);
  const [activeImg, setActiveImg] = useState(0);
  const [bulkForm, setBulkForm] = useState({ name: "", email: "", org: "", quantity: "", occasion: "", message: "" });
  const [bulkStatus, setBulkStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleBulkSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBulkStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bulkForm.name,
          email: bulkForm.email,
          organization: bulkForm.org,
          occasion: `Bokbestilling: ${bulkForm.quantity} stk — ${bulkForm.occasion}`,
          message: bulkForm.message || `Ønsker å bestille ${bulkForm.quantity} eksemplarer av boken.`,
        }),
      });
      if (res.ok) {
        setBulkStatus("sent");
      } else {
        setBulkStatus("error");
      }
    } catch {
      setBulkStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-14">
        {/* Hero */}
        <section className="bg-brand-dark py-20 md:py-28">
          <div className="max-w-[1080px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image gallery */}
            <motion.div {...fadeUp} className="space-y-3">
              <div className="relative aspect-[3/4] max-w-[380px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={bookImages[activeImg].src}
                  alt={bookImages[activeImg].alt}
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>
              <div className="flex justify-center gap-2">
                {bookImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-16 h-20 rounded-lg overflow-hidden transition-all ${
                      activeImg === i ? "ring-2 ring-white opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp} className="flex flex-col gap-5">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Hvordan forstå og lede Gen Z
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Unge slutter ikke fordi jobben er kjedelig. De slutter fordi de ikke hører til. Denne boken gir deg verktøyene til å gjøre noe med det.
              </p>

              <ul className="space-y-3 text-white/80 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-0.5">✓</span>
                  <span>Forstå hva Gen Z faktisk trenger fra en leder</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-0.5">✓</span>
                  <span>Praktiske verktøy du kan bruke fra dag én</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-0.5">✓</span>
                  <span>Skrevet av en Gen Z-er — fra innsiden av generasjonen</span>
                </li>
              </ul>

              <p className="text-white/40 text-sm">
                349 kr · Fysisk bok · Sendes i hele Norge
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={BRAND.vippsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShimmerButton className="w-full sm:w-auto" style={{ backgroundColor: '#FF5B24' }}>
                    Kjøp med Vipps — 349 kr
                  </ShimmerButton>
                </a>
                <a
                  href="#bulk"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 text-white/80 font-medium text-sm hover:bg-white/10 transition-all text-center"
                >
                  Bestille flere? Se bedriftsrabatt ↓
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Om boken */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-[680px] mx-auto px-6">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold leading-snug mb-8">
                Boken ledere snakker om
              </h2>
              <div className="space-y-6 text-[#1a1a1a] text-lg leading-[1.85]">
                <p>
                  Hva motiverer Gen Z? Hvorfor tenker de annerledes? Og hva kan du som leder gjøre for å tiltrekke, utvikle og beholde den neste generasjonen?
                </p>
                <p>
                  Boken kombinerer forskning, personlige erfaringer og historier som åpner for en mer ærlig generasjonsdebatt. Ikke teori — men verktøy.
                </p>
                <p>
                  Skrevet for HR-ledere, mellomledere og alle som jobber med unge mennesker.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sitater */}
        <section className="py-20 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold mb-10 text-center">
                Hva folk sier
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bookQuotes.map((t) => (
                  <div key={t.author} className="bg-white p-7 rounded-2xl flex flex-col gap-4 hover:shadow-lg transition-shadow">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>
                    <blockquote className="text-[#1a1a1a] text-base leading-relaxed flex-1">
                      &ldquo;{t.highlight}&rdquo;
                    </blockquote>
                    <div className="pt-3 border-t border-brand-border">
                      <p className="text-sm font-semibold text-[#0f0f0f]">{t.author}</p>
                      <p className="text-xs text-[#666]">{t.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bulk bestilling */}
        <section id="bulk" className="py-20 md:py-28 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Info */}
              <div>
                <h2 className="text-3xl md:text-4xl text-[#0f0f0f] font-bold leading-snug mb-6">
                  Bestill til hele teamet
                </h2>
                <div className="space-y-5 text-[#1a1a1a] text-lg leading-[1.85]">
                  <p>
                    Perfekt som gave til ansatte, julegave til teamet, onboarding av nye ledere eller som del av en fagdag.
                  </p>
                  <p>
                    Vi tilbyr rabatt ved kjøp av 10+ eksemplarer. Fyll ut skjemaet, så sender jeg et tilbud innen 24 timer.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    { qty: "10–25 stk", desc: "Teamgave eller fagdag" },
                    { qty: "25–50 stk", desc: "Avdeling eller kick-off" },
                    { qty: "50+ stk", desc: "Hele organisasjonen" },
                  ].map((tier) => (
                    <div key={tier.qty} className="flex items-center gap-4 bg-brand-lavender rounded-xl px-5 py-4">
                      <p className="font-bold text-brand-indigo text-base">{tier.qty}</p>
                      <p className="text-[#555] text-sm">{tier.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div>
                {bulkStatus === "sent" ? (
                  <div className="bg-brand-lavender rounded-2xl p-10 text-center">
                    <p className="text-2xl mb-3">🎉</p>
                    <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Takk for henvendelsen!</h3>
                    <p className="text-[#555] text-base">Jeg sender deg et tilbud innen 24 timer.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBulkSubmit} className="bg-brand-lavender rounded-2xl p-8 space-y-5">
                    <h3 className="text-lg font-bold text-[#0f0f0f] mb-2">Be om tilbud</h3>

                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Navn <span className="text-brand-indigo">*</span></label>
                      <input
                        type="text"
                        required
                        value={bulkForm.name}
                        onChange={(e) => setBulkForm({ ...bulkForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                        placeholder="Ditt navn"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">E-post <span className="text-brand-indigo">*</span></label>
                      <input
                        type="email"
                        required
                        value={bulkForm.email}
                        onChange={(e) => setBulkForm({ ...bulkForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                        placeholder="din@epost.no"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Organisasjon</label>
                      <input
                        type="text"
                        value={bulkForm.org}
                        onChange={(e) => setBulkForm({ ...bulkForm, org: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                        placeholder="Bedrift eller organisasjon"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#333] mb-1">Antall bøker <span className="text-brand-indigo">*</span></label>
                        <input
                          type="number"
                          required
                          min="2"
                          value={bulkForm.quantity}
                          onChange={(e) => setBulkForm({ ...bulkForm, quantity: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                          placeholder="10"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#333] mb-1">Anledning</label>
                        <select
                          value={bulkForm.occasion}
                          onChange={(e) => setBulkForm({ ...bulkForm, occasion: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                        >
                          <option value="">Velg...</option>
                          {occasions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#333] mb-1">Melding (valgfritt)</label>
                      <textarea
                        value={bulkForm.message}
                        onChange={(e) => setBulkForm({ ...bulkForm, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 resize-none"
                        placeholder="Noe du vil legge til?"
                      />
                    </div>

                    <ShimmerButton type="submit" className="w-full" disabled={bulkStatus === "sending"}>
                      {bulkStatus === "sending" ? "Sender..." : "Be om tilbud →"}
                    </ShimmerButton>

                    {bulkStatus === "error" && (
                      <p className="text-red-500 text-sm text-center">Noe gikk galt. Prøv igjen.</p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bonus */}
        <section className="py-16 bg-brand-lavender">
          <div className="max-w-xl mx-auto px-6 text-center">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-xl text-[#0f0f0f] mb-3">Har du allerede boken?</h2>
              <p className="text-[#555] text-base mb-5">Skann QR-koden i boken for bonusmateriale, verktøy og dypere innsikt.</p>
              <Link href="/hvordan-lede-genz" className="text-sm font-semibold text-brand-indigo hover:underline">
                Gå til bonusmateriale →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Kjøp CTA */}
        <section className="py-20 md:py-24 bg-brand-dark text-center">
          <div className="max-w-md mx-auto px-6">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Bestill i dag</h2>
              <p className="text-white/50 text-base mb-8">349 kr · Sendes i hele Norge</p>
              <a href={BRAND.vippsLink} target="_blank" rel="noopener noreferrer">
                <ShimmerButton className="mx-auto" style={{ backgroundColor: '#FF5B24' }}>
                  Kjøp med Vipps — 349 kr
                </ShimmerButton>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
