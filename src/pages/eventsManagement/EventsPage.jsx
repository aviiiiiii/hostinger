import React, { useContext } from "react";
import NavBar from "../../components/eventsManagement/NavBar";
import DataContext from "../../contexts/DataContext";

function EventsEventsPage() {
  const {  } = useContext(DataContext);
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
          <p><strong>Date:</strong> date</p>
          <p><strong>Time:</strong>time</p>
          <p><strong>Price:</strong>price</p>
          <button >Register</button>
        </div><div className="card">
          <h3>title</h3>
          <img src={require("../../images/EventManagement/party.jpg")} alt="" />
          <p>description</p>
          <p><strong>Date:</strong> date</p>
          <p><strong>Time:</strong> time</p>
          <p><strong>Price:</strong> price</p>
          <button >Register</button>
        </div>
        <div className="card">
          <h3>title</h3>
          <img src={require("../../images/EventManagement/camping.jpg")} alt="" />
          <p>description</p>
          <p><strong>Date:</strong> date</p>
          <p><strong>Time:</strong>time</p>
          <p><strong>Price:</strong>price</p>
          <button >Register</button>
        </div>
        </div>
    </div>



  );
}

export default EventsEventsPage;
