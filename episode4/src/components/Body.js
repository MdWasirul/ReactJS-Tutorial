import RestaurantCard from "./RestaurantCard";
import resObjLIst from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  // Now we use State Variable-->SuperPower Of React ---> We Use HookS -->useState();
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFiltereRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("UseEffect is Called! ");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_URL);
    const jsonData = await response.json();
    console.log(jsonData);
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFiltereRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return ListOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //filter the restaurantsCards and updates the UI
              //searchText
              console.log(searchText);
              const filteredRestuarant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFiltereRestaurantList(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFiltereRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

//Conditional Rendering.
// if (ListOfRestaurants.length == 0) {
//   return <Shimmer />;
// }
