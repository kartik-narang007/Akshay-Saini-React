import { useState } from "react";
import { LOGO_URL } from "../utils/content";
export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      {/* Nav Items */}

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
