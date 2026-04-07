'use client';
import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

export interface ClientLogo {
  name: string;
  domain: string;
}

interface CustomersSectionProps {
  clients: ClientLogo[];
  className?: string;
}

export function CustomersSection({ clients = [], className }: CustomersSectionProps) {
  return (
    <section className={`bg-white py-16 md:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">
          De stoler på meg
        </p>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.3 },
              },
            },
            ...transitionVariants,
          }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8"
        >
          {clients.map((client, index) => {
            const src = `https://logo.clearbit.com/${client.domain}`;
            return (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={src}
                  alt={`${client.name} logo`}
                  height={48}
                  style={{ height: "48px", width: "auto", objectFit: "contain" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const badge = document.createElement("span");
                    badge.textContent = client.name;
                    badge.className = "text-xs font-medium text-gray-500 border border-gray-200 rounded px-2 py-1";
                    target.parentNode?.appendChild(badge);
                  }}
                />
              </div>
            );
          })}
        </AnimatedGroup>
      </div>
    </section>
  );
}
