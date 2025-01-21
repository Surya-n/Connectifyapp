import React, { useState } from "react";
import "../../App.css";
import { supabase } from "../../supabase";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: username,
          password,
        });
        console.log(data, error);
      } catch (error) {}
    } else {
      alert("Please enter both username and password");
    }
  };
  const handleGoogleLogin = () => {
    alert("Google login functionality coming soon!"); // Replace with actual Google login logic
  };
  return (
    <div className="login-page">
      <div className="login-image">
        <img src="https://cdn.pixabay.com/photo/2022/12/10/21/41/social-media-7647811_1280.jpg"></img>
      </div>
      <div className="login-container">
        <h1 className="name">Connectify</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="divider">
            <span className="line"></span>
            <span className="or-text">OR</span>
            <span className="line"></span>
          </div>
        </form>

        <button onClick={handleGoogleLogin} className="google-login-button">
          <img
            src="./public/google.png"
            alt="Google Logo"
            className="google-logo"
          />
          Login with Google
        </button>
        <p>Forgot password?</p>

        <div className="already-account">
          <p>
            Already have an account?{" "}
            <a href="#" className="sign-in-link">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
