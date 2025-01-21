import React, { useState } from "react";
import Search from "./Search";
import ConnectionCard from "../Cards/ConnectionCard";
import "../../Styles/Dashboard.css";
import PostCard from "../Cards/PostCard";

const Dashboard = ({ onLogout }) => {
  const [activePage, setActivePage] = useState("home");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Track if the search modal is open

  const handleHomeClick = () => {
    setActivePage("home");
  };
  const handleNotificationClick = () => {
    setActivePage("notification");
  };
  const handleMessagesClick = () => {
    setActivePage("message");
    setIsSearchOpen(true);
  };
  const handleProfileClick = () => {
    setActivePage("profile");
    setIsSearchOpen(true);
  };
  const handleSettingClick = () => {
    setActivePage("setting");
  };
  const handleSearchClick = () => {
    setActivePage("search");
    setIsSearchOpen(true); // Open the search modal
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false); // Close the search modal
  };

  return (
    <div className="dashboard-container">
      <div className="dashsidebar">
        <h1 className="name">Connectify</h1>
        <ul type="none">
          <li
            onClick={handleHomeClick}
            className={activePage === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            className={activePage === "search" ? "active" : ""}
            onClick={handleSearchClick}
          >
            Search
          </li>
          <li
            onClick={handleMessagesClick}
            className={activePage === "messages" ? "active" : ""}
          >
            Messages
          </li>
          <li
            onClick={handleNotificationClick}
            className={activePage === "notification" ? "active" : ""}
          >
            Notifications
          </li>
          <li
            onClick={handleProfileClick}
            className={activePage === "profile" ? "active" : ""}
          >
            Profile
          </li>
          <li
            onClick={handleSettingClick}
            className={activePage === "setting" ? "active" : ""}
          >
            Settings
          </li>
        </ul>
        <button onClick={onLogout}>Logout</button>
      </div>

      <div className="feed">
        {!isSearchOpen ? (
          <div className="home-content">
            <PostCard
              name="Aksa John"
              image="https://cdn.pixabay.com/photo/2015/06/29/22/14/blonde-826027_1280.jpg"
              description="😍❤️❤️"
            />
              <PostCard
              name="Aksa John"
              image=" https://cdn.pixabay.com/photo/2017/08/01/12/14/man-2564902_960_720.jpg"
              description="😍❤️❤️"
            />
           
          </div>
        ) : (
          <Search onClose={handleCloseSearch} /> // Render Search component when open
        )}
      </div>
      <div className="requestbar">
        <h1 className="xplore">Explore Connections!</h1>
        <ConnectionCard name="John Doe" />
        <ConnectionCard name="Jane Smith" />
        <ConnectionCard name="Michael Johnson" />
        <ConnectionCard name="John Doe" />
        <ConnectionCard name="Jane Smith" />
        <ConnectionCard name="Michael Johnson" />
      </div>
    </div>
  );
};

export default Dashboard;
