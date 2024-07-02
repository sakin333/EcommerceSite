import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-6 relative z-[999]">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            E-Shop
          </Link>
        </div>

        <div className="hidden sm:flex gap-10">
          <Link
            to="/"
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to="/deals"
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
          >
            Deals
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/cart" aria-label="cart">
            <ShoppingCartIcon className="text-gray-800 text-3xl hover:text-blue-600 transition duration-300" />
          </Link>
          <Link to="/profile" aria-label="profile">
            <AccountCircleIcon className="text-gray-800 text-3xl hover:text-blue-600 transition duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
