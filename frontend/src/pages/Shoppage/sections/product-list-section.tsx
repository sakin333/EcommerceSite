import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";
import { RootState } from "../../../app/store";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../../features/products/productSlice";
import { mockProducts } from "../../../mockData";
import { useAuthContext } from "../../../hooks/useAuthContext";

const ProductsListSection = () => {
  const { user } = useAuthContext();

  const dispatch = useAppDispatch();
  // const { products, loading, error } = useAppSelector(
  //   (state: RootState) => state.products
  // );

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([
    0, 9999,
  ]);
  const [selectedColor, setSelectedColor] = useState<string>("");

  // useEffect(() => {
  //   if (selectedCategoryId) dispatch(fetchProducts(selectedCategoryId));
  // }, [dispatch, selectedCategoryId]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        console.log("Data: ", json);
      }

      if (user) {
        fetchProducts();
      }
    };
  }, [user]);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      if (
        !(
          product.price.value >= selectedPriceRange[0] &&
          product.price.value <= selectedPriceRange[1]
        )
      ) {
        return false;
      }

      if (selectedColor && product.colour !== selectedColor) {
        return false;
      }

      return true;
    });
  }, [selectedPriceRange, selectedColor]);

  const colorsArray = Array.from(
    new Set(mockProducts.map((product) => product.colour))
  );

  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto block lg:flex">
        <div className="w-[20%] hidden lg:block">
          <Sidebar
            onCategorySelect={setSelectedCategoryId}
            priceRange={selectedPriceRange}
            onPriceSelect={setSelectedPriceRange}
            selectedColor={selectedColor}
            onColorSelect={setSelectedColor}
            colors={colorsArray}
          />
        </div>

        <div className="px-4 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              colour={product.colour}
              brandName={product.brandName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
