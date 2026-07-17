import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
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
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
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
