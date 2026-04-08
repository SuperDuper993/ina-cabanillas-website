import type { Metadata } from "next";

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
  return children;
}
