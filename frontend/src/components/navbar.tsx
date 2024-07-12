import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="py-6 relative z-[999]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-md md:text-xl lg:text-2xl font-bold text-gray-800"
          >
            E-Shop
          </Link>
        </div>

        <div className="hidden sm:flex gap-10">
          <Link
            to="/"
            className="text-gray-800 font-semibold active:text-blue-600 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-800 font-semibold active:text-blue-600 hover:text-blue-600 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to="/deals"
            className="text-gray-800 font-semibold active:text-blue-600 hover:text-blue-600 transition duration-300"
          >
            Deals
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 font-semibold active:text-blue-600 hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </div>

        <button onClick={toggleMenu} className="block lg:hidden">
          <FaBars className="text-xl" />
        </button>

        <div className="hidden sm:flex items-center gap-6">
          <Link to="/cart" aria-label="cart">
            <FaShoppingCart className="text-gray-800 text-xl lg:text-2xl hover:text-blue-600 transition duration-300" />
          </Link>
          <Link to="/profile" aria-label="profile">
            <FaUser className="text-gray-800 text-xl lg:text-2xl hover:text-blue-600 transition duration-300" />
          </Link>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden absolute top-full right-6 w-full max-w-[120px] bg-white shadow-md p-4 rounded-md sidebar`}
      >
        <div className="flex flex-col items-start gap-4">
          <Link
            to="/"
            className="text-sm text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-sm text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            to="/deals"
            className="text-sm text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}
          >
            Deals
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-800 font-semibold hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div className="flex items-center gap-4 ">
            <Link to="/cart" aria-label="cart" onClick={toggleMenu}>
              <FaShoppingCart className="text-gray-800 hover:text-blue-600 transition duration-300" />
            </Link>
            <Link to="/profile" aria-label="profile" onClick={toggleMenu}>
              <FaUser className="text-gray-800 hover:text-blue-600 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
