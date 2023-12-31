import { useState } from "react";
import { getEvents } from "../api";
import mockData from "../mock-data";
import moment from "moment";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{moment(event.created).format("MMM Do YY")}</p>
      <p>{event.location}</p>
      <button
        className="details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          <p>Event status: {event.status}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
