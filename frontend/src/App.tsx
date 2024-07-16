import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage/homepage";
import Shoppage from "./pages/Shoppage/shop-page";
import ProductDetails from "./pages/ProductDetails/product-details-page";
import ContactPage from "./pages/Contact/contact-page";
import LookbookLayout from "./pages/Lookbook/lookbook-layout";
import AddToCart from "./pages/AddToCart/add-to-cart-page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/shop/product/:productId" element={<ProductDetails />} />
        <Route path="/lookbook" element={<LookbookLayout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
