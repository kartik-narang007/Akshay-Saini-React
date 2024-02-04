import { RestaurantCard, withPromotedLabel } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer.js";
import { Link } from "react-router-dom";


export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9093759&lng=73.87998050000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurantsArrayCard2 =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(restaurantsArrayCard2);
    const restaurantsArrayCard4 =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(restaurantsArrayCard4);

    // Concatenate the two arrays
    const concatenatedArray = restaurantsArrayCard4.concat(
      restaurantsArrayCard2
    );
    // console.log(concatenatedArray);
    setlistOfRestaurants(concatenatedArray);
    // console.log(concatenatedArray);
    setFilteredRestaurants(concatenatedArray);
    // console.log(filteredRestaurants);
    setLoading(false); // Set loading to false once data is fetched
  };

  // if (loading) {
  //   return <Shimmer/>
  // }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 hover:bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
            onClick={() => {
              // Filter Logic
              const newlistOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(newlistOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap px-10 m-0">
        {filteredRestaurants.map((resObj, index) => (
          <Link key={index} to={"/restaurant/" + resObj.info.id}>
            {resObj.info.veg? <RestaurantCardPromoted resObj = {resObj}/> : <RestaurantCard resObj={resObj}/>}
          </Link>
        ))}
      </div>
    </div>
  );
};
