'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function MobileStickyBar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const contact = document.getElementById('kontakt');
    const hero = document.querySelector('section');

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide when hero CTA is still visible (top of page)
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        if (heroBottom > 0) {
          setVisible(false);
          return;
        }
      }

      // Hide when contact section is in view
      if (contact) {
        const rect = contact.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisible(false);
          return;
        }
      }

      setVisible(currentY > lastScrollY.current ? false : true);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-brand-border px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Link
        href="/foredrag#kontakt"
        className="block w-full text-center py-3 rounded-full bg-brand-indigo text-white font-semibold text-sm"
      >
        Book foredrag →
      </Link>
    </div>
  );
}
