import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
