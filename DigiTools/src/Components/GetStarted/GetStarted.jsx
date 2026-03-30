import React from "react";
import userImg from "../../assets/images/user.png";
import productImg from "../../assets/images/package.png";
import startImg from "../../assets/images/rocket.png";

const GetStarted = () => {
  return (
    <div className="w-full mt-5 font-sans bg-gray-50/50 ">
      <div className="px-5 py-12 md:px-12 lg:px-40 lg:py-20 max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 01 */}
          <div className="relative bg-white p-8 md:p-6 lg:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              01
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-purple-50 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={userImg}
                alt="Create Account"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Create Account
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Step 02 */}
          <div className="relative bg-white p-8 md:p-6 lg:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              02
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-purple-50 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={productImg}
                alt="Choose Products"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Choose Products
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 03 */}
          <div className="relative bg-white p-8 md:p-6 lg:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              03
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-purple-50 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={startImg}
                alt="Start Creating"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Start Creating
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
