import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu"
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Contact from "./Components/Contact";
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
