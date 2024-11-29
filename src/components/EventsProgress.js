import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./EventsProgress.css";

const EventsProgress = () => {
  return (
    <div className="events-progress">
      <CircularProgressbar value={95} text="95%" />
      <p>Business</p>
    </div>
  );
};

export default EventsProgress;
