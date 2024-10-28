import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const PriceOptionData = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "1 group class per week",
        "Locker room access",
        "Free Wi-Fi",
        "Complimentary water station",
        "Standard changing rooms",
        "Access to mobile app for workout tracking",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "3 group classes per week",
        "Locker room access with towel service",
        "Free Wi-Fi",
        "1 personal training session per month",
        "Complimentary fitness assessment",
        "Discount on gym merchandise",
        "Access to online workout videos",
        "Guest pass for one friend per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Unlimited group classes",
        "Locker room access with premium amenities",
        "Free Wi-Fi",
        "3 personal training sessions per month",
        "Access to sauna and steam room",
        "Priority booking for classes",
        "Discounts on spa services",
        "Body composition analysis",
        "Access to advanced workout tracking via app",
        "Quarterly nutrition consultation",
      ],
    },
    // {
    //   id: 4,
    //   name: "Elite Plan",
    //   price: 99.99,
    //   features: [
    //     "24/7 gym access",
    //     "Unlimited group classes",
    //     "Private locker with laundry service",
    //     "Free Wi-Fi and refreshments",
    //     "Weekly personal training sessions",
    //     "Access to exclusive lounge area",
    //     "Nutrition and wellness consultations",
    //     "Private parking spot",
    //     "Monthly massage therapy session",
    //     "Priority access to new equipment",
    //     "Customized training and nutrition plans",
    //     "Exclusive discounts on fitness gear",
    //     "Free admission to gym-hosted events",
    //     "Dedicated fitness concierge service",
    //   ],
    // },
  ];

  return (
    <div className="m-12">
      <h2 className="text-3xl mt-2 font-bold text-blue-500 text-center">
        Best price for gym in this Town
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {PriceOptionData.map((x) => (
          <PriceOption key={x.id} option={x}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
