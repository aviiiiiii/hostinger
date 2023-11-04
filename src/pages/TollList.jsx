import { useContext } from "react";
import { Link } from "react-router-dom";
import AddTolls from "../components/AddTolls";
import AddVehicle from "../components/AddVehicle";
import Header from "../components/Header";
import TableRow2 from "../components/TableRow2";
import DataContext from "../contexts/DataContext";

function TollList() {
  const {
    deleteToll,
    filterWithTollName,
    addTollSubmit,
    tollList,
    calculateTariff,
    btnAddTollClose,
    btnAddVehicleClose,
    btnAddVehicle,
    btnAddToll,
    btnViewToll,
    addVehicleSubmit,
  } = useContext(DataContext);

  return (
    <>
      <Header />
      <div className="topnav">
        <h2>Tollgate List</h2>
        <table className="search-box">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="searchToll"
                  placeholder="Search a toll"
                  onChange={filterWithTollName}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="topnav-right">
          <button onClick={btnAddVehicle}>Add Vehicle Entry</button>
          <button onClick={btnAddToll}>Add New Tolls</button>
          <Link to="/vehicleLogs">
            <button onClick={btnViewToll}>Back To Vehicle Logs</button>
          </Link>
        </div>
      </div>
      <table className="table-vehicle">
        <thead>
          <tr>
            <th>Toll Name</th>
            <th>Car/Jeep/Van</th>
            <th>LCV</th>
            <th>Truck/Bus</th>
            <th>Heavy Vehicle</th>
          </tr>
        </thead>
        <tbody>
          {tollList.map((log) => (
            <TableRow2 key={log.name} log={log} />
          ))}
        </tbody>
      </table>
      <AddVehicle
        btnAddVehicleClose={btnAddVehicleClose}
        tollList={tollList}
        addVehicleSubmit={addVehicleSubmit}
        calculateTariff={calculateTariff}
      />
      <AddTolls
        btnAddTollClose={btnAddTollClose}
        addTollSubmit={addTollSubmit}
      />

      <div id="deleteDiv">
        <select id="deleteSelect">
          {tollList.map((toll) => (
            <option key={toll.name} value={toll.name} id={toll.name}>
              {toll.name}
            </option>
          ))}
        </select>
        <button id="deleteToll" onClick={deleteToll}>
          delete Toll
        </button>
      </div>
    </>
  );
}

export default TollList;
