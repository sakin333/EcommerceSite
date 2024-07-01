import Navbar from "../../components/navbar";
import BestSellerSection from "./Sections/best-seller-section";
import FeaturesSection from "./Sections/feature-section";
import HeroSection from "./Sections/hero-section";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BestSellerSection />
    </>
  );
};

export default Homepage;
