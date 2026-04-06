import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presse",
  description: "Presserom for Ina Cabanillas Hansen – journalist og redaktør. Last ned pressemateriell, bilder, bio og finn kontaktinformasjon for mediehenvendelser.",
  keywords: [
    "Ina Cabanillas presse",
    "pressemateriell",
    "pressebilder",
    "mediehenvendelser",
    "foredragsholder media",
    "Gen Z ekspert media",
    "intervju Ina Cabanillas",
    "bio foredragsholder",
    "kode24",
    "NRK",
    "Dagsavisen",
  ],
  alternates: {
    canonical: 'https://www.inacabanillas.com/presse',
  },
  openGraph: {
    title: "Presse | Ina Cabanillas",
    description: "Pressemateriell, bilder og kontaktinfo for mediehenvendelser om Ina Cabanillas Hansen – Gen Z-ekspert, foredragsholder og forfatter.",
    url: 'https://www.inacabanillas.com/presse',
    type: "website",
    locale: "nb_NO",
    siteName: "Ina Cabanillas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presse | Ina Cabanillas",
    description: "Pressemateriell, bilder og kontaktinfo for mediehenvendelser – Ina Cabanillas Hansen.",
  },
};

export default function PresseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
