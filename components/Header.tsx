"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { aboutMenu, aboutSectionPaths, facebookUrl } from "@/lib/nav";
import { Caret, CloseIcon, LogoMark, MenuIcon } from "./icons";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Valleys Project — home">
      <span className="flex flex-col leading-none">
        <span className="font-display text-[28px] font-extrabold tracking-[0.5px] text-ink">VALLEYS</span>
        <span className="mt-[3px] font-display text-[12px] font-semibold tracking-[5px] text-brand">PROJECT</span>
      </span>
      <LogoMark className="block" />
    </Link>
  );
}

/* Grey active pill vs. plain nav link */
function navPill(active: boolean) {
  return active
    ? "px-4 py-[9px] rounded-[5px] bg-navpill text-ink"
    : "px-3 py-[9px] rounded-[5px] text-ink hover:bg-navpill/60 transition-colors";
}

export default function Header() {
  const pathname = usePathname();
  const [ddOpen, setDdOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isGallery = pathname === "/gallery";
  const isContact = pathname === "/contact";
  const inAbout = aboutSectionPaths.includes(pathname);

  // Close menus on route change
  useEffect(() => {
    setDdOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-5 py-[14px] sm:px-8">
        <Logo />

        {/* ---- Desktop nav ---- */}
        <nav className="hidden items-center gap-1.5 font-display text-[16px] font-medium nav:flex">
          <Link href="/" className={navPill(isHome)}>
            Home
          </Link>

          {/* About the Project dropdown — revealed on hover / keyboard focus (CSS),
              state tracks aria-expanded only. */}
          <div
            className="group relative"
            onMouseEnter={() => setDdOpen(true)}
            onMouseLeave={() => setDdOpen(false)}
            onFocus={() => setDdOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setDdOpen(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={ddOpen}
              className={`flex cursor-pointer items-center gap-[5px] whitespace-nowrap ${
                inAbout ? "rounded-[5px] bg-navpill px-4 py-[9px]" : "px-3 py-[9px]"
              } text-ink`}
            >
              About the Project
              <Caret className="opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>

            {/* Wrapper is flush to the trigger (top-full) with transparent pt-2,
                so the 8px visual gap is still hoverable and the menu doesn't
                flicker closed as the pointer travels from trigger to items. */}
            <div
              className="pointer-events-none invisible absolute left-0 top-full z-[60] translate-y-[6px] pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
            >
              <div
                role="menu"
                className="flex min-w-[236px] flex-col rounded-md bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                {aboutMenu.map((item) => {
                  const current = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={`whitespace-nowrap px-5 py-[10px] text-[15px] hover:bg-menu-hover ${
                        current ? "font-semibold text-brand-active" : "font-normal text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link href="/gallery" className={navPill(isGallery)}>
            Gallery
          </Link>
          <Link href="/contact" className={navPill(isContact)}>
            Contact/Get involved
          </Link>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-[5px] bg-facebook px-5 py-[9px] text-white transition-opacity hover:opacity-90"
          >
            Facebook
          </a>
        </nav>

        {/* ---- Mobile hamburger ---- */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="text-ink nav:hidden"
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {/* ---- Mobile drawer ---- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] nav:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-[340px] flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <span className="font-display text-[20px] font-extrabold tracking-[0.5px] text-ink">
                VALLEYS<span className="ml-1 text-[12px] font-semibold tracking-[3px] text-brand">PROJECT</span>
              </span>
              <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-ink">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-4 font-display text-[16px] font-medium text-ink">
              <Link href="/" className={`rounded-md px-3 py-3 ${isHome ? "bg-navpill" : ""}`}>
                Home
              </Link>

              <div className="mt-1 px-3 pb-1 pt-2 text-[13px] font-semibold uppercase tracking-[1px] text-muted">
                About the Project
              </div>
              {aboutMenu.map((item) => {
                const current = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-5 py-3 text-[15px] ${
                      current ? "font-semibold text-brand-active" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link href="/gallery" className={`mt-1 rounded-md px-3 py-3 ${isGallery ? "bg-navpill" : ""}`}>
                Gallery
              </Link>
              <Link href="/contact" className={`rounded-md px-3 py-3 ${isContact ? "bg-navpill" : ""}`}>
                Contact/Get involved
              </Link>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-[5px] bg-facebook px-5 py-3 text-center text-white"
              >
                Facebook
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
