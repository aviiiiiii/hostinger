import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";

function EventsAdminPage() {
  const { createNewEvent, notifyAttendees } = useContext(DataContext);
  return (
    <div>
      <NavBar />
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
        <button type="submit">Create Event</button>
      </form>
    </div>
      </div>
      <div class="right-column"> 
      <div className="EventFeedbackContainer">
      <h2>Notify Attendees</h2>
      <form id="createEvent-form" className="form" onSubmit={notifyAttendees}>
        <div className="form-group">
          <label htmlFor="eventId">Event Id:</label>
          <input type="text" id="eventId" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="eventTitle">Title:</label>
          <input type="text" id="eventTitle" required />
        </div>
        <div className='buttonGroup'>
            <button id='notifyAttendees' name ='filter' type='submit'>Notify Attendees</button>
            <button id='fetchAttendees' name ='fetchAttendees' type='submit'>Fetch Attendees</button>     
            </div>
      </form>
    </div>
      </div>
      </div>  
      
    </div>



  );
}

export default EventsAdminPage;
