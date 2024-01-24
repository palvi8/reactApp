import React, { useState } from "react";
import {Link} from "react-router-dom";
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
            <li>
             <Link to={'/'}>Home</Link>
            </li>
            <li>
             <Link to={'/about'}>About</Link>
            </li>
            <li>
             <Link to={'/contact'}>Contact</Link>
            </li>
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
