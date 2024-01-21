import { resArray } from "../utils/restaurantData.js";
import { RestaurantCard } from "./RestaurantCard.js";
export const Body = () => {
    return (
      <div className="body">
        <div className="res-container">
          {resArray.map((resObj) => (
            <RestaurantCard key={resObj.info.id} resObj={resObj} />
          ))}
        </div>
      </div>
    );
  };