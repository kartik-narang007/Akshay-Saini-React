import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9093759&lng=73.87998050000002&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };
if(resInfo === null){return <Shimmer/>}
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
