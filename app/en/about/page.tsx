import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { IMAGES } from "@/lib/constants";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ina Cabanillas | Gen Z Keynote Speaker",
  description: "Ina Cabanillas Hansen is one of Scandinavia's most in-demand voices on Gen Z, leadership, and belonging in the workplace.",
  alternates: { canonical: "https://www.inacabanillas.com/en/about" },
};

const highlights = [
  { value: "6/6", label: "Speaker rating" },
  { value: "BI + UC Berkeley", label: "HR & Leadership" },
  { value: "Top 200", label: "LinkedIn Voices" },
  { value: "StudyBuddies", label: "Founder" },
];

export default function AboutPageEN() {
  return (
    <>
      <Navbar lang="en" />
      <main className="pt-28 pb-24">
        <section className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <Image
                src={IMAGES.bookPortrait}
                alt="Ina Cabanillas Hansen — Gen Z keynote speaker"
                width={520}
                height={650}
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>

            <div className="order-1 md:order-2 flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo">
                About Ina
              </p>
              <h1 className="text-3xl md:text-4xl text-foreground leading-snug">
                A Gen Z researcher studying her own generation
              </h1>
              <div className="space-y-4 text-brand-muted text-lg leading-relaxed">
                <p>
                  Ina Cabanillas Hansen is one of Scandinavia&apos;s most in-demand voices on Gen Z, leadership, and belonging in the workplace. She is a keynote speaker, author, and founder of StudyBuddies — a platform helping students build community and academic support networks.
                </p>
                <p>
                  With a background in HR and leadership from BI Norwegian Business School and UC Berkeley, she combines research, lived experience as a Gen Z professional, and a sharp eye on the generational divide to give leaders practical tools they can use immediately.
                </p>
                <p>
                  Named &ldquo;Young Inspiration of the Year 2025&rdquo; in Norway, she is one of LinkedIn&apos;s global Top 200 Voices in inclusion and diversity, and has spoken at events from government agencies to international innovation festivals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                {highlights.map((h) => (
                  <div key={h.label} className="bg-brand-lavender rounded-xl px-5 py-4">
                    <p className="font-semibold text-brand-indigo text-base">{h.value}</p>
                    <p className="text-brand-muted text-sm mt-0.5">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
