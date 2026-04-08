import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Blogg — Ina Cabanillas | Innsikt om Gen Z, ledelse og tilhørighet",
  description: "Artikler og innsikt fra Ina Cabanillas Hansen om Gen Z, ledelse, tilhørighet og fremtidens arbeidsliv.",
  keywords: [
    "Gen Z blogg", "ledelse unge ansatte artikler", "tilhørighet på jobb",
    "fremtidens arbeidsliv innsikt", "Gen Z tips ledere", "hvorfor slutter unge ansatte",
    "AI og arbeidsliv", "Ina Cabanillas artikler",
  ],
  alternates: {
    canonical: "https://www.inacabanillas.com/blogg",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Innsikt fra Ina",
  "description": "Tanker om Gen Z, ledelse og tilhørighet — fra scenen, forskningen og hverdagen.",
  "url": "https://www.inacabanillas.com/blogg",
  "author": { "@type": "Person", "name": "Ina Cabanillas Hansen", "url": "https://www.inacabanillas.com" },
  "inLanguage": "nb",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://www.inacabanillas.com" },
    { "@type": "ListItem", "position": 2, "name": "Blogg", "item": "https://www.inacabanillas.com/blogg" },
  ],
};

export default function BloggPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />
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
