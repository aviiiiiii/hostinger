import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";
import EventCard from "../../components/eventsManagement/EventCard";

function EventsEventsPage() {
  const { events, togglePopup } = useContext(DataContext);
  return (
    <div className="eventsPage">
      <NavBar />
      <div id="popupOverlay" className="overlay-container">
        <div className="popup-box">
            <h2>Popup Form</h2>
            <form className="form-container">
                <label className="form-label" htmlFor="name">Username: </label>
                <input className="form-input" type="text" placeholder="Enter Your Username" id="name" name="name" required />
                <input className="form-input" type="text" placeholder="Enter Your Username" id="name" name="name" required />
                <button className="btn-submit" type="submit"> Submit </button>
            </form>
            <button class="btn-close-popup" onClick={togglePopup}> Close </button>
        </div>
    </div>
      <div style={{justifyItems:"center",alignItems:"center"}}>
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
