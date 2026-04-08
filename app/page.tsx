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
        {/* 5. Testimonials — høyt opp */}
        <TestimonialsSection />
        {/* 6. Nyhetsbrev — tidlig versjon */}
        <NewsletterSection variant="early" />
        {/* 7. Video */}
        <VideoSection />
        {/* 8. Foredragstemaer */}
        <TalksSection />
        {/* 9. Hvem er det for */}
        <AudienceSection />
        {/* 10. Boken */}
        <BookSection />
        {/* 11. Om meg */}
        <AboutTeaser />
        {/* 12. CTA */}
        <CtaBand />
        {/* 13. Nyhetsbrev — nedre versjon */}
        <NewsletterSection />
        {/* 14. Kontakt */}
        <ContactSection />
        {/* 15. FAQ */}
        <FaqSection />
      </main>
      <MobileStickyBar />
      <Footer />
    </>
  );
}
