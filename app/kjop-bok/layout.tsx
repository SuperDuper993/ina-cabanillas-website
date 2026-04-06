import type { Metadata } from "next";

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

export default function KjopBokLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
