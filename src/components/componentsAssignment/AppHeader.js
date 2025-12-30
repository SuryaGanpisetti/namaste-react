import {LOGO_URL} from "../../utils/utilsAssignment/constantsAssigment";
import { useState } from "react";
const AppHeader = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Food App Logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>My Orders</li>
          <li>Cart</li>
          <button
           className="login" 
           onClick={()=>{
            btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
           }}
           >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
