import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchProductDetail } from "../../../features/productDetails/productDetailsSlice";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { mockProductDetails } from "../../../mockData";
import {
  decreaseCartQuantity,
  getCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../../features/cart/cartSlice";

type ProductDetailsProps = {
  productId: string | undefined;
};

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [shownIndex, setShownIndex] = useState<number>(0);
  const [descriptionShown, setDescriptionShown] = useState<boolean>(true);
  const [fade, setFade] = useState<boolean>(false);

  const [product, setProduct] = useState(
    () =>
      mockProductDetails.filter(
        (product) => product.id === parseInt(productId!)
      )[0]
  );

  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  // const { product, loading, error } = useAppSelector(
  //   (state) => state.productDetail
  // );

  // useEffect(() => {
  //   dispatch(fetchProductDetail(productId));
  // }, [dispatch, productId]);

  useEffect(() => {
    const filteredProduct = mockProductDetails.filter(
      (product) => product.id === parseInt(productId!)
    );
    if (filteredProduct) setProduct(filteredProduct[0]);
  }, [productId]);

  const quantity =
    cartItems.find((item) => item.id === product.id)?.quantity || 0;

  const handleImageChange = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setShownIndex(index);
      setFade(false);
    }, 300);
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
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

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-[52px] lg:py-[92px]">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 mb-16 lg:mb-24">
          <div className="flex flex-row lg:flex-col gap-6 md:gap-4">
            {product.media.images.map((image, index) => (
              <div
                className="w-[100px] h-[100px] cursor-pointer"
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={image.url}
                  alt={`image ${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 h-[642px] px-4">
            <img
              // src={`https://${
              //   product.media.images.find((img) => img.isPrimary)?.url
              // }`}
              src={product.media.images[shownIndex]?.url}
              alt={product.name}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-sm lg:text-lg text-gray-700 mb-4">
              Brand: {product.brand}
            </p>
            <span className="text-2xl font-bold text-green-600 mb-4">
              {product.price.text}
            </span>
            <div className="flex items-center mt-4 mb-8 gap-4 lg:gap-8">
              <button
                className={`p-2 rounded-full text-white mr-4 ${
                  isWishlist ? "bg-red-500" : "bg-gray-300"
                }`}
                onClick={handleWishlist}
              >
                {isWishlist ? (
                  <AiFillHeart className="text-xl" />
                ) : (
                  <AiOutlineHeart className="text-xl" />
                )}
              </button>
              {quantity === 0 ? (
                <button
                  className="w-full md:w-auto text-base bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  onClick={() => handleIncreaseQuantity(product.id)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      className="w-8 h-8 text-lg lg:text-xl font-bold rounded-full hover:bg-gray-200 flex items-center justify-center shadow-md border border-gray-100"
                      onClick={() => handleDecreaseQuantity(product.id)}
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
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="w-full text-xs md:text-base bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <div className="text-gray-700 mb-8">
              {/* <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
              <p>{product.description}</p> */}
              <h3 className="text-lg font-semibold mt-4">About:</h3>
              <p>{product.info.aboutMe}</p>
              {product.info.sizeAndFit && (
                <>
                  <h3 className="text-lg font-semibold mt-4">Size and Fit:</h3>
                  <p>{product.info.sizeAndFit}</p>
                </>
              )}
              <h3 className="text-lg font-semibold mt-4">Care Info:</h3>
              <p>{product.info.careInfo}</p>
            </div>

            <div className="flex items-center gap-4">
              <h2 className="text-sm md:text-lg font-bold text-gray-900">
                SHARE ON:
              </h2>
              <div className="flex gap-3 items-center">
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125 transition duration-300"
                >
                  <FaFacebookF className="text-sm md:text-lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125  transition duration-300"
                >
                  <FaTwitter className="text-sm md:text-lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125  transition duration-300"
                >
                  <FaInstagram className="text-sm md:text-lg" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125  transition duration-300"
                >
                  <FaLinkedinIn className="text-sm md:text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex gap-8 md:gap-12 mb-4 lg:mb-8">
            <button
              className={`text-lg md:text-xl font-semibold ${
                descriptionShown && "underline"
              } underline-offset-[8px] cursor-pointer`}
              onClick={() => setDescriptionShown(true)}
            >
              Description
            </button>
            <button
              className={`text-lg md:text-xl font-semibold ${
                !descriptionShown && "underline"
              } underline-offset-[8px] cursor-pointer`}
              onClick={() => setDescriptionShown(false)}
            >
              Reviews (5)
            </button>
          </div>
          <div>
            <p className="text-sm md:text-lg">
              {descriptionShown && product.description}
              {!descriptionShown && "reviews from people"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
