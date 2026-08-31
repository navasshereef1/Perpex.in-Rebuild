import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesAccordion from "./ServicesAccordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gap Analysis, Documentation, Training, and Managing & Monitoring — the four-stage Perpex transformation framework.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnose — Design — Enable — Control"
        title="The transformation framework"
        description="Each service is powerful on its own. Together, they create irreversible transformation."
      />
      <ServicesAccordion />
    </>
  );
}
