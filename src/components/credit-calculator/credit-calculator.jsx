import React, {useState} from "react";
import {useSelector} from "react-redux";
import CreditPurpose from "./credit-purpose/credit-purpose";
import CreditParams from "./credit-params/credit-params";
import Offer from "./offer/offer";
import Order from "./order/order";
import "./credit-calculator.scss";
import CreditPopup from "./credit-popup/credit-popup";

const CreditCalculator = () => {
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const [isOrderVisible, setOrderVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <section className="credit-calculator credit-page__calculator">
      <h2 className="credit-calculator__title">Кредитный калькулятор</h2>
      <div className="credit-calculator__wrap">
        <div className="credit-calculator__form-wrap">
          <CreditPurpose />
          {creditPurpose && <CreditParams setOrderVisible={setOrderVisible} />}
        </div>
        {creditPurpose && <Offer setOrderVisible={setOrderVisible} />}
      </div>
      {isOrderVisible && (
        <Order
          setPopupVisible={setPopupVisible}
          setOrderVisible={setOrderVisible}
        />
      )}
      {isPopupVisible && <CreditPopup setPopupVisible={setPopupVisible} />}
    </section>
  );
};

export default CreditCalculator;
