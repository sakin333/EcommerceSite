import { ChangeEvent, useState } from "react";
import { categories, colors } from "../constants/data";
import { FaChevronRight } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => {
      const newValue = parseInt(value, 10);
      return name === "min"
        ? [newValue, prevRange[1]]
        : [prevRange[0], newValue];
    });
  };

  const handleRatingChange = (rating: number) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;
    return Array(filledStars)
      .fill(<AiFillStar className="text-xl lg:text-3xl text-blue-600" />)
      .concat(
        Array(emptyStars).fill(
          <AiOutlineStar className="text-xl lg:text-3xl text-gray-400" />
        )
      );
  };

  const displayedRating = hoverRating || selectedRating;

  return (
    <div className="">
      {/* Categories */}
      <div className="border-2 border-gray-400 rounded-lg p-4 mb-8">
        <h2 className="text-sm md:text-lg font-semibold mb-4 px-[6px]">
          Categories
        </h2>
        <ul>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <button
                className={`w-full text-left p-2 rounded flex justify-between items-center ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} <FaChevronRight className="text-sm" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="border-2 border-gray-400 rounded-lg p-4 mb-8">
        <h2 className="text-sm md:text-lg font-semibold mb-4 px-[6px]">
          Price
        </h2>
        <div className="flex items-center space-x-2 px-2">
          <input
            type="number"
            name="min"
            className="w-16 p-2 border border-gray-300 rounded"
            min="0"
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={handlePriceChange}
          />
          <span>-</span>
          <input
            type="number"
            name="min"
            className="w-16 p-2 border border-gray-300 rounded"
            min={priceRange[0]}
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      {/* Color */}
      <div className="border-2 border-gray-400 rounded-lg p-4 mb-8">
        <h2 className="text-sm md:text-lg font-semibold mb-4 px-[6px]">
          Color
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div className="flex flex-col items-center">
              <button
                key={color}
                className={`w-6 h-6 rounded-full mb-2 border-2 transition duration-400 ease-in ${
                  selectedColor === color ? " scale-150" : "scale-1"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => setSelectedColor(color)}
              />
              <p className="text-xs md:text-sm text-gray-500">{color}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="border-2 border-gray-400 rounded-lg p-4 mb-8">
        <h2 className="text-sm md:text-lg font-semibold mb-4 px-[6px]">
          Rating
        </h2>
        <ul className="flex gap-2 lg:gap-4 px-2">
          {handleRatingChange(displayedRating).map((star, index) => (
            <li key={index} className="mb-2 last:mb-0">
              <button
                className="w-full"
                onClick={() => setSelectedRating(index + 1)}
                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(0)}
              >
                {star}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
