import React from "react";
import PropTypes from "prop-types";
import InputField from "./style";

const Input = ({ placeholder, onChange }) => {
  return (
    <InputField type="text" placeholder={placeholder} onChange={onChange} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
