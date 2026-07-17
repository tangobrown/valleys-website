export const aboutMenu = [
  { label: "Adopt a Valley", href: "/about-the-project" },
  { label: "Location & Project Costs", href: "/location-project-costs" },
  { label: "Finances", href: "/finances" },
  { label: "Trapping methods", href: "/trapping-methods" },
] as const;

export const aboutSectionPaths = aboutMenu.map((i) => i.href) as string[];

export const facebookUrl = "https://www.facebook.com/";
export const donateUrl = "https://nznaturefund.org/projects/the-valleys/";
export const docUrl = "http://www.doc.govt.nz/";
