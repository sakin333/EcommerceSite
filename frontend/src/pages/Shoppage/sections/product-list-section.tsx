import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";
import { RootState } from "../../../app/store";
import { useEffect } from "react";
import { fetchProducts } from "../../../features/products/productSlice";

const ProductsListSection = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto w-full flex ">
        <div className="w-[20%] hidden lg:block">
          <Sidebar />
        </div>

        <div className="px-4 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product) => (
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
