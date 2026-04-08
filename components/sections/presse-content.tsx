'use client';

import { useState } from 'react';
import { PRESS_ARTICLES, PODCASTS, TV_RADIO, EVENTS, AWARDS, BRAND } from '@/lib/constants';

type Tab = 'alle' | 'presse' | 'podcast' | 'tv' | 'events';

const TABS: { id: Tab; label: string }[] = [
  { id: 'alle', label: 'Alle' },
  { id: 'presse', label: 'Presse' },
  { id: 'podcast', label: 'Podcast' },
  { id: 'tv', label: 'TV & Radio' },
  { id: 'events', label: 'Events & Priser' },
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

      {/* Pressekit — alltid synlig */}
      <div className="mt-16 pt-8 border-t border-brand-border">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-4">
          For media og presse
        </h2>
        <p className="text-sm text-brand-muted mb-4">
          Last ned pressebilder og logo for bruk i artikler og arrangementer.
        </p>
        <a
          href={BRAND.presskit}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-sm font-semibold text-brand-indigo border-2 border-brand-indigo rounded-full hover:bg-brand-lavender transition-colors"
        >
          Last ned pressekit (Dropbox) →
        </a>
      </div>
    </div>
  );
}
