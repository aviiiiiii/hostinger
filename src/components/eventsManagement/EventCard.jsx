import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";

function EventCard({ Item }) {
  const { deleteOneTransaction } = useContext(DataContext);
    let title = Item.Title;
  return (
    <div className="card">
          <h3>{Item.Title}</h3>
          {/* <img src={require("../../images/EventManagement/concert.jpg")} alt={title} /> */}
          <p>{Item.Description}</p>
          <p><strong>Date:</strong> {Item.Date}</p>
          <p><strong>Time:</strong> {Item.Time}</p>
          <p><strong>Organizer:</strong> {Item.Organizer}</p>
          <p><strong>Fee:</strong> {Item.Fee}</p>
          <button id={Item.EventId} name={Item.EventId}>Register</button>
        </div>
  );
}

export default EventCard;



