import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Body from "./Components/Body";
import About from "./Pages/About";
import Error from "./Pages/Error";
import RestaurantMenu from "./Pages/RestaurantMenu"
// import Grocery from "./Components/Grocery";
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Contact from "./Pages/Contact";
// *! not using key(not acceptable in react it will give you an error) <<< index as key <<< using unique id

// Lazy Loading 
const Grocery = lazy(() => import("./Components/Grocery"))

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
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
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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
