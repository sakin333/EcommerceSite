import { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import BestSellerCard from "../components/best-seller-card";

const BestSellerSection = () => {
  const collectionItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Trendy Jacket",
      price: "$120",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Stylish Sneakers",
      price: "$90",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Casual Jeans",
      price: "$70",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Classic Watch",
      price: "$150",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Trendy Jacket",
      price: "$120",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      title: "Stylish Sneakers",
      price: "$90",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      title: "Casual Jeans",
      price: "$70",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150",
      title: "Classic Watch",
      price: "$150",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/150",
      title: "Casual Jeans",
      price: "$70",
    },
  ];

  const sliderDiv: ReactElement[] = [
    <div
      className="flex items-center justify-start gap-4 lg:gap-8 min-w-full
"
    >
      {collectionItems.slice(0, 3).map((item) => (
        <BestSellerCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>,
    <div className="flex items-center justify-start gap-4 lg:gap-8 min-w-full">
      {collectionItems.slice(3, 6).map((item) => (
        <BestSellerCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>,
    <div className="flex items-center justify-start  gap-4 lg:gap-8 min-w-full">
      {collectionItems.slice(6, 9).map((item) => (
        <BestSellerCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>,
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide((prevState) => (prevState + 1) % 3);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-[92px]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-6">
        {/* Content Section */}
        <div className="w-full lg:w-[32%] flex flex-col items-center lg:items-start mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Best Seller Products
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8 lg:mb-12 text-center lg:text-left">
            Discover the latest trends in fashion and elevate your style with
            our exclusive collection. From casual wear to formal attire, our
            products are crafted with the highest quality materials and designed
            to make you stand out.
          </p>
          <a
            href="/about"
            className="inline-block px-4 lg:px-8 py-2 lg:py-4 border-2 border-gray-600 text-base md:text-lg font-semibold rounded-md shadow-md hover:border-blue-600 hover:text-blue-600 transition duration-300"
          >
            See More
          </a>
        </div>

        {/* Best Seller Cards Section */}
        <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start gap-8">
          <div className="w-full lg:w-[980px] overflow-hidden">
            <div
              className="transition-transform duration-1000 ease-in-out hidden lg:flex
              "
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {sliderDiv.map((item) => item)}
            </div>
            <div className="lg:hidden flex overflow-x-auto gap-[340px] scrollbar-hide">
              {sliderDiv.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="hidden lg:flex gap-2 lg:gap-4">
            {Array.from({ length: sliderDiv.length }).map((_, index) => (
              <span
                key={index}
                className={`inline-block w-3 h-3 md:w-4 md:h-4 border-2 border-gray-900 rounded-full cursor-pointer ${
                  activeSlide === index ? "bg-gray-900" : "bg-transparent"
                }`}
                onClick={() => handleSlideChange(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
