import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";
import "./globals.css";

/* Single variable family (300–800) used for both display and body type. */
const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Valleys Conservation Project New Zealand",
    template: "%s — Valleys Project",
  },
  description:
    "A Fiordland predator-trapping conservation initiative run in partnership with DOC and the NZ National Parks & Conservation Foundation. Protecting New Zealand birdlife through significant yet affordable conservation projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hostGrotesk.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        {/* Green "get involved" band appears above the footer on every page */}
        <GetInvolved />
        <Footer />
      </body>
    </html>
  );
}
