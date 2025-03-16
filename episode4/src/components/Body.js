import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurantList,
    setFilteredRestaurantList,
  } = useRestaurants();
  const [searchText, setSearchText] = useState("");
  // console.log("resList : ", ListOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const userOnline = useOnlineStatus();
  if (userOnline === false)
    return (
      <h1>
        Looks like You're Offine !! Please Check Your Internet Connection!
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex items-center justify-center flex-wrap sticky top-[110px] bg-gray-100 sm:bg-green-200">
        <div className="m-4 p-4 ">
          <input
            className=" border-2 border-gray-700 w-80 outline-none rounded-sm p-1"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-5 px-5 py-2 bg-green-300  rounded-lg font-semibold cursor-pointer hover:bg-green-500"
            onClick={() => {
              //filter the restaurantsCards and updates the UI
              //searchText
              console.log(searchText);
              const filteredRestuarant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurantList(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" ml-20">
          <button
            className=" bg-green-600 text-white font-semibold rounded-md px-5 py-2 cursor-pointer hover:bg-green-700  "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly mt-8">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restauarant is Promoted Then add a Promioted Label */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
