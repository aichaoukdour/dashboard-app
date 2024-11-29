import React from "react";
import "./Widget.css";
const Widget = ({ title, value, description }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{description}</span>
      
      
    </div>
  );
};

export default Widget;
