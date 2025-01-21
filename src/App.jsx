import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import LoginPage from './Components/login/LoginPage';
import Dashboard from './Components/dashboard/Dashboard';
import { supabase } from './supabase';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = supabase.auth.getUser();
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginPage  />
      )}
    </div>
  );
}

export default App;

