import SHOPHEROSECTIONIMAGE from "../../../assets/shop-hero-section-image.png";

const ShopHeroSection = () => {
  return (
    <section className="h-[40vh] overflow-hidden relative">
      <div className="container mx-auto pl-4 pr-[240px] flex items-center h-full justify-between">
        <div className="absolute top-[20%] left-[55%] w-[600px] h-[700px] rounded-full bg-gray-300"></div>
        <div>
          <h1 className="text-xl lg:text-4xl font-semibold mb-4">
            FW 2024/2025 COLLECTION
          </h1>
          <a
            href="/lookbook"
            className="inline-block text-sm lg:text-lg font-semibold underline underline-offset-8"
          >
            Checkout our brands lookbook
          </a>
        </div>
        <div className="w-full lg:w-1/2 h-auto max-w-[320px] lg:max-w-[440px]">
          <img
            src={SHOPHEROSECTIONIMAGE}
            alt="shop hero section image"
            className="w-full h-full object-cover rotate-[10deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopHeroSection;
