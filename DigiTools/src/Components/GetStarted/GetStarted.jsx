// import React from "react";

// import userImg from "../../assets/images/banner.png";

// const GetStarted = () => {
//   const steps = [
//     {
//       id: "01",
//       title: "Create Account",
//       description:
//         "Sign up for free in seconds. No credit card required to get started.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 text-purple-600"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: "02",
//       title: "Choose Products",
//       description:
//         "Browse our catalog and select the tools that fit your needs.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 text-purple-600"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
//           />
//         </svg>
//       ),
//     },
//     {
//       id: "03",
//       title: "Start Creating",
//       description: "Download and start using your premium tools immediately.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 text-purple-600"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.96 14.96 0 0 1-5.96 5.96m-5.96-5.96a14.96 14.96 0 0 1 5.96-5.96m0 0L22.5 3"
//           />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <div className="w-full mt-10 font-sans bg-gray-50/50">
//         <div className="px-5 py-12 md:px-12 lg:px-37 lg:py-20">
//           {/* Header Section */}
//           <div className="text-center mb-12 lg:mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//               Get Started In 3 Steps
//             </h2>
//             <p className="text-gray-500 text-sm md:text-base">
//               Start using premium digital tools in minutes, not hours.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {steps.map((step) => (
//               <div
//                 key={step.id}
//                 className="relative bg-white p-8 md:p-6 lg:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
//               >
//                 {/* Step Number Badge */}
//                 <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
//                   {step.id}
//                 </div>

//                 {/* Icon */}
//                 <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
//                   <img src={userImg} alt="" />
//                 </div>

//                 {/* title & Description */}
//                 <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;

import React from "react";
import userImg from "../../assets/images/user.png";
import productImg from "../../assets/images/package.png";
import startImg from "../../assets/images/rocket.png";

const GetStarted = () => {
  return (
    <div className="w-full mt-10 font-sans bg-gray-50/50">
      <div className="px-5 py-12 md:px-12 lg:px-24 lg:py-20 max-w-7xl mx-auto">
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
