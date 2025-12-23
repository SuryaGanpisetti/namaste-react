import {LOGO_URL} from "../../utils/utilsAssignment/constantsAssigment";
const AppHeader = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
