import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {

  const [btnName, setbtnName] = useState("Login")
  return (
    <div className='header'>
      <div className='logo-container'>
        <span>
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
      <div className='nav-list'>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button className="btn"
              onClick={
                () => {
                  btnName === "login" ? setbtnName("logout") : setbtnName("login");
                }
              }>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;