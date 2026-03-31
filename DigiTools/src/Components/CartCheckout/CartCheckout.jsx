import React from "react";
import { toast } from "react-toastify";

const CartCheckout = ({
  cartItems,
  removeFromCart,
  clearCart,
  setActiveTab,
}) => {
  // setActiveTab
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const isCartEmpty = cartItems.length === 0;

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Product Purchase Successfully! Thank You 😊");
      clearCart();
    } else {
      toast.error("Your cart is empty! ☹️");
    }
  };

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 md:p-10 min-h-100 flex flex-col transition-all">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h2>

      {isCartEmpty ? (
        <div className="grow flex flex-col items-center justify-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-gray-500 font-medium mb-4">
              Your cart is empty. ☹️
            </p>

            <button
              onClick={() => setActiveTab("products")}
              className="px-6 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none hover:from-[#7304c9] hover:to-[#4F39F6] transition-all duration-300 rounded-3xl"
            >
              Explore Products
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4 grow">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                {/* Item Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold text-sm px-3 py-1"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-10 mb-6 pt-6">
            <span className="text-gray-600 font-medium">Total Amount:</span>
            <span className="text-2xl font-extrabold text-gray-900">
              ${totalPrice}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none hover:from-[#7304c9] hover:to-[#4F39F6] transition-all duration-300 rounded-full"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartCheckout;
