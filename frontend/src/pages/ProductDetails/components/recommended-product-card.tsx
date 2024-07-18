import { useNavigate } from "react-router-dom";
import { ellipsis } from "../../../utilities/ellipsis";
import { formatCurrency } from "../../../utilities/formatCurrency";

type RecommendedProductCardProps = {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
  price: number;
};

const RecommendedProductCard = ({
  id,
  name,
  brandName,
  imageUrl,
  price,
}: RecommendedProductCardProps) => {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/shop/product/${id}`);
  };

  return (
    <div
      className="bg-gray-100 p-2 rounded-md lg:rounded-lg shadow-md max-w-[200px] lg:max-w-[280px] w-full max-h-[360px] lg:max-h-[450px] flex-none transition-transform transform hover:scale-105"
      onClick={() => handleProductClick(id)}
    >
      <div className="h-[70%] lg:h-[75%] mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="h-[20%]">
        <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">
          {ellipsis(name, 20)}
        </h3>
        <p className="text-xs md:text-sm text-gray-700 mb-2">{brandName}</p>
        <p className="text-base md:text-lg font-semibold text-gray-800">
          {formatCurrency(price)}
        </p>
      </div>
    </div>
  );
};

export default RecommendedProductCard;
