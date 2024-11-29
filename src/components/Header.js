import React, { useState, useEffect } from "react";
import "./Header.css";

// Import the profile image from the assets folder
import profileImage from "../assets/HELLODR.jpg";

const Header = () => {
  // State to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState("");

  // Function to update the current date and time
  const updateDateTime = () => {
    const now = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const dateTimeString = now.toLocaleDateString("en-US", options);
    setCurrentDateTime(dateTimeString);
  };

  // Update the date and time every second
  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000); // Update every second
    updateDateTime(); // Initial call to set the date and time

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div className="header">
      <div className="greeting">
        <h2>Good Day, Dr. Nicholls!</h2>
        <p>Have a Nice Monday!</p>
      </div>
      <div className="profile">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="date-time">
        <p>{currentDateTime}</p>
      </div>
    </div>
  );
};

export default Header;
