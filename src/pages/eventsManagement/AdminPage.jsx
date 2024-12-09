import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";

function EventsAdminPage() {
  const { createNewEvent, notifyOrFetchAttendees, adminLogin, deleteEvent } = useContext(DataContext);
  return (
    <div>
      <NavBar />

      <div id="AdminLogin">
        <div className='EventFeedbackContainer'>
          <h2>Admin Login</h2>
          <form id="createEvent-form" className="form" onSubmit={adminLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <div id="AdminContent" style={{ display: "none" }}>
        <br /><br />
        <div className='taskContainer'>
          <div class="right-column">
            <div className="EventFeedbackContainer">
              <h2>New Event</h2>
              <form id="createEvent-form" className="form" onSubmit={createNewEvent}>
                <div className="form-group">
                  <label htmlFor="eventId">Event Id:</label>
                  <input type="text" id="eventId" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventTitle">Title:</label>
                  <input type="text" id="eventTitle" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventDescription">Desciption:</label>
                  <input type="text" id="eventDescription" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventOrganizer">Organizer:</label>
                  <input type="text" id="eventOrganizer" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Date:</label>
                  <input type="text" id="eventDate" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventTime">Time:</label>
                  <input type="text" id="eventTime" required />
                </div>
                <div className="form-group">
                  <label htmlFor="eventFee">Fee:</label>
                  <input type="text" id="eventFee" required />
                </div>
                <button type="submit">Create Event</button>
              </form>
            </div>
          </div>
          <div class="right-column">
            <div className="EventFeedbackContainer">
              <h2>Notify Attendees</h2>
              <form id="notifyAttendee-form" className="form" onSubmit={notifyOrFetchAttendees}>
                <div className="form-group">
                  <label htmlFor="eventId">Event Id:</label>
                  <input type="text" id="eventId" required />
                </div>

                <div className='buttonGroup'>
                  <button id='notifyAttendees' name='notifyAttendees' type='submit'>Notify Attendees</button>
                  <button id='fetchAttendees' name='fetchAttendees' type='submit'>Fetch Attendees</button>
                </div>
              </form>
            </div>
            <br /><br />
            <div className="EventFeedbackContainer">
              <h2>Delete Event</h2>
              <form id="deleteEvent-form" className="form" onSubmit={deleteEvent}>
                <div className="form-group">
                  <label htmlFor="eventId">Event Id:</label>
                  <input type="text" id="eventId" required />
                </div>
                <button id='deleteEvent' type='submit'>Delete Event</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>



  );
}

export default EventsAdminPage;
