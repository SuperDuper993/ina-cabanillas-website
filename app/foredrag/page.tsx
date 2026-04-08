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
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Book foredragsholder om Gen Z og ledelse — Keynote & Workshop",
  description: "Book Ina Cabanillas Hansen som foredragsholder om Gen Z, ledelse av unge ansatte, tilhørighet og AI i arbeidslivet. Keynote og workshop tilpasset din bransje — tech, industri og offentlig sektor. Passer for 10–2000 deltakere. Svar innen 24 timer.",
  keywords: [
    "book foredragsholder Gen Z", "keynote speaker ledelse unge ansatte",
    "foredrag tilhørighet arbeidsliv", "workshop Gen Z HR",
    "foredragsholder AI og arbeidsliv", "book keynote speaker Norge",
    "foredrag fremtidens arbeidsliv", "generasjonsledelse foredrag",
    "Ina Cabanillas foredrag", "Gen Z keynote speaker Norway",
  ],
  alternates: { canonical: 'https://www.inacabanillas.com/foredrag' },
  openGraph: {
    title: "Book foredragsholder om Gen Z og ledelse — Ina Cabanillas Hansen",
    description: "Keynote og workshop om ledelse av unge ansatte, tilhørighet og AI. Tilpasset din bransje. Fra 35 000 kr. Svar innen 24 timer.",
    url: 'https://www.inacabanillas.com/foredrag',
    images: [{ url: '/images/ina-ganeshfoto.jpg', width: 1200, height: 630, alt: 'Ina Cabanillas Hansen — foredragsholder om Gen Z' }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hvem er Ina Cabanillas Hansen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ina Cabanillas Hansen er Gen Z-er, foredragsholder, forfatter og gründer av StudyBuddies. Hun hjelper ledere med å skape tilhørighet for unge ansatte — med innsikt fra innsiden av generasjonen. Vinner av HER Awards 2024 og en av LinkedIns Topp 200 Voices globalt." }
    },
    {
      "@type": "Question",
      "name": "Hva snakker Ina om?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ina snakker om tilhørighet — hvorfor unge slutter, hva de faktisk trenger fra ledere, og konkrete grep du kan ta for å beholde dem. Foredraget tilpasses din bransje og ditt publikum." }
    },
    {
      "@type": "Question",
      "name": "Hvem passer foredraget for?",
      "acceptedAnswer": { "@type": "Answer", "text": "HR-ledere, mellomledere, konferanser og fagdager i tech, industri og offentlig sektor. Særlig virksomheter som ansetter unge eller ønsker å beholde dem. Passer for 10–2000 deltakere." }
    },
    {
      "@type": "Question",
      "name": "Hva koster et foredrag?",
      "acceptedAnswer": { "@type": "Answer", "text": "Foredrag fra 35 000 kr + mva. Veiledende pris for 45 min inkl. for- og ettermøte. Reise kommer i tillegg. Workshop prises etter behov. Alt tilpasses — ta kontakt for et uforpliktende tilbud." }
    },
    {
      "@type": "Question",
      "name": "Hvordan booker man Ina Cabanillas som foredragsholder?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fyll ut kontaktskjemaet på denne siden eller ring +47 974 24 957. Ina svarer innen 24 timer. Du kan også booke en gratis 15 min samtale på calendar.app.google/DdqRYwRpniLiXgcm6" }
    },
  ]
};

const speakerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Foredrag og keynote om Gen Z, ledelse og fremtidens arbeidsliv",
  "provider": {
    "@type": "Person",
    "name": "Ina Cabanillas Hansen",
    "url": "https://www.inacabanillas.com"
  },
  "description": "Keynote og workshop om ledelse av Gen Z, tilhørighet på jobb og AI i arbeidslivet. Tilpasset tech, industri og offentlig sektor. For 10–2000 deltakere.",
  "areaServed": ["Norway", "Sweden", "Denmark", "Finland", "Nordic countries"],
  "availableLanguage": ["Norwegian", "English"],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "35000",
      "priceCurrency": "NOK",
      "minPrice": "35000",
      "description": "Veiledende pris for 45 min foredrag inkl. for- og ettermøte. Reise faktureres separat."
    }
  }
};

export default function ForedragPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={speakerSchema} />
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
              Tilpasses privat og offentlig sektor — tech, industri og kommunal virksomhet. Passer for kick-off med 15 eller konferanse med 2000. Norsk og engelsk.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
              >
                Book foredrag →
              </a>
              <a href="tel:+4797424957" className="text-sm text-brand-muted hover:text-brand-indigo transition-colors">
                Foretrekker du å ringe? <span className="font-medium text-foreground">+47 974 24 957</span>
              </a>
            </div>

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
