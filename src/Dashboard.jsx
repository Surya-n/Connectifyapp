import React from 'react';
import './App.css';

const Dashboard = ({ onLogout }) => (
  <div className="dashboard-container">
    <h1>Welcome to the App!</h1>
    <button onClick={onLogout} className="logout-button">
      Logout
    </button>
  </div>
);

export default Dashboard;
