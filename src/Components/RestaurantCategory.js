import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  // console.log(data);
  const handleClick = ()=>{
    setShowIndex();
  }
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showIndex && <ItemList items={data.itemCards} />}
      </div>
      {/* body */}
    </div>
  );
};

export default RestaurantCategory;
