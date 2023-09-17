import React, { useState } from 'react';
import 'styles/login.css';

const LoginPopup = ({ onClose }) => {
  const [Errmsg,setErrmsg]=useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async(event) => {
    event.preventDefault();
  };

  return (
    <div className="login-popup">
      <div className="login-content">
        <h2>Login</h2>
        <p>{Errmsg}</p>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          /><br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
          /><br />
          <p><a href="/forgetpassword">Forgot Password</a></p>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
        <p><a href="/signup">Don't have an account? Register here</a></p>
      </div>
    </div>
  );
};

export default LoginPopup;
