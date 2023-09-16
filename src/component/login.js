import React from 'react';
import 'styles/login.css'
const LoginPopup = ({ onClose }) => {
  return (
    <div className="login-popup">
      <div className="login-content">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Email" required /><br/>
          <label>Password:</label>
          <input type="password" placeholder="Password" required /><br/>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
        <p>Don't have an account? <a href="/signup">Register here</a></p>
      </div>
    </div>
  );
};

export default LoginPopup;
