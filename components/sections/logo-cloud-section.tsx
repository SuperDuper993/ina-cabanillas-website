'use client';

import { useState } from 'react';
import Image from 'next/image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { CLIENTS } from '@/lib/constants';

function ClientLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const src = `https://logo.clearbit.com/${domain}`;

  if (failed) {
    return (
      <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-brand-muted/70 tracking-wide whitespace-nowrap select-none">
        {name}
      </span>
    );
  }

  return (
    <div className="flex items-center justify-center h-8 px-3 group">
      <Image
        src={src}
        alt={name}
        width={120}
        height={32}
        className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        onError={() => setFailed(true)}
        unoptimized
      />
    </div>
  );
}

export function LogoCloudSection() {
  return (
    <section className="border-y border-brand-border py-10 bg-white">
      <p className="text-center text-xs font-medium tracking-widest uppercase text-brand-muted mb-6">
        Har holdt foredrag for
      </p>
      <InfiniteSlider gap={32} duration={30} durationOnHover={60}>
        {CLIENTS.map((client) => (
          <ClientLogo key={client.domain} name={client.name} domain={client.domain} />
        ))}
      </InfiniteSlider>
      <div className="flex flex-col items-center gap-2 mt-8">
        <a
          href="/#kontakt"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
        >
          Book meg som foredragsholder
        </a>
      </div>
    </section>
  );
}
