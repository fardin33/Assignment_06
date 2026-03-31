import React, { useState } from "react";
import { toast } from "react-toastify";

const CardUi = ({ tool, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyNow = () => {
    if (!isAdded) {
      addToCart(tool);
      setIsAdded(true);

      // React Toastify
      toast.success(`${tool.name} added to cart!`);
    }
  };

  const tagStyles = {
    popular: "bg-blue-100 text-blue-600",
    new: "bg-green-100 text-green-600",
    "best seller": "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col transition-all hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shadow-inner">
          <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
        </div>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${
            tagStyles[tool.tag] || "bg-purple-100 text-purple-600"
          }`}
        >
          {tool.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
      <p className="text-gray-500 text-sm mb-6 grow">{tool.description}</p>

      <div className="mb-6">
        <span className="text-2xl font-extrabold text-gray-900">
          ${tool.price}
        </span>
        <span className="text-sm text-gray-500 font-medium ml-1">
          /{tool.period}
        </span>
      </div>

      <ul className="space-y-3 mb-8">
        {tool.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-gray-600 text-sm font-medium"
          >
            <svg
              className="w-5 h-5 text-green-500 mr-2 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        disabled={isAdded}
        className={`w-full mt-auto py-3.5 text-white text-sm font-bold rounded-full transition-all 
          ${
            isAdded
              ? "bg-green-600 cursor-not-allowed"
              : "border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-300"
          }`}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default CardUi;
