import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/content";
import { Link } from "react-router-dom";
export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  useEffect(()=>{
    console.log("useEffect in Header Called");
  },[btnNameReact]);
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      {/* Nav Items */}

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/">Cart</Link></li>
          <button className="login" onClick={() => {
            btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login");
          }}>
            {btnNameReact}
          </button>
          {/* <button className="logout">LogOut</button> */}
        </ul>
      </div>
    </div>
  );
};
