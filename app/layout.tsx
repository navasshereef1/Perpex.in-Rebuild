import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perpex.in"),
  title: {
    default: "PerpeX Insights — B2B Transformation & Execution Services",
    template: "%s // PerpeX Insights",
  },
  description:
    "Organising the Un-organised. PerpeX Insights helps businesses diagnose what's broken, build the systems needed to operate well, train teams to execute, and monitor performance daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-cream-50 text-navy-900 selection:bg-cyan-400">
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
