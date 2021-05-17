import React from "react";
import {useSelector} from "react-redux";
import PropertyValue from "./property-value/property-value";
import InitialPayment from "./initial-payment/initial-payment";
import CreditPeriod from "./credit-period/credit-period";
import MaternalCapital from "./maternal-capital/maternal-capital";
import "./credit-params.scss";
import {CreditPurposeTypes} from "../../../const";
import Insurance from "./insurance/insurance";

const CreditParams = () => {
  const creditPurpose = useSelector((state) => state.creditPurpose);

  return (
    <form className="credit-params credit-calculator__params">
      <h3 className="credit-params__title">Шаг 2. Введите параметры кредита</h3>
      <PropertyValue />
      <InitialPayment />
      <CreditPeriod />
      {creditPurpose === CreditPurposeTypes.MORTGAGE ? (
        <MaternalCapital />
      ) : (
        <Insurance />
      )}
    </form>
  );
};

export default CreditParams;
