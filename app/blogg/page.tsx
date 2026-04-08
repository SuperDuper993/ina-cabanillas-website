import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg — Ina Cabanillas | Innsikt om Gen Z, ledelse og tilhørighet",
  description: "Artikler og innsikt fra Ina Cabanillas Hansen om Gen Z, ledelse, tilhørighet og fremtidens arbeidsliv.",
  alternates: {
    canonical: "https://www.inacabanillas.com/blogg",
  },
};

export default function BloggPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-white min-h-screen">
        <div className="max-w-[720px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-foreground font-bold leading-tight mb-4">
            Innsikt fra Ina
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-12">
            Tanker om Gen Z, ledelse og tilhørighet — fra scenen, forskningen og hverdagen.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-brand-muted text-lg">Kommer snart — følg med!</p>
              <Link
                href="https://www.linkedin.com/in/ina-cabanillas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-indigo font-semibold text-sm mt-4 hover:gap-3 transition-all"
              >
                Følg meg på LinkedIn i mellomtiden →
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-brand-border pb-8">
                  <Link href={`/blogg/${post.slug}`} className="group">
                    <p className="text-brand-muted text-sm mb-2">{post.date}</p>
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-brand-indigo transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-brand-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-indigo font-semibold text-sm mt-3">
                      Les mer →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
