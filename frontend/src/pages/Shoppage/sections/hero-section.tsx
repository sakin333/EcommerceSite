import SHOPHEROSECTIONIMAGE from "../../../assets/shop-hero-section-image.png";

const ShopHeroSection = () => {
  return (
    <section className="h-[30vh] lg:h-[40vh]">
      <div className="container mx-auto pl-4 flex items-center h-full justify-around overflow-hidden">
        <div>
          <h1 className="text-xl lg:text-4xl font-semibold mb-4">
            FW 2024/2025 COLLECTION
          </h1>
          <a
            href="/lookbook"
            className="inline-block leading-6 md:leading-0 text-xs lg:text-lg font-semibold underline underline-offset-4 lg:underline-offset-8"
          >
            Checkout our brands lookbook
          </a>
        </div>
        <div className="w-full lg:w-1/2 h-auto max-w-[320px] lg:max-w-[440px] relative">
          <div
            className="absolute top-[35%] left-[0] max-w-[600px] w-full max-h-[700px] h-full
           rounded-full bg-gray-300"
          ></div>
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
