import React, { useState } from "react";
import "./AddLocations.scss";
import Backdrop from "../../common/Backdrop/Backdrop";
import Button from "../../common/CustomButton/CustomButton";
import Input from "../../common/CustomInput/CustomInput";
import Select from "../../common/CustomSelect/CustomSelect";
import db from "../../db";

const AddLocations = (props) => {
  let {
    onClickCancel,
    onClickLocationTimes,
    addedLocations,
    formInputs,
    formFields,
  } = props;

  const [fieldErrors, setFieldErrors] = useState({});

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (validate()) {
      let locationsArray = await db.locations.toArray();
      if (
        locationsArray.filter(
          (location) => location.locationName === formInputs.locationName
        ).length === 0
      ) {
        db.locations.add(formInputs).then(async () => {
          let allLocations = await db.locations.toArray();
          addedLocations(allLocations);
        });
      } else {
        db.locations.update(formInputs.id, formInputs).then(async () => {
          let allLocations = await db.locations.toArray();
          addedLocations(allLocations);
        });
      }
      onClickCancel();
    }
  };

  const inputChangeHandler = (e) => {
    setFieldErrors({});
    formFields({ ...formInputs, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let { zipCode, phoneNumber } = formInputs;
    let error = {};
    let status = true;
    if (
      zipCode &&
      zipCode.trim() !== "" &&
      !zipCode.match(/^(?=.*\d.*)[A-Za-z0-9]{3,10}$/)
    ) {
      status = false;
      error = {
        ...error,
        zipCode: "Please enter valid Zipcode (alphanumeric 5-10 chars)",
      };
    } else if (
      phoneNumber &&
      !phoneNumber.match(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)
    ) {
      status = false;
      error = {
        ...error,
        phoneNumber: "Please enter valid US phone number format",
      };
    }
    setFieldErrors(error);
    return status;
  };

  return (
    <Backdrop className="addLocation-backdrop">
      <form onSubmit={formSubmitHandler} autoComplete="off">
        <p className="heading">Add Locations</p>
        <label htmlFor="locationName">Location Name</label>
        <Input
          id="locationName"
          name="locationName"
          value={formInputs.locationName}
          onInputChange={inputChangeHandler}
          required= {true}
        />
        <div className="addLocation-row2">
          <div>
            <label htmlFor="address_1">Address Line 1</label>
            <Input
              id="address_1"
              name="address_1"
              value={formInputs.address_1}
              onInputChange={inputChangeHandler}
              required= {true}
            />
          </div>
          <div>
            <label htmlFor="suiteNo">Suite No</label>
            <Input
              id="suiteNo"
              name="suiteNo"
              value={formInputs.suiteNo}
              onInputChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="addLocation-row3">
          <div>
            <label htmlFor="address_2">Address Line 2</label>
            <Input
              id="address_2"
              name="address_2"
              value={formInputs.address_2}
              onInputChange={inputChangeHandler}
            />
          </div>
          <div className="cityAndStateInput">
            <div>
              <label htmlFor="city">City</label>
              <Input
                id="city"
                name="city"
                value={formInputs.city}
                onInputChange={inputChangeHandler}
              />
            </div>
            <div>
              <label>State</label>
              <Select
                name="state"
                onSelectChange={inputChangeHandler}
                value={formInputs.state}
              >
                <option hidden value=""></option>
                <option value="Florida">Florida</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Colorado">Colorado</option>
                <option value="Virginia">Virginia</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="addLocation-row4">
          <div className="zipAndPhoneInput">
            <div>
              <label htmlFor="zipCode">Zip Code</label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formInputs.zipCode}
                onInputChange={inputChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formInputs.phoneNumber}
                onInputChange={inputChangeHandler}
                required={true}
                placeholder="(123) 123-1234"
              />
            </div>
          </div>
          <div>
            <label>Time Zone</label>
            <Select
              name="timeZone"
              onSelectChange={inputChangeHandler}
              value={formInputs.timeZone}
            >
              <option hidden value=""></option>
              <option value="Chicago (GMT-5)">Chicago (GMT-5)</option>
              <option value="Denver (GMT-6)">Denver (GMT-6)</option>
              <option value="Phoenix (GMT-7)">Phoenix (GMT-7)</option>
              <option value="Los Angeles (GMT-7)">Los Angeles (GMT-7)</option>
              <option value="Anchorage (GMT-8)">Anchorage (GMT-8)</option>
              <option value="Honolulu (GMT-10)">Honolulu (GMT-10)</option>
            </Select>
          </div>
        </div>
        <div className="addLocation-row5">
          <div>
            <label htmlFor="facilityTimes">Facility Times</label>
            <Input id="facilityTimes" onClickHandler={onClickLocationTimes} />
          </div>
          <div>
            <label htmlFor="appointmentPool">Appointment Pool</label>
            <Input
              id="appointmentPool"
              name="appointmentPool"
              value={formInputs.appointmentPool}
              onInputChange = {inputChangeHandler}
            />
          </div>
        </div>
        {fieldErrors["zipCode"] && (
          <p className="error">&nbsp;{fieldErrors["zipCode"]}</p>
        )}
        {fieldErrors["phoneNumber"] && (
          <p className="error">&nbsp;{fieldErrors["phoneNumber"]}</p>
        )}
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
  );
};

export default AddLocations;
