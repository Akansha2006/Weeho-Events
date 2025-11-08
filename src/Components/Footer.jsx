import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Simtrak Solutions, JBS Haldane Avenue,Kolkata 700046</p>
          <p>📞 +919230621729</p>
          <p>📧 events.weeho@gmail.com</p>
         <div className="footer-box">
          {/* <h3>Follow Us</h3> */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            {/* <a href="#"><FaInstagram /></a> */}
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
            
          </ul>
        </div>

        


      
      </div>

      <div className="footer-bottom">
        <p>© 2025 Weeho. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
