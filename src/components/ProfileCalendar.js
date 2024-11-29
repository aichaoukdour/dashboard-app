import React from 'react';
import './ProfileCalendar.css';
// Import the profile image from the assets folder
import profileImage from "../assets/HELLODR.jpg";

const ProfileCalendar = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        
            <div className="profile-info-containe1r">
          <h2>Dr. Alisha Nicholls</h2>
          <p>Dermatologist</p>
          <p>Bostop, Germany</p>
        </div>
        </div>   
        
        
        <div className="profile-info-container">
          <div className="info-card">
            <p className="birthdate">Date of Birth: 17.07.86</p>
          </div>
          <div className="info-card">
            <p className="blood">Blood Type: A(B) Rh+</p>
          </div>
          <div className="info-card">
            <p className="working-hours">Working Hours: 9pm - 5am</p>
          </div>
        
      
        </div>
      <div className="calendar-section">
        <div className="calendar-header">
          <h3>My Calendar</h3>
          <select className="calendar-month">
            <option>April</option>
            <option>May</option>
            <option>June</option>
          </select>
        </div>
        <div className="calendar-days">
          <button className="day">12</button>
          <button className="day active">13</button>
          <button className="day">14</button>
          <button className="day">15</button>
          <button className="day">16</button>
          <button className="day">17</button>
          <button className="day">18</button>
        </div>
        <div className="appointments">
          <h4>April 13</h4>
          <div className="appointment-item">
            <p>2:00 pm - Meeting with chief physician Dr. Williams</p>
          </div>
          <div className="appointment-item">
            <p>3:00 pm - Consultation with Mr. White</p>
          </div>
          <div className="appointment-item">
            <p>4:30 pm - Consultation with Mrs. Maisy</p>
          </div>
          <div className="appointment-item">
            <p>5:30 pm - Examination of Mrs. Lee's freckles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCalendar;
