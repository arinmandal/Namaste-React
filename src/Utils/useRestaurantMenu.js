import { useState, useEffect } from "react"
import { MENU_API } from "./constant"
const useRestaurantMenu = (resId) => {
  const [resInfo, setResMenu] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {

    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResMenu(json.data)
  }
  return resInfo;
}

export default useRestaurantMenu;