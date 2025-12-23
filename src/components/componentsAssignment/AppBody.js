import RestaruntCardCompnent from "./RestaruntCardCompnent";
import RestaurantListCompnent from "./RestaurantListCompnent";
import {
  restaruntList,
  restaruntMenu,
} from "../../utils/utilsAssignment/mockDataAssignment";
import { useState } from "react";

const AppBody = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          {console.log(searchText)}
      </div>
      <div className="restarunt-list">
        {restaruntList.map((restarunt) => (
          <RestaurantListCompnent key={restarunt.id} resData={restarunt}>
            <RestaruntCardCompnent resMenuData={restaruntMenu} />
          </RestaurantListCompnent>
        ))}
      </div>
    </div>
  );
};
export default AppBody;
