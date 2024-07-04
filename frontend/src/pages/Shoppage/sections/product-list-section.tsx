import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";

const ProductsListSection = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <Sidebar />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsListSection;
