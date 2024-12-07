import React from "react"
import NavBar from "../../components/eventsManagement/NavBar";

function EventsEventsPage() {
  return (
    <div className="eventsPage">
      <NavBar />
      <div style={{justifyItems:"center",alignItems:"center"}}>
      <h1>List of Events</h1>
      </div>
      <div className="cards">
        <div className="card">
          <h3>title</h3>
          <img src={require("../../images/EventManagement/concert.jpg")} alt="" />
          <p>description</p>
          <p><strong>Details:</strong> details</p>
          <p><strong>Price:</strong>price</p>
          <button >Register</button>
        </div><div className="card">
          <h3>title</h3>
          <img src={require("../../images/EventManagement/party.jpg")} alt="" />
          <p>description</p>
          <p><strong>Details:</strong> details</p>
          <p><strong>Price:</strong>price</p>
          <button >Register</button>
        </div>
        <div className="card">
          <h3>title</h3>
          <img src={require("../../images/EventManagement/camping.jpg")} alt="" />
          <p>description</p>
          <p><strong>Details:</strong> details</p>
          <p><strong>Price:</strong>price</p>
          <button >Register</button>
        </div>
        </div>
    </div>



  );
}

export default EventsEventsPage;
