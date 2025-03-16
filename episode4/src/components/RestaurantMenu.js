import { CDN_URL, MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId); //this custom hooks as single Responsibility.
  console.log(resId);

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ?? {};
  console.log(itemCards);
  console.log(resInfo);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className=" flex justify-center items-center flex-col bg-gray-200 ">
      <div className="mt-5">
        <h1 className="text-4xl font-bold ">{name}</h1>
        <p className="cuisine font-semibold">
          {cuisines.join(",")}- {costForTwoMessage}
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-4xl font-bold text-center ">
          Recommended ({itemCards.length})
        </h2>
        <ul>
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className=" flex justify-center items-center flex-col flex-wrap border-b-0 my-6 py-5  shadow-lg"
            >
              <h3 className="font-bold text-xl px-4 py-2">
                {item.card.info.name}
              </h3>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="food_image"
                className="w-[300px] rounded-lg"
              />
              <h3 className="font-bold text-xl">
                {"₹"}{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </h3>
              <p className="text-2xl  font-sans break-words">
                {item.card.info.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
