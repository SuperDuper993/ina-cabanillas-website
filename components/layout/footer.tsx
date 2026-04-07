import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/50 py-12">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col items-center gap-6 mb-8 pb-8 border-b border-white/10">
          <p className="text-white text-lg font-semibold">Ta kontakt</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-brand-indigo font-semibold text-sm hover:bg-white/90 transition-all hover:-translate-y-0.5"
            >
              Book foredrag
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 text-white/80 font-medium text-sm hover:bg-white/10 transition-all"
            >
              Send melding
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Ina Cabanillas
          </p>
          <SocialIcons />
          <div className="flex gap-4 text-xs">
            <Link href={BRAND.linkedin} target="_blank" className="hover:text-white/70 transition-colors">LinkedIn</Link>
            <Link href="/#kontakt" className="hover:text-white/70 transition-colors">Kontakt</Link>
            <Link href="/om" className="hover:text-white/70 transition-colors">Om Ina</Link>
            <Link href="/presse" className="hover:text-white/70 transition-colors">I media</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
