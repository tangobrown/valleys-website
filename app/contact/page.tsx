import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { donateUrl } from "@/lib/nav";

export const metadata: Metadata = { title: "Contact / Get Involved" };

const involvementBlurbs: { title: string; body: string; italic?: boolean }[] = [
  { title: "Valley Sponsor", body: "Wish to become the lead funder “Adopting” a Valley?", italic: true },
  { title: "Team Member", body: "Able to provide your time to set out and service traps?", italic: true },
  {
    title: "Interested Party",
    body: "Interested in becoming a lead funder “Adopting a Valley”, or have a team of Philanthropists prepared to do so?",
    italic: true,
  },
  {
    title: "Become a donor",
    body: "Wish to make a financial contribution to the trapping and be kept informed about the VALLEYS PROJECT?",
    italic: false,
  },
  {
    title: "Trap Sponsor",
    body: "Sponsor a trap for $250 and be kept informed of the Valleys Project’s progress?",
    italic: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact/Get Involved"
        height={370}
        titleSize={50}
        image="/images/belvedere-falls.jpg"
        imageAlt="Belvedere Falls in flood, Fiordland"
      >
        <a
          href="mailto:valleys@xtra.co.nz"
          className="mt-[14px] font-sans text-[17px] font-bold text-[#c9e6b5] [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] hover:underline"
        >
          valleys@xtra.co.nz
        </a>
      </Hero>

      <section className="bg-white px-5 pb-10 pt-[74px] sm:px-8">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-16 lg:grid-cols-[1.35fr_1fr]">
          {/* Form */}
          <ContactForm />

          {/* Involvement panel */}
          <div className="bg-lightgrey px-8 pb-9 pt-[34px]">
            <div className="flex flex-col gap-[22px]">
              {involvementBlurbs.map((b) => (
                <div key={b.title}>
                  <h3
                    className={`mb-[5px] font-display text-[24px] text-heading ${
                      b.italic ? "font-bold italic" : "font-extrabold"
                    }`}
                  >
                    {b.title}
                  </h3>
                  <p className="m-0 text-[17px] leading-[1.6] text-ink">{b.body}</p>
                </div>
              ))}
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block self-start rounded-[3px] bg-brand px-7 py-[13px] font-display text-[14px] font-semibold tracking-[1.3px] text-white transition-colors hover:bg-brand-hover"
              >
                DONATE NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
