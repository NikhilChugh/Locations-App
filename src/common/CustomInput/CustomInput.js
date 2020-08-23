import React from "react";
import "./CustomInput.scss";

const CustomInput = (props) => {
  let { onClickHandler, onInputChange, name, value, id, required, placeholder } = props;
  return (
    <input
      className="locations-customInput"
      type="text"
      onClick={onClickHandler}
      onChange={onInputChange}
      name={name}
      value={value}
      id={id}
      autoComplete="off"
      required={required}
      placeholder = {placeholder}
    />
  );
};

export default CustomInput;
