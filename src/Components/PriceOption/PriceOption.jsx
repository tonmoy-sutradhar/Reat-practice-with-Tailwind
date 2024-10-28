import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 text-white rounded-md p-4 mt-4 flex flex-col">
      <h1 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h1>
      <h1 className="text-3xl text-center">{name}</h1>

      <div className="pl-6 flex-grow">
        {features.map((f, idx) => (
          <Feature key={idx} feature={f}></Feature>
        ))}
      </div>
      <button className="bg-green-600 w-full font-bold mt-12 py-2 rounded-lg hover:bg-green-700">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
