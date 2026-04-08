import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Hvordan forstå og lede Gen Z",
  "author": { "@type": "Person", "name": "Ina Cabanillas Hansen", "url": "https://www.inacabanillas.com" },
  "description": "Unge slutter ikke fordi jobben er kjedelig. De slutter fordi de ikke hører til. Praktiske verktøy for ledere og HR som vil forstå, motivere og beholde Gen Z.",
  "inLanguage": "nb",
  "bookFormat": "https://schema.org/Paperback",
  "image": "https://static.wixstatic.com/media/c4e6cf_c776e1dfbf86473596107bd0b02ddfa0~mv2.jpg",
  "url": "https://www.inacabanillas.com/kjop-bok",
  "offers": [
    {
      "@type": "Offer",
      "price": "349",
      "priceCurrency": "NOK",
      "availability": "https://schema.org/InStock",
      "url": "https://betal.vipps.no/12ku4f",
      "seller": { "@type": "Person", "name": "Ina Cabanillas Hansen" },
    },
    {
      "@type": "Offer",
      "price": "349",
      "priceCurrency": "NOK",
      "availability": "https://schema.org/InStock",
      "url": "https://www.ark.no/produkt/boker/fagboker/hvordan-forsta-og-lede-gen-z-9788230369708",
      "seller": { "@type": "Organization", "name": "Ark Bokhandel" },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://www.inacabanillas.com" },
    { "@type": "ListItem", "position": 2, "name": "Kjøp boken", "item": "https://www.inacabanillas.com/kjop-bok" },
  ],
};

export const metadata: Metadata = {
  title: "Kjøp boken – Hvordan forstå og lede Gen Z",
  description: "Bestill «Hvordan forstå og lede Gen Z» av Ina Cabanillas Hansen. En praktisk guide for ledere som vil forstå, beholde og utvikle unge talent i organisasjonen.",
  keywords: [
    "kjøp bok Gen Z",
    "Hvordan forstå og lede Gen Z",
    "Ina Cabanillas bok",
    "lederbok Gen Z",
    "generasjon Z bok",
    "HR bok",
    "lederutvikling bok",
    "unge ansatte bok",
    "bestill bok",
    "fagbok ledelse",
  ],
  alternates: {
    canonical: 'https://www.inacabanillas.com/kjop-bok',
  },
  openGraph: {
    title: "Kjøp boken – Hvordan forstå og lede Gen Z | Ina Cabanillas",
    description: "Bestill den praktiske lederguiden om Gen Z av Ina Cabanillas Hansen. Lær å forstå, beholde og utvikle unge talent.",
    url: 'https://www.inacabanillas.com/kjop-bok',
    type: "website",
    locale: "nb_NO",
    siteName: "Ina Cabanillas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kjøp boken – Hvordan forstå og lede Gen Z | Ina Cabanillas",
    description: "Bestill den praktiske lederguiden om Gen Z av Ina Cabanillas Hansen.",
  },
};

export default function KjopBokLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={bookSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
