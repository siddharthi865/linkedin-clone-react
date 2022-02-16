import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Siddharth Sunariya</h2>
        <h4>siddharthi865@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">3,567</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">1,345</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
