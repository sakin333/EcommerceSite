import ProductCard from "../components/products-cards";
import Sidebar from "../components/sidebar";

const ProductsListSection = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Sample Product 1",
      description: "This is a description of the sample product.",
      price: 29.99,
      tag: "Hot",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Sample Product 2",
      description: "This is a description of the sample product.",
      price: 29.99,
      tag: "Hot",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Sample Product 3",
      description: "This is a description of the sample product.",
      price: 29.99,
      tag: "Hot",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Sample Product 1",
      description: "This is a description of the sample product.",
      price: 29.99,
      tag: "Hot",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Sample Product 2",
      description: "This is a description of the sample product.",
      price: 29.99,
      tag: "Hot",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      name: "Sample Product 3",
      description: "This is a description of the sample product.",
      price: 29.99,
      tag: "Hot",
    },
  ];

  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto w-full flex ">
        <div className="w-[20%] hidden lg:block">
          <Sidebar />
        </div>

        <div className="px-4 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="mb-4">
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                tag={product.tag}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
