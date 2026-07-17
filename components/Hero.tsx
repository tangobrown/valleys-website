import type { ReactNode } from "react";

interface HeroProps {
  title: string;
  /** Desktop hero height in px (scales down on mobile via clamp). */
  height: number;
  /** Background fill — a next/image or a Placeholder, absolutely positioned. */
  background: ReactNode;
  /** Subhead / CTA rendered under the H1. */
  children?: ReactNode;
  /** H1 size in px (desktop). */
  titleSize?: number;
  /** Constrain the H1 width. */
  titleMaxWidth?: number;
  /** Show the white wave bottom edge (interior pages). Home passes false. */
  wave?: boolean;
  /** Overlay strength. */
  overlay?: "soft" | "light";
}

function WaveEdge() {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="absolute -bottom-px left-0 block h-12 w-full"
      aria-hidden
    >
      <path d="M0,34 C240,46 480,46 720,38 C960,30 1200,30 1440,38 L1440,48 L0,48 Z" fill="#ffffff" />
    </svg>
  );
}

export default function Hero({
  title,
  height,
  background,
  children,
  titleSize = 46,
  titleMaxWidth,
  wave = true,
  overlay = "soft",
}: HeroProps) {
  const heightStyle = {
    height: `clamp(${Math.round(height * 0.6)}px, ${(height / 12).toFixed(1)}vw, ${height}px)`,
  };
  const titleStyle = {
    fontSize: `clamp(${Math.max(26, Math.round(titleSize * 0.58))}px, ${(titleSize / 8.5).toFixed(1)}vw, ${titleSize}px)`,
    maxWidth: titleMaxWidth ? `${titleMaxWidth}px` : undefined,
  };
  const overlayClass =
    overlay === "soft"
      ? "bg-[linear-gradient(90deg,rgba(20,28,24,0.5),rgba(20,28,24,0.12))]"
      : "bg-[linear-gradient(90deg,rgba(20,28,24,0.35),rgba(20,28,24,0.05))]";

  return (
    <section className="relative w-full overflow-hidden bg-hero-base" style={heightStyle}>
      <div className="absolute inset-0">{background}</div>
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      <div className="relative mx-auto flex h-full max-w-shell flex-col justify-center px-5 pb-10 sm:px-8">
        <h1
          className="m-0 font-display font-bold leading-[1.12] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]"
          style={titleStyle}
        >
          {title}
        </h1>
        {children}
      </div>
      {wave && <WaveEdge />}
    </section>
  );
}
