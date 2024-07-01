import HEROSECTIONIMAGE from "../../../assets/hero-section-image.jpg";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center h-[100vh] relative">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[500px] font-bold uppercase leading-none text-[#f5f8ff] drop-shadow-md text-center">
          Street Wear
        </h1>
      </div>
      <div className="container flex items-start justify-evenly relative">
        <div className="px-4 w-[40%] pt-[48px]">
          <h1 className="text-7xl font-bold mb-8 leading-[84px]">
            Discover Your Perfect Look
          </h1>
          <p className="text-xl mb-12">
            Explore our exclusive collection of stylish apparel and accessories.
            Elevate your wardrobe with high-quality products at unbeatable
            prices.
          </p>
          <a
            href="/shop"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <div className="w-full md:w-1/2 h-auto max-w-[600px] max-h-[640px] rounded-lg rounded-bl-[30%] overflow-hidden">
          <img
            src={HEROSECTIONIMAGE}
            alt=""
            className="w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
