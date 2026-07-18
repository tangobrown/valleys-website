import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = { title: "Gallery" };

const tiles = [
  { src: "/images/kea-on-stump.jpg", alt: "A kea perched on a weathered stump" },
  { src: "/images/kea.jpg", alt: "A kea on a mossy fallen log" },
  { src: "/images/team-by-river.jpg", alt: "Three team members beside a river pool below a waterfall" },
  { src: "/images/fantail.jpg", alt: "A fantail (pīwakawaka) on a mossy branch" },
  { src: "/images/wading-river.jpg", alt: "A team member wading a clear river" },
  { src: "/images/kereru-berry-tree.jpg", alt: "A kererū feeding in a berry tree" },
  { src: "/images/fly-fishing.jpg", alt: "An angler fly fishing from a riverbank" },
  { src: "/images/solo-whio.jpg", alt: "A whio (blue duck) on river rocks" },
  { src: "/images/dawn-camelot.jpg", alt: "Dawn light over the Camelot Valley" },
  { src: "/images/valley-river.jpg", alt: "A stony river bed running through bush-clad valley" },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Gallery"
        height={290}
        titleSize={46}
        image="/images/campfire.jpg"
        imageAlt="Team members around a campfire in the valley"
      >
        <p className="m-0 mt-3 text-[16px] font-bold leading-[1.5] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          See images below from some of our recent trips.
        </p>
      </Hero>

      <section className="bg-white px-5 pb-20 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-[640px] grid-cols-2 gap-3">
          {tiles.map((tile) => (
            <div key={tile.src} className="relative aspect-[4/3] overflow-hidden bg-[#eef0f2]">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 50vw, 314px"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
