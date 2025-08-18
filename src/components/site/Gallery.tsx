import Image from "next/image";

export default function Gallery() {
  return (
    <section aria-labelledby="gal-title" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="gal-title" className="text-lg font-semibold tracking-tight mb-6">
          Community
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/img/optimized/fees-hero.jpg"
              alt="100 share fees hero banner"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/img/optimized/mega.jpg"
              alt="MEGA meme"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/img/optimized/meme-block.jpg"
              alt="Block everything meme"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
