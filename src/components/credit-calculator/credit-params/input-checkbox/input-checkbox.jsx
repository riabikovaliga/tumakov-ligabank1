import React from "react";
import PropTypes from "prop-types";
import "./input-checkbox.scss";

const InputCheckbox = (props) => {
  const {id, content, isChecked, setChecked} = props;

  const handleChange = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <input
        className="visually-hidden checkbox__input"
        type="checkbox"
        id={id}
        onChange={handleChange}
      />
      <label
        className={`checkbox__label ${isChecked && "checkbox__label--checked"}`}
        htmlFor={id}
      >
        {content}
      </label>
    </>
  );
};

InputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default InputCheckbox;
