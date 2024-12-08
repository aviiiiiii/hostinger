import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";

function EventsFeedbackPage() {
  const { submitFeedback } = useContext(DataContext);
  return (
    <div>
      <NavBar />
      <div className="EventFeedbackContainer">
      <h2>Please provide your Feedback</h2>
      <form id="feedback-form" className="form" onSubmit={submitFeedback}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <input type="text" id="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>



  );
}

export default EventsFeedbackPage;
