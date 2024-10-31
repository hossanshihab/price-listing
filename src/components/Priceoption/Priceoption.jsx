import Features from "./../Fetures/Features";

const Priceoption = ({ options }) => {
  return (
    <div
      className="bg-blue-500 p-10 flex flex-col items-center  
    text-white rounded-3xl"
    >
      <h2 className="text-center">
        <span className="text-5xl">{options.price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-center my-8">
        <span className="text-6xl">{options.name}</span>
      </h4>

      <div className="pl-6 flex-grow">
        {options.features.map((feature) => (
          <Features feature={feature}></Features>
        ))}
      </div>

      <button
        className="btn w-full rounded-3xl bg-green-400 
        mt-5 font-bold border-none"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default Priceoption;
