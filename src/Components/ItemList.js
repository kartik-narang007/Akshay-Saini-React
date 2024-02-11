import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CON_URL } from "../utils/content";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch(); 

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  }



  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-medium text-lg">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm font-">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-24 rounded-sm bg-white shadow-lg text-green-500 font-semibold text-sm"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CON_URL + item.card.info.imageId}
              className="w-full h-24 object-cover rounded-sm"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
