import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "In the media | Ina Cabanillas — Gen Z Keynote Speaker",
  description: "Ina Cabanillas Hansen in the media. Press articles, podcasts, international events, and awards. Nordic Gen Z speaker covering leadership, belonging, and young talent.",
  keywords: ["Ina Cabanillas media", "Gen Z speaker press", "Nordic keynote speaker", "belonging at work", "Gen Z leadership podcast"],
  alternates: {
    canonical: "https://www.inacabanillas.com/en/press",
  },
};

const PRESS_ARTICLES_EN = [
  { title: "Age means nothing", source: "HR-magasinet", date: "Mar 2026", url: "https://www.hrmagasinet.no/gen-z-ina-cabanillas-hansen/alder-har-ingen-ting-a-si/1514220" },
  { title: "Calls AI recruitment an 'HR nightmare'", source: "kode24", date: "Dec 2025", url: "https://www.kode24.no/artikkel/kaller-ki-til-rekruttering-et-hr-maremart/252094" },
  { title: "Are they lazy? Gen Z hits back at stereotypes", source: "Dagsavisen", date: "Nov 2025", url: "https://www.dagsavisen.no/nyheter/er-de-late-gen-z-slar-tilbake-mot-fordommene/10051370" },
  { title: "Is Gen Z lazy and demanding? New book says look at leadership first", source: "Kom24", date: "Nov 2025", url: "https://www.kom24.no/arbeidsliv-bokutgivelse-gen-z/er-gen-z-late-og-krevende/871275" },
  { title: "What happens when Gen Z takes over?", source: "forskning.no", date: "Aug 2025", url: "https://www.forskning.no/arbeid-arbeidsliv-barn-og-ungdom/hvordan-skal-det-ga-nar-generasjon-z-tar-over/2541276" },
  { title: "How Ina used AI in her job application — and got the job", source: "NRK", date: "2025", url: "https://www.nrk.no/norge/slik-brukte-ina-ki-i-soknaden-_-og-landet-jobben-1.17719501" },
  { title: "Important award for 24-year-old from Northern Norway", source: "NRK Nordland", date: "May 2025", url: "https://www.nrk.no/nordland/viktig-pris-til-24-aring-fra-bodo-1.17401311" },
  { title: "Student wins national inspiration prize", source: "Khrono", date: "2025", url: "https://www.khrono.no/notice/965206" },
];

const PODCASTS_EN = [
  { title: "Mangfoldsmikrofonen", episode: "How to understand and lead Gen Z", date: "Apr 2026", url: "https://open.spotify.com/episode/13xjqN9YM4JqYgQh4TX9Pw" },
  { title: "Enda Bedre", episode: "What's wrong with Gen Z?", date: "Apr 2026", url: "https://open.spotify.com/episode/3rZ1NOHsF761v3xDsJQWgY" },
  { title: "Teknologi og mennesker", episode: "Busting 10 myths about Generation Z", date: "Feb 2025", url: "https://open.spotify.com/episode/0lqLhI8aLvz5DursZ32Ax9" },
  { title: "Teknologi og mennesker", episode: "Live from Arendalsuka", date: "2024", url: "https://podtail.com/en/podcast/teknologi-av-og-for-mennesker/-56-live-fra-arendalsuka-slik-rigger-du-for-fart-o/" },
];

const EVENTS_EN = [
  { year: "2026", name: "WOW Conference", description: "Keynote on Gen Z and leadership", url: null },
  { year: "2025", name: "Katapult Future Fest", description: "Speaker — innovation and social change. One of Norway's leading impact & futures festivals.", url: "https://katapultfuturefest.com/voices/ina-cabanillas-hansen" },
  { year: "2025", name: "Arendalsuka", description: "Main programme. Panel debate and keynote on Gen Z in the workplace.", url: null },
  { year: "2025", name: "SHE Conference", description: "Leadership and inclusion", url: null },
];

const AWARDS_EN = [
  { year: "2025", name: "Young Inspiration of the Year", description: "National Norwegian award for inclusion, community, and student mental health" },
  { year: "2025", name: "LinkedIn Top 200 Voices", description: "Inclusion and diversity — global list" },
  { year: "2024", name: "Nominated: Female Entrepreneur of the Year", description: "Western Norway" },
];

const TV_RADIO_EN = [
  { show: "Debatten", channel: "NRK TV", date: "Mar 2025", url: "https://tv.nrk.no/serie/debatten/sesong/202503/episode/NNFA51030625" },
  { show: "Helgemorgen", channel: "NRK TV", date: "Nov 2025", url: "https://tv.nrk.no/serie/helgemorgen-tv/sesong/202511/episode/DNRR62009425" },
  { show: "Dagsnytt 18", channel: "NRK Radio", date: "Jan 2025", url: "https://radio.nrk.no/serie/dagsnytt-atten/sesong/202501/NMAG03001025" },
];

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ina Cabanillas Hansen in the media",
  "description": "Press coverage, podcasts, TV and radio appearances featuring Ina Cabanillas Hansen",
  "itemListElement": [
    ...PRESS_ARTICLES_EN.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": a.title,
      "url": a.url,
      "description": `${a.source} · ${a.date}`,
    })),
    ...PODCASTS_EN.map((p, i) => ({
      "@type": "ListItem",
      "position": PRESS_ARTICLES_EN.length + i + 1,
      "name": `${p.title}: ${p.episode}`,
      "url": p.url,
      "description": `Podcast · ${p.date}`,
    })),
    ...TV_RADIO_EN.map((t, i) => ({
      "@type": "ListItem",
      "position": PRESS_ARTICLES_EN.length + PODCASTS_EN.length + i + 1,
      "name": t.show,
      "url": t.url,
      "description": `${t.channel} · ${t.date}`,
    })),
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inacabanillas.com/en" },
    { "@type": "ListItem", "position": 2, "name": "In the media", "item": "https://www.inacabanillas.com/en/press" },
  ],
};

const QUOTES_EN = [
  {
    quote: "Communicates her knowledge, experiences and reflections in such a way that makes listening to her very enjoyable and inspirational. She speaks with enthusiasm and conviction.",
    author: "Mikael Heian Frølandshagen",
    org: "KANDU",
  },
  {
    quote: "An inspiring speaker whose message resonates and leads to concrete action. Highly recommended!",
    author: "Astrid Rønning Skaugseth",
    org: "Stiftelsen Sykehusbarn",
  },
  {
    quote: "Ina-Christine stood out in my Experiential Entrepreneurship course at UC Berkeley as an exceptionally driven and creative individual. As CEO of her team, she led them to deliver the top-rated presentation to a panel of investors.",
    author: "Naeem Zafar",
    org: "CEO Coach, UC Berkeley Professor",
  },
];

export default function EnglishPressPage() {
  return (
    <>
      <JsonLd data={pressSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar lang="en" />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="font-serif text-4xl mb-2">In the media</h1>
          <p className="text-brand-muted text-sm mb-12">Press coverage, podcasts, and events</p>

          {/* Press */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Press</h2>
            <div className="space-y-0">
              {PRESS_ARTICLES_EN.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-baseline py-4 border-b border-brand-lavender hover:pl-2 transition-all group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-brand-indigo transition-colors flex-1 mr-6">
                    {article.title}
                  </span>
                  <span className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs font-semibold text-brand-muted">{article.source}</span>
                    <span className="text-xs text-brand-border">{article.date}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Podcasts */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Podcasts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PODCASTS_EN.map((pod) => (
                <a
                  key={pod.url}
                  href={pod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-brand-lavender rounded-xl hover:bg-brand-light-lav transition-colors group"
                >
                  <p className="text-[9px] font-bold tracking-wider uppercase text-brand-indigo mb-2">Podcast · {pod.date}</p>
                  <h3 className="font-serif text-base mb-1">{pod.title}</h3>
                  <p className="text-xs text-brand-muted">{pod.episode}</p>
                </a>
              ))}
            </div>
          </section>

          {/* TV & Radio */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">TV & Radio</h2>
            <div className="space-y-0">
              {TV_RADIO_EN.map((item) => (
                <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="flex justify-between items-baseline py-4 border-b border-brand-lavender hover:pl-2 transition-all group">
                  <span className="text-sm font-medium text-foreground group-hover:text-brand-indigo transition-colors flex-1 mr-6">{item.show}</span>
                  <span className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs font-semibold text-brand-muted">{item.channel}</span>
                    <span className="text-xs text-brand-border">{item.date}</span>
                  </span>
                </a>
              ))}
              <div className="flex justify-between items-baseline py-4 border-b border-brand-lavender">
                <span className="text-sm font-medium text-foreground flex-1 mr-6">TV 2</span>
                <span className="text-xs font-semibold text-brand-muted">Norway national TV</span>
              </div>
            </div>
          </section>

          {/* Events */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Conferences & events</h2>
            {EVENTS_EN.map((event) => (
              <div key={event.name} className="flex items-center gap-5 py-4 border-b border-brand-lavender">
                <span className="font-serif text-xl text-brand-indigo min-w-[48px]">{event.year}</span>
                <div>
                  {event.url ? (
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:text-brand-indigo transition-colors">
                      {event.name}
                    </a>
                  ) : (
                    <h3 className="font-semibold text-sm">{event.name}</h3>
                  )}
                  <p className="text-xs text-brand-muted">{event.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Awards */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Awards & nominations</h2>
            {AWARDS_EN.map((award) => (
              <div key={award.name} className="flex items-center gap-5 py-4 border-b border-brand-lavender">
                <span className="font-serif text-xl text-brand-indigo min-w-[48px]">{award.year}</span>
                <div>
                  <h3 className="font-semibold text-sm">{award.name}</h3>
                  <p className="text-xs text-brand-muted">{award.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* What people say */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">What people say</h2>
            <div className="space-y-4">
              {QUOTES_EN.map((q) => (
                <blockquote key={q.author} className="bg-brand-lavender rounded-2xl p-6">
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-semibold text-sm text-foreground">{q.author}</p>
                    <p className="text-xs text-brand-muted">{q.org}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Press kit */}
          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">For media & press</h2>
            <p className="text-sm text-brand-muted mb-4">Download press photos and logo for use in articles and events.</p>
            <a
              href={BRAND.presskit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-semibold text-brand-indigo border-2 border-brand-indigo rounded-full hover:bg-brand-lavender transition-colors"
            >
              Download press kit (Dropbox) →
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
