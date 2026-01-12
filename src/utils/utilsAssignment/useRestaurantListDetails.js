import { useEffect, useState } from "react";
const useRestaurantListDetails = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);
  const fetchApiData = async () => {
    try {
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants"
      );
      const json = await response.json();

      setRestaurantList(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };
  return { restaurantList, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurantListDetails;
