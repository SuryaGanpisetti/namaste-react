import { styleCard } from "../../utils/mockData";
import { CDN_URL } from "../../utils/constants";

const RestaruntCardCompnent = (props) => {
  const { resMenuData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resMenuData.info;

  return (
    <div
      className="m-4 p-4 rounded-2xl  bg-gray-100 hover:bg-gray-200"
      style={styleCard}
    >
      <img
        className="w-[250px] rounded-2xl"
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

export default RestaruntCardCompnent;
