import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/utilsAssignment/constantsAssigment";
import { useState } from "react";
const AppHeader = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between bg-amber-200 font-bold">
      <div className="logo-container">
        <img className="w-56" alt="Food App Logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 py-2">My Orders</li>
          <li className="px-4 py-2">Cart</li>
          <li className="px-4 py-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4 bg-amber-600 rounded-xl"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
