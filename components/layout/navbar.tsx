"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#om", label: "Om Ina" },
  { href: "#foredrag", label: "Foredrag" },
  { href: "/presse", label: "I media" },
  { href: "/kjop-bok", label: "Boken" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-brand-border shadow-sm"
          : "bg-transparent"
      )}
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
            href="#kontakt"
            className="text-sm font-semibold px-5 py-2 rounded-full bg-brand-indigo text-white hover:bg-brand-indigo/90 transition-all hover:-translate-y-0.5"
          >
            Book Ina
          </Link>
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
            href="#kontakt"
            className="block text-center text-sm font-semibold px-5 py-2 rounded-full bg-brand-indigo text-white"
            onClick={() => setMobileOpen(false)}
          >
            Book Ina
          </Link>
        </div>
      )}
    </nav>
  );
}
