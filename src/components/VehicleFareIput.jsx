function VehicleFareIput({tollId,singleId,returnId,type}) {
  return (
    <tr>
        <td>
            <select id={tollId} name={tollId} required>
            <option value="" disabled selected>Select Vehicle Type</option>
            <option value='Car/Jeep/Van'>Car/Jeep/Van</option>
            <option value='LCV'>LCV</option>
            <option value='Truck/Bus'>Truck/Bus</option>
            <option value='Heavy Vehicle'>Heavy Vehicle</option>
            </select>
        </td>
        {/* <td>{type}</td> */}
        <td><input type='number' name={singleId} placeholder='Single Journey' required></input></td>
        <td><input type='number' name={returnId} placeholder='Return Journey' required></input></td>
    </tr>
  )
}

export default VehicleFareIput