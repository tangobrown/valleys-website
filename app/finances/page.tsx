import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { donateUrl } from "@/lib/nav";

export const metadata: Metadata = { title: "Finances" };

export default function FinancesPage() {
  return (
    <>
      <Hero
        title="Finances"
        height={400}
        titleSize={58}
        image="/images/river-crossing.jpg"
        imageAlt="Team members crossing a Fiordland river"
      >
        <p className="m-0 mt-4 max-w-[500px] text-[17px] font-bold leading-[1.55] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          The VALLEYS PROJECT relies upon voluntary contributions of time and money from motivated people.
        </p>
      </Hero>

      <section className="bg-white px-5 pb-10 pt-[78px] sm:px-8">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-x-[60px] gap-y-[70px] md:grid-cols-2">
          {/* Row 1: whio | Volunteer Contributions */}
          <div className="relative h-[260px] self-start md:h-[400px]">
            <Image
              src="/images/whio-closeup.jpg"
              alt="A whio (blue duck) standing on river rocks"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading gap={22}>Volunteer Contributions</SectionHeading>
            <p className="mb-[18px] text-[17px] leading-[1.7] text-ink">
              The VALLEYS PROJECT relies upon voluntary contributions of time and money from motivated people.
            </p>
            <p className="mb-[18px] text-[17px] leading-[1.7] text-ink">
              In time, we hope these donations might be supplemented by government funding from projects with synergy.
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              Donations will also be attracted through networking and advertising of various sorts, with emphasis on the
              use of the internet and social media.
            </p>
          </div>

          {/* Row 2: Donations | helicopter */}
          <div>
            <SectionHeading gap={22}>Donations</SectionHeading>
            <p className="mb-[18px] text-[17px] leading-[1.7] text-ink">
              The{" "}
              <a href="https://nznaturefund.org/" target="_blank" rel="noopener noreferrer" className="prose-link">
                NZ Nature Fund
              </a>{" "}
              Donation Portal accepts tax deductible donations on our behalf, issues receipts and administers the
              financial aspects with DOC.
            </p>
            <p className="mb-[26px] text-[17px] leading-[1.7] text-ink">
              Donations are primarily used to purchase traps and supplies for the traps. Individuals involved in field
              trips may separately cover the costs of helicopter transport and groceries by donations to the NZ Nature
              Fund. The invoices for equipment, helicopter transport and groceries are paid by DOC and subsequently
              invoiced to the NZ Nature Fund by DOC. This ensures that the money donated is applied directly to the
              designated projects and used as efficiently as possible. Donors can be certain that 100% of their funds
              are applied directly to the intended activity.
            </p>
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[3px] bg-brand px-[26px] py-[14px] font-display text-[14px] font-semibold uppercase tracking-[1.3px] text-white transition-colors hover:bg-brand-hover"
            >
              DONATE NOW
            </a>
          </div>
          <div className="relative h-[260px] self-start md:h-[400px]">
            <Image
              src="/images/helicopter.jpg"
              alt="A helicopter landing on a riverbed to service trap lines"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>

          {/* Row 3: team | Trap line costs */}
          <div className="relative h-[260px] self-start md:h-[400px]">
            <Image
              src="/images/team-by-river.jpg"
              alt="Three team members beside a river pool below a waterfall"
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading gap={22}>Trap line costs</SectionHeading>
            <p className="mb-[18px] text-[17px] leading-[1.7] text-ink">
              An individual or corporate might wish to take full responsibility for the costs of looking after a valley
              and organising the trapping activities. Others might wish to contribute financially and be kept informed of
              the project’s activities, or become part of a small field team which looks after a valley.
            </p>
            <p className="mb-[18px] text-[17px] leading-[1.7] text-ink">
              The major costs of establishing the trap lines in each valley fall in the initial year. Currently each
              trap, complete with a strike counter, costs in the vicinity of $163 + GST freighted to Te Anau.
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-ink">
              A saving of $30 is possible by excluding strike counters with the disadvantage of losing the metric.
              Approximate costs of initial set-up and 6 monthly maintenance for a 10km trap line are $40,000 and $6000
              respectively. A break down of those costs can be found{" "}
              <a href="#" className="prose-link">
                here
              </a>
              . There are expenses, but at the end of the day there are more important things than money!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
