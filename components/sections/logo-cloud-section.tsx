import { LogoCloud } from "@/components/ui/logo-cloud";
import { LOGOS } from "@/lib/constants";

export function LogoCloudSection() {
  return (
    <section className="border-y border-brand-border py-10 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-brand-muted mb-6">
          Har holdt foredrag for
        </p>
      </div>
      <LogoCloud logos={LOGOS} />
    </section>
  );
}
