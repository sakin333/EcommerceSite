import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";
import { RootState } from "../../../app/store";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../../features/products/productSlice";
import { Brands } from "../../../features/categories/categoriesTypes";
import { Product } from "../../../features/products/productTypes";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    brandName: "Fashionista",
    colour: "Black",
    imageUrl: "https://example.com/images/classic-leather-jacket.jpg",
    price: {
      value: 120.99,
      text: "$120.99",
    },
    url: "https://example.com/products/classic-leather-jacket",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    brandName: "Denim Deluxe",
    colour: "Blue",
    imageUrl: "https://example.com/images/slim-fit-jeans.jpg",
    price: {
      value: 49.99,
      text: "$49.99",
    },
    url: "https://example.com/products/slim-fit-jeans",
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    brandName: "Sunshine Couture",
    colour: "Yellow",
    imageUrl: "https://example.com/images/summer-floral-dress.jpg",
    price: {
      value: 75.5,
      text: "$75.50",
    },
    url: "https://example.com/products/summer-floral-dress",
  },
];

const ProductsListSection = () => {
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

  // useEffect(() => {
  //   if (selectedCategoryId) dispatch(fetchProducts(selectedCategoryId));
  // }, [dispatch, selectedCategoryId]);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(
      (product) =>
        product.price.value >= selectedPriceRange[0] &&
        product.price.value <= selectedPriceRange[1]
    );
  }, [mockProducts, selectedPriceRange]);

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
