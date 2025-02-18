import { useEffect, useState } from "react";
import { CDN_URL, MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();
    console.log(data);
    setResInfo(data);
  };
  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards?.[2]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ?? {};
  console.log(itemCards);
  // console.log(resInfo);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="resFoodInfo">
      <h1>{name}</h1>
      <p className="cuisine">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>

      <h2>Recommended ({itemCards.length})</h2>
      <ul className="listsItems">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="listItem">
            <h3>{item.card.info.name}</h3>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="food_image"
              className="foodImage"
            />
            <h3>
              {"₹"}{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </h3>
            <p>{item.card.info.description}</p>
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
