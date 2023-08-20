import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResMenu] = useState(null)
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {

    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResMenu(json.data)
  }

  if (resInfo === null) return <ShimmerUI />
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs "} {item.card.info.price / 100}</li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu;