import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuShimmer from "../Components/MenuShimmer";
import { useParams } from "react-router-dom";
import RestaurantCategoriesAccordion from "../Components/RestaurantCategoriesAccordion";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <MenuShimmer />
  const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  // filter categories

  const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories);

  return (
    <div className="menu  w-[60%] mx-auto  border-2 solid-black">
      <div className="ResHeaderComponent flex justify-between px-9 pb-1 border-b-4 border-b-slate-400 border-dashed">
        <div className="resHeaderName">
          <h1 className="font-bold text-lg">{name}</h1>
          {/* - {costForTwoMessage} */}
          <h2 className="text-stone-400 font-sans">{cuisines.join(", ")}
          </h2>
          <h3 className="font-bold ">{costForTwoMessage}</h3>
        </div>
        <div className="rating flex items-center px-1 border-black">
        <p>⭐{avgRating}</p>
      </div>
      </div> 
     
      {/* <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs "} {item.card.info.price / 100}</li>)}
      </ul> */}
      {/* {Categories Accordion} */}
      {categories.map((category) => <RestaurantCategoriesAccordion key={category.card.card.title} data={category}/>)}
    </div>
  )
}

export default RestaurantMenu;