import fs from 'fs';
import path from 'path';
import type { BlogPost } from './blog';

const EN_DIR = path.join(process.cwd(), 'content/en');

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      meta[key] = val;
    }
  }
  return { meta, content: match[2].trim() };
}

export function getAllEnPosts(): BlogPost[] {
  if (!fs.existsSync(EN_DIR)) return [];
  return fs.readdirSync(EN_DIR)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const raw = fs.readFileSync(path.join(EN_DIR, file), 'utf-8');
      const { meta, content } = parseFrontmatter(raw);
      return {
        slug: meta.slug || file.replace('.md', ''),
        title: meta.title || 'Untitled',
        date: meta.date || '',
        excerpt: meta.excerpt || '',
        content,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getEnPostBySlug(slug: string): BlogPost | null {
  return getAllEnPosts().find(p => p.slug === slug) || null;
}
