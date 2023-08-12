import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData"
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
