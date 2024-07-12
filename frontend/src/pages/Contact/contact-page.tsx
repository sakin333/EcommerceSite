import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import ContactPageImage from "../../assets/contact-page-image.png";

const ContactPage = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
      <div className="container max-w-[1440px] w-full rounded-xl pt-8 pb-8 lg:pt-16 relative">
        <a
          href="https://www.google.com/maps"
          className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md font-bold absolute top-[55%] lg:top-32 left-[20%] lg:left-24 hover:bg-blue-600 hover:text-white transition duration-200 ease-in"
        >
          look at google maps <FaChevronRight />
        </a>
        <div className="max-w-[320px] lg:max-w-[400px] w-full absolute top-0 right-[30px] lg:right-24 bg-white rounded-lg p-4 md:p-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 md:p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 md:p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 md:p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 h-24 md:h-32 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-semibold bg-blue-600 text-white p-2 md:p-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={ContactPageImage}
            alt="Contact page image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-3/4 px-6 lg:px-24 mt-8 lg:mt-[-92px]">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-16 text-center lg:text-left">
            Contact Us
          </h2>

          <div className="flex flex-col lg:flex-row justify-between py-4 lg:py-8 w-full">
            <div className="space-y-6 mb-8 md:mb-0">
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-gray-700 text-xl mr-3" />
                <p className="text-xs sm:text-sm">
                  1234 Street Name, City, State, 12345
                </p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhoneAlt className="text-gray-700 text-xl mr-3" />
                <p className="text-xs sm:text-sm">(123) 456-7890</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="text-gray-700 text-xl mr-3" />
                <p className="text-xs sm:text-sm">info@example.com</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4 items-center">
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125 transition duration-300"
                >
                  <FaFacebookF className="text-xl md:text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125  transition duration-300"
                >
                  <FaTwitter className="text-xl md:text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125  transition duration-300"
                >
                  <FaInstagram className="text-xl md:text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:scale-125  transition duration-300"
                >
                  <FaLinkedinIn className="text-xl md:text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
