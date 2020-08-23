import React, { useState, useEffect } from "react";
import "./App.scss";
import NoLocationScreen from "./components/NoLocation/NoLocation";
import AddLocationsScreen from "./components/AddLocations/AddLocations";
import LocationTimesScreen from "./components/LocationTimes/LocationTimes";
import LocationList from "./components/LocationList/LocationList";
import db from "./db";

const App = () => {
  const [addLocationPopup, setAddLocationPopup] = useState(false);
  const [showLocationTimesPopup, setShowLocationTimesPopup] = useState(false);
  const [formInputs, setFormInputs] = useState({});

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

  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      let totalAddedLocations = await db.locations.toArray();
      setAllLocations(totalAddedLocations);
    };
    getLocations();
  }, []);

  const addLocationButtonClickHandler = () => {
    setAddLocationPopup(true);
  };

  const addLocationCancelButtonClickHandler = () => {
    setFormInputs({})
    setAddLocationPopup(false);
  };

  const locationTimesPopupOpenHandler = () => {
    setShowLocationTimesPopup(true);
  };

  const locationTimesCancelButtonClickHandler = () => {
    setShowLocationTimesPopup(false);
  };

  const locationTimesSaveButtonClickHandler = () => {
    setShowLocationTimesPopup(false);
  };

  const screenToDisplay = () => {
    let data;
    if (addLocationPopup) {
      if (showLocationTimesPopup) {
        data = (
          <LocationTimesScreen
            onClickCancel={locationTimesCancelButtonClickHandler}
            onClickSave={locationTimesSaveButtonClickHandler}
          />
        );
      } else {
        data = (
          <AddLocationsScreen
            onClickCancel={addLocationCancelButtonClickHandler}
            onClickLocationTimes={locationTimesPopupOpenHandler}
            addedLocations={(data) => setAllLocations(data)}
            formFields={(data) => setFormInputs(data)}
            formInputs={formInputs}
          />
        );
      }
    } else {
      if (allLocations.length !== 0) {
        data = (
          <LocationList
            deleteLocation={(data) => setAllLocations(data)}
            openLocationEditPopup={addLocationButtonClickHandler}
            formFields={(data) => setFormInputs(data)}
          />
        );
      } else {
        data = <NoLocationScreen />;
      }
    }
    return data;
  };

  return (
    <div
      className="landing-page-container"
      style={{ background: showLocationTimesPopup && "#808080b8" }}
    >
      <div className="landing-page-headContainer">
        <div className="locationsText">Locations</div>
        <div>
          <button
            onClick={addLocationButtonClickHandler}
            className="addLocation-button"
          >
            {" "}
            + Add Location
          </button>
        </div>
      </div>
      {screenToDisplay()}
    </div>
  );
};

export default App;
