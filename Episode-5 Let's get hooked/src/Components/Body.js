import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // State Variable - super powerful variable
  const [RestaurantList, setRestaurantList] = useState(restaurantList);
  return (
    <div className='main'>
      <div className='search-container'>
        <input type='search' placeholder='Search your favorite food' />
        <button className='search-btn btn'>Search</button>
        <div className='filter-content'>
          <button
            className='filter-btn btn'
            onClick={() => {
              const filteredist = restaurantList.filter(
                res => res.info.avgRatingString > 4.2,
              );
              setRestaurantList(filteredist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='res-container'>
        {RestaurantList.map(restaurant => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
