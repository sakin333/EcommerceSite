import { FaChevronLeft, FaCreditCard, FaPaypal, FaTimes } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";
import CartItem from "./components/cart-items";
import { formatCurrency } from "../../utilities/formatCurrency";
import { mockProducts } from "../../mockData";

const AddToCart = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const shippingFee: number = 2.99;

  const subTotal = cartItems.reduce((total, cartItem) => {
    const item = mockProducts.find((item) => item.id === cartItem.id);
    return total + (item?.price.value || 0) * cartItem.quantity;
  }, 0);

  return (
    <section>
      <div className="container mx-auto py-[52px] lg:py-[92px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-grow mb-8 md:mb-0">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-8 lg:mb-16">
              Shopping Cart
            </h1>
            <div>
              <div className="flex justify-between items-center p-4">
                <p className="text-sm lg:text-lg font-bold w-1/3">Product</p>
                <p className="text-sm lg:text-lg font-bold w-1/3 text-center ">
                  Quantity
                </p>
                <p className="text-sm lg:text-lg font-bold w-1/3 text-right">
                  Total Price
                </p>
              </div>
              {cartItems.length === 0 ? (
                <div className="text-sm lg:text-lg font-semibold text-center text-gray-400 my-8">
                  No items in cart
                </div>
              ) : (
                cartItems.map((item) => <CartItem key={item.id} {...item} />)
              )}
            </div>
            <div className="flex md:flex-row justify-between items-center lg:items-end">
              <div className="mb-4 md:mb-0">
                <a
                  href="/shop"
                  className="text-sm lg:text-lg font-bold flex items-center gap-2"
                >
                  <FaChevronLeft className="text-sm lg:text-lg font-bold" />{" "}
                  Continue Shopping
                </a>
              </div>
              {cartItems.length !== 0 && (
                <div className="md:w-auto">
                  <div className="border-b-2 border-gray-300 mb-4 lg:mb-8">
                    <p className="text-sm lg:text-lg text-gray-600 mb-2 lg:mb-4">
                      Subtotal:{" "}
                      <span className="text-lg lg:text-xl font-bold text-gray-900 ml-8 md:ml-16">
                        {formatCurrency(subTotal)}
                      </span>
                    </p>
                    <p className="text-sm lg:text-lg text-gray-600 mb-2 lg:mb-8">
                      Shipping:{" "}
                      <span className="text-lg lg:text-xl font-bold text-gray-900 ml-8 md:ml-16">
                        {formatCurrency(shippingFee)}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl lg:text-2xl font-bold">
                      Total:{" "}
                      <span className="ml-8 md:ml-16">
                        {formatCurrency(subTotal + shippingFee)}
                      </span>
                    </h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 md:p-8 lg:p-12 shadow-md flex-1">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-8">
              Payment Info
            </h1>

            <div>
              <p className="text-xs lg:text-sm text-gray-600 mb-2">
                Payment Method:
              </p>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  className="mr-2"
                />
                <label
                  htmlFor="creditCard"
                  className="flex items-center cursor-pointer"
                >
                  <FaCreditCard className="mr-2" /> Credit Card
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  className="mr-2"
                />
                <label
                  htmlFor="paypal"
                  className="flex items-center cursor-pointer"
                >
                  <FaPaypal className="mr-2" /> Paypal
                </label>
              </div>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="creditcardnumber"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="password"
                    id="creditcardnumber"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expirationdate"
                      className="block text-sm text-gray-700 mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      id="expirationdate"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-sm text-gray-700 mb-2"
                    >
                      CVV/CVC
                    </label>
                    <input
                      type="number"
                      id="cvv"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                  Check Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
