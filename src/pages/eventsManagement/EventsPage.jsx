import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";
import EventCard from "../../components/eventsManagement/EventCard";

function EventsEventsPage() {
  const { events, registerPopUp, togglePopup } = useContext(DataContext);
  return (
    <div className="eventsPage">
      <NavBar />
      <div id="popupOverlay" className="overlay-container ">
        <div className="popup-box">
          <div className="EventFeedbackContainer">
            <h2>Register</h2>
            <form id="feedback-form" className="form" onSubmit={registerPopUp}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required placeholder="Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="id">Id:</label>
                <input type="text" id="id" required placeholder="AttendeeId"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" required placeholder="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phont" required placeholder="Phone"/>
              </div>
              <div className='buttonGroup'>
                  <button id='register' name='register' type='submit'>Register</button>
                  <button id='close' name='close' onClick={togglePopup}>Close</button>
                </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ justifyItems: "center", alignItems: "center" }}>
        <h1>List of Events</h1>
      </div>
      <div className="cards">
        {events.map((item) => (
          <EventCard Item={item} togglePopup={togglePopup} />
        ))}
      </div>
    </div>



  );
}

export default EventsEventsPage;
