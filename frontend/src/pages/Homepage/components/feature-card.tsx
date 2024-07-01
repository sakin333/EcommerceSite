const FeatureCard = ({ image, title, price }: any) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-[300px] w-[100%] max-h-[400px] h-[100%] flex-none">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-lg">{price}</p>
    </div>
  );
};

export default FeatureCard;
