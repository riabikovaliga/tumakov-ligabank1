import React from "react";
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <Logo className="header__logo" />
        <Navigation className="header__navigation-list" />
      </nav>
    </header>
  );
};

export default Header;
