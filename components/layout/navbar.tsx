"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinksNO = [
  { href: "/om", label: "Om Ina" },
  { href: "/foredrag", label: "Foredrag" },
  { href: "/presse", label: "I media" },
  { href: "/blogg", label: "Blogg" },
  { href: "/#nyhetsbrev", label: "Nyhetsbrev" },
];

const navLinksEN = [
  { href: "/en#about", label: "About" },
  { href: "/en#talks", label: "Keynotes" },
  { href: "/en/press", label: "In the media" },
];

interface NavbarProps {
  lang?: "no" | "en";
}

export function Navbar({ lang = "no" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isEN = lang === "en";
  const navLinks = isEN ? navLinksEN : navLinksNO;
  const bookHref = isEN ? "/en#contact" : "/foredrag#kontakt";
  const bookLabel = isEN ? "Book Ina" : "Book Ina";
  const noHref = isEN ? "/" : "/";
  const enHref = isEN ? "/en" : "/en";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-border shadow-sm">
        <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2" onClick={() => setMobileOpen(false)}>
            <span className="font-serif text-xl text-brand-indigo">Ina</span>
            <span className="text-[10px] font-medium tracking-[2.5px] uppercase text-foreground">
              Cabanillas
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.filter(l => l.label !== "Nyhetsbrev").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={isEN ? "/en#contact" : "/kjop-bok"}
              className="text-sm font-semibold px-5 py-2 rounded-full border border-brand-indigo text-brand-indigo hover:bg-brand-indigo/5 transition-all hover:-translate-y-0.5"
            >
              {isEN ? "Buy the book" : "Kjøp boken min"}
            </Link>
            <Link
              href={bookHref}
              className="text-sm font-semibold px-5 py-2 rounded-full bg-brand-indigo text-white hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
            >
              {bookLabel}
            </Link>
            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-1 border border-brand-border rounded-full px-2 py-1">
              <Link
                href={noHref}
                className={cn(
                  "text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors",
                  !isEN
                    ? "bg-brand-indigo text-white"
                    : "text-brand-muted hover:text-foreground"
                )}
              >
                NO
              </Link>
              <Link
                href={enHref}
                className={cn(
                  "text-[11px] font-semibold px-2 py-0.5 rounded-full transition-colors",
                  isEN
                    ? "bg-brand-indigo text-white"
                    : "text-brand-muted hover:text-foreground"
                )}
              >
                EN
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("w-5 h-0.5 bg-foreground transition-transform", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-5 h-0.5 bg-foreground transition-opacity", mobileOpen && "opacity-0")} />
            <span className={cn("w-5 h-0.5 bg-foreground transition-transform", mobileOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-0 z-40 bg-brand-dark flex flex-col pt-14"
          >
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8">

              {/* Action cards */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/foredrag#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="bg-brand-indigo rounded-2xl p-5 flex flex-col gap-2 active:opacity-80 transition-opacity"
                >
                  <span className="text-2xl">🎤</span>
                  <p className="text-white font-semibold text-base leading-tight">Book foredrag</p>
                  <p className="text-white/60 text-xs">Send forespørsel</p>
                </Link>
                <Link
                  href="/kjop-bok"
                  onClick={() => setMobileOpen(false)}
                  className="bg-brand-lavender rounded-2xl p-5 flex flex-col gap-2 active:opacity-80 transition-opacity"
                >
                  <span className="text-2xl">📚</span>
                  <p className="text-brand-dark font-semibold text-base leading-tight">Kjøp boken</p>
                  <p className="text-brand-muted text-xs">349 kr</p>
                </Link>
              </div>

              {/* Nav links */}
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-4 text-white text-lg font-medium",
                      i < navLinks.length - 1 && "border-b border-white/10"
                    )}
                  >
                    {link.label}
                    <span className="text-white/30 text-base">→</span>
                  </Link>
                ))}
              </div>

              {/* Language switcher */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <p className="text-white/40 text-sm">Språk</p>
                <Link
                  href={noHref}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm font-semibold px-4 py-1.5 rounded-full border transition-colors",
                    !isEN
                      ? "bg-brand-indigo text-white border-brand-indigo"
                      : "text-white/50 border-white/20 hover:text-white"
                  )}
                >
                  NO
                </Link>
                <Link
                  href={enHref}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm font-semibold px-4 py-1.5 rounded-full border transition-colors",
                    isEN
                      ? "bg-brand-indigo text-white border-brand-indigo"
                      : "text-white/50 border-white/20 hover:text-white"
                  )}
                >
                  EN
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
