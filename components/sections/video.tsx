import { IMAGES } from "@/lib/constants";

export function VideoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-indigo mb-3">
            Se Ina i aksjon
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground">
            Fra scenen
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <video
            controls
            poster={IMAGES.scene}
            className="w-full aspect-video object-cover bg-brand-dark"
            preload="none"
          >
            <source src={IMAGES.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
