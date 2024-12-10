import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import AttendeesRow from "./AttendeesRow";

function AttendeesCard() {
  const { attendees, hide_attendeesTable } = useContext(DataContext);
  return (
    <div className="attendees-overlay-container">
      <div className="popup-box">
        <div className="AttendeesContainer">
          <h2>AttendeeList</h2>
          <table className="feedbacks-table">
            <tr>
              <th>AttendeeId</th>
              <th>EventId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {attendees.map((item) => (
            <AttendeesRow attendee={item} />
          ))}
          </table>
          <div className="EventFeedbackContainer">
          <button onClick={hide_attendeesTable}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendeesCard;
