import { Suspense, useState, useMemo } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SuperCharge from "./Components/Hero/SuperCharge";
import Toggle from "./Components/Toggle/Toggle";
import PremiumTools from "./Components/PremiumTools/PremiumTools";
import CartCheckout from "./Components/CartCheckout/CartCheckout";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import SimplePricing from "./Components/SimplePricing/SimplePricing";
import TransformWorkflow from "./Components/TransformWorkflow/TransformWorkflow";

const fetchToolsData = async () => {
  const res = await fetch("/toolsData.json");
  return res.json();
};

function App() {
  const toolsPromise = useMemo(() => fetchToolsData(), []);
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  // Add Tools :
  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  // Remove Tools :
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <SuperCharge />

      <main className="min-h-screen font-sans">
        <div className="px-5 py-12 md:px-10 lg:px-37">
          <Toggle
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            cartCount={cart.length}
          />

          <div className="mt-10">
            {activeTab === "products" ? (
              <Suspense
                fallback={
                  <div className="flex justify-center items-center py-24">
                    <span className="loading loading-spinner loading-lg text-[#7C3AED]"></span>
                  </div>
                }
              >
                <PremiumTools
                  toolsPromise={toolsPromise}
                  addToCart={addToCart}
                />
              </Suspense>
            ) : (
              <CartCheckout cartItems={cart} removeFromCart={removeFromCart} />
            )}
          </div>
        </div>
      </main>

      <GetStarted />
      <SimplePricing />
      <TransformWorkflow />
      <Footer />
    </>
  );
}

export default App;
