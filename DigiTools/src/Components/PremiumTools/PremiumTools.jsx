import { use } from "react";
import CardUi from "../Card/CardUi";

const PremiumTools = ({ toolsPromise, addToCart }) => {
  const toolsData = use(toolsPromise);

  return (
    <div className="w-full">
      <div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {toolsData.map((tool) => (
            <CardUi key={tool.id} tool={tool} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div> 
  );
};

export default PremiumTools;
