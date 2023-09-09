import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = restaurantData?.info;
  
  // console.log(restaurantData)
  return (
    <div data-testid="resCard"
      className="card-container">
      <div className='card w-[250px] h-[330px] border my-2 bg-slate-400 rounded-lg overflow-hidden transition ease-out duration-300 hover:shadow-lg hover:shadow-blue-500'>
        <div className='card-image h-3/6 overflow-hidden'>
          <img className="w-full "
            src={
              CDN_URL +
              cloudinaryImageId
            }
          // alt=''
          />
        </div>
        <div className='card-details px-2 text-white font-semibold'>
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

// Higher order component
// input - RestaurantCard => RestaurantCard Promoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard