import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TalksSection } from "@/components/sections/talks";
import { WorkshopSection } from "@/components/sections/workshop-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { VideoSection } from "@/components/sections/video";
import { EmpatiSection } from "@/components/sections/empati-section";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { MobileStickyBar } from "@/components/ui/mobile-sticky-bar";
import { ForedragMenu } from "@/components/ui/foredrag-menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foredrag og workshop | Ina Cabanillas Hansen",
  description:
    "Foredrag og workshop om Gen Z, tilhørighet og ledelse. Tilpasses din bransje og ditt publikum. Passer for alt fra 10 til 2000 deltakere.",
};

export default function ForedragPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero + visuell innholdsfortegnelse */}
        <section className="pt-32 pb-16 bg-brand-lavender">
          <div className="max-w-[1080px] mx-auto px-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">
              Foredrag og workshop
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6 max-w-2xl">
              Innsikt som setter i gang en samtale i organisasjonen din
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-xl mb-8">
              Tilpasses privat og offentlig sektor. Passer for alt fra 10 til 2000 deltakere. Norsk og engelsk.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
            >
              Book foredrag →
            </a>

            {/* Visuell innholdsfortegnelse */}
            <ForedragMenu />
          </div>
        </section>

        {/* Video */}
        <VideoSection />

        {/* Kjenner du deg igjen? */}
        <EmpatiSection />

        {/* Foredragstemaer — accordion */}
        <TalksSection />

        {/* Workshop — accordion */}
        <WorkshopSection />

        {/* Hvem passer det for */}
        <AudienceSection />

        {/* Slik fungerer det */}
        <HowItWorksSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ */}
        <FaqSection />

        {/* Kontakt */}
        <ContactSection />
      </main>
      <MobileStickyBar />
      <Footer />
    </>
  );
}
