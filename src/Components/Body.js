import { resArray } from "../utils/restaurantData.js";
import { RestaurantCard } from "./RestaurantCard.js";
import {useState} from "react";
export const Body = () => {
  const [filteredArray, setFilteredArray] = useState(resArray);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          //Filter Logic
          const newFilteredArray =  resArray.filter((res) => res.info.avgRating > 4);
          setFilteredArray(newFilteredArray);
        }}
      >
        Top Rated Restaraunts
      </button>
      <div className="res-container">
        {filteredArray.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resObj={resObj} />
        ))}
      </div>
    </div>
  );
};
