import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { MapPin } from "@/components/icons";

export const metadata: Metadata = { title: "Location & Project Costs" };

const valleys = [
  { name: "Freeman Burn", map: "/maps/Freeman.pdf" },
  { name: "Awe Burn", map: "/maps/Awe.pdf" },
  { name: "Hidden Falls Creek", map: "/maps/Hidden-Falls.pdf" },
  { name: "Bowen River", map: "/maps/Bowen.pdf" },
  { name: "Iris Burn", map: "/maps/Iris.pdf" },
  { name: "Diamond Creek", map: "/maps/Diamond-Creek.pdf" },
  { name: "Talbot River", map: "/maps/Talbot.pdf" },
  { name: "Surprise Creek", map: "/maps/Surprise.pdf" },
];

/* Each tile links to that valley's map PDF (opens in a new tab). */
function ValleyTile({ name, map }: { name: string; map: string }) {
  return (
    <a
      href={map}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open the ${name} map (PDF, opens in a new tab)`}
      className="group relative block aspect-[5/4] overflow-hidden bg-[#5a6b78]"
    >
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
      <div className="absolute inset-0 bg-[#2c3f52] opacity-55 transition-opacity group-hover:opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-[14px]">
        <MapPin className="h-[30px] w-[30px] text-white" />
        <span className="text-center font-display text-[14px] font-bold uppercase leading-[1.3] tracking-[1.2px] text-white">
          {name}
        </span>
        <span className="font-display text-[11px] font-semibold uppercase tracking-[1px] text-white/85 opacity-0 transition-opacity group-hover:opacity-100">
          View map (PDF)
        </span>
      </div>
    </a>
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
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-[60px] md:grid-cols-2">
          <div>
            <Image
              src="/images/blue-ducks.jpg"
              alt="Two whio (blue ducks) on a clear river"
              width={1000}
              height={667}
              sizes="(max-width: 768px) 100vw, 490px"
              className="block h-[260px] w-full object-cover md:h-[400px]"
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
        <div className="mx-auto max-w-[1120px]">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 nav:grid-cols-4">
            {valleys.map((v) => (
              <ValleyTile key={v.name} name={v.name} map={v.map} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
