import RestaruntCard from "./RestaruntCard";
import {resList} from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    // Local State Variable - super powerfull variable
    const [restaruntList, setRestaruntList] = useState([]); //origina list from api
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); //filtered list
    const [searchText, setSearchText] = useState(""); 
    // Normal JS Variable
    // let restaruntList = []/null;

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();

        setRestaruntList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

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
                     onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button 
                    className="filter-btn"
                    onClick={()=>{
                        const filteredRestaurantList = restaruntList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                        setFilteredRestaurant(filteredRestaurantList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = restaruntList.filter(
                        (res) => res.info.avgRating > 4.6
                     );
                     setFilteredRestaurant(filteredList);
                }} 
                >Top Rated Restarunts</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restarunt)=>(
                        <RestaruntCard key = {restarunt.info.id} resData = {restarunt}/>
                    ))
                }
            </div>
        </div>
    );
};
export default Body;