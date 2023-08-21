import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css"
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Pages/About";
import Error from "./Pages/Error";
import RestaurantMenu from "./Pages/RestaurantMenu"
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Contact from "./Pages/Contact";
// *! not using key(not acceptable in react it will give you an error) <<< index as key <<< using unique id 

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
