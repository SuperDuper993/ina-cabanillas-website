'use client';

import { useState } from 'react';
import { PRESS_ARTICLES, PODCASTS, TV_RADIO, EVENTS, AWARDS, BRAND, IMAGES } from '@/lib/constants';

const PRESS_PHOTOS = [
  { src: IMAGES.hero, alt: 'Ina Cabanillas Hansen — pressebilete 1' },
  { src: IMAGES.portrait, alt: 'Ina Cabanillas Hansen — portrett' },
  { src: IMAGES.scene, alt: 'Ina Cabanillas Hansen — på scenen' },
];

const KEY_FACTS = [
  { label: 'Alder', value: '25 år' },
  { label: 'Hjemsted', value: 'Bodø' },
  { label: 'Utdanning', value: 'BI / UC Berkeley' },
  { label: 'Selskap', value: 'StudyBuddies' },
  { label: 'Pris', value: 'HER Awards 2024 — Årets unge inspirasjon' },
  { label: 'Anerkjennelse', value: 'LinkedIn Top 200 Voices globalt' },
];

type Tab = 'alle' | 'presse' | 'podcast' | 'tv' | 'events' | 'pressekit';

const TABS: { id: Tab; label: string }[] = [
  { id: 'alle', label: 'Alle' },
  { id: 'presse', label: 'Presse' },
  { id: 'podcast', label: 'Podcast' },
  { id: 'tv', label: 'TV & Radio' },
  { id: 'events', label: 'Events & Priser' },
  { id: 'pressekit', label: 'Pressekit' },
];

function parseDateStr(str: string): number {
  if (!str) return 0;
  const d = new Date(str);
  if (!isNaN(d.getTime())) return d.getTime();
  const year = parseInt(str);
  if (!isNaN(year)) return new Date(year, 0, 1).getTime();
  return 0;
}

type MediaItem = {
  type: 'presse' | 'podcast' | 'tv';
  title: string;
  meta: string;
  date: string;
  url: string;
  dateTs: number;
};

const allMediaItems: MediaItem[] = [
  ...PRESS_ARTICLES.map((a) => ({
    type: 'presse' as const,
    title: a.title,
    meta: a.source,
    date: a.date,
    url: a.url,
    dateTs: parseDateStr(a.date),
  })),
  ...PODCASTS.map((p) => ({
    type: 'podcast' as const,
    title: `${p.title}: ${p.episode}`,
    meta: 'Podcast',
    date: p.date,
    url: p.url,
    dateTs: parseDateStr(p.date),
  })),
  ...TV_RADIO.map((t) => ({
    type: 'tv' as const,
    title: t.show,
    meta: t.channel,
    date: t.date,
    url: t.url,
    dateTs: parseDateStr(t.date),
  })),
].sort((a, b) => b.dateTs - a.dateTs);

const sortedPresse = [...PRESS_ARTICLES].sort(
  (a, b) => parseDateStr(b.date) - parseDateStr(a.date)
);
const sortedPodcasts = [...PODCASTS].sort(
  (a, b) => parseDateStr(b.date) - parseDateStr(a.date)
);
const sortedTv = [...TV_RADIO].sort(
  (a, b) => parseDateStr(b.date) - parseDateStr(a.date)
);

const TYPE_BADGE: Record<MediaItem['type'], string> = {
  presse: 'Presse',
  podcast: 'Podcast',
  tv: 'TV & Radio',
};

const TYPE_COLOR: Record<MediaItem['type'], string> = {
  presse: 'bg-brand-lavender text-brand-indigo',
  podcast: 'bg-[#e8f4e8] text-[#2a6e2a]',
  tv: 'bg-[#fef3e2] text-[#8a5a00]',
};

