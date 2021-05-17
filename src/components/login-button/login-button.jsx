import React, {useContext} from "react";
import PropTypes from "prop-types";
import {LoginContext} from "../pages/credit-page/credit-page";
import "./login-button.scss";

const LoginButton = (props) => {
  const {className, clickHandler} = props;
  const setLoginShown = useContext(LoginContext);

  const handleClick = () => {
    setLoginShown(true);
    clickHandler && clickHandler();
  };

  return (
    <button
      className={`login-button ${className}`}
      type="button"
      onClick={handleClick}
    >
      <span className="login-button__content">Войти в Интернет-банк</span>
    </button>
  );
};

LoginButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  clickHandler: PropTypes.func,
};

export default LoginButton;
