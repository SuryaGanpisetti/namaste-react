import RestaruntCard from "./RestaruntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
//549000
const Body = () => {
  // Local State Variable - super powerfull variable
  // const [restaruntList, setRestaruntList] = useState([]); //original list from api
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]); //filtered list
  const [searchText, setSearchText] = useState("");
  // Normal JS Variable
  // let restaruntList = []/null;
  const { restaruntList, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantList();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return `OPPS you're offline!!!check your internet connect`;
  //Conditional Rendering
  return restaruntList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg font-bold"
            onClick={() => {
              const filteredRestaurantList = restaruntList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurant(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-400 font-bold"
            onClick={() => {
              const filteredList = restaruntList.filter(
                (res) => res.info.avgRating > 4.6
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restarunts
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restarunt) => (
          <Link
            key={restarunt.info.id}
            to={"/restaurants/" + restarunt.info.id}
          >
            <RestaruntCard resData={restarunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
