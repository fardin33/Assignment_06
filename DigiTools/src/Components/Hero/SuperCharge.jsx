import React from "react";
import superchargeImg from "../../assets/images/banner.png";

const SuperCharge = () => {
  return (
    <div>
      <div className="w-full mt-10">
        <div className="px-5 py-12 md:px-10 lg:px-37 lg:py-20">
          {/* Main - Hero Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Part : */}
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-5">
              {/* Badge part */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E1E7FF] border border-purple-100 text-[#7C3AED] text-[11px] md:text-[12px] lg:text-[13.5px] font-medium tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                </span>
                New: AI-Powered Tools Available
              </div>

              {/* Title part */}
              <h1 className="text-[36px] md:text-[38px] lg:text-[60px] font-bold text-[#1e293b] leading-[1.1] tracking-tight">
                Supercharge Your <br />
                Digital Workflow
              </h1>

              {/* Subtitle part */}
              <p className="text-[#64748b] text-[13px] md:text-[14.5px] lg:text-[16px] max-w-120">
                Access premium AI tools, design assets, templates, and
                productivity software—all in one place. Start creating faster
                today.
              </p>

              {/* Buttons part */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="px-5 py-2 md:px-7 md:py-2.5 lg:px-8 lg:py-3 border-2 border-[#9514FA] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-300 rounded-xl shadow-lg shadow-purple-100">
                  <a href="#"> Explore Products</a>
                </button>
                <button className="px-5 py-1.5 md:px-7 md:py-2 lg:px-8 lg:py-2.5 border-2 border-[#9514FA] text-[#9514FA] font-semibold hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white rounded-xl flex items-center gap-2 transition-all  shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8L16 12L10 16V8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a href="#"> Watch Demo</a>
                </button>
              </div>
            </div>

            {/* Right Part : Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-purple-100 to-transparent rounded-2xl blur opacity-25"></div>
                <img
                  src={superchargeImg}
                  alt="AI Workflow"
                  className="relative w-full max-w-112.5 object-contain rounded-lg  mb-10 md:mb-13 lg:mb-10 "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Part : */}
        <div className="bg-[#7C3AED] w-full py-7 md:py-10 lg:py-13">
          <div className="px-2 md:px-10 lg:px-37 max-w-360 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center">
              {/* Status part : 01 */}
              <div className="text-center md:border-r border-purple-400/50">
                <div className="text-[42px] lg:text-[52px] font-bold text-white tracking-tighter">
                  50K+
                </div>
                <p className="text-purple-100 font-medium text-sm lg:text-base uppercase tracking-widest mt-1">
                  Active Users
                </p>
              </div>

              {/* Status part : 01 */}
              <div className="text-center md:border-r border-purple-400/50">
                <div className="text-[42px] lg:text-[52px] font-bold text-white tracking-tighter">
                  200+
                </div>
                <p className="text-purple-100 font-medium text-sm lg:text-base uppercase tracking-widest mt-1">
                  Premium Tools
                </p>
              </div>

              {/* Status part : 01 */}
              <div className="text-center">
                <div className="text-[42px] lg:text-[52px] font-bold text-white tracking-tighter">
                  4.9
                </div>
                <p className="text-purple-100 font-medium text-sm lg:text-base uppercase tracking-widest mt-1">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperCharge;
