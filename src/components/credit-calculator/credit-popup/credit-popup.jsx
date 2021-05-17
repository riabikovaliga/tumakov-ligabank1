import React, {useEffect, useCallback} from "react";
import {PropTypes} from "prop-types";
import {Keys} from "../../../const";
import "./credit-popup.scss";

const CreditPopup = (props) => {
  const {setPopupVisible} = props;

  const handleClick = () => {
    setPopupVisible(false);
  };

  const escKeydownHandler = useCallback(
    (evt) => {
      evt.key === Keys.ESC && setPopupVisible(false);
    },
    [setPopupVisible]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", escKeydownHandler);

    return () => window.removeEventListener("keydown", escKeydownHandler);
  }, [escKeydownHandler]);

  return (
    <div className="credit-popup">
      <div className="credit-popup__wrap">
        <p className="credit-popup__title">Спасибо за обращение в наш банк.</p>
        <p className="credit-popup__description">
          Наш менеджер скоро свяжется с вами по указанному номеру телефона.
        </p>
        <button
          className="credit-popup__close"
          type="button"
          aria-label="Закрыть попап"
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
};

CreditPopup.propTypes = {
  setPopupVisible: PropTypes.func.isRequired,
};

export default CreditPopup;
