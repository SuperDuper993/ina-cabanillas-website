import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PRESS_ARTICLES, PODCASTS, EVENTS, AWARDS, BRAND } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I media",
  description: "Ina Cabanillas Hansen i media. Artikler i NRK, Dagsavisen, Khrono, kode24, forskning.no. Podcaster, events og priser.",
  keywords: ["Ina Cabanillas media", "foredragsholder presse", "Gen Z artikler", "podcast tilhørighet"],
};

export default function PressePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="font-serif text-4xl mb-2">I media</h1>
          <p className="text-brand-muted text-sm mb-12">Artikler, podcaster og medieomtaler</p>

          {/* Presse */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Presse</h2>
            <div className="space-y-0">
              {PRESS_ARTICLES.map((article) => (
                <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="flex justify-between items-baseline py-4 border-b border-brand-lavender hover:pl-2 transition-all group">
                  <span className="text-sm font-medium text-foreground group-hover:text-brand-indigo transition-colors flex-1 mr-6">{article.title}</span>
                  <span className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs font-semibold text-brand-muted">{article.source}</span>
                    <span className="text-xs text-brand-border">{article.date}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Podcaster */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Podcaster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PODCASTS.map((pod) => (
                <a key={pod.url} href={pod.url} target="_blank" rel="noopener noreferrer" className="p-5 bg-brand-lavender rounded-xl hover:bg-brand-light-lav transition-colors group">
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
            <div className="py-3 text-sm text-foreground">NRK <span className="text-brand-muted ml-4 text-xs">TV / Nyheter</span></div>
            <div className="py-3 text-sm text-foreground border-t border-brand-lavender">TV 2 <span className="text-brand-muted ml-4 text-xs">TV</span></div>
          </section>

          {/* Events */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Konferanser og events</h2>
            {EVENTS.map((event) => (
              <div key={event.name} className="flex items-center gap-5 py-4 border-b border-brand-lavender">
                <span className="font-serif text-xl text-brand-indigo min-w-[48px]">{event.year}</span>
                <div>
                  {event.url ? (
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:text-brand-indigo transition-colors">{event.name}</a>
                  ) : (
                    <h3 className="font-semibold text-sm">{event.name}</h3>
                  )}
                  <p className="text-xs text-brand-muted">{event.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Priser */}
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">Priser og nominasjoner</h2>
            {AWARDS.map((award) => (
              <div key={award.name} className="flex items-center gap-5 py-4 border-b border-brand-lavender">
                <span className="font-serif text-xl text-brand-indigo min-w-[48px]">{award.year}</span>
                <div>
                  <h3 className="font-semibold text-sm">{award.name}</h3>
                  <p className="text-xs text-brand-muted">{award.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Pressekit */}
          <section>
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">For media og presse</h2>
            <p className="text-sm text-brand-muted mb-4">Last ned pressebilder og logo for bruk i artikler og arrangementer.</p>
            <a href={BRAND.presskit} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 text-sm font-semibold text-brand-indigo border-2 border-brand-indigo rounded-full hover:bg-brand-lavender transition-colors">
              Last ned pressekit (Dropbox) →
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
