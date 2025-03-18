import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ resCategoryData, showItem, setShowIndex }) => {
  // console.log("resCategory data :", resCategoryData);

  // const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    console.log("Cliked");
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-8/12 bg-gray-100 mx-auto my-4 ">
        <div
          className="flex justify-between text-2xl font-bold flex-wrap"
          onClick={handleClick}
        >
          <span className="ml-6">
            {resCategoryData.title} ({resCategoryData?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordion Body */}

        {showItem && <ItemList items={resCategoryData.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
