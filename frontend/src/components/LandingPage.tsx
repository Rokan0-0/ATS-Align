import { HeroSection } from "./HeroSection";
import { ProblemSection } from "./ProblemSection";
import { PricingSection } from "./PricingSection";
import { CTASection } from "./CTASection";

interface LandingPageProps {
  onNavigateToTool?: () => void;
}

export function LandingPage({ onNavigateToTool }: LandingPageProps) {
  return (
    <>
      <HeroSection onNavigateToTool={onNavigateToTool} />
      <ProblemSection />
      <PricingSection onNavigateToTool={onNavigateToTool} />
      <CTASection />
    </>
  );
}
