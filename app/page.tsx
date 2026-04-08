import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { StatsSection } from "@/components/sections/stats";
import { EmpatiSection } from "@/components/sections/empati-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BookSection } from "@/components/sections/book";
import { CtaBand } from "@/components/sections/cta-band";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ContactSection } from "@/components/sections/contact";
import { MobileStickyBar } from "@/components/ui/mobile-sticky-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Kundelogoer */}
        <LogoCloudSection />
        {/* 3. Stats */}
        <StatsSection />
        {/* 4. Kjenner du deg igjen? */}
        <EmpatiSection />
        {/* 5. Testimonials */}
        <TestimonialsSection />
        {/* 6. Boken — Pipe 2 */}
        <BookSection />
        {/* 7. CTA */}
        <CtaBand />
        {/* 8. Nyhetsbrev — Pipe 3 */}
        <NewsletterSection />
        {/* 9. Kontakt — Pipe 1 */}
        <ContactSection />
      </main>
      <MobileStickyBar />
      <Footer />
    </>
  );
}
