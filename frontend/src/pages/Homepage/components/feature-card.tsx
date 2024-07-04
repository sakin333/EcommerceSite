import { CollectionTypes } from "../types/collection-types";

const FeatureCard = ({ image, title, price }: CollectionTypes) => {
  return (
    <div className="bg-gray-100 p-4 lg:p-6 rounded-lg shadow-lg max-w-[200px] lg:max-w-[300px] w-[100%] max-h-[400px] h-[100%] flex-none transition duration-100 ease-in hover:scale-105 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-36 lg:h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm lg:text-lg">{price}</p>
    </div>
  );
};

export default FeatureCard;
