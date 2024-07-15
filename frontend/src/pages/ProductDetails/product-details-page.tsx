import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductDetail } from "../../features/productDetails/productDetailsSlice";
import { ProductDetail } from "../../features/productDetails/productDetailsTypes";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const mockProductDetails: ProductDetail[] = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    description:
      "A timeless black leather jacket that never goes out of style.",
    brand: "Fashionista",
    media: {
      images: [
        {
          url: "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
          colorWayId: "black01",
          color: "Black",
          isPrimary: true,
        },
        {
          url: "https://cdn-img.prettylittlething.com/f/c/2/3/fc23e6d2955ada665fb7abc6d903b26f79d7560b_clt5204_1.jpg?imwidth=600",
          colorWayId: "black02",
          color: "Black",
          isPrimary: false,
        },
        {
          url: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67030445_99.jpg?imwidth=2048&imdensity=1&ts=1703093595446",
          colorWayId: "black03",
          color: "Black",
          isPrimary: false,
        },
      ],
    },
    info: {
      aboutMe: "100% genuine leather. Dry clean only.",
      sizeAndFit: "Model is wearing size M.",
      careInfo: "Use leather conditioner to keep the material soft.",
    },
    productType: {
      id: 1,
      name: "Jacket",
    },
    price: {
      value: 120.99,
      text: "$120.99",
    },
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Stylish blue jeans with a slim fit design.",
    brand: "Denim Deluxe",
    media: {
      images: [
        {
          url: "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
          colorWayId: "blue01",
          color: "Blue",
          isPrimary: true,
        },
        {
          url: "https://example.com/images/slim-fit-jeans-2.jpg",
          colorWayId: "blue02",
          color: "Blue",
          isPrimary: false,
        },
      ],
    },
    info: {
      aboutMe: "98% cotton, 2% elastane. Machine washable.",
      sizeAndFit: "Model is wearing size 32.",
      careInfo: "Wash inside out to preserve color.",
    },
    productType: {
      id: 2,
      name: "Jeans",
    },
    price: {
      value: 49.99,
      text: "$49.99",
    },
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    description:
      "A beautiful yellow dress with a floral print, perfect for summer.",
    brand: "Sunshine Couture",
    media: {
      images: [
        {
          url: "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
          colorWayId: "yellow01",
          color: "Yellow",
          isPrimary: true,
        },
        {
          url: "https://example.com/images/summer-floral-dress-2.jpg",
          colorWayId: "yellow02",
          color: "Yellow",
          isPrimary: false,
        },
      ],
    },
    info: {
      aboutMe: "100% cotton. Machine washable.",
      sizeAndFit: null,
      careInfo: "Wash with similar colors.",
    },
    productType: {
      id: 3,
      name: "Dress",
    },
    price: {
      value: 75.5,
      text: "$75.50",
    },
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [shownIndex, setShownIndex] = useState<number>(0);
  const [descriptionShown, setDescriptionShown] = useState<boolean>(true);

  const [product, setProduct] = useState(
    () =>
      mockProductDetails.filter(
        (product) => product.id === parseInt(productId!)
      )[0]
  );

  const dispatch = useAppDispatch();
  // const { product, loading, error } = useAppSelector(
  //   (state) => state.productDetail
  // );

  // useEffect(() => {
  //   dispatch(fetchProductDetail(productId));
  // }, [dispatch, productId]);

  // useEffect(() => {
  //   const filteredProduct = mockProductDetails.filter(product => product.id === parseInt(productId!))
  //   if(filteredProduct) setProduct(filteredProduct[0])

  // }, [productId])

  const handleImageChange = (index: number) => {
    setShownIndex(index);
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = () => {
    console.log(`Product ${productId} added to cart`);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <section className="py-[52px] lg:py-[92px]">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start gap-4 mb-16 lg:mb-24 border border-blue-500">
          <div className="flex flex-col gap-4">
            {product.media.images.map((image, index) => (
              <div
                className="w-[100px] h-[100px]"
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
          <div className="w-full md:w-1/2 h-[642px] px-4 border border-red-500">
            <img
              // src={`https://${
              //   product.media.images.find((img) => img.isPrimary)?.url
              // }`}
              src={product.media.images.find((img) => img.isPrimary)?.url}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-700 mb-2">Brand: {product.brand}</p>
            <span className="text-2xl font-bold text-green-600 mb-4">
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

            <div className="text-gray-700 mb-8">
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
        <div>
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
