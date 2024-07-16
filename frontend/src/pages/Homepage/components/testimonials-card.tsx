import { TestimonialsType } from "../types/testimonial-types";

const TestimonialsCard = ({ image, name, role, text }: TestimonialsType) => {
  return (
    <div className="bg-gray-100 px-2 lg:px-4 py-4 lg:py-6 rounded-md lg:rounded-lg shadow-md lg:shadow-lg flex flex-col items-center text-center min-w-[calc(800px/3)] lg:min-w-[calc(1260px/3)]">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mb-4"
      />
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
        {name}
      </h3>
      <p className="text-xs lg:text-sm text-gray-500 mb-4">{role}</p>
      <p className="text-base lg:text-lg text-gray-600">"{text}"</p>
    </div>
  );
};

export default TestimonialsCard;
