'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { CLIENTS } from '@/lib/constants';

export function LogoCloudSection() {
  return (
    <section className="border-y border-brand-border py-10 bg-white">
      <p className="text-center text-sm font-medium tracking-widest uppercase text-brand-muted mb-6">
        Har holdt foredrag for
      </p>
      <InfiniteSlider gap={32} duration={30} durationOnHover={60}>
        {CLIENTS.map((client) => (
          <span
            key={client.domain}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-brand-muted/70 tracking-wide whitespace-nowrap select-none hover:text-brand-indigo transition-colors duration-300"
          >
            {client.name}
          </span>
        ))}
      </InfiniteSlider>
      <div className="flex flex-col items-center gap-2 mt-8">
        <a
          href="/foredrag#kontakt"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
        >
          Book meg som foredragsholder
        </a>
      </div>
    </section>
  );
}
