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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="filter-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
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
