import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inacabanillas.com'),
  title: {
    default: "Ina Cabanillas | Foredragsholder om Gen Z, tilhørighet og ledelse",
    template: "%s | Ina Cabanillas",
  },
  description: "Gen Z-foredragsholder, forfatter og gründer av StudyBuddies. Holder foredrag om tilhørighet, ledelse og generasjon Z for norske og internasjonale virksomheter. Book Ina til ditt arrangement.",
  keywords: ["Ina Cabanillas", "foredragsholder", "Gen Z", "generasjon Z", "tilhørighet", "ledelse", "arbeidsliv", "HR", "rekruttering", "StudyBuddies", "keynote speaker"],
  authors: [{ name: "Ina Cabanillas Hansen" }],
  alternates: {
    canonical: 'https://www.inacabanillas.com',
    languages: {
      'en': 'https://www.inacabanillas.com/en',
      'nb-NO': 'https://www.inacabanillas.com',
    },
  },
  openGraph: {
    title: "Ina Cabanillas | Foredragsholder om Gen Z og tilhørighet",
    description: "Gen Z-foredragsholder, forfatter og gründer. Hjelper ledere med å forstå, beholde og utvikle unge talent.",
    type: "website",
    locale: "nb_NO",
    siteName: "Ina Cabanillas",
    url: 'https://www.inacabanillas.com',
  },
  twitter: {
    card: "summary_large_image",
    title: "Ina Cabanillas | Foredragsholder om Gen Z og tilhørighet",
    description: "Gen Z-foredragsholder, forfatter og gründer. Book Ina til ditt arrangement.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
