import { useState } from "react";
import TestimonialsCard from "../components/testimonials-card";
import { TestimonialsType } from "../types/testimonial-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials: TestimonialsType[] = [
    {
      id: 1,
      name: "Jane Doe",
      role: "CEO at Company",
      image: "https://via.placeholder.com/150",
      text: "This service is amazing! It has significantly improved our team's productivity.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Marketing Director",
      image: "https://via.placeholder.com/150",
      text: "A fantastic product with great support. Our revenue has increased since using it.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Product Manager",
      image: "https://via.placeholder.com/150",
      text: "Highly recommended. The user interface is intuitive and easy to navigate.",
    },
    {
      id: 4,
      name: "Caitlin Clark",
      role: "Product Manager",
      image: "https://via.placeholder.com/150",
      text: "Highly recommended. The user interface is intuitive and easy to navigate.",
    },
    {
      id: 5,
      name: "Park Chaewon",
      role: "Product Manager",
      image: "https://via.placeholder.com/150",
      text: "Highly recommended. The user interface is intuitive and easy to navigate.",
    },
    {
      id: 6,
      name: "Kim Jisoo",
      role: "Product Manager",
      image: "https://via.placeholder.com/150",
      text: "Highly recommended. The user interface is intuitive and easy to navigate.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 3 ? prevIndex + 1 : 0
    );
  };

  const slidePercentage = (): number => {
    const slideToShow =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    return 100 / slideToShow;
  };

  return (
    <section className="bg-white py-[54px] lg:py-[92px]">
      <div className="container mx-auto px-6">
        <div className="mb-[64px] lg:mb-[92px] text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
            What People Say About Us
          </h2>
          <p className="text-lg lg:text-xl text-center text-gray-600 mb-12">
            Fresh styles and new arrivals just for you. Explore the latest
            trends.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 lg:gap-8 ">
          <button
            onClick={handlePrev}
            className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-around bg-gray-200 rounded-full cursor-pointer"
          >
            <FaChevronLeft className="text-gray-600 w-3 h-3 lg:w-5 lg:h-5 " />
          </button>
          <div className="overflow-hidden w-full max-w-[1360px]">
            <div
              className="flex gap-4 lg:gap-8 transition-transform duration-500 px-2 ml-[6px] lg:ml-0"
              style={{
                transform: `translateX(-${currentIndex * slidePercentage()}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial.id}
                  image={testimonial.image}
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                />
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
          >
            <FaChevronRight className="text-gray-600 w-3 h-3 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
