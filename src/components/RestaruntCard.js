import {CDN_URL} from "../utils/constants";
import {styleCard} from "../utils/mockData";

const RestaruntCard = (props) =>{
    const {resData} = props;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL}/>
            <h3>{resData.resName}</h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.rating + " stars"}</h4>
            <h4>{"₹ "+ resData.costForTwo + " For Two"}</h4>
        </div>
    );
};

export default RestaruntCard;