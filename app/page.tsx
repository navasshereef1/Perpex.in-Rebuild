import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import FrameworkSection from "@/components/home/FrameworkSection";
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
      <RealitySection />
      <TestimonialsSection />
      <DifferentiatorsSection />
      <CTASection />
    </>
  );
}
