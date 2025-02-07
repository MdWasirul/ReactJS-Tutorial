import RestaurantCard from "./RestaurantCard";
import resObjLIst from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Now we use State Variable-->SuperPower Of React ---> We Use HookS -->useState();
  const [ListOfRestaurants, setListOfRestaurants] = useState(resObjLIst);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            // console.log("btn clicked ");
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
