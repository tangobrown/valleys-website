import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { GroupIcon } from "@/components/icons";
import { docUrl } from "@/lib/nav";

export const metadata: Metadata = { title: "Adopt a Valley" };

const committee = [
  { name: "Michael Fisk", role: "Ophthalmologist", photo: "/images/michael-fisk.jpg" },
  { name: "Mark Smith", role: "Architect", photo: "/images/mark-smith.jpg" },
  { name: "Peter King", role: "Engineer", photo: "/images/peter-king.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Adopt a Valley!"
        height={350}
        titleSize={48}
        image="/images/belvedere-falls.jpg"
        imageAlt="Belvedere Falls in flood, Fiordland"
      >
        <p className="m-0 mt-[14px] max-w-[440px] text-[17px] font-bold leading-[1.5] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
          These projects aim to adjust the balance in favour of our birdlife by trapping predators in areas currently
          without any control measures.
        </p>
      </Hero>

      <section className="bg-white px-5 pb-10 pt-[70px] sm:px-8">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-x-[60px] gap-y-14 md:grid-cols-2">
          {/* Row 1: blue duck | What is */}
          <div className="self-start">
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
            <SectionHeading>What is the Valleys Project?</SectionHeading>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              The “VALLEYS PROJECT” offers private individuals and corporates the opportunity to undertake significant
              yet affordable conservation projects in partnership with{" "}
              <a href={docUrl} target="_blank" rel="noopener noreferrer" className="prose-link">
                DOC
              </a>{" "}
              and the NZ National Parks &amp; Conservation Foundation. These projects aim to adjust the balance in favour
              of our birdlife by trapping predators in areas currently without any control measures. They will combine
              strategically with DOC’s existing work and other VALLEYS Projects to become part of a greater whole. We
              seek to involve like-minded individuals who would enjoy the opportunity to visit remote areas regularly,
              and who are prepared to contribute financially to conservation work. There is the opportunity to give your
              time in the backcountry a real purpose, enjoy companionship and the satisfaction that comes from being
              involved in a worthwhile endeavour.
            </p>
          </div>

          {/* Row 2: Our Philosophy | 3 men */}
          <div>
            <SectionHeading>Our Philosophy</SectionHeading>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              Our central philosophy is to develop amongst groups undertaking predator control a proprietary interest
              in, and sense of ownership of, geographically distinct areas of manageable size within the Conservation
              Estate. The initial focus is on Fiordland valleys but the model could be utilised in other areas of the
              Conservation Estate. Ideally groups will “<strong>Adopt a Valley</strong>” from
              a selection chosen by DOC, provide the necessary finance, set out the traps, and then regularly service the
              equipment. The{" "}
              <a href="#committee" className="prose-link">
                VALLEYS Group Committee
              </a>{" "}
              can help with relationships, logistics and equipment.
            </p>
          </div>
          <div className="relative h-[230px] self-start">
            <Image
              src="/images/three-men-valley.jpg"
              alt="Three team members standing in a Fiordland river"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>

          {/* Row 3: empty | Everyone can get involved */}
          <div className="hidden md:block" />
          <div>
            <SectionHeading>Everyone can get involved</SectionHeading>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              At a Corporate level, the VALLEYS Project offers businesses the opportunity to be better citizens and to
              enjoy prestige advertising linked to activities which are at the forefront of public interest. Involving
              staff in conservation work is the ultimate team building strategy and getting them out into country they
              might otherwise never see is a unique gift – so talk to the boss!
            </p>
          </div>

          {/* Row 4: Further more | kea */}
          <div>
            <SectionHeading>Further more</SectionHeading>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              Trips into the areas concerned are required every 6 months to bait and recharge the traps. It is a great
              opportunity for fishermen, hunters, ornithologists, trampers, and others with connection to our wilderness
              areas to get out there regularly with a purpose and a mission. It is open to all –{" "}
              <a href="/contact" className="prose-link">
                please register your interest
              </a>
              . Collectively we can make a difference, and the financial contributions – which are made through, and
              controlled by, the{" "}
              <a href="https://nznaturefund.org/" target="_blank" rel="noopener noreferrer" className="prose-link">
                NZ Nature Fund
              </a>{" "}
              – are <strong>TAX DEDUCTIBLE!</strong> DOC oversees all aspects of these
              activities, directs strategy and assists with logistics.
            </p>
          </div>
          <div className="relative h-[200px] max-w-[320px] self-start">
            <Image
              src="/images/kea.jpg"
              alt="A kea perched on a mossy log"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Committee ===== */}
      <section id="committee" className="scroll-mt-24 bg-lightgrey px-5 pb-[74px] pt-16 sm:px-8">
        <div className="mx-auto max-w-[940px] text-center">
          <GroupIcon className="mx-auto mb-[14px] block h-10 w-10 text-brand" />
          <h2 className="mb-[46px] font-display text-[21px] font-bold uppercase tracking-[2px] text-heading">
            Valleys Group Committee
          </h2>
          <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-10 sm:grid-cols-3">
            {committee.map((m) => (
              <div key={m.name} className="text-left">
                <div className="relative mb-[14px] h-[120px] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="mb-1 font-display text-[24px] font-bold text-heading">{m.name}</h3>
                <p className="m-0 text-[14px] italic text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
