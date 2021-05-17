import React from "react";
import PropTypes from "prop-types";
import "./close-button.scss";

const CloseButton = (props) => {
  const {className, clickHandler} = props;

  return (
    <button
      className={`close-button ${className}`}
      type="button"
      aria-label="Закрыть"
      onClick={clickHandler}
    ></button>
  );
};

CloseButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  clickHandler: PropTypes.func.isRequired,
};

export default CloseButton;
