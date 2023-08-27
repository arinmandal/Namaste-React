// import React from "react";
// import ReactDOM from "react-dom/client";

// React Element
// without jsx
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀",
// );
// console.log(heading);

//! JSX => React.createElement => ReactElement => JS object => HTML Element(render)

// //* With JSX

// const love = 3000;
// const jsxHeading = (
//   <h1 className='heading'>
//     {/* <h2>Love you {love}</h2> */}
//     Namaste React 🚀 from JSX
//   </h1>
// );

//* React Functional Component
// const Title = () => (
//   <h1 className='title'>Namaste React🚀</h1>
// );

// const HeadingComponent = () => {
//   return (
//     <div className='container'>
//       <Title />
//       <h1 className='heading'>
//         React Functional Component
//       </h1>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(
//   document.getElementById("root"),
// );

// root.render(<HeadingComponent/>);

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "/src/styles/index.css"
import Header from "/src/Components/Header"
import Footer from "/src/Components/Footer"
import Body from "/src/Components/Body";
import About from "/src/Pages/About";
import Error from "/src/Pages/Error";
import RestaurantMenu from "/src/Pages/RestaurantMenu"
// import Grocery from "./Components/Grocery";
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Contact from "./src/Pages/Contact";
// *! not using key(not acceptable in react it will give you an error) <<< index as key <<< using unique id

// Lazy Loading 
const Grocery = lazy(() => import("./src/Components/Grocery"))

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
