import { TALKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TalksSection() {
  return (
    <section id="foredrag" className="py-24 bg-brand-lavender">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
            Foredrag
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground">
            Foredragstemaer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TALKS.map((talk) => (
            <div
              key={talk.title}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <span
                className={cn(
                  "text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full self-start",
                  talk.tagVariant === "primary"
                    ? "bg-brand-indigo text-white"
                    : "bg-brand-light-lav text-brand-indigo"
                )}
              >
                {talk.tag}
              </span>
              <h3 className="font-serif text-xl text-foreground leading-snug">
                {talk.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {talk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
