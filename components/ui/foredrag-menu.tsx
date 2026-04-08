const menuItems = [
  {
    emoji: "🎬",
    title: "Se meg på scenen",
    description: "Keynote fra WOW-konferansen 2026",
    href: "#video",
  },
  {
    emoji: "🎤",
    title: "Foredragstemaer",
    description: "Fire temaer. tilpasset din bransje",
    href: "#foredrag",
  },
  {
    emoji: "🛠",
    title: "Workshop",
    description: "Halvdag eller heldag. skreddersydd",
    href: "#workshop",
  },
  {
    emoji: "📋",
    title: "Slik fungerer det",
    description: "Fra forespørsel til ferdig foredrag",
    href: "#slik-fungerer-det",
  },
];

export function ForedragMenu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="bg-white rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow group"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-lavender flex items-center justify-center text-xl">
            {item.emoji}
          </div>
          <div className="flex-1">
            <p className="font-serif text-base text-foreground leading-snug mb-1">
              {item.title}
            </p>
            <p className="text-brand-muted text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
          <svg
            className="text-brand-indigo self-end"
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  );
}
