import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import FrameworkSection from "@/components/home/FrameworkSection";
import ClientsGrid from "@/components/home/ClientsGrid";
import RealitySection from "@/components/home/RealitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import CTASection from "@/components/home/CTASection";
import { getServices, getTestimonials } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [services, testimonials] = await Promise.all([getServices(), getTestimonials()]);

  return (
    <>
      <Hero />
      <ProofStrip />
      <FrameworkSection services={services} />
      <ClientsGrid testimonials={testimonials} />
      <RealitySection />
      <TestimonialsSection testimonials={testimonials} />
      <DifferentiatorsSection />
      <CTASection />
    </>
  );
}
