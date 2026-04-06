"use client"

import { useState } from "react"
import { TESTIMONIALS_TALERLISTEN } from "@/lib/constants"

const testimonials = TESTIMONIALS_TALERLISTEN.slice(0, 3).map(t => ({
  quote: t.highlight,
  name: t.author,
  role: `${t.org}`,
}))

interface TestimonialsMinimalProps {
  variant?: "light" | "dark"
}

export function TestimonialsMinimal({ variant = "light" }: TestimonialsMinimalProps) {
  const [active, setActive] = useState(0)

  const isDark = variant === "dark"

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-8">
      <div className="relative min-h-[80px] mb-8">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`absolute inset-0 text-lg md:text-xl font-serif leading-relaxed transition-all duration-500 ease-out ${
              isDark ? "text-white/90" : "text-foreground"
            } ${
              active === i
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-4 blur-sm pointer-events-none"
            }`}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-brand-indigo"
                  : isDark
                  ? "bg-white/20 hover:bg-white/40"
                  : "bg-brand-border hover:bg-brand-muted"
              }`}
            />
          ))}
        </div>
        <div className={`h-6 w-px ${isDark ? "bg-white/20" : "bg-brand-border"}`} />
        <div className="relative flex-1 min-h-[36px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-400 ease-out ${
                active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
              }`}
            >
              <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-foreground"}`}>{t.name}</span>
              <span className={`text-xs ${isDark ? "text-white/55" : "text-brand-muted"}`}>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
