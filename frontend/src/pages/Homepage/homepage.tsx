import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BestSellerSection from "./Sections/best-seller-section";
import FeaturesSection from "./Sections/feature-section";
import HeroSection from "./Sections/hero-section";
import TestimonialsSection from "./Sections/testimonials-section";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BestSellerSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default Homepage;
