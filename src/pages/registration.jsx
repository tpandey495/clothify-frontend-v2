import React from 'react';
import 'styles/registration.css'; // Import the CSS file for styling

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="button-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
