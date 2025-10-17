import { Footer, Header } from "@/components/layout";
import {
  ComparisonSection,
  CTASection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  IntegrationsSection,
  PricingSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/section";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
