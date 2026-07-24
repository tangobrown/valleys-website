import type { SVGProps } from "react";

/* ---- Logo bird-swoosh mark (two-tone) ---- */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="58" height="42" viewBox="0 0 58 42" aria-hidden {...props}>
      <path d="M4 8 C 24 32, 30 33, 52 30 C 33 25, 21 19, 12 5 Z" fill="#1e2444" />
      <path d="M22 35 C 36 31, 46 20, 55 6 C 41 16, 31 23, 19 27 Z" fill="#86bf6b" />
    </svg>
  );
}

/* ---- Nav caret ---- */
export function Caret(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden {...props}>
      <path
        d="M2 4 L6 8 L10 4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Home info-card icons (green stroke via currentColor) ---- */
export function TrappingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 12.5 L11 15.5 L16.5 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FinancesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M3 5.5 A2.5 2.5 0 0 1 5.5 3 H11 L20 12 A1.8 1.8 0 0 1 20 14.5 L14.5 20 A1.8 1.8 0 0 1 12 20 L3 11 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 22 C 12 22 5 14.5 5 9 A7 7 0 0 1 19 9 C 19 14.5 12 22 12 22 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ---- Get-involved band icons (white) ---- */
export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 20.5 C 3.5 14 2 9.8 4 7 A4.4 4.4 0 0 1 12 7 A4.4 4.4 0 0 1 20 7 C 22 9.8 20.5 14 12 20.5 Z" />
    </svg>
  );
}

export function MedalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="8.5" r="5.2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 13 L7 22 L12 19 L17 22 L15 13" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M4 6.5 L12 12.5 L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function PersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4.5 20 C 4.5 15.5 8 13.5 12 13.5 C 16 13.5 19.5 15.5 19.5 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---- Committee group icon ---- */
export function GroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M2.5 18 C 2.5 14.5 5 12.8 8 12.8 C 11 12.8 13.5 14.5 13.5 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 13 C 14 12.9 15 12.8 16 12.8 C 19 12.8 21.5 14.5 21.5 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---- Map pin (valley tiles) ---- */
export function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2 C 7.6 2 4 5.6 4 10 C 4 16 12 22 12 22 C 12 22 20 16 20 10 C 20 5.6 16.4 2 12 2 Z M12 12.6 A2.6 2.6 0 1 1 12 7.4 A2.6 2.6 0 0 1 12 12.6 Z" />
    </svg>
  );
}

/* ---- Mobile nav ---- */
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 12 H20 M14 6 L20 12 L14 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
