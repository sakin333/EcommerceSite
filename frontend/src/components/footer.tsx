import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Company Info */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm md:text-base text-gray-400">
            We are a leading company in our industry in the region. We're
            dedicated to providing the best service and quality to our
            customers.
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} ESOP. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="pl-0 md:pl-[100px]">
          <h2 className="text-lg md:text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-sm md:text-base text-gray-400">
            <li className="mb-2">
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#shop" className="hover:underline">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="#deals" className="hover:underline">
                Deals
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="pl-0 lmd:pl-[50px]">
          <h2 className="text-lg md:text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4">Contact Us</h2>
          <ul className="text-sm md:text-base text-gray-400">
            <li className="mb-2">
              <a href="tel:+1234567890" className="hover:underline">
                Phone: +977 1234567890
              </a>
            </li>
            <li className="mb-2">
              <a href="mailto:info@company.com" className="hover:underline">
                Email: info@company.com
              </a>
            </li>
            <li className="mb-2">Address: Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-10 border-t border-gray-500 pt-8">
        <div className="container mx-auto text-center px-4 md:px-0">
          <h2 className="text-xl md:text-2xl font-bold mb-8">
            Subscribe to our Newsletter
          </h2>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto p-2 md:p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 md:px-8 py-[10px] rounded bg-blue-500 hover:bg-blue-600 text-white font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
