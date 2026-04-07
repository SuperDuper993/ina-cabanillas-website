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
import { NewsletterPopup } from "@/components/ui/newsletter-popup";
import { StatsSection } from "@/components/sections/stats";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Kundelogoer — marquee */}
        <LogoCloudSection />
        {/* 3. Stats */}
        <StatsSection />
        {/* 4. Video */}
        <VideoSection />
        {/* 5. Foredragstemaer */}
        <TalksSection />
        {/* 6. Hvem er det for */}
        <AudienceSection />
        {/* 7. Boken */}
        <BookSection />
        {/* 8. Om meg */}
        <AboutTeaser />
        {/* 9. Testimonials */}
        <TestimonialsSection />
        {/* 10. Newsletter */}
        <NewsletterSection />
        {/* 11. CTA */}
        <CtaBand />
        {/* 12. Kontakt */}
        <ContactSection />
        {/* 13. FAQ */}
        <FaqSection />
      </main>
      <NewsletterPopup />
      <Footer />
    </>
  );
}
