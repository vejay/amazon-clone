import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__options_lineOne">Hello Akila</span>
            <span className="header__options_lineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__options_lineOne">Returns</span>
            <span className="header__options_lineTwo">&Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__options_lineOne">Your</span>
            <span className="header__options_lineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__options_lineTwo header__basketCount">0</span>
            </div>
        </Link>

      </div>
    </nav>
  );
}

export default Header;
