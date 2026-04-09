import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.inacabanillas.com/blogg/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Ina Cabanillas Hansen"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "image": "https://www.inacabanillas.com/images/ina-ganeshfoto.jpg",
    "author": { "@type": "Person", "name": "Ina Cabanillas Hansen", "url": "https://www.inacabanillas.com" },
    "publisher": { "@type": "Person", "name": "Ina Cabanillas Hansen", "url": "https://www.inacabanillas.com" },
    "url": `https://www.inacabanillas.com/blogg/${post.slug}`,
    "inLanguage": "nb",
    "about": ["Gen Z", "Ledelse", "Tilhørighet", "Fremtidens arbeidsliv"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Hjem", "item": "https://www.inacabanillas.com" },
      { "@type": "ListItem", "position": 2, "name": "Blogg", "item": "https://www.inacabanillas.com/blogg" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.inacabanillas.com/blogg/${post.slug}` },
    ],
  };

  // Simple markdown → HTML (paragraphs, bold, italic, links)
  const html = post.content
    .split('\n\n')
    .map((p) => {
      let text = p.trim();
      if (!text) return '';
      // Headings
      if (text.startsWith('## ')) return `<h2 class="text-2xl font-bold text-foreground mt-10 mb-4">${text.slice(3)}</h2>`;
      if (text.startsWith('### ')) return `<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">${text.slice(4)}</h3>`;
      // Bold and italic
      text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
      // Links
      text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-brand-indigo underline">$1</a>');
      return `<p class="text-[#1a1a1a] text-lg leading-[1.85] mb-6">${text}</p>`;
    })
    .join('');

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="pt-28 pb-24 bg-white min-h-screen">
        <article className="max-w-[680px] mx-auto px-6">
          <Link
            href="/blogg"
            className="text-brand-indigo text-sm font-medium mb-6 inline-block hover:gap-2 transition-all"
          >
            ← Tilbake til blogg
          </Link>

          <p className="text-brand-muted text-sm mb-3">{post.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
            {post.title}
          </h1>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mt-16 pt-8 border-t border-brand-border text-center">
            <p className="text-brand-muted mb-4">Vil du høre mer om dette temaet?</p>
            <Link
              href="/foredrag#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-indigo text-white font-semibold text-sm hover:bg-brand-indigo/90 transition-all"
            >
              Book foredrag →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
