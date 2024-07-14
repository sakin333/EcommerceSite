import { useState } from "react";
import LOOKBOOKHEROIMAGE from "../../assets/lookbook-banner.jpg";
import { images } from "./images";

type ImageCardProps = {
  image: string;
  index: number;
  rowSpan?: string;
  colSpan?: string;
};

const randomTags: string[] = [
  "Modern",
  "Elegant",
  "Street Style",
  "Urban",
  "Chic",
  "Sophistication",
  "Comfort",
  "Bold",
  "Trendy",
  "Classy",
  "Fashion",
  "Minimalist",
  "Stylish",
  "Effortless",
  "Vibrant",
  "Casual",
  "Statement",
  "Refined",
  "Versatile",
  "Timeless",
];

const gallery = "GALLERY";

const getRandomTag = () =>
  randomTags[Math.floor(Math.random() * randomTags.length)];

const ImageCard = ({
  image,
  index,
  rowSpan = "",
  colSpan = "",
}: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div
      key={index}
      className={`relative group h-full w-full ${rowSpan} ${colSpan}`}
    >
      {!isLoaded && (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
      <img
        src={image}
        alt={`Lookbook ${index + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-bold">{getRandomTag()}</span>
      </div>
    </div>
  );
};

const LookbookLayout = () => {
  return (
    <section className="py-[52px] lg:py-[92px]">
      <div className="px-8 flex flex-col items-center justify-center mb-8 lg:mb-16">
        <div className=" w-full grid grid-cols-7">
          {gallery.split("").map((letter) => (
            <h1 className="text-[60px] md:text-[130px] lg:text-[200px] font-bold text-center">
              {letter}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-7 grid-rows-4">
          {images.slice(15, 22).map((image, index) => {
            let rowSpan = "";
            if (index === 1 || index === 5) rowSpan = "row-span-2";
            if (index === 2 || index === 4) rowSpan = "row-span-3";
            if (index === 3) rowSpan = "row-span-4";

            return (
              <ImageCard
                key={index}
                image={image}
                index={index}
                rowSpan={rowSpan}
              />
            );
          })}
        </div>
      </div>

      <div className="container mx-auto text-center mb-8 lg:mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          Explore Our Lookbook
        </h2>
        <p className="text-lg lg:text-xl font-semibold mx-8 lg:mx-[460px]">
          Discover a chic blend of modern sophistication and street-smart style
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 lg:mb-16">
        {images.slice(0, 5).map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            index={index}
            colSpan={index === 1 ? "sm:col-span-2 sm:row-span-2" : ""}
          />
        ))}
      </div>

      <div className="w-full overflow-hidden relative mb-8 lg:mb-16">
        <div className="h-[30vh] lg:h-[50vh] w-1/2 absolute left-1 z-10 bg-[#f5f8ff] text-right px-4 lg:px-8 py-8 lg:py-16">
          <h1 className="text-[32px] md:text-[42px] lg:text-[82px] uppercase font-bold leading-[42px] md:leading-[52px] lg:leading-[92px]">
            City <br /> Chic: Urban <br /> Sophistication <br />
            Meets <br />
            Comfort
          </h1>
        </div>
        <div className="h-[30vh] lg:h-[50vh] w-full rounded-lg overflow-hidden ">
          <img
            src={LOOKBOOKHEROIMAGE}
            alt="Hero"
            className="object-contain translate-x-[280px] w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6 mb-6 ">
        {images.slice(5, 11).map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6  ">
        {images.slice(11, 15).map((image, index) => {
          let colSpan = "";
          if (index === 0) colSpan = "col-start-3 col-end-4";
          if (index === 1) colSpan = "col-start-4 col-end-6 row-span-2";
          if (index === 2) colSpan = "col-start-6 col-end-7";
          if (index === 3) colSpan = "col-start-2 col-end-4";

          return (
            <ImageCard
              key={index}
              image={image}
              index={index}
              colSpan={colSpan}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LookbookLayout;
