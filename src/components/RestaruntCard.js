import { useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import { styleCard } from "../utils/mockData";

const RestaruntCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData.info;
  useEffect(() => {
    console.log("UseEffect Clled from Restaurant Crad...!");
  }, []);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaruntCard;
