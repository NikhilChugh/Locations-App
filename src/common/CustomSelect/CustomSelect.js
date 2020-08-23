import React from "react";
import "./CustomSelect.scss";

const CustomSelect = (props) => {
  let { children, width, className, onSelectChange, name, value } = props;
  return (
    <select
      className={`locations-customSelect ${className}`}
      onChange = {onSelectChange}
      name = {name}
      autoComplete="off"
      style={{ width: width }}
      value = {value}
    >
      {children}
    </select>
  );
};

export default CustomSelect;
