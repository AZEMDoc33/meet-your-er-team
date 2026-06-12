import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import ScrollProgress from "@/components/ScrollProgress";
import MotionProvider from "@/components/MotionProvider";

const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/fraunces-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/fraunces-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = localFont({
  src: [
    { path: "../fonts/public-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/public-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/public-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meetyourerteam.com"),
  title: {
    default: "Banner Gateway Emergency Department — Meet Your ER Team",
    template: "%s — Banner Gateway Emergency Department",
  },
  description:
    "Meet the emergency physicians and physician assistants of Banner Gateway Medical Center in Gilbert, AZ, and learn what to expect during your visit.",
  openGraph: {
    siteName: "Meet Your ER Team",
    images: ["/images/hero-gateway.jpg"],
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#31493F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <MotionProvider>
          <a
            href="#main"
            className="absolute -left-[9999px] top-0 z-[200] bg-saguaro text-white px-5 py-3 rounded-br-xl focus:left-0"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Fab />
        </MotionProvider>
      </body>
    </html>
  );
}
