import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
export const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // Add a conditional check to ensure resInfo is defined before destructuring
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return (
    <div className="menu">
      {name && (
        <>
          <h2>{name}</h2>
          <p>
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </>
      )}
      {itemCards && (
        <ul>
          {itemCards.map((item, index) => (
            <li key={index}>
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
