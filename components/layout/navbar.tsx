"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinksNO = [
  { href: "/om", label: "Om Ina" },
  { href: "/#foredrag", label: "Foredrag" },
  { href: "/presse", label: "I media" },
  { href: "/blogg", label: "Blogg" },
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
  const bookHref = isEN ? "/en#contact" : "/#kontakt";
  const bookLabel = isEN ? "Book Ina" : "Book Ina";
  const noHref = isEN ? "/" : "/";
  const enHref = isEN ? "/en" : "/en";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-border shadow-sm"
    >
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl text-brand-indigo">Ina</span>
          <span className="text-[10px] font-medium tracking-[2.5px] uppercase text-foreground">
            Cabanillas
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-brand-muted"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={isEN ? "/en#contact" : "/kjop-bok"}
            className="block text-center text-sm font-semibold px-5 py-2 rounded-full border border-brand-indigo text-brand-indigo"
            onClick={() => setMobileOpen(false)}
          >
            {isEN ? "Buy the book" : "Kjøp boken min"}
          </Link>
          <Link
            href={bookHref}
            className="block text-center text-sm font-semibold px-5 py-2 rounded-full bg-brand-indigo text-white"
            onClick={() => setMobileOpen(false)}
          >
            {bookLabel}
          </Link>
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-2 border-t border-brand-border">
            <Link
              href={noHref}
              className={cn(
                "text-xs font-semibold px-3 py-1 rounded-full border transition-colors",
                !isEN
                  ? "bg-brand-indigo text-white border-brand-indigo"
                  : "text-brand-muted border-brand-border hover:text-foreground"
              )}
              onClick={() => setMobileOpen(false)}
            >
              NO
            </Link>
            <Link
              href={enHref}
              className={cn(
                "text-xs font-semibold px-3 py-1 rounded-full border transition-colors",
                isEN
                  ? "bg-brand-indigo text-white border-brand-indigo"
                  : "text-brand-muted border-brand-border hover:text-foreground"
              )}
              onClick={() => setMobileOpen(false)}
            >
              EN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
