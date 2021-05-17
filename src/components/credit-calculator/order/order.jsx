import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {scroller} from "react-scroll";
import InputMask from "react-input-mask";
import {CreditActions} from "../../../store/actions";
import {declineYears, zeroFill} from "../../../utils";
import "./order.scss";

const Settings = {
  mortgage: {
    PURPOSE: "Ипотека",
    LABEL: "Стоимость недвижимости",
  },
  car: {
    PURPOSE: "Автокредит",
    LABEL: "Стоимость автомобиля",
  },
};

const ORDER_NUMBER_LENGTH = 4;

const Order = (props) => {
  const {setPopupVisible, setOrderVisible} = props;
  const dispatch = useDispatch();
  const orderNumber = localStorage.getItem("orderNumber") || "0001";
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const propertyValue = useSelector((state) => state.propertyValue);
  const initialPayment = useSelector((state) => state.initialPayment);
  const period = useSelector((state) => state.period);
  const [name, setName] = useState(localStorage.getItem("fullName") || "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const currentSettings = Settings[creditPurpose];

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem(
      "orderNumber",
      zeroFill(+orderNumber + 1, ORDER_NUMBER_LENGTH)
    );

    setOrderVisible(false);
    dispatch(CreditActions.setInitialState());
    setPopupVisible(true);
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
    localStorage.setItem("fullName", evt.target.value);
  };

  const handlePhoneChange = (evt) => {
    setPhone(evt.target.value);
    localStorage.setItem("phone", evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
    localStorage.setItem("email", evt.target.value);
  };

  useEffect(() => {
    scroller.scrollTo("order", {
      smooth: true,
      duration: 500,
    });
  }, []);

  return (
    <div className="order credit-calculator__order">
      <h3 className="order__title" id="order">
        Шаг 3. Оформление заявки
      </h3>
      <table className="order__table">
        <tbody className="order__wrap">
          <tr className="order__row">
            <th className="order__label" scope="row">
              Номер заявки
            </th>
            <td className="order__value">№ {orderNumber}</td>
          </tr>
          <tr className="order__row">
            <th className="order__label" scope="row">
              Цель кредита
            </th>
            <td className="order__value">{currentSettings.PURPOSE}</td>
          </tr>
          <tr className="order__row">
            <th className="order__label" scope="row">
              {currentSettings.LABEL}
            </th>
            <td className="order__value">
              {propertyValue.toLocaleString()} рублей
            </td>
          </tr>
          <tr className="order__row">
            <th className="order__label" scope="row">
              Первоначальный взнос
            </th>
            <td className="order__value">
              {initialPayment.toLocaleString()} рублей
            </td>
          </tr>
          <tr className="order__row">
            <th className="order__label" scope="row">
              Срок кредитования
            </th>
            <td className="order__value">
              {period.toLocaleString()} {declineYears(period)}
            </td>
          </tr>
        </tbody>
      </table>
      <form className="order__form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="full-name">
          Введите полностью ваши Фамилию, Имя и Отчество
        </label>
        <input
          className="order__input order__input--name"
          type="text"
          id="full-name"
          placeholder="ФИО"
          required
          value={name}
          onChange={handleNameChange}
        />
        <label className="visually-hidden" htmlFor="phone-number">
          Введите ваш номер телефона
        </label>
        <InputMask
          className="order__input order__input--phone"
          type="tel"
          id="phone-number"
          mask="+7-999-999-99-99"
          placeholder="Телефон"
          required
          value={phone}
          onChange={handlePhoneChange}
        />
        <label className="visually-hidden" htmlFor="email">
          Введите ваш электронный адрес
        </label>
        <input
          className="order__input order__input--email"
          type="email"
          id="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <button className="order__submit" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Order;
