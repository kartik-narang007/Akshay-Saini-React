import { RestaurantCard } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import {Shimmer} from "./Shimmer.js";

export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
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
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
        console.log(restaurantsArrayCard2)
    const restaurantsArrayCard4 =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
        console.log(restaurantsArrayCard4);

    // Concatenate the two arrays
    const concatenatedArray = restaurantsArrayCard4.concat(
      restaurantsArrayCard2
    );
    // console.log(concatenatedArray);
    setlistOfRestaurants(
      concatenatedArray
    );
    // console.log(concatenatedArray);
    setFilteredRestaurants(concatenatedArray);
    // console.log(filteredRestaurants);
    setLoading(false); // Set loading to false once data is fetched
  };

  // if (loading) {
  //   return <Shimmer/>
  // }

  return loading ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchValue} onChange={(e)=>{
            setSearchValue(e.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
            const filteredList = listOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredRestaurants(filteredList);
          }}>Search</button>
        </div>
      <button
        className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((resObj,index) => (
          <RestaurantCard key={index} resObj={resObj} />
        ))}
      </div>
    </div>
  );
};
