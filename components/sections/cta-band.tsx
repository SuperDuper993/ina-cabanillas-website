'use client';
import { motion } from 'framer-motion';
import Link from "next/link";
import ShimmerButton from "@/components/ui/shimmer-button";

export function CtaBand() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-7 text-center"
        >
          <h2 className="text-2xl md:text-3xl text-white leading-snug max-w-lg">
            Klar for et foredrag som faktisk sitter?
          </h2>
          <div className="flex flex-col items-center gap-3">
            <Link href="/#kontakt">
              <ShimmerButton>
                Book foredrag
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
