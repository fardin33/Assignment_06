import React from "react";

const toolsData = [
  {
    id: 1,
    title: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: "$29",
    period: "/Mo",
    badge: "Best Seller",
    badgeStyles: "bg-orange-100 text-orange-600",
    icon: "📝", 
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
  },
  {
    id: 2,
    title: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: "$49",
    period: "/One-Time",
    badge: "Popular",
    badgeStyles: "bg-indigo-100 text-indigo-600",
    icon: "🎨",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
  },
  {
    id: 3,
    title: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: "$19",
    period: "/Mo",
    badge: "New",
    badgeStyles: "bg-green-100 text-green-600",
    icon: "📸",
    features: ["10M+ assets", "Commercial use", "No attribution"],
  },
  {
    id: 4,
    title: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: "$79",
    period: "/Mo",
    badge: "Popular",
    badgeStyles: "bg-indigo-100 text-indigo-600",
    icon: "⚙️",
    features: ["50+ automations", "API access", "Custom workflows"],
  },
  {
    id: 5,
    title: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters that land interviews.",
    price: "$15",
    period: "/One-Time",
    badge: "New",
    badgeStyles: "bg-green-100 text-green-600",
    icon: "📄",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
  },
  {
    id: 6,
    title: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: "$39",
    period: "/Mo",
    badge: "Best Seller",
    badgeStyles: "bg-orange-100 text-orange-600",
    icon: "📱",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
  },
];

const PremiumTools = () => {
  return (
    <div>
      <div className="w-full mt-10 font-sans">
        <div className="px-5 py-12 md:px-10 lg:px-37 lg:py-20">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Digital Tools
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>

            {/* Toggle Buttons */}
            <div className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-full shadow-sm">
              <button className="px-6 py-2 bg-[#7C3AED] text-white text-sm font-medium rounded-full transition-all">
                Products
              </button>
              <button className="px-6 py-2 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-50 transition-all">
                Cart (2)
              </button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {toolsData.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col transition-all hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1"
              >
                {/* Icon & Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl shadow-inner">
                    {tool.icon}
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${tool.badgeStyles}`}
                  >
                    {tool.badge}
                  </span>
                </div>

                {/* Title Text  */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 grow">
                  {tool.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {tool.price}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {tool.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {tool.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600 text-sm font-medium"
                    >
                      {/* image */}
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
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full mt-auto py-3.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none hover:from-[#9514FA] hover:to-[#4F39F6] text-white text-sm font-bold rounded-full transition-colors">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumTools;
