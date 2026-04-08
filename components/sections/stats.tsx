'use client';
import { motion } from 'framer-motion';
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-brand-dark py-20">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center md:text-left">
              <p className="text-white text-5xl md:text-6xl font-serif mb-3">
                {stat.value}
              </p>
              <p className="text-white/45 text-base leading-snug mb-2">
                {stat.label}
              </p>
              <p className="text-white/50 text-sm">
                {stat.source}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
