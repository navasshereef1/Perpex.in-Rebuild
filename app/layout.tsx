import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "PerpeX Insights",
    legalName: "PerpeX Insights LLP",
    url: "https://perpex.in",
    description:
      "B2B transformation and execution firm — Gap Analysis, Documentation, Training, and Managing & Monitoring for growing businesses.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "T 1, Hilite Business Park",
      addressLocality: "Calicut",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    telephone: "+91-97451-00036",
    email: "info@perpex.in",
    areaServed: "IN",
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-cream-50 text-navy-900 selection:bg-cyan-400">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
