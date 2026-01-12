import { useState, useEffect } from "react";
import { MENU_API } from "../../utils/constants";
const useRestaurantMenuList = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuList();
  }, []);
  const fetchMenuList = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenuList;
