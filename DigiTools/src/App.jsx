import "./App.css";
import SuperCharge from "./Components/Hero/SuperCharge";
import PremiumTools from "./Components/PremiumTools/PremiumTools";
import CartCheckout from "./Components/CartCheckout/CartCheckout";
import GetStarted from "./Components/GetStarted/GetStarted";
import SimplePricing from "./Components/SimplePricing/SimplePricing";
import Footer from "./Components/Footer/Footer";
import TransformWorkflow from "./Components/TransformWorkflow/TransformWorkflow";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense } from "react";
// import CardUi from "./Components/Card/CardUi";

// Fetch Data From API :
const fetchToolsData = async () => {
  const res = await fetch("/toolsData.json");
  return res.json();
};

function App() {
  // set Promise :
  const toolsPromise = fetchToolsData();

  return (
    <>
      <Navbar />
      <SuperCharge />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <span className="loading loading-spinner loading-xl text-blue-400"></span>
          </div>
        }
      >
        <PremiumTools toolsPromise={toolsPromise} />
      </Suspense>

      <CartCheckout />
      {/* <CardUi/> */}
      <GetStarted />
      <SimplePricing />
      <TransformWorkflow />
      <Footer />
    </>
  );
}

export default App;
