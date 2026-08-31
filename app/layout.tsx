import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Perpex Insights — B2B Transformation & Execution Services",
    template: "%s // Perpex Insights",
  },
  description:
    "Organising the Un-organised. Perpex Insights helps businesses diagnose what's broken, build the systems needed to operate well, train teams to execute, and monitor performance daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
