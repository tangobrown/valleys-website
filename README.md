# The Valleys Conservation Project — Website

A 7-page marketing/informational site for **The Valleys Conservation Project New Zealand**, a
Fiordland predator-trapping conservation initiative. Built with **Next.js (App Router)** and
**Tailwind CSS v4**, recreated from the design handoff in `design_handoff_valleys_site/`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Routes

| Page                     | Route                     |
| ------------------------ | ------------------------- |
| Home                     | `/`                       |
| Adopt a Valley (About)   | `/about-the-project`      |
| Location & Project Costs | `/location-project-costs` |
| Finances                 | `/finances`               |
| Trapping methods         | `/trapping-methods`       |
| Gallery                  | `/gallery`                |
| Contact / Get involved   | `/contact`                |

## Structure

- `app/layout.tsx` — shared shell: fonts (Poppins + Open Sans via `next/font`), `Header`,
  the green "get involved" band, and `Footer`.
- `app/*/page.tsx` — one route per page; copy is transcribed verbatim from the handoff.
- `components/` — `Header` (sticky nav, About dropdown, mobile drawer), `Hero`,
  `GetInvolved`, `SectionHeading`, `Placeholder`, `ContactForm` (client), `icons`.
- `app/globals.css` — design tokens as Tailwind v4 `@theme` variables (colors, fonts,
  `max-w-shell`, the `nav:` breakpoint at 960px).

## Images

Real project photos referenced by the prototype are loaded from `valleys.co.nz` via
`next/image` (allow-listed in `next.config.mjs`): the home tui hero, the blue-duck, and the
stoat. Every other photo is a labelled **`<Placeholder>`** marking where a real asset belongs.
Swap each `<Placeholder label="…">` for `<Image>` with the client's photo. The 8 valley tiles
on the Location page and the Location/Finances/etc. hero banners are also placeholders / SVG
stand-ins per the handoff.

## Contact form

Client-side only: validates required fields (Name, Email, Phone, Town) + email format, then
shows the success panel. Wire the `handleSubmit` in `components/ContactForm.tsx` to a real
email/form endpoint for production.
