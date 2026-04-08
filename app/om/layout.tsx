import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

const omSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Ina Cabanillas Hansen",
    "alternateName": "Ina Cabanillas",
    "description": "Norges ledende foredragsholder om Gen Z, ledelse og fremtidens arbeidsliv. Gründer av StudyBuddies, forfatter og rådgiver for menneske og teknologi.",
    "image": "https://www.inacabanillas.com/images/ina-ganeshfoto.jpg",
    "url": "https://www.inacabanillas.com",
    "jobTitle": ["Keynote Speaker", "Author", "Entrepreneur", "Advisor"],
    "alumniOf": [
      { "@type": "Organization", "name": "BI Norwegian Business School" },
      { "@type": "Organization", "name": "UC Berkeley" },
    ],
    "award": [
      "HER Awards 2024 — Årets unge inspirasjon",
      "LinkedIn Top 200 Voices globalt — Inkludering og mangfold",
    ],
    "knowsAbout": ["Gen Z", "Ledelse", "Tilhørighet på jobb", "AI og arbeidsliv", "Fremtidens arbeidsliv", "EdTech"],
    "worksFor": { "@type": "Organization", "name": "StudyBuddies", "url": "https://studybuddies.no" },
    "sameAs": [
      "https://www.linkedin.com/in/ina-cabanillas/",
      "https://www.instagram.com/ina_cabanillas/",
      "https://www.tiktok.com/@inacabanillas",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://www.inacabanillas.com" },
    { "@type": "ListItem", "position": 2, "name": "Om Ina", "item": "https://www.inacabanillas.com/om" },
  ],
};

export const metadata: Metadata = {
  title: "Om Ina Cabanillas Hansen — Gen Z-ekspert, forfatter og gründer",
  description: "Ina Cabanillas Hansen er Norges ledende stemme på Gen Z og arbeidsliv. Foredragsholder, forfatter og gründer av StudyBuddies. Vinner av HER Awards 2024. En av LinkedIns Topp 200 Voices globalt. BI og UC Berkeley.",
  keywords: [
    "Ina Cabanillas Hansen", "Gen Z ekspert Norge", "foredragsholder om unge ansatte",
    "forfatter Gen Z arbeidsliv", "StudyBuddies gründer",
    "HER Awards 2024", "LinkedIn Top 200 Voices", "Gen Z speaker Norway",
  ],
  alternates: { canonical: 'https://www.inacabanillas.com/om' },
  openGraph: {
    title: "Om Ina Cabanillas Hansen — Gen Z-ekspert og foredragsholder",
    description: "Norges ledende stemme på Gen Z og arbeidsliv. Foredragsholder, forfatter, gründer. HER Awards 2024. LinkedIn Topp 200 Voices.",
    url: 'https://www.inacabanillas.com/om',
    images: [{ url: '/images/ina-om-meg.jpg', width: 1200, height: 630, alt: 'Ina Cabanillas Hansen' }],
  },
};

export default function OmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={omSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
