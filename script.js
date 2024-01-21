import React from "react";
import ReactDOM from "react-dom/client";
import { resArray } from "./restaurantData";

// console.log(resArray)

/*
  * Header
    - Logo
    - Nav Items
  * Body
    - Search Bar
    - Restaurant Container 
      - Restaurant Card
        - img
        - Name, Star Rating, Cuisines, etc.
  * Footer
    - Copyright
    - Links
    - Address
    - Contact     
*/

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        />
      </div>

      {/* Nav Items */}

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = (props) => {
  // console.log(props);
  const { resObj } = props;
  // console.log(resObj);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality, sla } =
    resObj?.info;

  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resArray.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resObj={resObj} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* //Header //Body //Footer */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
