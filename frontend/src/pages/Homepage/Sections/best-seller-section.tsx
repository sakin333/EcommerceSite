import { MouseEventHandler, useState } from "react";
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
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-[92px]">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 p-4">
        {/* Content Section */}
        <div className="md:w-[40%]">
          <h1 className="text-5xl font-bold mb-4">Best Seller Products</h1>
          <p className="text-xl mb-12">
            Discover the latest trends in fashion and elevate your style with
            our exclusive collection. From casual wear to formal attire, our
            products are crafted with the highest quality materials and designed
            to make you stand out.
          </p>
          <a
            href="/about"
            className="px-8 py-4 border-2 border-gray-600 text-lg font-semibold rounded-md shadow-md hover:border-blue-600 hover:text-blue-600 transition duration-300"
          >
            See More
          </a>
        </div>

        {/* Best Seller Cards Section */}
        <div className="md:w-[60%] flex flex-col gap-8">
          <div className="border-2 border-green-600 w-[1140px] overflow-hidden">
            <div
              className="flex gap-[180px] transition-transform duration-500 ease-in-out border-2 border-red-500"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              <div
                className="flex items-center justify-start gap-8 min-w-[1140px]
            "
              >
                {collectionItems.slice(0, 4).map((item) => (
                  <BestSellerCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </div>

              <div className="flex items-center justify-start gap-8 min-w-[1140px]">
                {collectionItems.slice(4, 7).map((item) => (
                  <BestSellerCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <span
                key={index}
                className={`inline-block w-4 h-4 border-2 border-gray-900 rounded-full cursor-pointer ${
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
