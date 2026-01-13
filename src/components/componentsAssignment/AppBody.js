import RestaruntCardCompnent from "./RestaruntCardCompnent";
import AppShimmer from "./../componentsAssignment/AppShimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantListDetails from "../../utils/utilsAssignment/useRestaurantListDetails";

const AppBody = () => {
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Surya");

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

  const { restaurantList, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantListDetails();
  return restaurantList.length === 0 ? (
    <AppShimmer />
  ) : (
    <div className="body">
      <div className="flex bg-cyan-100">
        <button
          className="p-4 m-4 bg-black text-white font-bold rounded-3xl"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>
        <p className="mt-8 font-bold">You clicked {count} times</p>

        <button
          className="p-4 m-4 bg-black text-white font-bold rounded-3xl"
          onClick={() => setName(name === "Surya" ? "React Learner" : "Surya")}
        >
          Toggle Name
        </button>
        <p className="mt-8 font-bold">Current name: {name}</p>
      </div>
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-amber-900 m-4 font-bold text-white rounded-2xl"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-blue-300 font-bold text-white rounded-2xl"
            onClick={() => {
              const topList = restaurantList.filter(
                (res) => res.info.avgRating > 4.6
              );
              setFilteredRestaurant(topList);
            }}
          >
            Top Rated Restarunts
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restarunt) => (
          <Link
            to={"/restaurants/" + restarunt.info.id}
            key={restarunt.info.id}
          >
            <RestaruntCardCompnent resMenuData={restarunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AppBody;
