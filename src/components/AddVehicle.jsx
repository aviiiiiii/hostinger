import React, { useState } from 'react'

function AddVehicle({ btnAddVehicleClose, tollList, calculateTariff, addVehicleSubmit }) {

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (vehicleNumber.trim() === "") {
      setError("Vehicle Number is required");
      return;
    }

   
    setError("");
    addVehicleSubmit(e);
    setVehicleNumber("");
  };

  return (
    <div id='vehicleForm' className='add-form'>
      <h2 className='form-header'>Add new entry</h2>
      <button className='add-formClose' onClick={btnAddVehicleClose}>close</button>

      
      <form id="formVehicle" onSubmit={handleSubmit}>
        <label htmlFor='tollName'>Select Toll Name*</label>

        <select id='tollName' name='tollName' onChange={calculateTariff}>
          {tollList.map((toll) => {
            return <option key={toll.name} value={toll.name}>{toll.name}</option>
          })}
        </select>


        <label htmlFor='vehicleType'>Select Vehicle Type*</label>

        <select id='vehicleType' name='vehicleType' onChange={calculateTariff}>
          <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
          <option value='LCV'>LCV</option>
          <option value='Truck/Bus'>Truck/Bus</option>
          <option value='Heavy Vehicle'>Heavy Vehicle</option>
        </select>


        <label htmlFor='vehicleNumber'>Vehicle Number*</label>

        <input
          type='text'
          name='vehicleNumber'
          id='vehicleNumber'
          value={vehicleNumber}
          onChange={(e) => {
            setVehicleNumber(e.target.value);
            setError("");
            calculateTariff(e);
          }}
        />
       
        {error && <p style={{ color: "red" }}>{error}</p>}

        

        <label htmlFor='Tariff'>Tariff*</label>

        <input type='number' id='Tariff' disabled></input>

        <div className='btn-add'>
          <button type='submit'>Add Entry</button>
        </div>
      </form>
    </div>
  )
}

export default AddVehicle
 