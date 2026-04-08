import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { VideoSection } from "@/components/sections/video";
import { TalksSection } from "@/components/sections/talks";
import { AudienceSection } from "@/components/sections/audience-section";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { BookSection } from "@/components/sections/book";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { StatsSection } from "@/components/sections/stats";
import { EmpatiSection } from "@/components/sections/empati-section";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { MobileStickyBar } from "@/components/ui/mobile-sticky-bar";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Kjenner du deg igjen? */}
        <EmpatiSection />
        {/* 3. Kundelogoer — marquee */}
        <LogoCloudSection />
        {/* 4. Stats */}
        <StatsSection />
        {/* 5. Foredragstemaer — tidlig, etter problem er etablert */}
        <TalksSection />
        {/* 6. Video — se Ina på scenen mens man vurderer å booke */}
        <VideoSection />
        {/* 7. Testimonials */}
        <TestimonialsSection />
        {/* 8. Slik fungerer det */}
        <HowItWorksSection />
        {/* 9. Nyhetsbrev — tidlig versjon */}
        <NewsletterSection variant="early" />
        {/* 10. Hvem er det for */}
        <AudienceSection />
        {/* 11. Boken */}
        <BookSection />
        {/* 12. Om meg */}
        <AboutTeaser />
        {/* 13. CTA */}
        <CtaBand />
        {/* 14. Nyhetsbrev — nedre versjon */}
        <NewsletterSection />
        {/* 15. Kontakt */}
        <ContactSection />
        {/* 16. FAQ */}
        <FaqSection />
      </main>
      <MobileStickyBar />
      <Footer />
    </>
  );
}
