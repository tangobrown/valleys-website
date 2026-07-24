import type { ReactNode } from "react";
import { EnvelopeIcon, HeartIcon, MedalIcon, PersonIcon } from "./icons";

const cards: { icon: ReactNode; line1: string; line2: string; href: string }[] = [
  { icon: <HeartIcon className="h-10 w-10" />, line1: "Become a", line2: "team member", href: "/contact" },
  { icon: <MedalIcon className="h-10 w-10" />, line1: "Sponsor a", line2: "trap or valley", href: "/contact" },
  { icon: <EnvelopeIcon className="h-10 w-10" />, line1: "Interested", line2: "party", href: "/contact" },
  { icon: <PersonIcon className="h-10 w-10" />, line1: "Become a", line2: "donor", href: "/contact" },
];

export default function GetInvolved() {
  return (
    <section className="relative w-full overflow-hidden bg-band bg-[linear-gradient(rgba(60,90,40,0.28),rgba(60,90,40,0.05)_40%,rgba(60,90,40,0.30))] px-5 pb-24 pt-[70px] sm:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(150,190,110,0.35),transparent_60%)]"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto max-w-[940px] text-center">
        <h2 className="mb-[42px] font-display text-[48px] font-bold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
          How can you get involved?
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-5 nav:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.line2}
              href={c.href}
              className="flex flex-col items-center justify-center bg-ink px-6 pb-11 pt-12 text-center text-white transition-transform hover:-translate-y-1"
            >
              <span className="mb-6 text-white">{c.icon}</span>
              <span className="font-display text-[14px] font-bold uppercase leading-[1.5] tracking-[1px] text-white">
                {c.line1}
                <br />
                {c.line2}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
