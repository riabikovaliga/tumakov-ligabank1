import React, {useEffect, useCallback} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-scroll";
import PropTypes from "prop-types";
import {CreditPurposeTypes} from "../../../const";
import "./offer.scss";

const Settings = {
  mortgage: {
    MIN_PERCENT: 8.5,
    MAX_PERCENT: 9.4,
    LIMIT: 15,
    LABEL: "Сумма ипотеки",
    LABEL_ERROR: "ипотечные кредиты",
    MIN_CREDIT: 500000,
    MIN_INCOME_PERCENT: 45,
    MIN_PROPERTY_VALUE: 1200000,
    MAX_PROPERTY_VALUE: 25000000,
    MIN_INITIAL_PAYMENT_PERCENT: 10,
    MAX_INITIAL_PAYMENT_PERCENT: 100,
    MIN_PERIOD: 5,
    MAX_PERIOD: 30,
  },
  car: {
    MIN_PERCENT: 16,
    MAX_PERCENT: 15,
    INSURANCE_ONE_PERCENT: 8.5,
    INSURANCE_BOTH_PERCENT: 3.5,
    LIMIT: 2000000,
    LABEL: "Сумма автокредита",
    LABEL_ERROR: "автокредиты",
    MIN_CREDIT: 200000,
    MIN_INCOME_PERCENT: 45,
    MIN_PROPERTY_VALUE: 500000,
    MAX_PROPERTY_VALUE: 5000000,
    MIN_INITIAL_PAYMENT_PERCENT: 20,
    MAX_INITIAL_PAYMENT_PERCENT: 100,
    MIN_PERIOD: 1,
    MAX_PERIOD: 5,
  },
};

const Offer = (props) => {
  const {setOrderVisible} = props;
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const propertyValue = useSelector((state) => state.propertyValue);
  const initialPayment = useSelector((state) => state.initialPayment);
  const period = useSelector((state) => state.period);
  const maternalCapital = useSelector((state) => state.maternalCapital);
  const insuranceCar = useSelector((state) => state.insuranceCar);
  const insuranceLife = useSelector((state) => state.insuranceLife);
  const currentSettings = Settings[creditPurpose];

  const creditSum =
    creditPurpose === CreditPurposeTypes.MORTGAGE
      ? propertyValue - initialPayment - maternalCapital
      : propertyValue - initialPayment;

  let percent;

  switch (creditPurpose) {
    case CreditPurposeTypes.MORTGAGE:
      percent =
        (initialPayment * 100) / propertyValue < currentSettings.LIMIT
          ? currentSettings.MAX_PERCENT
          : currentSettings.MIN_PERCENT;

      break;

    case CreditPurposeTypes.CAR:
      if (insuranceCar && insuranceLife) {
        percent = currentSettings.INSURANCE_BOTH_PERCENT;

        break;
      }

      if (insuranceCar || insuranceLife) {
        percent = currentSettings.INSURANCE_ONE_PERCENT;

        break;
      }

      percent =
        propertyValue < currentSettings.LIMIT
          ? currentSettings.MIN_PERCENT
          : currentSettings.MAX_PERCENT;

      break;

    default:
      break;
  }

  const monthlyProcent = percent / 100 / 12;
  const periodMonthCount = period * 12;
  const monthlyPayment =
    creditSum *
    (monthlyProcent +
      monthlyProcent / (Math.pow(1 + monthlyProcent, periodMonthCount) - 1));
  const requiredIncome =
    (monthlyPayment * 100) / currentSettings.MIN_INCOME_PERCENT;

  const checkError = useCallback(() => {
    const Error = (
      <>
        <p className="offer__title offer__title--error">
          Для заданных условий расчет невозможен.
        </p>
        <p className="offer__label offer__label--error">
          Попробуйте использовать другие параметры для расчёта.
        </p>
      </>
    );

    if (
      propertyValue < currentSettings.MIN_PROPERTY_VALUE ||
      propertyValue > currentSettings.MAX_PROPERTY_VALUE
    ) {
      return Error;
    }

    const initialPaymentPercent = (initialPayment * 100) / propertyValue;

    if (
      initialPaymentPercent < currentSettings.MIN_INITIAL_PAYMENT_PERCENT ||
      initialPaymentPercent > currentSettings.MAX_INITIAL_PAYMENT_PERCENT
    ) {
      return Error;
    }

    if (
      period < currentSettings.MIN_PERIOD ||
      period > currentSettings.MAX_PERIOD
    ) {
      return Error;
    }

    if (creditSum <= currentSettings.MIN_CREDIT) {
      return (
        <>
          <p className="offer__title offer__title--error">
            Наш банк не выдаёт {currentSettings.LABEL_ERROR} меньше{" "}
            {currentSettings.MIN_CREDIT.toLocaleString()} рублей.
          </p>
          <p className="offer__label offer__label--error">
            Попробуйте использовать другие параметры для расчёта.
          </p>
        </>
      );
    }

    return false;
  }, [currentSettings, creditSum, initialPayment, period, propertyValue]);

  const handleClick = () => {
    setOrderVisible(true);
  };

  useEffect(() => {
    checkError() && setOrderVisible(false);
  }, [checkError, currentSettings.MIN_CREDIT, setOrderVisible]);

  return (
    <div className="offer credit-calculator__offer">
      {checkError() || (
        <>
          <h3 className="offer__title">Наше предложение</h3>
          <table className="offer__table">
            <tbody className="offer__wrap">
              <tr className="offer__row">
                <td className="offer__value">
                  {creditSum.toLocaleString()} рублей
                </td>
                <th className="offer__label">{currentSettings.LABEL}</th>
              </tr>
              <tr className="offer__row">
                <td className="offer__value">{percent.toFixed(2)}%</td>
                <th className="offer__label">Процентная ставка</th>
              </tr>
              <tr className="offer__row">
                <td className="offer__value">
                  {Math.round(monthlyPayment).toLocaleString()} рублей
                </td>
                <th className="offer__label">Ежемесячный платеж</th>
              </tr>
              <tr className="offer__row">
                <td className="offer__value">
                  {Math.round(requiredIncome).toLocaleString()} рублей
                </td>
                <th className="offer__label">Необходимый доход</th>
              </tr>
            </tbody>
          </table>
          <Link
            className="offer__submit"
            type="button"
            onClick={handleClick}
            to="order"
            smooth
            duration={500}
            tabIndex={0}
          >
            Оформить заявку
          </Link>
        </>
      )}
    </div>
  );
};

Offer.propTypes = {
  setOrderVisible: PropTypes.func.isRequired,
};

export default Offer;
