import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
// import restaurantList from "../utils/mockData"
import { useState, useEffect } from "react";
const Body = () => {
  // State Variable - super powerful variable
  const [RestaurantList, setRestaurantList] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.572646&lng=88.36389500000001&str=Restaurants%20in%20kolkata&trackingId=undefined&submitAction=ENTER&queryUniqueId=d8d50207-c049-6902-2c11-98faf582567a`);

    const json = await data.json();
    // Optional Chaining
    setRestaurantList(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    )
  }

  // Conditional Rendering
  // if (RestaurantList.length === 0) {
  //   return (<ShimmerUI />)
  // }

  return RestaurantList.length === 0 ? <ShimmerUI/> :(
    <div className='main'>
      <div className='search-container'>
        <input type='search' placeholder='Search your favorite food' />
        <button className='search-btn btn'>Search</button>
        <div className='filter-content'>
          <button
            className='filter-btn btn'
            onClick={() => {
              const filterlist = restaurantList.filter(
                res => res.card.card.info.avgRating > 4.2,
              );
              setRestaurantList(filterlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='res-container'>
        {RestaurantList.map(restaurant => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            restaurantData={restaurant.card.card}
          />
        )
        )}
      </div>
    </div>
  );
};

export default Body;
