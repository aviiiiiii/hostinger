import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";
import EventCard from "../../components/eventsManagement/EventCard";

function EventsEventsPage() {
  const { events } = useContext(DataContext);
  return (
    <div className="eventsPage">
      <NavBar />
      <div style={{justifyItems:"center",alignItems:"center"}}>
      <h1>List of Events</h1>
      </div>
      <div className="cards">
      {events.map((item) => (
            <EventCard Item={item} />
          ))}
        </div>
    </div>



  );
}

export default EventsEventsPage;
