import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesAccordion from "./ServicesAccordion";
import { getServices } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gap Analysis, Documentation, Training, and Managing & Monitoring — the four-stage PerpeX transformation framework.",
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Diagnose — Design — Enable — Control"
        title="The transformation framework"
        description="Each service is powerful on its own. Together, they create irreversible transformation."
      />
      <ServicesAccordion services={services} />
    </>
  );
}
