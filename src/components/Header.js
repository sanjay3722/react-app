import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center shadow-sm">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="w-[90px]" />
      </div>
      <div>
        <ul className="flex">
          <li className="mx-3">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About Us </Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact us </Link>
          </li>
          <li className="mx-3">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="mx-3">Cart</li>
          <li className="mx-3">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
