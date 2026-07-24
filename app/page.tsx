import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRight } from "@/components/icons";
import { docUrl } from "@/lib/nav";

const infoCards: {
  image: string;
  alt: string;
  title: string;
  body: string;
  href: string;
  panel: string;
}[] = [
  {
    image: "/images/stoat-trap.jpg",
    alt: "A Goodnature A24 self-resetting trap mounted on a tree",
    title: "Trapping Methods",
    body: "The principle methodology for the VALLEYS PROJECT involves establishing lines of traps for stoats and rats along both sides of rivers at 100m intervals.",
    href: "/trapping-methods",
    panel: "bg-ink",
  },
  {
    image: "/images/helicopter.jpg",
    alt: "A helicopter landing on a riverbed to service trap lines",
    title: "Finances",
    body: "The VALLEYS PROJECT relies upon voluntary contributions from motivated people. In time, we hope these donations might be supplemented by government funding from projects with synergy.",
    href: "/finances",
    panel: "bg-[#383a44]",
  },
  {
    image: "/images/dawn-camelot.jpg",
    alt: "Dawn over the Camelot Valley, Fiordland",
    title: "Location & Costs",
    body: "Our strategy is to establish trap lines adjacent to the Whio and Takahe protection areas west of Te Anau so they complement DOC’s existing conservation efforts.",
    href: "/location-project-costs",
    panel: "bg-ink",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="The Valleys Conservation Project New Zealand"
        height={640}
        titleSize={66}
        titleMaxWidth={700}
        variant="cover"
        overlay="light"
        image="/images/valleys-project-hero.jpg"
        imageAlt="A tui perched on a flowering flax stem"
        priority
      >
        <Link
          href="/contact"
          className="mt-[34px] self-start rounded-[3px] bg-brand px-[30px] py-4 font-display text-[15px] font-semibold tracking-[1.5px] text-white transition-colors hover:bg-brand-hover"
        >
          GET INVOLVED
        </Link>
      </Hero>

      {/* ===== Protecting intro — heading left, body right ===== */}
      <section className="bg-white px-5 py-[74px] sm:px-8">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <h2 className="m-0 mb-[18px] font-display text-[48px] font-bold leading-[1.1] text-heading">
              Protecting New Zealand Birdlife
            </h2>
            <p className="m-0 text-[17px] font-bold text-ink">
              Through Significant Yet Affordable Conservation Projects protecting birdlife against pests.
            </p>
          </div>
          <div className="text-[17px] leading-[1.65] text-ink">
            <p className="mb-[18px]">
              Anyone who spends time in the New Zealand bush knows how dreadfully quiet it has become. It is no news that
              our birdlife is in decline and many native species are on the brink of extinction – nor is it news that the{" "}
              <a href={docUrl} target="_blank" rel="noopener noreferrer" className="prose-link">
                Department of Conservation
              </a>{" "}
              is not adequately funded for the Herculean tasks it faces.
            </p>
            <p className="m-0">
              There is a growing realisation amongst New Zealanders that we can’t just sit back and “let the government do
              it”. If we want to preserve our natural heritage, Kiwis have to get out there and help, and also to
              contribute financially.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Three info cards ===== */}
      <section className="bg-white px-5 pb-[78px] pt-[10px] sm:px-8">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-3">
          {infoCards.map((card) => (
            <div key={card.title} className="flex flex-col overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 330px"
                  className="object-cover"
                />
              </div>
              <div className={`flex flex-1 flex-col p-8 ${card.panel}`}>
                <h3 className="mb-4 font-display text-[26px] font-bold text-white">{card.title}</h3>
                <p className="mb-7 flex-1 text-[16px] leading-[1.6] text-white/70">{card.body}</p>
                <Link
                  href={card.href}
                  className="group inline-flex items-center gap-2 font-display text-[15px] font-semibold text-white"
                >
                  Learn more
                  <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
