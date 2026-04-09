<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Tilgjengelighetskrav (WCAG 2.1 AA)

Gjelder alle komponenter og sider — desktop og mobil:

- **Normal tekst** (under 18px / under 14px bold): kontrastforhold **≥ 4.5:1**
- **Stor tekst** (≥ 18px vanlig / ≥ 14px bold): kontrastforhold **≥ 3:1**

## Godkjente brand-kombinasjoner

| Forgrunns-farge | Bakgrunn | Kontrast | Status |
|---|---|---|---|
| `brand-indigo` #4F46E5 | hvit #FFFFFF | 5.9:1 | ✅ normal tekst |
| `brand-indigo` #4F46E5 | `brand-lavender` #EEF2FF | 5.6:1 | ✅ normal tekst |
| `foreground` #111827 | hvit #FFFFFF | 16.1:1 | ✅ |
| `brand-muted` #6B7280 | hvit #FFFFFF | 4.6:1 | ✅ normal tekst |
| `brand-muted` #6B7280 | `brand-lavender` #EEF2FF | 4.1:1 | ⚠️ kun stor tekst |
| `brand-muted` #6B7280 | `brand-dark` #1F2937 | 3.1:1 | ⚠️ kun stor tekst |
| white #FFFFFF | `brand-indigo` #4F46E5 | 5.9:1 | ✅ |
| white #FFFFFF | `brand-dark` #1F2937 | 14.7:1 | ✅ |

## Regler

- Bruk aldri `brand-muted` som tekst på `brand-lavender`-bakgrunn for normal tekst — bytt til `foreground` eller mørkere farge
- Placeholder-tekst og dekorative elementer er unntatt, men synlig innholdstekst må alltid oppfylle kravene
- Sjekk alltid kontrasten når du legger til nye farge-kombinasjoner
