import React from "react";
import "./PlansProgress.css";

const PlansProgress = () => {
  return (
    <div className="plans-progress">
      <div>
        <label>Consultations</label>
        <div className="progress">
          <div className="progress-bar consultations-progress" style={{ width: "64%" }}></div>
        </div>
      </div>
      <div>
        <label>Laboratory</label>
        <div className="progress">
          <div className="progress-bar laboratory-progress" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div>
        <label>Meetings</label>
        <div className="progress">
          <div className="progress-bar meetings-progress" style={{ width: "33%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PlansProgress;
