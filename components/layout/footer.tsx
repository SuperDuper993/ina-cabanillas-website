import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/30 py-8">
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Ina Cabanillas
        </p>
        <SocialIcons />
        <div className="flex gap-4 text-xs">
          <Link href={BRAND.linkedin} target="_blank" className="hover:text-white/60 transition-colors">LinkedIn</Link>
          <Link href={BRAND.talerlisten} target="_blank" className="hover:text-white/60 transition-colors">Talerlisten</Link>
        </div>
      </div>
    </footer>
  );
}
