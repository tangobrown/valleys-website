import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "Gallery" };

const tiles = [
  "Kea on stump",
  "Kea on mossy log",
  "Team by the river",
  "Fantail / bird in bush",
  "Team wading river",
  "Bird in berry tree",
  "Angler on riverbank",
  "Whio on rocks",
  "Valley at dusk",
  "River bed",
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Gallery"
        height={290}
        titleSize={42}
        background={<Placeholder label="River banner photo" />}
      >
        <p className="m-0 mt-3 text-[15px] font-bold leading-[1.5] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          See images below from some of our recent trips.
        </p>
      </Hero>

      <section className="bg-white px-5 pb-20 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-[640px] grid-cols-2 gap-3">
          {tiles.map((label) => (
            <div key={label} className="relative aspect-[4/3] overflow-hidden bg-[#eef0f2]">
              <Placeholder label={label} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
