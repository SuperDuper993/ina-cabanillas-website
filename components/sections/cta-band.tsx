import Link from "next/link";
import ShimmerButton from "@/components/ui/shimmer-button";

export function CtaBand() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col items-center gap-7 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
          Ta neste steg
        </p>
        <h2 className="text-2xl md:text-3xl text-white leading-snug max-w-lg">
          Klar for å forstå og lede neste generasjon?
        </h2>
        <Link href="/#kontakt">
          <ShimmerButton>
            Book en samtale
          </ShimmerButton>
        </Link>
      </div>
    </section>
  );
}
