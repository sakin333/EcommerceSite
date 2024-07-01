import FeatureCard from "../components/feature-card";
import FeatureSectionImage from "../../../assets/feature-section-image.jpg";

const FeatureSection = () => {
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
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Stylish Sneakers",
      price: "$90",
    },
  ];

  return (
    <section className="bg-white py-[calc(92px+46px)]">
      <div className="container mx-auto">
        <div className="mb-[92px]">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Discover Our New Collection
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Fresh styles and new arrivals just for you. Explore the latest
            trends.
          </p>
          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-4">
            {collectionItems.map((item) => (
              <FeatureCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-evenly relative ">
          <div className="w-full md:w-1/2 h-auto max-w-[600px] max-h-[640px] rounded-lg rounded-tl-[30%] overflow-hidden">
            <img
              src={FeatureSectionImage}
              alt="feature section image"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
          <div className="w-[40%] pt-[48px]">
            <h1 className="text-5xl font-bold mb-4">Best Fashion Since 2016</h1>
            <p className="text-xl mb-12">
              Discover the latest trends in fashion and elevate your style with
              our exclusive collection. From casual wear to formal attire, our
              products are crafted with the highest quality materials and
              designed to make you stand out. Discover the latest trends in
              fashion and elevate your style with our exclusive collection. From
              casual wear to formal attire, our products are crafted with the
              highest quality materials and designed to make you stand out.
            </p>
            <a
              href="/about"
              className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="absolute bottom-[-46px] left-[600px] bg-gray-300 opacity-[0.7] rounded-md flex justify-around max-w-[700px] w-[100%] py-6 px-8">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">2016</h1>
              <p className="text-sm font-semibold">Started Since</p>
            </div>
            <div className="w-[2px] h-[64px] bg-gray-500"></div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">3108+</h1>
              <p className="text-sm font-semibold">Available Products</p>
            </div>
            <div className="w-[2px] h-[64px] bg-gray-500"></div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-black">8900+</h1>
              <p className="text-sm font-semibold">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
