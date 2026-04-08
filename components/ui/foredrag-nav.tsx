'use client';

const navItems = [
  { label: "Se meg på scenen", href: "#video" },
  { label: "Foredragstemaer", href: "#foredrag" },
  { label: "Workshop", href: "#workshop" },
  { label: "Slik fungerer det", href: "#slik-fungerer-det" },
  { label: "Book foredrag", href: "#kontakt", primary: true },
];

export function ForedragNav() {
  return (
    <nav className="sticky top-[64px] z-30 bg-white border-b border-brand-border">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-6 py-3 max-w-[1080px] mx-auto w-max md:w-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.primary
                  ? "flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold bg-brand-indigo text-white hover:bg-brand-indigo/90 transition-colors"
                  : "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium text-brand-muted hover:text-brand-indigo hover:bg-brand-lavender transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
