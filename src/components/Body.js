import RestaruntCard from "./RestaruntCard";
import {resList} from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    // Local State Variable - super powerfull variable
    const [restaruntList, setRestaruntList] = useState(resList );
    // Normal JS Variable
    // let restaruntList = []/null;

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = restaruntList.filter(
                        (res) => res.rating > 4
                     );
                     console.log(restaruntList);
                     setRestaruntList(filteredList)
                }} 
                >Top Rated Restarunts</button>
            </div>
            <div className="res-container">
                {
                    restaruntList.map((restarunt)=>(
                        <RestaruntCard key = {restarunt.id} resData = {restarunt}/>
                    ))
                }
            </div>
        </div>
    );
};
export default Body;