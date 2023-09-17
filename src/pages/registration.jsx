import React, { useState } from 'react';
import 'styles/registration.css';
import { createUser } from 'store/userSlice';
import { useDispatch, useSelector } from "react-redux";  
const Registration = () => {
  const [errMess, setErrmsg] = useState('');
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '', // Add the confirmpassword field to the state
  });


  // Handle input changes and update the corresponding state variable
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(createUser(formData))
      .unwrap()
      .then(() => {
        setErrmsg("Register Successfully. Please check your email to verify your account.");
        setFormData({
          username: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpassword: '',
        });
      })
      .catch((err) => {
        if (typeof err === 'string') {
          setErrmsg(err); // If err is a string error message
        } else if (err && err.message) {
          setErrmsg(err.message); // If err is an error object with a message property
        } else {
          setErrmsg("An unknown error occurred.");
        }
      });
  };


return (
  <div className="registration-container">
    <div className="registration-form">
      <h2>Register</h2>
      {errMess && <p>{errMess}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            autoComplete='username'
            required
          />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            autoComplete='firstname'
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            autoComplete='lastname'
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            autoComplete='email'
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            autoComplete="new-password"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            autoComplete="new-password"
            required
          />
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
