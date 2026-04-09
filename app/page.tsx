import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ThreeChoiceSection } from "@/components/sections/three-choice";
import { VideoSection } from "@/components/sections/video";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { StatsSection } from "@/components/sections/stats";
import { EmpatiSection } from "@/components/sections/empati-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BookSection } from "@/components/sections/book";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. 3-valg — hjelper besøkende å velge riktig spor */}
        <ThreeChoiceSection />
        {/* 3. Video — scroller-triggered autoplay */}
        <VideoSection />
        {/* 4. Kundelogoer */}
        <LogoCloudSection />
        {/* 5. Stats */}
        <StatsSection />
        {/* 6. Kjenner du deg igjen? */}
        <EmpatiSection />
        {/* 7. Testimonials */}
        <TestimonialsSection />
        {/* 8. Boken */}
        <BookSection />
      </main>
      <Footer />
    </>
  );
}
