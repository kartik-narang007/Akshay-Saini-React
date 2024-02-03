import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Error } from "./Components/Error";
const About = lazy(()=> import("./Components/About"));
import { Contact } from "./Components/contact";
import { RestaurantMenu } from "./Components/RestaurantMenu";
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

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      {/* //Header //Body //Footer */}
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>The Page is Loading...........</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
