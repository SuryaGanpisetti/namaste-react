import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("Header Rendered");
  // if no dependecy array useEffect() is called on every render
  // if dependecy array is empty => [], useEffect() is called only on initial render(only once)
  // if dependency array is [btnNameReact], useEffect() called everytime btnNameReact updates
  useEffect(() => {
    //console.log("useEffect called");
  }, []);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 font-bold sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img alt="Home Logo" className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">User Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
