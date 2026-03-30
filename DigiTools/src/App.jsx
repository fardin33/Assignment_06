import "./App.css";
import Navbar from "./Navbar/Navbar";
import SuperCharge from "./Hero/SuperCharge";
import PremiumTools from "./PremiumTools/PremiumTools";
import CartCheckout from "./CartCheckout/CartCheckout";
// import GetStarted from "./GetStarted/GetStarted";
// import SimplePricing from "./SimplePricing/SimplePricing";
// import Footer from "./Footer/Footer";
// import TransformWorkflow from "./TransformWorkflow/TransformWorkflow";

function App() {
  return (
    <>
      <Navbar />
      <SuperCharge />
      <PremiumTools />
      <CartCheckout />
      {/* <GetStarted />
      <SimplePricing /> */}
      {/* <TransformWorkflow /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
