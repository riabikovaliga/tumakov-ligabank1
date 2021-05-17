import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CreditPurposeTypes} from "../../../const";
import "./credit-purpose.scss";
import {CreditActions} from "../../../store/actions";

const Label = {
  mortgage: "Ипотечное кредитование",
  car: "Автомобильное кредитование",
};

const CreditPurpose = () => {
  const dispatch = useDispatch();
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const [isListHidden, setListHidden] = useState(true);

  const handleChoiceClick = () => {
    setListHidden(!isListHidden);
  };

  const handleMortgageClick = () => {
    dispatch(CreditActions.setCreditPurpose(CreditPurposeTypes.MORTGAGE));
    setListHidden(true);
  };

  const handleCarClick = () => {
    dispatch(CreditActions.setCreditPurpose(CreditPurposeTypes.CAR));
    setListHidden(true);
  };

  return (
    <div className="credit-purpose credit-calculator__purpose">
      <h3 className="credit-purpose__title">Шаг 1. Цель кредита</h3>
      <button
        className={`credit-purpose__choice ${
          isListHidden && "credit-purpose__choice--list-hidden"
        }`}
        onClick={handleChoiceClick}
      >
        {creditPurpose ? Label[creditPurpose] : "Выберите цель кредита"}
      </button>
      <ul
        className={`credit-purpose__list ${
          isListHidden && "credit-purpose__list--hidden"
        }`}
      >
        <li className="credit-purpose__item">
          <button
            className="credit-purpose__button"
            onClick={handleMortgageClick}
          >
            Ипотечное кредитование
          </button>
        </li>
        <li className="credit-purpose__item">
          <button className="credit-purpose__button" onClick={handleCarClick}>
            Автомобильное кредитование
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CreditPurpose;
