import { CON_URL } from "../utils/content";

export const RestaurantCard = (props) => {
  // console.log(props);
  const { resObj } = props;
  // console.log(resObj);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    sla,
  } = resObj?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-200">
      <img className="rounded-lg h-40 w-56" src={CON_URL + cloudinaryImageId} alt={name} />
      <h3 className="font-bold py-3 text-xl">{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4 className="res-ratings">
        <span className="star">⭐</span>
        {avgRating}
      </h4>
      <h4 className="time">{sla.deliveryTime} Minutes</h4>
      <h4>{costForTwo}</h4>
      <h4 className="area">{locality}</h4>
      <h4 className="distance">{sla.lastMileTravelString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-green-700 text-white m-2 rounded-lg px-2">Veg </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

