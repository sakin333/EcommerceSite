import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Product } from "../../../features/products/productTypes";
import { ellipsis } from "../../../utilities/ellipsis";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  decreaseCartQuantity,
  getCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProductCard = ({
  id,
  imageUrl,
  name,
  price,
  colour,
  brandName,
}: Product) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { cartItems, cartQuantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const quantity = cartItems.find((item) => item.id === id)?.quantity || 0;

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  useEffect(() => {
    console.log("cart data", cartItems, cartQuantity);
  }, [cartQuantity, cartItems]);

  const handleAddToCart = (id: number) => {
    dispatch(increaseCartQuantity(id));
    dispatch(getCartQuantity());
    alert(`product with id ${id} addded to cart`);
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
    dispatch(getCartQuantity());
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseCartQuantity(id));
    dispatch(getCartQuantity());
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseCartQuantity(id));
    dispatch(getCartQuantity());
  };

  return (
    <div className="min-w-[180px] max-w-[340px] h-full max-h-[452px] md:max-h-[540px] bg-white rounded-lg shadow-lg flex flex-col">
      <div className="h-[60%] relative">
        <img
          // src={`https://${imageUrl}`}
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <Link to={`product/${id}`} className="absolute top-[12px] right-[12px]">
          <FaArrowAltCircleRight className="text-xl lg:text-2xl text-green-600" />
        </Link>
      </div>
      <div className="h-[40%] p-2 sm:p-4 flex flex-col justify-between">
        <div className="h-[70%]">
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
            <span className="text-sm md:text-xl font-bold">
              {formatCurrency(price.value)}
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
        </div>
        {quantity === 0 ? (
          <button
            className="w-full text-xs md:text-base bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={() => handleAddToCart(id)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-4">
              <button
                className="w-8 h-8 text-lg lg:text-xl font-bold rounded-full hover:bg-gray-200 flex items-center justify-center shadow-md border border-gray-100"
                onClick={() => handleDecreaseQuantity(id)}
              >
                -
              </button>
              <div className="text-gray-500">
                <span className="text-gray-900 text-lg lg:text-xl font-bold mr-2">
                  {quantity}
                </span>{" "}
                in cart
              </div>
              <button
                className="w-8 h-8 text-lg lg:text-xl font-bold rounded-full hover:bg-gray-200 flex items-center justify-center shadow-md border border-gray-100"
                onClick={() => handleIncreaseQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="w-full text-xs md:text-base bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleRemoveItem(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
