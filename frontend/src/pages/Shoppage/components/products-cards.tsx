import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ id, image, name, description, price, tag }: any) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = () => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="min-w-[180px] max-w-[340px] bg-white rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-30 md:h-82 object-cover rounded-t-lg"
        />
        {tag && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 sm:px-4 text-xs sm:text-sm font-semibold rounded bg-blue-300 text-blue-900`}
          >
            {tag}
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-col p-2 sm:p-4">
        <h3 className="text-sm md:text-lg font-semibold mb-2">{name}</h3>
        <p className="text-xs md:text-base text-gray-600 mb-4 hidden md:block">
          {description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm md:text-xl font-bold">
            ${price.toFixed(2)}
          </span>
          <button
            className={`p-2 rounded-full text-white ${
              isWishlist ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={handleWishlist}
          >
            {isWishlist ? (
              <AiFillHeart className="text-sm lg:text-lg" />
            ) : (
              <AiOutlineHeart className="text-sm lg:text-lg" />
            )}
          </button>
        </div>
        <button
          className="w-full text-xs md:text-base bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
