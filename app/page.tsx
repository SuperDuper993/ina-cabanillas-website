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
import { CustomersSection } from "@/components/ui/customers-section";
import { JsonLd } from "@/components/seo/json-ld";

const customerClients = [
  { name: "Norges Lastebileier-Forbund", domain: "lastebil.no" },
  { name: "NAV", domain: "nav.no" },
{ name: "TV 2", domain: "tv2.no" },
  { name: "NRK", domain: "nrk.no" },
  { name: "Katapult Future Fest", domain: "katapultfuturefest.com" },
  { name: "Kampen mot havet", domain: "fiskeribladet.no" },
  { name: "Arendalsuka", domain: "arendalsuka.no" },
  { name: "BISO", domain: "biso.no" },
  { name: "HVL", domain: "hvl.no" },
  { name: "UiO", domain: "uio.no" },
  { name: "Høyskolen Kristiania", domain: "kristiania.no" },
  { name: "Politiet", domain: "politiet.no" },
  { name: "Eiendomsmegler 1 Sør", domain: "eiendomsmegler1.no" },
  { name: "Rana Gruber ASA", domain: "ranagruber.no" },
  { name: "Norsk Sykepleierforbund", domain: "nsf.no" },
  { name: "Negotia Øst", domain: "negotia.no" },
  { name: "Mosjøen Næringsforening", domain: "mosjoennf.no" },
  { name: "SHE Conference", domain: "sheconference.no" },
  { name: "Flack HMS", domain: "flackhms.no" },
];

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Kundelogoer grid */}
        <CustomersSection clients={customerClients} />
        {/* 3. Video */}
        <VideoSection />
        {/* 4. Foredragstemaer */}
        <TalksSection />
        {/* 5. Hvem er det for */}
        <AudienceSection />
        {/* 6. Boken */}
        <BookSection />
        {/* 7. Kundelogoer marquee */}
        <LogoCloudSection />
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
