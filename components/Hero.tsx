import Image from "next/image";
import type { ReactNode } from "react";

interface HeroProps {
  title: string;
  /** Desktop hero height in px (scales down on mobile via clamp). */
  height: number;
  /** Photo path under /public. */
  image: string;
  imageAlt: string;
  /** Set on the LCP hero (home page) to preload it. */
  priority?: boolean;
  /** Image position for art direction (object-position / background-position). */
  imagePosition?: string;
  /** Subhead / CTA rendered under the H1. */
  children?: ReactNode;
  /** H1 size in px (desktop). */
  titleSize?: number;
  /** Constrain the H1 width. */
  titleMaxWidth?: number;
  /** Show the white wave bottom edge. */
  wave?: boolean;
  /** Overlay strength (cover variant only). */
  overlay?: "soft" | "light";
  /**
   * "cover" — full-bleed photo behind the text (home page).
   * "panel" — navy background with the photo in a right-side panel (interior pages).
   */
  variant?: "cover" | "panel";
}

function WaveEdge() {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="absolute -bottom-px left-0 z-10 block h-12 w-full"
      aria-hidden
    >
      <path d="M0,34 C240,46 480,46 720,38 C960,30 1200,30 1440,38 L1440,48 L0,48 Z" fill="#ffffff" />
    </svg>
  );
}

export default function Hero({
  title,
  height,
  image,
  imageAlt,
  priority = false,
  imagePosition,
  children,
  titleSize = 58,
  titleMaxWidth,
  wave = true,
  overlay = "soft",
  variant = "panel",
}: HeroProps) {
  const heightStyle = {
    height: `clamp(${Math.round(height * 0.6)}px, ${(height / 12).toFixed(1)}vw, ${height}px)`,
  };
  const titleStyle = {
    fontSize: `clamp(${Math.max(28, Math.round(titleSize * 0.58))}px, ${(titleSize / 8.5).toFixed(1)}vw, ${titleSize}px)`,
    maxWidth: titleMaxWidth ? `${titleMaxWidth}px` : undefined,
  };

  const heading = (
    <h1
      className="m-0 font-display font-bold leading-[1.12] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.35)]"
      style={titleStyle}
    >
      {title}
    </h1>
  );

  /* ---- Interior pages: navy background + right-side image panel ---- */
  if (variant === "panel") {
    return (
      <section className="relative w-full overflow-hidden bg-ink" style={heightStyle}>
        {/* Right image panel — full height, ~⅓ width, blended into the navy on its left edge */}
        <div
          role="img"
          aria-label={imageAlt}
          className="absolute inset-y-0 right-0 w-[42%] bg-cover sm:w-[33%]"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition ?? "center" }}
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#1e2444,rgba(30,36,68,0)_55%)]"
            aria-hidden
          />
        </div>

        {/* Text — kept clear of the panel */}
        <div className="relative mx-auto flex h-full max-w-shell flex-col justify-center px-5 pb-10 sm:px-8">
          <div className="max-w-[54%] sm:max-w-[62%]">
            {heading}
            {children}
          </div>
        </div>

        {wave && <WaveEdge />}
      </section>
    );
  }

  /* ---- Home page: full-bleed cover photo ---- */
  const overlayClass =
    overlay === "soft"
      ? "bg-[linear-gradient(90deg,rgba(20,28,24,0.5),rgba(20,28,24,0.12))]"
      : "bg-[linear-gradient(90deg,rgba(20,28,24,0.35),rgba(20,28,24,0.05))]";

  return (
    <section className="relative w-full overflow-hidden bg-hero-base" style={heightStyle}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden />
      <div className="relative mx-auto flex h-full max-w-shell flex-col justify-center px-5 pb-10 sm:px-8">
        {heading}
        {children}
      </div>
      {wave && <WaveEdge />}
    </section>
  );
}
