import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesAccordion from "./ServicesAccordion";
import ServicesComparisonTable from "./ServicesComparisonTable";
import { getServices } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Gap Analysis, Documentation, Training, and Managing & Monitoring: the four-stage PerpeX transformation framework.",
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        title="Four services. No guesswork."
        description="Each one is powerful on its own. Run in sequence, they compound into a system that gets built once and holds."
      />
      <ServicesComparisonTable services={services} />
      <ServicesAccordion services={services} />
    </>
  );
}
