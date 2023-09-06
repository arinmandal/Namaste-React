import { useState } from "react";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

  const [btnName, setbtnName] = useState("Login");

  // const { loggedInUser } = useContext(UserContext);

  // Subscribing to the redux store using useSelector hooks

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  const onlineStatus = useOnlineStatus();
  return (
    <div className='header w-full bg-slate-500 flex items-center justify-between px-4'>
      <div className='logo-container w-20 flex'>
        <span className="font-bold text-white">
          The
          Foodie
          Express
        </span>
        <img
          src='https://webstockreview.net/images/clipart-restaurant-order-food-8.png'
          alt=''
          className='logo'
        />
      </div>
      <div className='nav-list text-white font-bold flex items-center justify-center'>
        <ul className="flex">
          <li className="px-4"><Link className="link" to="/">Home</Link></li>
          <li className="px-4"><Link className="link" to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link className="link" to="/about">About</Link></li>
          <li className="px-4"><Link className="link" to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link className="link" to="/cart"
          >Cart ({cartItems.length}items) </Link></li>
          <li className="px-4">
            <button className="btn rounded-2xl bg-gray-300 py-1 px-4"
              onClick={
                () => {
                  btnName === "login" ? setbtnName("logout") : setbtnName("login");
                }
              }>{btnName}</button>
          </li>
          {/* <li className="px-4">{loggedInUser}</li> */}
          <li>{onlineStatus ? "✅" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;