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
    <div className="header">
      <div className="logo-container">
        <img alt="Home Logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>User Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
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
