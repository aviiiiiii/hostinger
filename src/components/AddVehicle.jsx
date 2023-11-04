import React from 'react'

function AddVehicle({btnAddVehicleClose,tollList, calculateTariff,addVehicleSubmit}) {
  return (
    <div id = 'vehicleForm' className='add-form'>
        <h2 className='form-header'>Add new entry</h2>
        <button className='add-formClose' onClick={btnAddVehicleClose}>close</button>
        <form id="formVehicle" onSubmit={addVehicleSubmit}>
            <label htmlFor='tollName' >Select Toll Name*</label><br/>
            <select id='tollName' name='tollName' onChange={calculateTariff}>
                {tollList.map((toll)=>{
                    return <option key= {toll.name} value={toll.name}>{toll.name}</option>    
                })}
            </select><br/>
            <label htmlFor='vehicleType'>Select Vehicle Type*</label><br/>
            <select id='vehicleType' name='vehicleType' onChange={calculateTariff}>
                <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
                <option value='LCV'>LCV</option>
                <option value='Truck/Bus'>Truck/Bus</option>
                <option value='Heavy Vehicle'>Heavy Vehicle</option>
            </select><br/>
            <label htmlFor='vehicleNumber'>Vehicle Number*</label><br/>
            <input type='text' name='vehicleNumber' id='vehicleNumber' onChange={calculateTariff} required></input><br/>
            <label htmlFor='Tariff'>Tariff*</label><br/>
            <input type='number' id='Tariff' disabled></input><br/>
            <div className='btn-add'>
                <button type='submit'>Add Entry</button>
            </div>
            
        </form>
    </div>
  ) 
}

export default AddVehicle