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
        console.log("UseEffect Called...!");   
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log('Restarunts',json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaruntList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
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
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurantList = restaruntList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                        setFilteredRestaurant(filteredRestaurantList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = restaruntList.filter(
                        (res) => res.info.avgRating > 4.6
                     );
                     //console.log(filteredList);
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