import React from "react"
import NavBar from "../../components/eventsManagement/NavBar";

function EventsFeedbackPage() {
  return (
    <div>
      <NavBar />
      <h2>Please provide your valuable Feedback</h2>
      <form id="feedback-form">
          <label for="feedback-event-id">Event ID:</label>
          <input type="text" id="feedback-event-id" name="feedback-event-id" required/><br/>
          <label for="feedback-rating">Rating (1-5):</label>
          <input type="number" id="feedback-rating" name="feedback-rating" min="1" max="5" required/><br/>
          <label for="feedback-comments">Comments:</label>
          <textarea id="feedback-comments" name="feedback-comments"></textarea><br/>
          <button type="submit">Submit Feedback</button>
          </form>
      <br/><br/>
      <h3>Feedbacks</h3>
    </div>



  );
}

export default EventsFeedbackPage;
