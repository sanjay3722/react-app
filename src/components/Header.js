import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../context/userContext";

import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  // console.log(data);

  // const cartItems = useSelector((store) => store.cart?.items);

  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="mx-3 font-bold">Cart({cartItems.length} items)</li>
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
          <li className="mx-3 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
