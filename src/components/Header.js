import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
              loginBtn === 'Login'
              ? setLoginBtn("Logout")
              : setLoginBtn("Login")
            }}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
};

export default Header;
