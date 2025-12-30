import { useEffect } from "react";
import {CDN_URL} from "../utils/constants";
import {styleCard} from "../utils/mockData";

const RestaruntCard = (props) =>{
    const {resData} = props;
    useEffect(()=>{
        console.log("UseEffect Clled from Restaurant Crad...!")
    },[])
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRatingString + " stars"}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    );
};

export default RestaruntCard;