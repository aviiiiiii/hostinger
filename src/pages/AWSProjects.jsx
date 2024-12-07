import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react"
import DataContext from "../contexts/DataContext"


function AWSProjects() {

  const {} = useContext(DataContext);

  return (
    <div className="Homepage">
      <p className="Homepage-title">AWS Projects</p>
          <ul className="Homepage-items">
            <li>
              {" "}
              <a href="/teamTaskManagementBlog">Team Task Management</a>
            </li>
            <li>
              {" "}
              <a href="/tollList">TollList</a>
            </li>
            <li>
              {" "}
              <a href="/vehicleLogs">VehicleLogs</a>
            </li>
            <li>
              {" "}
              <a href="/eventsManagement">Events Management</a>
            </li>
            <li>
              {" "}
              <a href="/teamTaskManagement">Team Task Management</a>
            </li>
          </ul>
      </div>
  );
}

export default AWSProjects;
