import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import AttendeesRow from "./AttendeesRow";
import FeedbacksRow from "./FeedbacksRow";

function FeedbacksCard() {
  const { feedbacks, hide_feedbacksTable } = useContext(DataContext);
  return (
    <div className="feedbacks-overlay-container">
      <div className="popup-box">
        <div className="AttendeesContainer">
          <h2>AttendeeList</h2>
          <table className="attendees-table">
            <tr>
              <th>EventId</th>
              <th>Attendee</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
            {feedbacks.map((item) => (
            <FeedbacksRow feedback={item} />
          ))}
          </table>
          <div className="EventFeedbackContainer">
          <button onClick={hide_feedbacksTable}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbacksCard;
