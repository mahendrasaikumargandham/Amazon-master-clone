import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_home">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </div>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_options">
        <div className="header_option">
          <p className="header_optionOne">Returns &</p>
          <Link to="/orders">Orders</Link>
        </div>
        <div className="header_option">
          <p className="header_optionOne">Your</p>
          <Link to="/subscriptions">Prime</Link>
        </div>
        <div className="header_option">
          <p className="header_optionOne">Hello, Guest</p>
          <Link to="/profile">Signin</Link>
        </div>
        <div className="header_optioncart">
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
