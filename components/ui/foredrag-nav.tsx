'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: "Se meg på scenen", href: "#video" },
  { label: "Foredragstemaer", href: "#foredrag" },
  { label: "Workshop", href: "#workshop" },
  { label: "Slik fungerer det", href: "#slik-fungerer-det" },
  { label: "Book foredrag", href: "#kontakt", primary: true },
];

export function ForedragNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-[64px] z-30 bg-white border-b border-brand-border">
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-sm font-semibold text-brand-dark">Innhold på denne siden</span>
          <svg
            className={`text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            width="18" height="18" viewBox="0 0 18 18" fill="none"
          >
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dropdown */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="flex flex-col pb-3">
                {navItems.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 border-t border-brand-border/50 text-sm transition-colors ${
                      item.primary
                        ? 'text-brand-indigo font-semibold'
                        : 'text-brand-muted hover:text-brand-dark'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
