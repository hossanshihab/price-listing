import Priceoption from "./../Priceoption/Priceoption";

const Priceoptions = () => {
  const gymPriceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 30,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Open gym hours only",
        "No personal training",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Open gym hours and extended hours",
        "2 personal training sessions per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 80,
      currency: "USD",
      features: [
        "24/7 gym access",
        "All group fitness classes",
        "Locker room with spa access",
        "4 personal training sessions per month",
        "Nutrition consultation",
        "Free guest passes (5 per month)",
      ],
    },
    {
      id: 4,
      name: "Student Plan",
      price: 25,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Discounted group classes",
        "Open gym hours only",
        "Student ID required",
      ],
    },
    {
      id: 5,
      name: "Family Plan",
      price: 100,
      currency: "USD",
      features: [
        "24/7 gym access for up to 4 members",
        "All group fitness classes",
        "Locker room access for all members",
        "2 personal training sessions per month for each member",
        "Family-friendly fitness programs",
      ],
    },
    {
      id: 6,
      name: "VIP Plan",
      price: 150,
      currency: "USD",
      features: [
        "24/7 gym access with priority entry",
        "Private locker room and spa",
        "Unlimited personal training sessions",
        "Nutrition and lifestyle coaching",
        "Monthly massage therapy",
        "Exclusive VIP events and workshops",
      ],
    },
  ];

  return (
    <div className="m-10 w-11/12 mx-auto">
      <h1 className="text-center font-bold text-5xl">PRICE LIST</h1>
      <br />
      <br />
      <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gymPriceOptions.map((options) => (
          <Priceoption key={options.id} options={options} />
        ))}
      </div>
    </div>
  );
};

export default Priceoptions;
