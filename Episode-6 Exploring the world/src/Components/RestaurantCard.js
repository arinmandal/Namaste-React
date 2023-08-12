import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = restaurantData?.info;
  return (
    <div className="card-container">
      <div className='card'>
        <div className='card-image'>
          <img
            src={
              CDN_URL +
              cloudinaryImageId
            }
          // alt=''
          />
        </div>
        <div className='card-details'>
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{costForTwo}</h4>
          <h4>rating : {avgRating}</h4>
          <h4>{restaurantData.info.sla.deliveryTime} minutes</h4>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard