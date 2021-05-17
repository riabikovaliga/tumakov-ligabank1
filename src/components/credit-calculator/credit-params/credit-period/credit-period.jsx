import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import InputNumber from "../input-number/input-number";
import Slider from "rc-slider";
import {CreditActions} from "../../../../store/actions";
import {declineYears} from "../../../../utils";
import "rc-slider/assets/index.css";
import "./credit-period.scss";

const Settings = {
  mortgage: {
    MIN: 5,
    MAX: 30,
  },
  car: {
    MIN: 1,
    MAX: 5,
  },
};

const CreditPeriod = () => {
  const dispatch = useDispatch();
  const creditPurpose = useSelector((state) => state.creditPurpose);
  const period = useSelector((state) => state.period);
  const [value, setValue] = useState(period);
  const currentSettings = Settings[creditPurpose];

  const checkValue = (value) => {
    if (value < currentSettings.MIN) {
      setValue(currentSettings.MIN);
    }

    if (value > currentSettings.MAX) {
      setValue(currentSettings.MAX);
    }
  };

  const handleInputBlur = (evt) => {
    checkValue(evt.target.value);
  };

  const handleSliderChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    dispatch(CreditActions.setPeriod(+value));
  }, [dispatch, value]);

  useEffect(() => {
    checkValue(+value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creditPurpose]);

  return (
    <div className="credit-period credit-params__credit-period">
      <label className="credit-params__label" htmlFor="credit-period">
        Срок кредитования
      </label>
      <InputNumber
        id="credit-period"
        currency={declineYears(value)}
        value={value}
        setValue={setValue}
        blurHandler={handleInputBlur}
      />
      <Slider
        className="credit-period__slider"
        discrete
        min={currentSettings.MIN}
        max={currentSettings.MAX}
        step={1}
        start={currentSettings.MIN}
        value={value}
        onChange={handleSliderChange}
      />
      <div className="credit-period__range">
        <span className="credit-period__min">
          {currentSettings.MIN} {declineYears(currentSettings.MIN)}
        </span>
        <span className="credit-period__max">
          {currentSettings.MAX} {declineYears(currentSettings.MAX)}
        </span>
      </div>
    </div>
  );
};

export default CreditPeriod;
