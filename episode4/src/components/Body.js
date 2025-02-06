import RestaurantCard from "./RestaurantCard";
import resObjLIst from "../utils/mockData";

// Now we use State Variable-->SuperPower Of React ---> We Use HookS -->useState();

// niormal javascript variable
let listOfRestaurants = [
  {
    info: {
      id: "10492",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/ef7ea2a1-7657-4a33-8f15-ad2521674114_10492.jpg",

      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.4,
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "29K+",
      sla: {
        deliveryTime: 48,
      },
    },
  },
  {
    info: {
      id: "10493",
      name: "MAC DONALD'S",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/ef7ea2a1-7657-4a33-8f15-ad2521674114_10492.jpg",

      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.1,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "29K+",
      sla: {
        deliveryTime: 48,
      },
    },
  },
  {
    info: {
      id: "10494",
      name: "MCD",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/ef7ea2a1-7657-4a33-8f15-ad2521674114_10492.jpg",

      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "29K+",
      sla: {
        deliveryTime: 48,
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            // console.log("btn clicked ");
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
