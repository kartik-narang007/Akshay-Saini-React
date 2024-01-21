import {CON_URL} from "../utils/content"

export const RestaurantCard = (props) => {
    // console.log(props);
    const { resObj } = props;
    // console.log(resObj);
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality, sla } =
      resObj?.info;
  
    return (
      <div className="res-card">
        <img
          src={CON_URL+cloudinaryImageId}
          alt={name}
        />
        <h3 className="res-name">{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4 className="res-ratings">
        <span className="star">⭐</span>{avgRating} 
        </h4>
        <h4 className="time">{sla.deliveryTime} Minutes</h4>
        <h4>{costForTwo}</h4>
        <h4 className="area">{locality}</h4>
        <h4 className="distance">{sla.lastMileTravelString}</h4>
      </div>
    );
  };