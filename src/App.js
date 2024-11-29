import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Widget from "./components/Widget";
import EventsProgress from "./components/EventsProgress";
import ProfileCalendar from "./components/ProfileCalendar";
import PlansProgress from "./components/PlansProgress";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      {/* Sidebar positioned first */}
      <Sidebar />
      
      {/* Main content below the sidebar */}
      <div className="main-content">
        <Header />
        
        {/* Container for widgets displayed horizontally */}
        <div className="widgets-container">
          <Widget
            title="Offline Work"
            value="27 Patients"
            description="+4% from average"
            
          />
          <Widget
            title="Online Work"
            value="9 Consultations"
            description="+2% from average"
            
          />
          <Widget
            title="Laboratory Work"
            value="19 Analyses"
            description="+6% from average"
           
          />
        </div>
        
        {/* Lower section for other components */}
        <div className="lower-section">
          <EventsProgress /> <PlansProgress />
          </div>
          <ProfileCalendar/>
      </div>
    </div>
  );
};

export default App;
