import HEROSECTIONIMAGE from "../../../assets/hero-section-image.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:h-[100vh] relative pb-[54px] lg:py-[92px] ">
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] hidden lg:block">
        <h1 className="text-[10vw] lg:text-[500px] font-bold uppercase leading-none text-[#f5f8ff] drop-shadow-md text-center">
          Street Wear
        </h1>
      </div>
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between lg:justify-evenly relative mt-12 lg:mt-0">
        <div className="w-full lg:w-[40%] p-4 lg:pt-[48px] text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight lg:leading-[84px]">
            Discover Your Perfect Look
          </h1>
          <p className="text-lg md:text-xl mb-8 lg:mb-12">
            Explore our exclusive collection of stylish apparel and accessories.
            Elevate your wardrobe with high-quality products at unbeatable
            prices.
          </p>
          <a
            href="/shop"
            className="inline-block px-6 lg:px-8 py-2 lg:py-3 bg-blue-600 text-white text-md md:text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <div className="w-full lg:w-1/2 h-auto max-w-[320px] lg:max-w-[600px] max-h-[400px] lg:max-h-[640px] rounded-lg rounded-bl-[30%] overflow-hidden mb-8 lg:mb-0">
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
