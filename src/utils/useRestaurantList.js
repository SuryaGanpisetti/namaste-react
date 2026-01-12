import { useState, useEffect } from "react";
const useRestaurantList = () => {
  const [restaruntList, setRestaruntList] = useState([]); //original list from api
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //filtered list
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    setRestaruntList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return { restaruntList, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurantList;
