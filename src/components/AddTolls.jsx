import React, { useState } from "react";
import VehicleFareIput from "./VehicleFareIput";

function AddTolls({ btnAddTollClose, addTollSubmit }) {
  // ✅ Add these lines
  const [tollName, setTollName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim and validate
    if (tollName.trim() === "") {
      setError("Toll Name is required");
      return;
    }

    // Clear error and submit
    setError("");
    addTollSubmit(e, tollName);
    setTollName("");
  };

  return (
    <div id="tollForm" className="add-form">
      <h2 className="form-header">Add new entry</h2>
      <button className="add-formClose" onClick={btnAddTollClose}>
        close
      </button>

      {/* ✅ Update form to use handleSubmit */}
      <form id="formToll" onSubmit={handleSubmit}>
        <label htmlFor="tollName1">Toll Name*</label><br />
        
        {/* ✅ Connect input to state */}
        <input
          type="text"
          id="tollName1"
          placeholder="Enter toll name"
          value={tollName}
          onChange={(e) => {
            setTollName(e.target.value);
            setError("");
          }}
        /><br />

        {/* ✅ Show error if validation fails */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>Vehicle fare details</p>
        <table>
          <tbody>
            <VehicleFareIput
              type="Car/Jeep/Van"
              tollId="vehicleTypeToll1"
              singleId="singleJourney1"
              returnId="returnJourney1"
            />
            <VehicleFareIput
              type="LCV"
              tollId="vehicleTypeToll2"
              singleId="singleJourney2"
              returnId="returnJourney2"
            />
            <VehicleFareIput
              type="Truck/Bus"
              tollId="vehicleTypeToll3"
              singleId="singleJourney3"
              returnId="returnJourney3"
            />
            <VehicleFareIput
              type="Heavy Vehicle"
              tollId="vehicleTypeToll4"
              singleId="singleJourney4"
              returnId="returnJourney4"
            />
          </tbody>
        </table>

        <div className="btn-add">
          <button type="submit">Add Entry</button>
        </div>
      </form>
    </div>
  );
}

export default AddTolls;
