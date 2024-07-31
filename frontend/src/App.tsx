import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage/homepage";
import Shoppage from "./pages/Shoppage/shop-page";
import ContactPage from "./pages/Contact/contact-page";
import LookbookLayout from "./pages/Lookbook/lookbook-layout";
import AddToCart from "./pages/AddToCart/add-to-cart-page";
import ProductDetailsPage from "./pages/ProductDetails/product-details-page";
import LoginSignupPage from "./auth/login-signup-page";

import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path=""
          element={user ? <Homepage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <LoginSignupPage /> : <Navigate to="/" />}
        />
        <Route path="/shop" element={<Shoppage />} />
        <Route
          path="/shop/product/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/lookbook" element={<LookbookLayout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
