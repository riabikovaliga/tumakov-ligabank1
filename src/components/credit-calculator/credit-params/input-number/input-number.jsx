import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import {toNumber} from "../../../../utils";
import {InputTypes} from "../../../../const";
import "./input-number.scss";

const InputNumber = (props) => {
  const {
    id,
    currency,
    value,
    setValue,
    isError,
    changeHandler,
    keydownHandler,
    focusHandler,
    blurHandler,
    children,
  } = props;
  const [inputType, setInputType] = useState("text");
  const inputElement = useRef(null);

  const handleWrapClick = () => {
    inputElement.current.focus();
  };

  const handleChange = (evt) => {
    setValue(toNumber(evt.target.value));
    changeHandler && changeHandler(evt);
  };

  const handleKeydown = (evt) => {
    keydownHandler && keydownHandler(evt);
  };

  const handleFocus = (evt) => {
    setValue(toNumber(evt.target.value));
    setInputType(InputTypes.NUMBER);
    focusHandler && focusHandler();
  };

  const handleBlur = (evt) => {
    setInputType(InputTypes.TEXT);
    setValue(toNumber(evt.target.value).toLocaleString());
    blurHandler && blurHandler(evt);
  };

  return (
    <div
      className={`input-number__wrap input-number__wrap--${id} ${
        isError && "input-number__wrap--error"
      }`}
      onClick={handleWrapClick}
    >
      <input
        className={`input-number__input input-number__input--${id}`}
        type={inputType}
        id={id}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputElement}
      />
      <span className="input-number__currency">{currency}</span>
      {children}
    </div>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  changeHander: PropTypes.func,
  keydownHandler: PropTypes.func,
  focusHander: PropTypes.func,
  blurHandler: PropTypes.func,
};

export default InputNumber;
