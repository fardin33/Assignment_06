import React from "react";
import toast from "react-hot-toast";

const CartCheckout = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const isCartEmpty = cartItems.length === 0;

  const handleCheckout = () => {
    toast.success("Order Placed Successfully!");
  };

  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 md:p-10 min-h-100 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h2>

      {isCartEmpty ? (
        <div className="grow flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 grow">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt="" className="w-10 h-10" />
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-semibold text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-10 mb-6">
            <span className="text-gray-500">Total:</span>
            <span className="text-2xl font-bold">${totalPrice}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-[#8B5CF6] text-white font-bold rounded-full hover:bg-[#7C3AED] transition-all"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartCheckout;
