import React from "react";
import "./CustomButton.scss";

const CustomButton = (props) => {
  let { type, value, background, marginRight, onClickButton } = props;
  return (
    <div>
      <button
        type={type}
        className="customButton"
        style={{ background: background, marginRight: marginRight }}
        onClick = {onClickButton}
      >
        {value}
      </button>
    </div>
  );
};

export default CustomButton;
 