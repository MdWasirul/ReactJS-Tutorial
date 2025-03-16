import { useEffect, useState } from "react";
import { SWIGGY_URL } from "./constant";

const useRestaurants = () => {
  // Now we use State Variable-->SuperPower Of React ---> We Use HookS -->useState();

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(SWIGGY_URL);
    const jsonData = await response.json();

    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurantList(restaurants);
  };

  return {
    listOfRestaurants,
    filteredRestaurantList,
    setFilteredRestaurantList,
  };
};

export default useRestaurants;
