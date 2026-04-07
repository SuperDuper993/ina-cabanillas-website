'use client';
import React from "react";
import { motion } from "framer-motion";

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
    <section className={`bg-white py-16 md:py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-muted mb-10">
          Har holdt foredrag for
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {clients.map((client, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="text-sm font-semibold text-brand-muted/60 border border-brand-border rounded-full px-5 py-2.5 bg-brand-lavender hover:bg-brand-light-lav hover:text-brand-indigo transition-all duration-300 cursor-default"
            >
              {client.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
