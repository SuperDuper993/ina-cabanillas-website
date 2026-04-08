import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PRESS_ARTICLES, PODCASTS, TV_RADIO } from "@/lib/constants";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PresseContent } from "@/components/sections/presse-content";

export const metadata: Metadata = {
  title: "I media",
  description: "Ina Cabanillas Hansen i media. Artikler i NRK, Dagsavisen, Khrono, kode24, forskning.no. Podcaster, events og priser.",
  keywords: ["Ina Cabanillas media", "foredragsholder presse", "Gen Z artikler", "podcast tilhørighet"],
};

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ina Cabanillas Hansen i media",
  "description": "Medieomtaler, podkaster, TV og radio med Ina Cabanillas Hansen",
  "itemListElement": [
    ...PRESS_ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": a.title,
      "url": a.url,
      "description": `${a.source} · ${a.date}`,
    })),
    ...PODCASTS.map((p, i) => ({
      "@type": "ListItem",
      "position": PRESS_ARTICLES.length + i + 1,
      "name": `${p.title}: ${p.episode}`,
      "url": p.url,
      "description": `Podcast · ${p.date}`,
    })),
    ...TV_RADIO.map((t, i) => ({
      "@type": "ListItem",
      "position": PRESS_ARTICLES.length + PODCASTS.length + i + 1,
      "name": t.show,
      "url": t.url,
      "description": `${t.channel} · ${t.date}`,
    })),
  ],
};

export default function PressePage() {
  return (
    <>
      <JsonLd data={pressSchema} />
      <Navbar />
      <main className="pt-20">
        <PresseContent />
      </main>
      <Footer />
    </>
  );
}
