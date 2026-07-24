import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { MapPin } from "@/components/icons";

export const metadata: Metadata = { title: "Location & Project Costs" };

const valleys = [
  "Freeman Burn",
  "Awe Burn",
  "Hidden Falls Creek",
  "Bowen River",
  "Iris Burn",
  "Diamond Creek",
  "Talbot River",
  "Surprise Creek",
];

/* Abstract topographic map tile — a stand-in for real DOC map thumbnails. */
function ValleyTile({ name }: { name: string }) {
  return (
    <div className="relative aspect-[5/4] overflow-hidden bg-[#5a6b78]">
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <rect width="200" height="160" fill="#6a7a86" />
        <g fill="none" stroke="#7d8c96" strokeWidth="1">
          <path d="M-10 30 C 40 10, 80 50, 130 25 S 220 40, 230 20" />
          <path d="M-10 55 C 40 35, 85 75, 135 50 S 220 62, 230 45" />
          <path d="M-10 82 C 45 62, 88 100, 140 78 S 220 90, 230 72" />
          <path d="M-10 110 C 45 92, 90 128, 142 106 S 220 118, 230 100" />
          <path d="M-10 138 C 45 120, 90 155, 145 134 S 220 146, 230 128" />
        </g>
        <path
          d="M20 -5 C 55 40, 40 90, 90 120 S 150 150, 170 175"
          fill="none"
          stroke="#8fb4d8"
          strokeWidth="2"
          opacity="0.8"
        />
      </svg>
      <div className="absolute inset-0 bg-[#2c3f52] opacity-55" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-[14px]">
        <MapPin className="h-[30px] w-[30px] text-white" />
        <span className="text-center font-display text-[14px] font-bold uppercase leading-[1.3] tracking-[1.2px] text-white">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function LocationPage() {
  return (
    <>
      <Hero
        title="Location & Project Costs"
        height={450}
        titleSize={58}
        image="/images/dawn-camelot.jpg"
        imageAlt="Dawn over the Camelot Valley, Fiordland"
      >
        <p className="m-0 mt-[18px] max-w-[530px] text-[17px] font-bold leading-[1.55] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          Our strategy is to establish trap lines adjacent to the Whio and Takahe protection areas in Fiordland west of
          Te Anau so they complement DOC’s existing conservation efforts.
        </p>
      </Hero>

      {/* ===== Estimates row ===== */}
      <section className="bg-white px-5 pb-10 pt-[74px] sm:px-8">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-[60px] md:grid-cols-2">
          <div>
            <Image
              src="/images/blue-ducks.jpg"
              alt="Two whio (blue ducks) on a clear river"
              width={1000}
              height={667}
              sizes="(max-width: 768px) 100vw, 490px"
              className="block h-auto w-full"
            />
          </div>
          <div>
            <SectionHeading gap={22}>Locations and Project Estimates</SectionHeading>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              Our strategy is to establish trap lines adjacent to the Whio and Takahe protection areas in Fiordland west
              of Te Anau so they complement DOC’s existing conservation efforts. The first line was established in the
              Cozette/Camelot Valley west of Te Anau in October 2016 with 250 traps along 13km of river. The kill count
              was around 750 in the first 6 months. This valley has a high Whio population with 20 ducks identified in
              the northern half of the valley during a January 2017 survey. DOC has offered multiple valleys of
              conservation value suitable for trapping. Estimates of the project costs and other comments about the 8
              valleys can be found{" "}
              <a href="#" className="prose-link">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===== Valley map grid ===== */}
      <section className="bg-white px-5 pb-20 pt-[30px] sm:px-8">
        <div className="mx-auto max-w-[1040px]">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 nav:grid-cols-4">
            {valleys.map((name) => (
              <ValleyTile key={name} name={name} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
