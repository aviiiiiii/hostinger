import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";
import LoadingPage from "../../components/LoadingPage";

function EventsFeedbackPage() {
  const { submitFeedback } = useContext(DataContext);
  return (
    <div>
      <NavBar />
      <LoadingPage id="feedbackPageLoading" />
      <div className="EventFeedbackContainer">
      <h2>Please provide your Feedback</h2>
      <form id="feedback-form" className="form" onSubmit={submitFeedback}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="eventId">Event Id:</label>
          <input type="text" id="eventId" required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" required min="1" max="5"/>
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
