import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import logoImageMobile from "../../assets/img/logo-image-mobile.svg";
import logoImageTablet from "../../assets/img/logo-image-tablet.svg";
import logoImageDesktop from "../../assets/img/logo-image-desktop.svg";

import logoText from "../../assets/img/logo-text.svg";
import "./logo.scss";

const Logo = (props) => {
  const {className} = props;

  return (
    <Link className={`logo ${className}`} to="/">
      <picture className="logo__picture">
        <source media="(min-width: 768px)" srcSet={logoImageTablet} />
        <source media="(min-width: 1024px)" srcSet={logoImageDesktop} />
        <img
          className="logo__image"
          src={logoImageMobile}
          width="21"
          height="18"
          alt="Логотип Лига Банка"
        />
      </picture>
      <img
        className="logo__text"
        src={logoText}
        width="89"
        height="13"
        alt="Название компании - Лига Банк"
      />
      <span className="logo__sub-text">интернет-банк</span>
    </Link>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
