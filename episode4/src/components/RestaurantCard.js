import { CDN_URL } from "../utils/constant";

// accepting props  { resName, cuisuine }
const RestaurantCard = (props) => {
  // const { resName, cuisuine } = props;
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  // console.log(props);
  return (
    <div className=" p-3 m-[20px] w-[380px] h-[550px] break-words rounded-lg shadow-md shadow-gray-500  bg-gray-100 hover:bg-gray-200">
      <img
        className="res-img  rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="RestaurantImage"
      />
      <h3 className="py-4 font-bold text-2xl">{name}</h3>
      <h4 className="py-2 text-xl font-sans">{cuisines.join(",")}</h4>
      <h4 className="">{avgRating} Stars</h4>
      <h4 className="font-bold">{costForTwo}</h4>
      <h4 className=" font-bold">{sla.slaString}</h4>
    </div>
  );
};

//Higher Order Component

//input- RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
