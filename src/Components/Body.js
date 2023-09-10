// import RestaurantCard from "./RestaurantCard";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import ShimmerUI from "./ShimmerUI";
// import restaurantList from "../utils/mockData"
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { RESTAURANT} from "../utils/constant.js";
import useOnlineStatus from "../Utils/useOnlineStatus";
// import UserContext from "../Utils/UserContext";
const Body = () => {
  // State Variable - super powerful variable
  const [RestaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const { loggedInUser, setUserName } = useContext(UserContext);
  // Restaurant card with promoted lebel
  
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(RESTAURANT);
    const json = await data.json();
    // Optional Chaining
    setRestaurantList(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    )
    setfilterRestaurant(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
  }

  // Conditional Rendering
  // if (RestaurantList.length === 0) {
  //   return (<ShimmerUI />)
  // }

  //*! onlineStatus hook
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return (
    <div className="offile h-screen">
    <h1 className="offile-text text-4xl font-bold">Look like you're offline, please check your internet connection</h1>
  </div>)


  return RestaurantList.length === 0 ? <ShimmerUI /> : (
    <div className='main'>
      <div className='search-container flex items-center w-full  px-4 pb-2 bg-slate-500 '>
        <input className=" w-[30%] rounded-2xl p-1 outline-none" type='search'
          placeholder='Search your favorite restaurant'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          data-testid="searchInput"
        />
        <button className='search-btn btn rounded-2xl bg-gray-300 py-1 px-4 mx-2'
          onClick={() => {
            const filterSearch = RestaurantList.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilterRestaurant(filterSearch);
          }}
        >Search</button>
        <div className='filter-content'>
          <button
            className='filter-btn btn rounded-2xl bg-gray-300 py-1 px-4 mx-2'
            onClick={() => {
              const filterlist = RestaurantList.filter(
                res => res.card.card.info.avgRating > 4.2,
              );
              setfilterRestaurant(filterlist);
            }}
          >
            Top Rated Restaurants
          </button>
          {/* <input  className=" w-[30%] rounded-2xl bg-gray-300 py-1 px-4 mx-2 outline-none" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} /> */}
        </div>
      </div>
      <div className='res-container h-full w-full px-4 flex justify-evenly flex-wrap '>
        {filterRestaurant.map(restaurant => (
          <Link className="link" key={restaurant.card.card.info.id} to={"/restaurants/" + restaurant.card.card.info.id}>
            {restaurant.card.promoted ? <RestaurantCardWithPromoted restaurantData={restaurant.card.card}/> : <RestaurantCard
            // if the restaurant is promoted add a promoted label to it.
            restaurantData={restaurant.card.card}
            /> }
          </Link>
        )
        )}
      </div>
    </div>
  );
};

export default Body;
