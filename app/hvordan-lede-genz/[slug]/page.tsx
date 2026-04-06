import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BOOK_CONTENT } from "@/lib/book-content";
import { BRAND } from "@/lib/constants";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const validSlugs = Object.keys(BOOK_CONTENT);

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = BOOK_CONTENT[slug];
  if (!content) return {};
  return {
    title: content.title,
    description: content.subtitle,
    robots: { index: false, follow: false },
  };
}

export default async function BookArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = BOOK_CONTENT[slug];
  if (!content) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-brand-dark">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <span className="text-3xl mb-4 block">{content.icon}</span>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
              Bonusmateriale fra boken
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-3">{content.title}</h1>
            <p className="text-white/50">{content.subtitle}</p>
          </div>
        </section>

        <article className="py-16 max-w-2xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {content.paragraphs.map((para, i) => {
              // Check if paragraph looks like a heading (short, no period at end)
              const isHeading = para.length < 80 && !para.endsWith('.') && !para.endsWith('?') && !para.includes('. ');

              if (isHeading) {
                return (
                  <h2 key={i} className="font-serif text-2xl text-foreground mt-10 mb-4">
                    {para}
                  </h2>
                );
              }

              return (
                <p key={i} className="text-brand-muted leading-relaxed mb-5 text-[15px]">
                  {para}
                </p>
              );
            })}
          </div>

          <div className="border-t border-brand-border mt-12 pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link href="/hvordan-lede-genz" className="text-sm text-brand-indigo hover:underline">
              ← Tilbake til oversikten
            </Link>
            <a href={BRAND.vippsLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-brand-indigo text-white text-sm font-semibold hover:bg-brand-indigo/90 transition-all">
              Kjøp boken
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
