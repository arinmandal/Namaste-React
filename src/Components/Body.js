// import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard"
import ShimmerUI from "./ShimmerUI";
// import restaurantList from "../utils/mockData"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTAURANT } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // State Variable - super powerful variable
  const [RestaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return (
    <div className="offile">
    <h1 className="offile-text">Look like you're offline, please check your internet connection</h1>
  </div>)


  return RestaurantList.length === 0 ? <ShimmerUI /> : (
    <div className='main'>
      <div className='search-container'>
        <input type='search' placeholder='Search your favorite restaurant' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className='search-btn btn'
          onClick={() => {
            const filterSearch = RestaurantList.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilterRestaurant(filterSearch);
          }}
        >Search</button>
        <div className='filter-content'>
          <button
            className='filter-btn btn'
            onClick={() => {
              const filterlist = RestaurantList.filter(
                res => res.card.card.info.avgRating > 4.2,
              );
              setfilterRestaurant(filterlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='res-container'>
        {filterRestaurant.map(restaurant => (
          <Link className="link" key={restaurant.card.card.info.id} to={"/restaurants/" + restaurant.card.card.info.id}><RestaurantCard

            restaurantData={restaurant.card.card}
          /></Link>
        )
        )}
      </div>
    </div>
  );
};

export default Body;
