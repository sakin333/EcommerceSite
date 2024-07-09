import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductDetail } from "../../features/productDetails/productDetailsSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const [isWishlist, setIsWishlist] = useState(false);

  const dispatch = useAppDispatch();
  const { product, loading, error } = useAppSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = () => {
    console.log(`Product ${productId} added to cart`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={`https://${
              product.media.images.find((img) => img.isPrimary)?.url
            }`}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 mb-2">Brand: {product.brand}</p>
          <span className="text-2xl font-bold text-red-500 mb-4">
            {product.price.text}
          </span>
          <div className="flex items-center mt-4 mb-8">
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
            <button
              className="w-full md:w-auto text-base bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
            <p>{product.description}</p>
            <h3 className="text-lg font-semibold mt-4">About Me:</h3>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
