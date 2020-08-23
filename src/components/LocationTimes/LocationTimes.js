import React, { useState, useEffect } from "react";
import "./LocationTimes.scss";
import Backdrop from "../../common/Backdrop/Backdrop";
import TimeRow from "../../common/EnterTime/EnterTime";
import Button from "../../common/CustomButton/CustomButton";

const LocationTimes = (props) => {
  let { onClickCancel, onClickSave } = props;

  const [timingValues, setTimingValues] = useState({
    Sun: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
    Mon: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
    Tue: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
    Wed: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
    Thr: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
    Fri: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
    Sat: {
      checked: "off",
      fromTime: "00:00",
      fromUnit: "AM",
      toTime: "00:00",
      toUnit: "PM",
    },
  });

  const [fromSwitchState, setFromSwitchState] = useState("AM");
  const [toSwitchState, setToSwitchState] = useState("PM");
  const [day, setDay] = useState("Sun");

  const locationTimesFormSubmitHandler = (e) => {
    e.preventDefault();
    onClickSave();
  };

  const fromInputChangeHandler = (e) => {
    setTimingValues({
      ...timingValues,
      [e.target.name]: {
        checked: timingValues[e.target.name].checked,
        fromTime: e.target.value,
        fromUnit: timingValues[e.target.name].fromUnit,
        toTime: timingValues[e.target.name].toTime,
        toUnit: timingValues[e.target.name].toUnit,
      },
    });
  };

  const toInputChangeHandler = (e) => {
    setTimingValues({
      ...timingValues,
      [e.target.name]: {
        checked: timingValues[e.target.name].checked,
        fromTime: timingValues[e.target.name].fromTime,
        fromUnit: timingValues[e.target.name].fromUnit,
        toTime: e.target.value,
        toUnit: timingValues[e.target.name].toUnit,
      },
    });
  };

  const checkboxChangeHandler = (e) => {
    setTimingValues({
      ...timingValues,
      [e.target.name]: {
        checked: e.target.value,
        fromTime: timingValues[e.target.name].fromTime,
        fromUnit: timingValues[e.target.name].fromUnit,
        toTime: timingValues[e.target.name].toTime,
        toUnit: timingValues[e.target.name].toUnit,
      },
    });
  };

  useEffect(() => {
    setTimingValues({
      ...timingValues,
      [day]: {
        checked: timingValues[day].checked,
        fromTime: timingValues[day].fromTime,
        fromUnit: fromSwitchState,
        toTime: timingValues[day].toTime,
        toUnit: toSwitchState,
      },
    });
  }, [fromSwitchState, toSwitchState, day]);


  return (
    <div className="locationTimes-pageContainer">
      <Backdrop className="locationTimes-backdrop">
        <form onSubmit={locationTimesFormSubmitHandler}>
          <p className="heading">Facility Times</p>
          <div className="fromAndToHeading">
            <div></div>
            <div>From</div>
            <div>To</div>
            <div></div>
          </div>
          <TimeRow
            day="Sun"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Sun"
            fromInputValue={timingValues.Sun.fromTime}
            toInputValue={timingValues.Sun.toTime}
            checkboxValue={timingValues.Sun.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <TimeRow
            day="Mon"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Mon"
            fromInputValue={timingValues.Mon.fromTime}
            toInputValue={timingValues.Mon.toTime}
            checkboxValue={timingValues.Mon.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <TimeRow
            day="Tue"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Tue"
            fromInputValue={timingValues.Tue.fromTime}
            toInputValue={timingValues.Tue.toTime}
            checkboxValue={timingValues.Tue.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <TimeRow
            day="Wed"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Wed"
            fromInputValue={timingValues.Wed.fromTime}
            toInputValue={timingValues.Wed.toTime}
            checkboxValue={timingValues.Wed.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <TimeRow
            day="Thr"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Thr"
            fromInputValue={timingValues.Thr.fromTime}
            toInputValue={timingValues.Thr.toTime}
            checkboxValue={timingValues.Thr.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <TimeRow
            day="Fri"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Fri"
            fromInputValue={timingValues.Fri.fromTime}
            toInputValue={timingValues.Fri.toTime}
            checkboxValue={timingValues.Fri.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <TimeRow
            day="Sat"
            onFromInputChange={fromInputChangeHandler}
            onToInputChange={toInputChangeHandler}
            onCheckboxChange={checkboxChangeHandler}
            name="Sat"
            fromInputValue={timingValues.Sat.fromTime}
            toInputValue={timingValues.Sat.toTime}
            checkboxValue={timingValues.Sat.checked}
            changeFromSwitch={(data) => setFromSwitchState(data)}
            changeToSwitch={(data) => setToSwitchState(data)}
            changeDay={(day) => setDay(day)}
          />
          <div className="buttonPair">
            <Button
              type="reset"
              value="Cancel"
              background="red"
              marginRight="15px"
              onClickButton={onClickCancel}
            />
            <Button type="submit" value="Save" background="#15466f" />
          </div>
        </form>
      </Backdrop>
    </div>
  );
};

export default LocationTimes;
