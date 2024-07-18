import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../../../app/hooks";
import { mockProducts } from "../../../mockData";
import {
  decreaseCartQuantity,
  getCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../../features/cart/cartSlice";
import { formatCurrency } from "../../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const item = mockProducts.find((item) => item.id === id);
  if (item == null) return null;

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
    <div className="flex justify-between items-center border-t-2 border-b-2 border-gray-300 p-4 mb-8 lg:mb-10">
      <div className="flex items-start md:items-center flex-col md:flex-row gap-4 w-1/3">
        <img
          src={item.imageUrl}
          alt="product image"
          className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
        />
        <div>
          <h2 className="text-sm lg:text-lg font-bold mb-1 lg:mb-0">
            {item.name}
          </h2>
          <p className="text-xs lg:text-sm text-gray-500">{item.brandName}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-4 w-1/3 ">
        <button
          className="w-8 h-8 lg:w-12 lg:h-12 text-lg lg:text-xl font-bold rounded-full hover:bg-gray-200 flex items-center justify-center"
          onClick={() => handleDecreaseQuantity(item.id)}
        >
          -
        </button>
        <p className="text-lg lg:text-xl font-bold">{quantity}</p>
        <button
          className="w-8 h-8 lg:w-12 lg:h-12 text-lg lg:text-xl font-bold rounded-full hover:bg-gray-200 flex items-center justify-center"
          onClick={() => handleIncreaseQuantity(item.id)}
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-4 w-1/3">
        <p className="text-sm lg:text-lg font-bold">
          {formatCurrency(item.price.value * quantity)}
        </p>
        <button
          className="w-6 h-6 lg:w-8 lg:h-8 text-lg lg:text-xl font-bold rounded-full hover:bg-red-200 flex items-center justify-center"
          onClick={() => handleRemoveItem(item.id)}
        >
          <FaTimes className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
