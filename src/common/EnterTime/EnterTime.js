import React, { useState } from "react";
import "./EnterTime.scss";

const EnterTime = (props) => {
  const [activeFromSwitch, setActiveFromSwitch] = useState("AM");
  const [activeToSwitch, setActiveToSwitch] = useState("PM");
  let {
    day,
    onFromInputChange,
    onToInputChange,
    onCheckboxChange,
    applyToAllCheckedHandler,
    name,
    fromInputValue,
    toInputValue,
    checkboxValue,
    changeFromSwitch,
    changeToSwitch,
    changeDay
  } = props;
  return (
    <div className="enterTimeRow-container">
      <div className="checkboxAndDayInput">
        <input type="checkbox" onChange={onCheckboxChange} name={name} 
        // checked = {checkboxValue === 'off' ? false : true}
        >
        </input>
        <span>{day}</span>
      </div>
      <div className="fromInputs">
        <input
          type="text"
          placeholder="00:00"
          onChange={onFromInputChange}
          value={fromInputValue}
          name={name}
        />
        <span className="ampmSwitchFrom">
          <span
            className={
              activeFromSwitch === "AM"
                ? "blueSwitch leftBorderRadius"
                : "graySwitch leftBorderRadius"
            }
            onClick={() => {setActiveFromSwitch("AM"); changeFromSwitch("AM"); changeDay(day);}}
          >
            AM
          </span>
          <span
            className={
              activeFromSwitch === "PM"
                ? "blueSwitch rightBorderRadius"
                : "graySwitch rightBorderRadius"
            }
            onClick={() => {setActiveFromSwitch("PM"); changeFromSwitch("PM"); changeDay(day);}}
          >
            PM
          </span>
        </span>
      </div>
      <div className="toInputs">
        <input
          type="text"
          placeholder="00:00"
          onChange={onToInputChange}
          value={toInputValue}
          name={name}
        />
        <span className="ampmSwitchTo">
          <span
            className={
              activeToSwitch === "AM"
                ? "blueSwitch leftBorderRadius"
                : "graySwitch leftBorderRadius"
            }
            onClick={() => {setActiveToSwitch("AM"); changeToSwitch('AM'); changeDay(day)}}
          >
            AM
          </span>
          <span
            className={
              activeToSwitch === "PM"
                ? "blueSwitch rightBorderRadius"
                : "graySwitch rightBorderRadius"
            }
            onClick={() => {setActiveToSwitch("PM"); changeToSwitch('PM'); changeDay(day)}}
          >
            PM
          </span>
        </span>
      </div>
      <span className="applyToAllChecked" onClick={applyToAllCheckedHandler}>
        Apply to All Checked
      </span>
    </div>
  );
};

export default EnterTime;
