import { CDN_URL } from "../utils/constant";

// accepting props  { resName, cuisuine }
const RestaurantCard = (props) => {
  // const { resName, cuisuine } = props;
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  // console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="RestaurantImage"
      />
      <h3 className="navig-link">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
