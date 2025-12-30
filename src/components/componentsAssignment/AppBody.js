/*
  Play with the useEffect Hook to see when it is called?(before or after render) DONE
● Play with dependency array in useEffect Hook DONE
● Play with the developer console by putting a debugger in render and useEffect DONE
● Call an actual API to get data DONE
● Handle Error in your API call DONE
● Build Shimmer UI when data in not loaded DONE
● Render your UI with actual API data DONE
● MakeSearch functionality work  DONE
● MakeaLogin Logout button which toggles with a state DONE
*/
import RestaruntCardCompnent from "./RestaruntCardCompnent";
import  AppShimmer  from "./../componentsAssignment/AppShimmer";
import { useEffect, useState } from "react";

const AppBody = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Surya");

  useEffect(()=>{
    fetchApiData();
  },[]);

  // Runs whenever 'count' changes
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // Runs whenever 'name' changes
  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]);

  // Runs whenever either 'count' OR 'name' changes
  useEffect(() => {
    console.log(`Count or Name changed → count: ${count}, name: ${name}`);
  }, [count, name]);

  const fetchApiData = async () => {
    try {
    const response = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await response.json();
    
    setRestaurantList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
return restaurantList.length === 0 ? (
        <AppShimmer />
    ) :  (
    <div className="body">
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <p>Current name: {name}</p>
      <button onClick={() => setName(name === "Surya" ? "React Learner" : "Surya")}>
        Toggle Name
      </button>
    </div>
       <div className="filter">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button 
          className="filter-btn"
          onClick={()=>{
            const filteredList = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
            setFilteredRestaurant(filteredList)
          }}>Search</button>
      </div>
      <button 
      className="filter-btn"
      onClick={() =>{
        const topList = restaurantList.filter((res) => res.info.avgRating > 4.6);
        setFilteredRestaurant(topList);
      }}
      >Top Rated Restarunts</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restarunt) => (
            <RestaruntCardCompnent key = {restarunt.info.id} resMenuData={restarunt} />
        ))}
      </div>
    </div>
  );
};
export default AppBody;
