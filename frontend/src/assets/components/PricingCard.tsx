import React from 'react';

// Define the structure of a pricing offer
interface PricingOffer {
  amount: number;
  price: number;
  originalPrice: number;
  features: string[];
}

// Main component with props
const PricingCards: React.FC = () => {
  // Array of pricing offers - easily expandable
  const offers: PricingOffer[] = [
    {
      amount: 1000,
      price: 14,
      originalPrice: 16.47,
      features: [
        'Profit Target: 08%',
        'Daily Drawdown: 05%',
        'Max Drawdown: 10%',
        'Drawdown Type: Static',
        'Profit Share after Passing: Upto 100%',
        'EA Trading: Allowed',
        'Min Trading Days: 01'
      ]
    },
    {
      amount: 3000,
      price: 36,
      originalPrice: 42.35,
      features: [
        'Profit Target: 08%',
        'Daily Drawdown: 05%',
        'Max Drawdown: 10%',
        'Drawdown Type: Static',
        'Profit Share after Passing: Upto 100%',
        'EA Trading: Allowed',
        'Min Trading Days: 01'
      ]
    },
    {
        amount: 5000,
        price: 50,
        originalPrice: 58.92,
        features: [
          'Profit Target: 08%',
          'Daily Drawdown: 05%',
          'Max Drawdown: 10%',
          'Drawdown Type: Static',
          'Profit Share after Passing: Upto 100%',
          'EA Trading: Allowed',
          'Min Trading Days: 01'
        ]
      },{
        amount: 5000,
        price: 50,
        originalPrice: 58.92,
        features: [
          'Profit Target: 08%',
          'Daily Drawdown: 05%',
          'Max Drawdown: 10%',
          'Drawdown Type: Static',
          'Profit Share after Passing: Upto 100%',
          'EA Trading: Allowed',
          'Min Trading Days: 01'
        ]
      },{
        amount: 5000,
        price: 50,
        originalPrice: 58.92,
        features: [
          'Profit Target: 08%',
          'Daily Drawdown: 05%',
          'Max Drawdown: 10%',
          'Drawdown Type: Static',
          'Profit Share after Passing: Upto 100%',
          'EA Trading: Allowed',
          'Min Trading Days: 01'
        ]
      },{
        amount: 5000,
        price: 50,
        originalPrice: 58.92,
        features: [
          'Profit Target: 08%',
          'Daily Drawdown: 05%',
          'Max Drawdown: 10%',
          'Drawdown Type: Static',
          'Profit Share after Passing: Upto 100%',
          'EA Trading: Allowed',
          'Min Trading Days: 01'
        ]
      },{
        amount: 5000,
        price: 50,
        originalPrice: 58.92,
        features: [
          'Profit Target: 08%',
          'Daily Drawdown: 05%',
          'Max Drawdown: 10%',
          'Drawdown Type: Static',
          'Profit Share after Passing: Upto 100%',
          'EA Trading: Allowed',
          'Min Trading Days: 01'
        ]
      },
    // You can easily add more cards here
    {
      amount: 10000,
      price: 80,
      originalPrice: 94.35,
      features: [
        'Profit Target: 08%',
        'Daily Drawdown: 05%',
        'Max Drawdown: 10%',
        'Drawdown Type: Static',
        'Profit Share after Passing: Upto 100%',
        'EA Trading: Allowed',
        'Min Trading Days: 01'
      ]
    }
  ];

  // Calculate discount percentage
  const calculateDiscount = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-6 
        max-w-7xl 
        mx-auto
      ">
        {offers.map((offer) => (
          <div 
            key={offer.amount} 
            className="
              w-full
              bg-gradient-to-br from-blue-800 to-blue-950
              text-white
              rounded-2xl 
              shadow-2xl 
              overflow-hidden
              transform transition-all 
              duration-300 
              hover:scale-105
              hover:shadow-3xl
            "
          >
            <div className="p-6">
              <h2 className="text-3xl font-bold text-white mb-4">${offer.amount}</h2>
              <p className="text-4xl font-semibold mb-2">
                ${offer.price} 
                <span className="line-through text-red-400 ml-2 text-base">
                  ${offer.originalPrice}
                </span>
              </p>
              <p className="text-blue-200 mb-4">
                Save ${(offer.originalPrice - offer.price).toFixed(2)} ({calculateDiscount(offer.price, offer.originalPrice)}% OFF)
              </p>
              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-blue-100"
                  >
                    <span className="mr-3 text-green-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="
                  w-full 
                  py-3 
                  rounded-lg 
                  text-white 
                  font-bold 
                  bg-gradient-to-r 
                  from-pink-500 
                  to-blue-500 
                  hover:from-pink-600 
                  hover:to-blue-600 
                  transition-all 
                  duration-300 
                  transform 
                  hover:scale-105
                "
              >
                Get Started →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;