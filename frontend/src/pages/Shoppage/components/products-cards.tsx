import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductCard = () => {
  const [isWishlist, setIsWishlist] = useState(false);

  const product = {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Sample Product",
    description: "This is a description of the sample product.",
    price: 29.99,
    tag: "Hot",
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = () => {
    console.log(`Product ${product.id} added to cart`);
  };

  return (
    <div className="max-w-[280px] md:max-w-[340px] bg-white rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 md:h-82 object-cover rounded-t-lg"
        />
        {product.tag && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 sm:px-4 ext-xs sm:text-sm font-semibold rounded bg-blue-300 text-blue-900`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-col p-2 sm:p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
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
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
