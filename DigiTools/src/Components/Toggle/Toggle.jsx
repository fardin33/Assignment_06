import React from "react";

const Toggle = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 font-sans mt-25">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
        Premium Digital Tools
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 px-4">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* Toggle Button */}
      <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-full shadow-sm gap-1.5">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
            activeTab === "products"
              ? "bg-[#7C3AED] text-white shadow-md shadow-purple-200"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-8 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
            activeTab === "cart"
              ? "bg-[#7C3AED] text-white shadow-md shadow-purple-200"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default Toggle;
