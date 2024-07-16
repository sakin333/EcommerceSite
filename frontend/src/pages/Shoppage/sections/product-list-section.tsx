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
    imageUrl:
      "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
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
    imageUrl:
      "https://americantall.com/cdn/shop/products/American-Tall-Men-Mens-Dylan-Slim-Fit-Jeans-Retro-Blue-front.jpg?v=1665604879",
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
    imageUrl:
      "https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20525mm.37.jpg",
    price: {
      value: 75.5,
      text: "$75.50",
    },
    url: "https://example.com/products/summer-floral-dress",
  },
  {
    id: 5,
    name: "Winter Floral Dress",
    brandName: "Sunshine Couture",
    colour: "Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0028/1945/7082/files/black-floral-dress.jpg?v=1578013838",
    price: {
      value: 70.5,
      text: "$70.50",
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
  const [selectedColor, setSelectedColor] = useState<string>("");

  // useEffect(() => {
  //   if (selectedCategoryId) dispatch(fetchProducts(selectedCategoryId));
  // }, [dispatch, selectedCategoryId]);

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
      <div className="container mx-auto w-full flex ">
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
