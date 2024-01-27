import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import {RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Error } from "./Components/Error";
import {About} from "./Components/About";
import { Contact } from "./Components/contact";
import {RestaurantMenu} from "./Components/RestaunrantMenu";
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
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>,
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
