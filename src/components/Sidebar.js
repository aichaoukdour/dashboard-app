import React, { useState } from "react";
import { FaHome, FaEnvelope, FaCalendar, FaUser, FaBars } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Toggle Button */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Logo */}
      <div className="logo">{isCollapsed ? "M" : "Medcare"}</div>

      {/* Navigation Items */}
      <ul>
        <li>
          <FaHome />
          {!isCollapsed && <span>Home</span>}
        </li>
        <li>
          <FaEnvelope />
          {!isCollapsed && <span>Messages</span>}
        </li>
        <li>
          <FaCalendar />
          {!isCollapsed && <span>Calendar</span>}
        </li>
        <li>
          <FaUser />
          {!isCollapsed && <span>Profile</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
