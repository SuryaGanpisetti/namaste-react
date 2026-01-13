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
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl text-black">{name}</h3>
      <h4 className="text-black">{cuisines.join(", ")}</h4>
      <h4 className="text-black">{avgRatingString + " stars"}</h4>
      <h4 className="text-black">{costForTwo}</h4>
      <h4 className="text-black">{sla.slaString}</h4>
    </div>
  );
};

export default RestaruntCard;
