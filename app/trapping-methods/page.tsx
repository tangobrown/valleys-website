import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Trapping methods" };

export default function TrappingPage() {
  return (
    <>
      <Hero
        title="Trapping methods"
        height={400}
        titleSize={46}
        image="/images/valley-river.jpg"
        imageAlt="A bush-clad Fiordland valley and river bed"
      >
        <p className="m-0 mt-4 max-w-[520px] text-[15px] font-bold leading-[1.55] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          The principle methodology for the VALLEYS PROJECT involves establishing lines of traps for stoats and rats
          along both sides of rivers at 100m intervals.
        </p>
      </Hero>

      <section className="bg-white px-5 pb-10 pt-[78px] sm:px-8">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-start gap-x-[60px] gap-y-[70px] md:grid-cols-2">
          {/* Row 1: stoat | Trapping Strategy */}
          <div className="self-start">
            <Image
              src="/images/stoat-trap.jpg"
              alt="A Goodnature A24 self-resetting trap mounted on a tree, with a caught stoat below"
              width={1024}
              height={512}
              sizes="(max-width: 768px) 100vw, 490px"
              className="block h-auto w-full"
            />
          </div>
          <div>
            <SectionHeading gap={22}>Trapping Strategy</SectionHeading>
            <p className="m-0 text-[14px] leading-[1.7] text-body">
              The principle methodology for the VALLEYS PROJECT involves establishing lines of traps for{" "}
              <a
                href="http://www.doc.govt.nz/nature/pests-and-threats/animal-pests/stoats/"
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                stoats
              </a>{" "}
              and{" "}
              <a
                href="http://www.doc.govt.nz/nature/pests-and-threats/animal-pests/rats/"
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                rats
              </a>{" "}
              along both sides of rivers at 100m intervals. Stoats range widely and are highly likely to pass through
              river valleys, attracted by potential food sources. In winter, colder conditions push them to lower
              altitudes and the valley floors. Anti-predator trap lines have a known “halo” effect which extends for
              several hundred meters on either side of the lines. Many Fiordland valleys are only a few hundred meters
              wide before they rise steeply so stoats will encounter traps located on either side of a river. The
              presence of these lines can reasonably be expected to provide benefit to birdlife over much of the area of
              the valley. We will not eliminate predators but their numbers will fall, adjusting the balance in favour of
              our natives.
            </p>
          </div>

          {/* Row 2: Whio Conservation | whio */}
          <div>
            <SectionHeading gap={22}>Whio Conservation</SectionHeading>
            <p className="m-0 text-[14px] leading-[1.7] text-body">
              Mature Whio, bred under the protection of existing trap-lines established by DOC, naturally seek fresh
              habitats to establish their own adult territories. Once they move into areas not subject to stoat
              suppression, the chances of their own young suffering death by predation are extreme. Establishing a degree
              of protection in adjacent valleys will complement the existing{" "}
              <a href="http://www.doc.govt.nz/whio" target="_blank" rel="noopener noreferrer" className="prose-link">
                Whio conservation activities by DOC
              </a>{" "}
              and give other birdlife relief from the pressures of predation. Whio can only be protected in their natural
              habitat – they cannot survive without their rivers. The halo effect of the traps will extend out across the
              valley floors to assist Kiwi and our other iconic species.
            </p>
          </div>
          <div className="relative h-[230px] self-start">
            <Image
              src="/images/solo-whio.jpg"
              alt="A lone whio (blue duck) standing in a shallow river"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>

          {/* Row 3: trail cam | Trapping equipment */}
          <div className="relative h-[230px] self-start">
            <Image
              src="/images/trail-cam-deer.jpg"
              alt="Trail camera image of a deer beside a trap mounted on a mossy tree"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading gap={22}>Trapping equipment</SectionHeading>
            <p className="mb-[18px] text-[14px] leading-[1.7] text-body">
              It is impractical and expensive to undertake frequent visits to service trap lines in remote areas. The use
              of{" "}
              <a
                href="https://www.goodnature.co.nz/products/rat-stoat/"
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                Goodnature A24 self-resetting traps
              </a>{" "}
              combined with Auto Lure bait pumps, dramatically reduces the helicopter time and manpower required to set
              out and maintain trap lines and allows 6 month intervals between servicing. DOC recommends this servicing
              to be undertaken in September to coincide with the first nesting attempts and the alternate visits will
              fall in late March/early April.
            </p>
            <p className="m-0 text-[14px] leading-[1.7] text-body">
              <strong className="text-body-strong">Species Monitoring</strong> is directed by DOC. An initial survey of
              the Whio population in the Camelot valley was undertaken in January 2017 identifying 20 resident birds in
              the northern part of the valley – a sizeable population of such an endangered species.
            </p>
          </div>

          {/* Row 4: Commercial opportunities | team */}
          <div>
            <SectionHeading gap={22}>Commercial opportunities</SectionHeading>
            <p className="m-0 text-[14px] leading-[1.7] text-body">
              The existence of a market for Possum fur and skins provides the opportunity to monetise predator control.
              The VALLEYS PROJECT will in time seek to leverage opportunities from this and develop partnerships with
              existing commercial contractors, and also social agencies to benefit those who need opportunities to
              develop work skills. We have already engaged with local Te Anau possum trappers, assisting with transport
              costs to the Cozette Valley to make their work financially viable, and providing a relocatable wooden bivy
              shelter.
            </p>
          </div>
          <div className="relative h-[230px] self-start">
            <Image
              src="/images/team-camp.jpg"
              alt="The initial team at camp in the Cozette Valley"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
