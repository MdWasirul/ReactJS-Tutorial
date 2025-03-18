import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useResturantMenu(resId); //this custom hooks as single Responsibility.
  console.log(resId);

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  {
    console.log("hey 2");
  }
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold my-4">{name}</h1>
      <p className="cuisine font-semibold">
        {cuisines?.join(",")}- {costForTwoMessage}
      </p>

      {/* Show Category items  as accordion  */}
      {categories.map((categoriesItem, index) => (
        //controlled component
        <RestaurantCategory
          resCategoryData={categoriesItem?.card?.card}
          key={categoriesItem?.card?.card?.title}
          showItem={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // Toggle logic
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
