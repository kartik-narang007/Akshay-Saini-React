import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
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
