import React, {useContext, useEffect, useCallback} from "react";
import Logo from "../logo/logo";
import LoginForm from "../login-form/login-form";
import CloseButton from "../close-button/close-button";
import {LoginContext} from "../pages/credit-page/credit-page";
import {Keys} from "../../const";
import "./login.scss";

const Login = () => {
  const setLoginShown = useContext(LoginContext);

  const handleCloseClick = () => {
    setLoginShown(false);
  };

  const escKeydownHandler = useCallback(
    (evt) => {
      evt.key === Keys.ESC && setLoginShown(false);
    },
    [setLoginShown]
  );

  useEffect(() => {
    window.addEventListener("keydown", escKeydownHandler);

    return () => window.removeEventListener("keydown", escKeydownHandler);
  }, [escKeydownHandler]);

  return (
    <section className="login">
      <div className="login__wrap">
        <h2 className="visually-hidden">Форма авторизации в Лига-банке</h2>
        <Logo className="login__logo" />
        <LoginForm setLoginShown={setLoginShown} />
        <CloseButton className="login__close" clickHandler={handleCloseClick} />
      </div>
    </section>
  );
};

export default Login;
