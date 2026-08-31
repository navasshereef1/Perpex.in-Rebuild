import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import FrameworkSection from "@/components/home/FrameworkSection";
import ClientsGrid from "@/components/home/ClientsGrid";
import RealitySection from "@/components/home/RealitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FrameworkSection />
      <ClientsGrid />
      <RealitySection />
      <TestimonialsSection />
      <DifferentiatorsSection />
      <CTASection />
    </>
  );
}
