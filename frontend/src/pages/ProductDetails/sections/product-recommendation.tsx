import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchRecommendedProducts } from "../../../features/productRecommendation/productRecommendationSlice";
import { mockProducts, mockRecommendedProducts } from "../../../mockData";
import RecommendedProductCard from "../components/recommended-product-card";
import { Link } from "react-router-dom";

type ProductRecommendationProps = {
  productId: string | undefined;
};

const ProductRecommendation = ({ productId }: ProductRecommendationProps) => {
  // const { recommendedProducts } = useAppSelector((state) => state.productsRecommendation)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchRecommendedProducts(productId))
  // }, [productId])

  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto px-6 lg:px-0">
        <h1 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-8">
          You may also like
        </h1>
      </div>
      <div className="flex gap-4 lg:gap-8 overflow-x-auto py-4 scrollbar-hide">
        {mockRecommendedProducts.map((item) => (
          <RecommendedProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductRecommendation;
