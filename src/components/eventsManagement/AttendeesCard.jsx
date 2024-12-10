import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";

function AttendeesCard() {
  const {} = useContext(DataContext);
  return (
    <div className="attendees-overlay-container">
        <div className="popup-box">
          <div className="AttendeesContainer">
            <h2>AttendeeList</h2>
            <table>
              <tr>
      <th>AttendeeId</th>
      <th>EventId</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </th>
              <tr>
      <td>1</td>
      <td>1</td>
      <td>Avi</td>
      <td>avi@a.com</td>
      <td>7778889990</td>
    </tr>
            </table>
          </div>
        </div>
      </div>
  );
}

export default AttendeesCard;
