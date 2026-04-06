import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { ValueSection } from "@/components/sections/value-section";
import { StatsSection } from "@/components/sections/stats";
import { WhoSection } from "@/components/sections/who-section";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { TalksSection } from "@/components/sections/talks";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { VideoSection } from "@/components/sections/video";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { BookSection } from "@/components/sections/book";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloudSection />
        <ValueSection />
        <StatsSection />
        <WhoSection />
        <BeforeAfterSection />
        <TalksSection />
        <HowItWorksSection />
        <VideoSection />
        <TestimonialsSection />
        <CtaBand />
        <BookSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
