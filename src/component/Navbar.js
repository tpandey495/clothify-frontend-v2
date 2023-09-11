import React from "react";
import "styles/navbar.css";
import delivery from "assets/images/delivery.png";
import facebook from "assets/images/facebook.png";
import instagram from "assets/images/instagram.png";
import linkedin from "assets/images/linkedin.png";
import twitter from "assets/images/twitter.png";

const Navbar = () => {
  return (
    <div className="topNav">
      <div className="topNav-title">
        <div className="topNav-delivery">
          <img src={delivery} alt="delivery" />
          <p>Free Delivery</p>
        </div>
        <p>|</p>
        <p>Return Policy</p>
      </div>
      <div className="topNav-right">
        <p>Login</p>
        <p>Follow US</p>
        <div className="social-media">
          <img src={facebook} alt="facebook icon" />
          <img src={instagram} alt="facebook icon" />
          <img src={linkedin} alt="facebook icon" />
          <img src={twitter} alt="facebook icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;