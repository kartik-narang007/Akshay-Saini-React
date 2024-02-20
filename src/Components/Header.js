import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/content";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logoImage from "../../images/logo.png"
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


export const Header = () => {


  const {loggedInUser} = useContext(UserContext);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  useEffect(()=>{
    // console.log("useEffect in Header Called");
  },[btnNameReact]);
  const onlineStatus = useOnlineStatus();

  //subscribing to the store using our selector

  const cartItems = useSelector((store)=>store.cart.items);
 


  return (


    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">

      {/* Logo */}
      <div className="logo-container">
        <img style={ {width: '130px'}} className="" src={logoImage} />
      </div>




      {/* Nav Items */}

      <div className="nav-items">

        <ul className="flex items-center p-4 m-4">

          <li className="px-5">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-5"><Link to="/">Home</Link></li>
          <li className="px-5"><Link to="/about">About Us</Link></li>
          <li className="px-5"><Link to="/contact">Contact Us</Link></li>
          <li className="px-5 font-bold"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <li className="px-5"><Link to="/grocery">Grocery</Link></li>
          <button className="login" onClick={() => {
            btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login");
          }}>
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
          {/* <button className="logout">LogOut</button> */}
        </ul>
      </div>
    </div>
  );
};
