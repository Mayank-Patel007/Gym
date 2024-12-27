import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import priceimg from '../assets/priceimg.jpg'; // Import the image

const Pricing = () => {
  const pricing = [
    {
      imgUrl: priceimg,
      title: "QUARTERLY",
      price: "15,000",
      length: 3
    },
    {
      imgUrl: priceimg,
      title: "HALF-YEARLY",
      price: "29,000",
      length: 6
    },
    {
      imgUrl: priceimg,
      title: "YEARLY",
      price: "57,000",
      length: 12
    },
  ];

  return (
    <div className="py-10 bg-gray-900 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Fitness Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing.map((element, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={element.imgUrl} alt={element.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-center text-lg font-bold text-white">{element.title}</p>
                <p className="text-center text-3xl font-bold text-gray-200 mt-2">Rs {element.price}</p>
                <p className="text-center text-gray-400">For {element.length} Months</p>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <Check className="h-6 w-6 mr-2 text-green-500" />
                    <p className="text-gray-300">Equipment</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Check className="h-6 w-6 mr-2 text-green-500" />
                    <p className="text-gray-300">All Day Free Training</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Check className="h-6 w-6 mr-2 text-green-500" />
                    <p className="text-gray-300">Free Restroom</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Check className="h-6 w-6 mr-2 text-green-500" />
                    <p className="text-gray-300">24/7 Skilled Support</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <Check className="h-6 w-6 mr-2 text-green-500" />
                    <p className="text-gray-300">20 Days Freezing Option</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link to={"/"} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
