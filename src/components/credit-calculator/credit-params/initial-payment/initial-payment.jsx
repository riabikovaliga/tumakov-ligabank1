import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import InputNumber from "../input-number/input-number";
import Slider from "rc-slider";
import {CreditActions} from "../../../../store/actions";
import {toNumber} from "../../../../utils";
import "rc-slider/assets/index.css";
import "./initial-payment.scss";

const Settings = {
  mortgage: {
    MIN_PERCENT: 10,
    STEP: 5,
  },
  car: {
    MIN_PERCENT: 20,
    STEP: 5,
  },
};

const InitialPayment = () => {
  const dispatch = useDispatch();
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const propertyValue = useSelector((state) => state.propertyValue);
  const currentSettings = Settings[creditPurpose];
  const initialPayment = propertyValue * (currentSettings.MIN_PERCENT / 100);
  const [percent, setPercent] = useState(currentSettings.MIN_PERCENT);
  const [value, setValue] = useState(initialPayment.toLocaleString());

  const checkValue = (value) => {
    if (value < initialPayment) {
      setValue(initialPayment.toLocaleString());
      setPercent(currentSettings.MIN_PERCENT);
    }

    if (value > propertyValue) {
      setValue(propertyValue.toLocaleString());
      setPercent(100);
    }
  };

  const handleInputChange = (evt) => {
    setPercent(Math.round((evt.target.value * 100) / propertyValue));
  };

  const handleInputBlur = (evt) => {
    checkValue(evt.target.value);
  };

  const handleSliderChange = (percent) => {
    setPercent(percent);
    setValue((propertyValue * (percent / 100)).toLocaleString());
  };

  useEffect(() => {
    dispatch(CreditActions.setInitialPayment(toNumber(value)));
  }, [dispatch, value]);

  useEffect(() => {
    setValue((propertyValue * (percent / 100)).toLocaleString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyValue]);

  return (
    <div className="initial-payment credit-params__initial-payment">
      <label className="credit-params__label" htmlFor="initial-payment">
        Первоначальный взнос
      </label>
      <InputNumber
        id="initial-payment"
        currency="рублей"
        value={value}
        setValue={setValue}
        changeHandler={handleInputChange}
        blurHandler={handleInputBlur}
      />
      <Slider
        className="initial-payment__slider"
        discrete
        min={currentSettings.MIN_PERCENT}
        max={100}
        step={currentSettings.STEP}
        start={currentSettings.MIN_PERCENT}
        value={percent}
        onChange={handleSliderChange}
      />
      <span className="initial-payment__percent">{percent}%</span>
    </div>
  );
};

export default InitialPayment;
