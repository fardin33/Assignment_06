import React from "react";

const cartItems = [
  //   {
  //     id: 1,
  //     title: "AI Writing Pro",
  //     price: 29,
  //     icon: "📝",
  //   },
  //   {
  //     id: 2,
  //     title: "Design Templates Pack",
  //     price: 49,
  //     icon: "🎨",
  //   },
];

const CartCheckout = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div>
      <div className="w-full mt-10 font-sans mx-auto">
        <div className="px-5 py-12 md:px-10 lg:px-37 lg:py-20">
          {/* Main Cart Container */}
          <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-4xl p-6 md:p-8 lg:p-10 min-h-100 flex flex-col">
            {/* Title - এটি সবসময় উপরে থাকবে */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-left">
              Your Cart
            </h2>

            {isCartEmpty ? (
              /* ================= EMPTY STATE ================= */
              <div className="grow flex flex-col items-center justify-center space-y-4 py-10">
                {/* Shop Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-50 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 md:w-12 md:h-12 text-[#8B5CF6]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                {/* Empty Message */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Your cart is empty
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mt-1">
                    Looks like you haven't added anything yet.
                  </p>
                </div>
                {/* Optional: Shop Now Button */}
                <button className="mt-4 px-6 py-2 border-2 border-[#8B5CF6] text-[#8B5CF6] font-bold rounded-full hover:bg-purple-50 transition-all text-sm">
                  Buy Premimum Tools
                </button>
              </div>
            ) : (
              /* ================= ACTIVE CART BODY ================= */
              <>
                {/* Cart Items List */}
                <div className="space-y-4 md:space-y-5 grow">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 md:p-5 bg-[#F8F9FA] rounded-2xl md:rounded-[1.25rem]"
                    >
                      <div className="flex items-center gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-lg md:text-xl shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-[15px] md:text-base font-bold text-[#1E293B]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#64748B] mt-0.5">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                      <button className="text-[#FF4F79] hover:text-[#E03E65] text-sm md:text-[15px] font-semibold transition-colors">
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                {/* Total Section */}
                <div className="flex items-center justify-between mt-8 md:mt-10 mb-6 px-1 md:px-2">
                  <span className="text-[15px] md:text-base text-[#64748B] font-medium">
                    Total:
                  </span>
                  <span className="text-2xl md:text-[28px] font-bold text-[#1E293B]">
                    ${totalPrice}
                  </span>
                </div>

                {/* Proceed Button */}
                <button className="w-full py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-[15px] md:text-base font-bold rounded-full transition-all shadow-lg shadow-purple-100 active:scale-[0.98]">
                  Proceed To Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
