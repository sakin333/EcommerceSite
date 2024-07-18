import { useParams } from "react-router-dom";
import ProductDetails from "./sections/product-details";
import ProductRecommendation from "./sections/product-recommendation";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  return (
    <>
      <ProductDetails productId={productId} />
      <ProductRecommendation productId={productId} />
    </>
  );
};

export default ProductDetailsPage;
