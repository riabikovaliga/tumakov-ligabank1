import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./login-form.scss";

const LoginForm = (props) => {
  const {setLoginShown} = props;
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoginShown(false);
  };

  const handleLoginChange = (evt) => {
    setLogin(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleMouseDown = () => {
    setPasswordHidden(false);
  };

  const handleMouseUp = () => {
    setPasswordHidden(true);
  };

  useEffect(() => {
    localStorage.setItem("login", login || "");
    localStorage.setItem("password", password || "");
  });

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-form__label" htmlFor="login-input">
        Логин
      </label>
      <input
        className="login-form__input"
        id="login-input"
        type="text"
        value={login}
        onChange={handleLoginChange}
        autoFocus
      />
      <label className="login-form__label" htmlFor="">
        Пароль
      </label>
      <input
        className="login-form__input login-form__input--password"
        id="password-input"
        type={`${isPasswordHidden ? "password" : "text"}`}
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="login-form__password-button"
        type="button"
        aria-label="Показать пароль"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></button>
      <button className="login-form__submit" type="submit">
        Войти
      </button>
      <Link className="login-form__link" to="#">
        Забыли пароль?
      </Link>
    </form>
  );
};

LoginForm.propTypes = {
  setLoginShown: PropTypes.func.isRequired,
};

export default LoginForm;
