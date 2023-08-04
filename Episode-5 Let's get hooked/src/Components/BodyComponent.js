import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
const BodyComponent = () => {
 
  return (
    <div className='BodyComponent'>
      <div className='search-container'>
        <input type='search' placeholder='search your favorite food' />
        <button className='search-btn'>search</button>
      </div>
      <div className='res-container'>
        {restaurantList.map(restaurant => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
