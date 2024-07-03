import BestSellerSection from "./Sections/best-seller-section";
import FeaturesSection from "./Sections/feature-section";
import HeroSection from "./Sections/hero-section";
import TestimonialsSection from "./Sections/testimonials-section";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BestSellerSection />
      <TestimonialsSection />
    </>
  );
};

export default Homepage;
