import { styleCard } from "../../utils/mockData";
import { CDN_URL } from "../../utils/constants";

const RestaruntCardCompnent = (props) => {
    const {resMenuData} = props;

    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + resMenuData.info.cloudinaryImageId}/>
            <h3>{resMenuData.info.name}</h3>
            <h4>{resMenuData.info.cuisines.join(", ")}</h4>
            <h4>{resMenuData.info.avgRatingString + " stars"}</h4>
            <h4>{resMenuData.info.costForTwo}</h4>
        </div>
    );
};

export default RestaruntCardCompnent;
