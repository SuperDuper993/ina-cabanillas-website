import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { AboutSection } from "@/components/sections/about";
import { TalksSection } from "@/components/sections/talks";
import { VideoSection } from "@/components/sections/video";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BookSection } from "@/components/sections/book";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloudSection />
        <StatsSection />
        <AboutSection />
        <TalksSection />
        <VideoSection />
        <TestimonialsSection />
        <BookSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
