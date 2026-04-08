const menuItems = [
  {
    number: "01",
    title: "Se meg på scenen",
    description: "Keynote fra WOW-konferansen 2026",
    href: "#video",
  },
  {
    number: "02",
    title: "Foredragstemaer",
    description: "Fire temaer. tilpasset din bransje",
    href: "#foredrag",
  },
  {
    number: "03",
    title: "Workshop",
    description: "Halvdag eller heldag. skreddersydd",
    href: "#workshop",
  },
  {
    number: "04",
    title: "Slik fungerer det",
    description: "Fra forespørsel til foredrag eller workshop",
    href: "#slik-fungerer-det",
  },
  {
    number: "05",
    title: "Tilbakemeldinger",
    description: "7 av 7 gir toppkarakter",
    href: "#testimonials",
  },
];

export function ForedragMenu() {
  return (
    <div className="mt-10 border-t border-brand-border/50">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex items-center justify-between gap-4 py-4 border-b border-brand-border/50 group hover:bg-white/40 -mx-6 px-6 transition-colors"
        >
          <div className="flex items-start gap-4">
            <span className="font-serif text-brand-indigo text-lg leading-none pt-0.5 flex-shrink-0">
              {item.number}
            </span>
            <div>
              <p className="font-medium text-foreground text-base leading-snug">
                {item.title}
              </p>
              <p className="text-brand-muted text-sm mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
          <svg
            className="text-brand-indigo flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  );
}
