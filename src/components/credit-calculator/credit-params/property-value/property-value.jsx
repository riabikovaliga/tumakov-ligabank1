import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InputNumber from "../input-number/input-number";
import {CreditActions} from "../../../../store/actions";
import {Keys} from "../../../../const";
import {toNumber} from "../../../../utils";
import "./property-value.scss";

const Settings = {
  mortgage: {
    MIN: 1200000,
    MAX: 25000000,
    LABEL: "Стоимость недвижимости",
    STEP: 100000,
  },
  car: {
    MIN: 500000,
    MAX: 5000000,
    LABEL: "Стоимость автомобиля",
    STEP: 50000,
  },
};

const checkValue = (value) => {
  return value < 0 ? 0 : value;
};

const PropertyValue = () => {
  const dispatch = useDispatch();
  const propertyValue = useSelector((state) => state.propertyValue);
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const [value, setValue] = useState(propertyValue.toLocaleString());
  const [isError, setError] = useState(false);
  const creditSettings = Settings[creditPurpose];

  const checkError = (currentValue) => {
    if (
      currentValue < creditSettings.MIN ||
      currentValue > creditSettings.MAX
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleInputKeydown = (evt) => {
    switch (evt.key) {
      case Keys.PLUS:
        evt.preventDefault();

        setValue((prevValue) => checkValue(prevValue + creditSettings.STEP));

        return;

      case Keys.MINUS:
        evt.preventDefault();

        setValue((prevValue) => checkValue(prevValue - creditSettings.STEP));

        return;

      default:
        return;
    }
  };

  const handleInputFocus = () => {
    setError(false);
  };

  const handleInputBlur = (evt) => {
    checkError(evt.target.value);
  };

  const handleMinusClick = (evt) => {
    evt.stopPropagation();

    setValue((prevValue) => {
      const newValue = checkValue(toNumber(prevValue) - creditSettings.STEP);

      checkError(newValue);

      return newValue.toLocaleString();
    });
  };

  const handlePlusClick = (evt) => {
    evt.stopPropagation();

    setValue((prevValue) => {
      const newValue = toNumber(prevValue) + creditSettings.STEP;

      checkError(newValue);

      return newValue.toLocaleString();
    });
  };

  useEffect(() => {
    dispatch(CreditActions.setPropertyValue(toNumber(value)));
  }, [dispatch, value]);

  useEffect(() => {
    checkError(toNumber(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creditPurpose]);

  return (
    <>
      <label className="credit-params__label" htmlFor="property-value">
        {creditSettings.LABEL}
      </label>
      <InputNumber
        id="property-value"
        currency="рублей"
        value={value}
        setValue={setValue}
        isError={isError}
        keydownHandler={handleInputKeydown}
        focusHandler={handleInputFocus}
        blurHandler={handleInputBlur}
      >
        <button
          className="credit-params__button credit-params__button--minus"
          aria-label="Уменьшить стоимость на сто тысяч"
          type="button"
          onClick={handleMinusClick}
        ></button>
        <button
          className="credit-params__button credit-params__button--plus"
          aria-label="Увеличить стоимость на сто тысяч"
          type="button"
          onClick={handlePlusClick}
        ></button>
      </InputNumber>
      <span className="credit-params__cost-range">{`От ${creditSettings.MIN.toLocaleString()} до ${creditSettings.MAX.toLocaleString()} рублей`}</span>
    </>
  );
};

export default PropertyValue;