export function PresseContent() {
  const [activeTab, setActiveTab] = useState<Tab>('alle');

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl mb-2">I media</h1>
      <p className="text-brand-muted text-sm mb-8">Artikler, podcaster og medieomtaler</p>

      {/* Tab pills */}
      <div className="overflow-x-auto -mx-6 px-6 mb-10">
        <div className="flex gap-2 whitespace-nowrap">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-brand-indigo text-white'
                  : 'bg-brand-lavender text-brand-muted hover:bg-brand-light-lav'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alle */}
      {activeTab === 'alle' && (
        <div className="space-y-0">
          {allMediaItems.map((item, i) => (
            <a
              key={`${item.type}-${i}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center py-4 border-b border-brand-lavender hover:pl-2 transition-all group gap-4"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className={`shrink-0 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${TYPE_COLOR[item.type]}`}>
                  {TYPE_BADGE[item.type]}
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-brand-indigo transition-colors truncate">
                  {item.title}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-semibold text-brand-muted hidden sm:block">{item.meta}</span>
                <span className="text-xs text-brand-border">{item.date}</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Presse */}
      {activeTab === 'presse' && (
        <div className="space-y-0">
          {sortedPresse.map((article) => (
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
              <span className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-semibold text-brand-muted">{article.source}</span>
                <span className="text-xs text-brand-border">{article.date}</span>
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Podcast */}
      {activeTab === 'podcast' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sortedPodcasts.map((pod) => (
            <a
              key={pod.url}
              href={pod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-brand-lavender rounded-xl hover:bg-brand-light-lav transition-colors group"
            >
              <p className="text-[9px] font-bold tracking-wider uppercase text-brand-indigo mb-2">
                Podcast · {pod.date}
              </p>
              <h3 className="font-serif text-base mb-1">{pod.title}</h3>
              <p className="text-xs text-brand-muted">{pod.episode}</p>
            </a>
          ))}
        </div>
      )}

      {/* TV & Radio */}
      {activeTab === 'tv' && (
        <div className="space-y-0">
          {sortedTv.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-baseline py-4 border-b border-brand-lavender hover:pl-2 transition-all group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-brand-indigo transition-colors flex-1 mr-6">
                {item.show}
              </span>
              <span className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-semibold text-brand-muted">{item.channel}</span>
                <span className="text-xs text-brand-border">{item.date}</span>
              </span>
            </a>
          ))}
          <div className="flex justify-between items-baseline py-4 border-b border-brand-lavender">
            <span className="text-sm font-medium text-foreground flex-1 mr-6">TV 2</span>
            <span className="text-xs font-semibold text-brand-muted">TV</span>
          </div>
        </div>
      )}

      {/* Events & Priser */}
      {activeTab === 'events' && (
        <div>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-6 pb-3 border-b border-brand-border">
            Konferanser og events
          </h2>
          {EVENTS.map((event) => (
            <div key={event.name} className="flex items-center gap-5 py-4 border-b border-brand-lavender">
              <span className="font-serif text-xl text-brand-indigo min-w-[48px]">{event.year}</span>
              <div>
                {event.url ? (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm hover:text-brand-indigo transition-colors"
                  >
                    {event.name}
                  </a>
                ) : (
                  <h3 className="font-semibold text-sm">{event.name}</h3>
                )}
                <p className="text-xs text-brand-muted">{event.description}</p>
              </div>
            </div>
          ))}

          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mt-12 mb-6 pb-3 border-b border-brand-border">
            Priser og nominasjoner
          </h2>
          {AWARDS.map((award) => (
            <div key={award.name} className="flex items-center gap-5 py-4 border-b border-brand-lavender">
              <span className="font-serif text-xl text-brand-indigo min-w-[48px]">{award.year}</span>
              <div>
                <h3 className="font-semibold text-sm">{award.name}</h3>
                <p className="text-xs text-brand-muted">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pressekit-tab */}
      {activeTab === 'pressekit' && (
        <div>
          {/* Bilder — store og tydelige */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-5">Pressebilder</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {PRESS_PHOTOS.map((photo, i) => (
                <a
                  key={i}
                  href={photo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-lavender block"
                  title="Åpne i full størrelse"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Åpne i full størrelse ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <a
              href={BRAND.presskit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-brand-indigo text-white rounded-full hover:bg-brand-indigo/90 transition-colors"
            >
              Last ned alle bilder og logo (Dropbox) →
            </a>
          </div>

          {/* Bio */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-5">Biografi</p>
            <div className="space-y-4">
              <div className="p-5 bg-brand-lavender rounded-2xl">
                <p className="text-[10px] font-bold tracking-wider uppercase text-brand-indigo mb-3">Kort (1–2 setninger)</p>
                <p className="text-sm text-foreground leading-relaxed select-all cursor-text">
                  Ina Cabanillas Hansen (25) er foredragsholder, forfatter og gründer av StudyBuddies. Hun er Norges ledende stemme på Gen Z og arbeidsliv, og holder keynote og workshop for ledere og HR i hele Norden.
                </p>
              </div>
              <div className="p-5 bg-brand-lavender rounded-2xl">
                <p className="text-[10px] font-bold tracking-wider uppercase text-brand-indigo mb-3">Lang (avsnitt)</p>
                <p className="text-sm text-foreground leading-relaxed select-all cursor-text">
                  Ina Cabanillas Hansen (25) er foredragsholder, forfatter og gründer fra Bodø. Hun er kjent som Norges skarpeste stemme på Gen Z og fremtidens arbeidsliv — og snakker jevnlig i NRK, TV 2 og Dagsnytt 18 om hvorfor unge slutter, hva ledere misforstår og hva som faktisk skal til for å bygge tilhørighet på jobben. Ina er gründer av StudyBuddies, vinneren av HER Awards 2024 «Årets unge inspirasjon» og er kåret til én av LinkedIns topp 200 globale stemmer innen mangfold og inkludering. Hun holder keynote og workshop for HR-ledere, mellomledere og konferanser i hele Norden — med innsikt fra innsiden av generasjonen.
                </p>
              </div>
            </div>
          </div>

          {/* Nøkkelfakta */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-5">Nøkkelfakta</p>
            <div className="grid grid-cols-2 gap-3">
              {KEY_FACTS.map((fact, i) => (
                <div key={i} className="p-4 bg-brand-lavender rounded-xl">
                  <p className="text-xs text-brand-muted mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div className="p-5 bg-brand-indigo rounded-2xl text-white">
            <p className="font-semibold mb-1">Intervju eller gjesteoppdrag?</p>
            <p className="text-sm text-white/80 mb-4">Book et 15 min samtale — så tar vi det derfra.</p>
            <a
              href="https://calendar.app.google/DdqRYwRpniLiXgcm6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 text-sm font-semibold bg-white text-brand-indigo rounded-full hover:bg-brand-lavender transition-colors"
            >
              Book samtale →
            </a>
          </div>
        </div>
      )}

      {/* Teaser — synlig på alle andre tabs */}
      {activeTab !== 'pressekit' && (
        <div className="mt-16 pt-8 border-t border-brand-border flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-foreground">For media og presse</p>
            <p className="text-xs text-brand-muted mt-0.5">Bilder, bio og nøkkelfakta</p>
          </div>
          <button
            onClick={() => setActiveTab('pressekit')}
            className="px-5 py-2.5 text-sm font-semibold text-brand-indigo border-2 border-brand-indigo rounded-full hover:bg-brand-lavender transition-colors shrink-0"
          >
            Åpne pressekit →
          </button>
        </div>
      )}
    </div>
  );
}
