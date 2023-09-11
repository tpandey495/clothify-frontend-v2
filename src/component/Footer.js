import React from 'react'
import 'styles/footer.css';
import facebook from 'assets/socialmedia/facebook.png';
import insta from 'assets/socialmedia/instagram.png';
import linkedin from 'assets/socialmedia/linkedin.png';
import twitter from 'assets/socialmedia/twitter.png';
import youtube from 'assets/socialmedia/youtube.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>Clothify-Best Designed Clothes to Your DoorStep</h1>
        <p>
          Experience the unparalleled artistry of
          our products, meticulously crafted by top
          designers, all at prices that delight a
          vast audience. Our commitment to excellence
          ensures that you receive exceptional quality
          without breaking the bank. Explore our
          collections and discover affordable luxury
          for everyone.
        </p>
      </div>
        <div className="important-links">
          <h1>Links</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
    <div className="Contact-us">
            <h1>Follow</h1>
            <div className="social-media">
              <img style={{ width: 46, height: 30 }} src={facebook} alt="facebook logo " />
              <img style={{ width: 46, height: 30 }} src={twitter} alt="twitter" />
              <img style={{ width: 46, height: 30 }} src={insta} alt="insta" />
              <img style={{ width: 46, height: 30 }} src={linkedin} alt="linkedin" />
              <img style={{ width: 46, height: 30 }} src={youtube} alt="youtube" />
            </div>
      </div>
    </div>
  )
}

export default Footer;
