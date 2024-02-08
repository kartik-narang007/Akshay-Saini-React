import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
export const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }
  // Add a conditional check to ensure resInfo is defined before destructuring
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const itemCategories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCategories);

  return (
    <div className="text-center">
      {name && (
        <>
          <h2 className="font-bold text-2xl mt-10 mb-5">{name}</h2>
          <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </>
      )}
      {/* categories accordions */}
      {itemCategories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showIndex={index === showIndex ? true: false}
          setShowIndex = {()=>setShowIndex(index === showIndex ? null : index)}
        />
      ))}
      ;
    </div>
  );
};
