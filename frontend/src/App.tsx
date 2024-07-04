import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage/homepage";
import Shoppage from "./pages/Shoppage/shop-page";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
