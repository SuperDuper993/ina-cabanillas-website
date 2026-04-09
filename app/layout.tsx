import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inacabanillas.com'),
  title: {
    default: "Ina Cabanillas Hansen | Foredragsholder om Gen Z, ledelse og fremtidens arbeidsliv",
    template: "%s | Ina Cabanillas Hansen",
  },
  description: "Norges ledende stemme på Gen Z og arbeidsliv. Foredragsholder, forfatter og gründer av StudyBuddies. Holder keynote og workshop om ledelse av unge ansatte, tilhørighet, AI og fremtidens arbeidsliv — for HR, ledere og konferanser i hele Norden.",
  keywords: [
    "Ina Cabanillas", "Ina Cabanillas Hansen",
    "foredragsholder Gen Z", "keynote speaker Gen Z Norge",
    "foredrag ledelse unge ansatte", "foredrag fremtidens arbeidsliv",
    "generasjonsledelse", "generasjonsforståelse",
    "tilhørighet på jobb", "hvorfor slutter unge ansatte",
    "AI og arbeidsliv", "AI og ledelse", "tech og ledelse",
    "ledelse i en AI-drevet fremtid", "digital transformasjon foredrag",
    "StudyBuddies", "HR foredrag", "workshop tilhørighet",
    "keynote speaker Norway", "Gen Z workplace speaker Scandinavia",
    "future of work speaker Nordic", "belonging at work speaker",
  ],
  authors: [{ name: "Ina Cabanillas Hansen", url: "https://www.inacabanillas.com" }],
  creator: "Ina Cabanillas Hansen",
  publisher: "Ina Cabanillas Hansen",
  alternates: {
    canonical: 'https://www.inacabanillas.com',
    languages: {
      'en': 'https://www.inacabanillas.com/en',
      'nb-NO': 'https://www.inacabanillas.com',
    },
  },
  openGraph: {
    title: "Ina Cabanillas Hansen | Foredragsholder om Gen Z og fremtidens arbeidsliv",
    description: "Norges ledende stemme på Gen Z og arbeidsliv. Keynote og workshop om ledelse av unge ansatte, tilhørighet og AI — tilpasset din bransje og ditt publikum.",
    type: "website",
    locale: "nb_NO",
    alternateLocale: "en_US",
    siteName: "Ina Cabanillas Hansen",
    url: 'https://www.inacabanillas.com',
    images: [{ url: '/images/ina-ganeshfoto.jpg', width: 1200, height: 630, alt: 'Ina Cabanillas Hansen — foredragsholder' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ina Cabanillas Hansen | Foredragsholder om Gen Z og fremtidens arbeidsliv",
    description: "Norges ledende stemme på Gen Z og arbeidsliv. Book Ina til keynote eller workshop.",
    images: ['/images/ina-ganeshfoto.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ina Cabanillas Hansen",
  "alternateName": "Ina Cabanillas",
  "url": "https://www.inacabanillas.com",
  "image": "https://www.inacabanillas.com/images/ina-ganeshfoto.jpg",
  "description": "Ina Cabanillas Hansen er Norges ledende foredragsholder om Gen Z, ledelse og fremtidens arbeidsliv. Hun hjelper HR-ledere og mellomledere med å forstå, beholde og utvikle unge ansatte — med innsikt fra innsiden av generasjonen.",
  "jobTitle": "Keynote Speaker, Author & Entrepreneur",
  "nationality": "Norwegian",
  "knowsAbout": [
    "Gen Z", "Generation Z leadership", "Future of work", "Belonging at work",
    "AI in the workplace", "Generation management", "EdTech", "Young talent retention",
    "Workplace culture", "Digital transformation", "Leadership development"
  ],
  "award": [
    "HER Awards 2024 — Årets unge inspirasjon",
    "LinkedIn Top 200 Voices globally"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/ina-cabanillas/",
    "https://www.instagram.com/ina_cabanillas/",
    "https://www.tiktok.com/@inacabanillas",
    "https://www.talerlisten.no"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "StudyBuddies",
    "url": "https://studybuddies.no"
  },
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Keynote Speaker",
      "occupationLocation": { "@type": "Country", "name": "Norway" },
      "description": "Keynote speaker og workshop-fasilitator om Gen Z, tilhørighet, AI og fremtidens arbeidsliv for norske og internasjonale virksomheter."
    },
    {
      "@type": "Occupation",
      "name": "Author",
      "description": "Forfatter av bøker om Gen Z og arbeidsliv."
    }
  ],
  "alumniOf": [
    { "@type": "Organization", "name": "BI Norwegian Business School" },
    { "@type": "Organization", "name": "UC Berkeley" }
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Talerlisten",
    "url": "https://www.talerlisten.no"
  },
  "mentions": [
    { "@type": "Organization", "name": "NRK", "url": "https://www.nrk.no" },
    { "@type": "CreativeWork", "name": "Debatten", "url": "https://tv.nrk.no/serie/debatten/sesong/202503/episode/NNFA51030625", "publisher": { "@type": "Organization", "name": "NRK" } },
    { "@type": "CreativeWork", "name": "Helgemorgen", "url": "https://tv.nrk.no/serie/helgemorgen-tv/sesong/202511/episode/DNRR62009425", "publisher": { "@type": "Organization", "name": "NRK" } },
    { "@type": "CreativeWork", "name": "Dagsnytt 18", "url": "https://radio.nrk.no/serie/dagsnytt-atten/sesong/202501/NMAG03001025", "publisher": { "@type": "Organization", "name": "NRK" } },
    { "@type": "Organization", "name": "TV 2", "url": "https://www.tv2.no" },
    { "@type": "Organization", "name": "Dagens Næringsliv", "url": "https://www.dn.no" },
    { "@type": "Organization", "name": "Khrono", "url": "https://www.khrono.no" },
    { "@type": "Organization", "name": "Dagsavisen", "url": "https://www.dagsavisen.no" },
    { "@type": "Organization", "name": "forskning.no", "url": "https://www.forskning.no" },
    { "@type": "Organization", "name": "HR-magasinet", "url": "https://www.hrmagasinet.no" },
    { "@type": "Organization", "name": "kode24", "url": "https://www.kode24.no" }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ina Cabanillas Hansen",
  "url": "https://www.inacabanillas.com",
  "description": "Norges ledende stemme på Gen Z og arbeidsliv. Foredragsholder, forfatter og gründer av StudyBuddies.",
  "inLanguage": ["nb", "en"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.inacabanillas.com/blogg?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
