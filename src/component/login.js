import React, { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {loginUser} from "store/userSlice";
import 'styles/login.css';

const LoginPopup = ({ onClose }) => {
  const [Errmsg,setErrmsg]=useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch=useDispatch();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =async(event) => {
    event.preventDefault();
    dispatch(loginUser(formData))
    .unwrap()
    .then(()=>{
     onClose();
     window.location.reload();
    })
    .catch((err)=>{
      if (typeof err === 'string') {
        setErrmsg(err); // If err is a string error message
      } else if (err && err.message) {
        setErrmsg(err.message); // If err is an error object with a message property
      } else {
        setErrmsg("An unknown error occurred.");
      }
    })
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
