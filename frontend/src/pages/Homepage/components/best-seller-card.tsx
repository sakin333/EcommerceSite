import { CollectionTypes } from "../types/collection-types";

const BestSellerCard = ({ image, title, price, category }: CollectionTypes) => {
  return (
    <div className="bg-gray-100 p-2 rounded-md lg:rounded-lg shadow-md max-w-[200px] lg:max-w-[300px] w-full h-auto flex-none transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-60 lg:h-80 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-gray-700">{category}</p>
      <p className="text-base md:text-lg font-medium text-gray-800">{price}</p>
    </div>
  );
};

export default BestSellerCard;
