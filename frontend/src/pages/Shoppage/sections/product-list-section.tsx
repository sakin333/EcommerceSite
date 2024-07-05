import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";

const ProductsListSection = () => {
  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto w-full flex ">
        <div className="w-[20%]">
          <Sidebar />
        </div>

        <div className="px-8">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
