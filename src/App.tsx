import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { CTASection } from "./components/section/cta-section";
import { FeaturesSection } from "./components/section/features-section";
import { HeroSection } from "./components/section/hero-section";
import { PricingSection } from "./components/section/pricing-section";
import { TestimonialsSection } from "./components/section/testimonials-section";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
