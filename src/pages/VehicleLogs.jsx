import { useContext } from "react"
import { Link } from "react-router-dom"
import AddTolls from "../components/AddTolls"
import AddVehicle from "../components/AddVehicle"
import Header from "../components/Header"
import TableRow1 from "../components/TableRow1"
import DataContext from "../contexts/DataContext"
import {FaFilter} from 'react-icons/fa'

function VehicleLogs() {

  const {clickFilter,filterWithVehicleName,addVehicleSubmit,calculateTariff,addTollSubmit,vehicleList,tollList,settollList,btnAddTollClose,btnAddVehicleClose,btnAddVehicle,btnAddToll,btnViewToll} = useContext(DataContext);
  
  return (
    <>
      <Header />
      <div className="topnav">
        <h2>Toll entries/Vehicle entries</h2>
        <div>
          <button id="filterBlockButton"  className="btn-filter" onClick={()=>{
            document.getElementById("dropdown_id").style.display="block";
          }}><FaFilter /></button>
          <div className="dropdown-content" id="dropdown_id">
          <button id="All" onClick={clickFilter}>All</button><br/>
          {tollList.map((toll)=>{
            return <><button key={toll.name} id={toll.name} onClick={clickFilter}>{toll.name}</button><br /></>
          })}
          </div>  
        </div>
        
        <table className="search-box">
        <tbody>
          <tr>
          <td><input type='text' name='searchValue' id='searchValue' placeholder="Search Vehicle" onChange={filterWithVehicleName}></input></td>
          </tr>
          </tbody>
        </table>
        <div className="topnav-right">
        <button onClick={btnAddVehicle}>Add Vehicle Entry</button>
        <button onClick={btnAddToll}>Add New Tolls</button>
        <Link to="/tollList"><button onClick={btnViewToll}>View All Tolls</button></Link>
        
        </div>
      </div>  
      <table className="table-vehicle">
        <thead>
          <tr>
            <th>Vehicle Type</th><th>Vehicle Number</th><th>Date/Time</th><th>Toll Name</th><th>Tariff</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList.map((log)=>(
            <TableRow1 key={log.date} log={log}/>
            ))}
        </tbody>
      </table>
      <AddVehicle btnAddVehicleClose={btnAddVehicleClose} tollList={tollList} addVehicleSubmit={addVehicleSubmit} calculateTariff={calculateTariff}/>
      <AddTolls btnAddTollClose={btnAddTollClose} addTollSubmit={addTollSubmit} />
    </>
    )
}

export default VehicleLogs