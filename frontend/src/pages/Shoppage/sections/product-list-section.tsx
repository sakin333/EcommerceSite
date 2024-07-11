import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";
import { RootState } from "../../../app/store";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../../features/products/productSlice";
import { Brands } from "../../../features/categories/categoriesTypes";
import { Product } from "../../../features/products/productTypes";

const ProductsListSection = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state: RootState) => state.products
  );

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([
    0, 9999,
  ]);

  useEffect(() => {
    if (selectedCategoryId) dispatch(fetchProducts(selectedCategoryId));
  }, [dispatch, selectedCategoryId]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.price.value >= selectedPriceRange[0] &&
        product.price.value <= selectedPriceRange[1]
    );
  }, [products, selectedPriceRange]);

  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto w-full flex ">
        <div className="w-[20%] hidden lg:block">
          <Sidebar
            onCategorySelect={setSelectedCategoryId}
            priceRange={selectedPriceRange}
            onPriceSelect={setSelectedPriceRange}
          />
        </div>

        <div className="px-4 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts?.map((product) => (
            <Link
              to={`product/${product.id}`}
              key={product.id}
              className="mb-4"
            >
              <ProductCard
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
                colour={product.colour}
                brandName={product.brandName}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
