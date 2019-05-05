import React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
