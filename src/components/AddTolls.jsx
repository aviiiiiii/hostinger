import React from 'react'
import VehicleFareIput from './VehicleFareIput'

function AddTolls({btnAddTollClose,addTollSubmit}) {
  return (
    <div id = 'tollForm' className='add-form'>
        <h2 className='form-header'>Add new entry</h2>
        <button className='add-formClose' onClick={btnAddTollClose}>close</button>
        <form id="formToll" onSubmit={addTollSubmit}>
            <label htmlFor='tollName1'>Toll Name*</label><br/>
            <input type='text' placeholder='Enter toll name' required></input><br/>
            <p>Vehicle fare details</p>
            <table>
            <tbody>
              <VehicleFareIput type='Car/Jeep/Van' tollId='vehicleTypeToll1' singleId='singleJourney1' returnId='returnJourney1' />
              <VehicleFareIput type='LCV' tollId='vehicleTypeToll2' singleId='singleJourney2' returnId='returnJourney2' />
              <VehicleFareIput type='Truck/Bus' tollId='vehicleTypeToll3' singleId='singleJourney3' returnId='returnJourney3' />
              <VehicleFareIput type='Heavy Vehicle' tollId='vehicleTypeToll4' singleId='singleJourney4' returnId='returnJourney4' />
              </tbody>
            </table>
            
            <div className='btn-add'>
                <button type='submit'>Add Entry</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddTolls