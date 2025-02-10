import RestaurantCard from "./RestaurantCard";
import resObjLIst from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  // Now we use State Variable-->SuperPower Of React ---> We Use HookS -->useState(); 
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // console.log("UseEffect is Called! ");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4554218&lng=78.39488759999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(ListOfRestaurants.length ==0){
    return <h1>Loading........</h1>
  }
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
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
