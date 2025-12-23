import { styleCard } from "../../utils/utilsAssignment/mockDataAssignment";
import { CDN_URL } from "../../utils/utilsAssignment/constantsAssigment";
const RestaruntCardCompnent = (props) => {
  const { resMenuData } = props;
  return resMenuData.map((menu) => (
    <div className="res-card" style={styleCard} key={menu.resName}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL}
      />

      <h3>{menu.resName}</h3>
      <h4>{menu.cuisine}</h4>
      <h4>{menu.rating}</h4>
      <h4>{"$" + menu.costForTwo + "For Two"}</h4>
    </div>
  ));
};

export default RestaruntCardCompnent;
