import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono, Hanken_Grotesk, Spectral } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Used only for the homepage hero statement: one deliberate quiet, editorial
// accent, not a site-wide typeface.
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perpex.in"),
  title: {
    default: "PerpeX Insights: B2B Transformation & Execution Services",
    template: "%s | PerpeX Insights",
  },
  description:
    "Organising the un-organised. PerpeX Insights diagnoses what is broken in a growing business, builds the systems to fix it, trains the team to run them, and monitors execution daily.",
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
      "B2B transformation and execution firm: Gap Analysis, Documentation, Training, and Managing & Monitoring for growing businesses.",
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
    <html
      lang="en"
      className={`${schibsted.variable} ${jetbrainsMono.variable} ${hankenGrotesk.variable} ${spectral.variable}`}
    >
      <body className="bg-base font-sans text-navy-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScroll />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
