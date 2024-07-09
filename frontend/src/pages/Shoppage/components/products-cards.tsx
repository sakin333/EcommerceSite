import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Product } from "../../../features/products/productTypes";
import { ellipsis } from "../../../utilities/ellipsis";

const ProductCard = ({
  id,
  imageUrl,
  name,
  price,
  colour,
  brandName,
}: Product) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = () => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    <div className="min-w-[180px] max-w-[340px] h-full max-h-[440px] md:max-h-[540px] bg-white rounded-lg shadow-lg flex flex-col">
      <div className="h-[60%]">
        <img
          src={`https://${imageUrl}`}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="h-[40%] p-2 sm:p-4 flex flex-col justify-between">
        <div className="h-[75%]">
          <h3
            className="text-sm md:text-lg font-semibold mb-2"
            title={`${name}`}
          >
            {ellipsis(name, 40)}
          </h3>
          <span className="text-xs md:text-base text-gray-600 mb-4">
            {brandName}
          </span>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm md:text-xl font-bold">{price.text}</span>
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
