const BestSellerCard = ({ image, title, price, category, id }: any) => {
  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-lg max-w-[300px] w-[100%] max-h-[500px] h-[100%] flex-none">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
        {id}
      </h3>
      <p className="text-sm text-gray-700">{category}</p>
      <p className="text-lg">{price}</p>
    </div>
  );
};

export default BestSellerCard;
