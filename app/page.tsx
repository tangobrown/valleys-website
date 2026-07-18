import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { FinancesIcon, LocationIcon, TrappingIcon } from "@/components/icons";
import { docUrl } from "@/lib/nav";
import type { ReactNode } from "react";

const infoCards: { icon: ReactNode; title: string; body: string; href: string }[] = [
  {
    icon: <TrappingIcon className="h-[34px] w-[34px] text-brand" />,
    title: "Trapping Methods",
    body: "The principle methodology for the VALLEYS PROJECT involves establishing lines of traps for stoats and rats along both sides of rivers at 100m intervals.",
    href: "/trapping-methods",
  },
  {
    icon: <FinancesIcon className="h-[34px] w-[34px] text-brand" />,
    title: "Finances",
    body: "The VALLEYS PROJECT relies upon voluntary contributions from motivated people. In time, we hope these donations might be supplemented by government funding from projects with synergy.",
    href: "/finances",
  },
  {
    icon: <LocationIcon className="h-[34px] w-[34px] text-brand" />,
    title: "Location & Costs",
    body: "Our strategy is to establish trap lines adjacent to the Whio and Takahe protection areas west of Te Anau so they complement DOC’s existing conservation efforts.",
    href: "/location-project-costs",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="The Valleys Conservation Project New Zealand"
        height={640}
        titleSize={52}
        titleMaxWidth={560}
        wave={false}
        overlay="light"
        image="/images/valleys-project-hero.jpg"
        imageAlt="A tui perched on a flowering flax stem"
        priority
      >
        <Link
          href="/contact"
          className="mt-[34px] self-start rounded-[3px] bg-brand px-[30px] py-4 font-display text-[14px] font-semibold tracking-[1.5px] text-white transition-colors hover:bg-brand-hover"
        >
          GET INVOLVED
        </Link>
      </Hero>

      {/* ===== Protecting intro ===== */}
      <section className="bg-white px-5 pt-[74px] sm:px-8">
        <div className="mx-auto max-w-[1040px] text-center">
          <h2 className="mb-[18px] font-display text-[28px] font-bold text-heading sm:text-[34px]">
            Protecting New Zealand Birdlife
          </h2>
          <p className="m-0 text-[15px] font-bold text-slate">
            Through Significant Yet Affordable Conservation Projects protecting birdlife against pests.
          </p>
        </div>
      </section>

      {/* ===== Two-column block with grey band behind lower portion ===== */}
      <div className="relative pb-[70px]">
        <div className="absolute inset-x-0 bottom-0 z-0 h-[170px] bg-lightgrey" aria-hidden />
        <div className="relative z-[1] mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-14 px-5 pt-[52px] sm:px-8 md:grid-cols-2">
          <div>
            <Image
              src="/images/fantail.jpg"
              alt="A fantail (pīwakawaka) perched on a mossy branch in native bush"
              width={800}
              height={533}
              sizes="(max-width: 768px) 100vw, 490px"
              className="h-[262px] w-full object-cover"
            />
          </div>
          <div className="text-[15px] leading-[1.65] text-body">
            <p className="mb-[18px]">
              Anyone who spends time in the New Zealand bush knows how dreadfully quiet it has become. It is no news that
              our birdlife is in decline and many native species are on the brink of extinction – nor is it news that the{" "}
              <a href={docUrl} target="_blank" rel="noopener noreferrer" className="prose-link">
                Department of Conservation
              </a>{" "}
              is not adequately funded for the Herculean tasks it faces.
            </p>
            <p className="mb-[26px]">
              There is a growing realisation amongst New Zealanders that we can’t just sit back and “let the government do
              it”. If we want to preserve our natural heritage, Kiwis have to get out there and help, and also to
              contribute financially.
            </p>
            <Link
              href="/about-the-project"
              className="inline-block rounded-[3px] bg-brand px-[26px] py-[14px] font-display text-[13px] font-semibold tracking-[1.3px] text-white transition-colors hover:bg-brand-hover"
            >
              ADOPT A VALLEY
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Three info cards ===== */}
      <section className="bg-white px-5 pb-[78px] pt-[60px] sm:px-8">
        <div className="mx-auto grid max-w-[940px] grid-cols-1 gap-[34px] md:grid-cols-3">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-ink p-[30px] pt-[34px] shadow-[7px_7px_0_rgba(0,0,0,0.07)]"
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="mb-[14px] font-display text-[20px] font-bold text-white">{card.title}</h3>
              <p className="mb-[26px] flex-1 text-[14px] leading-[1.6] text-cardbody">{card.body}</p>
              <Link
                href={card.href}
                className="block rounded-[2px] bg-brand px-[10px] py-[13px] text-center font-display text-[12px] font-semibold tracking-[1.3px] text-white transition-colors hover:bg-brand-hover"
              >
                MORE INFO
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
