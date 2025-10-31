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
          <p>📍 123 Main Street, New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@weeho.com</p>
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

        {/* Social Media */}
        {/* <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div> */}


         {/* products */}
        <div className="footer-box">
          <h3>Product</h3>
          <ul>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Personal</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
  

        {/* Legal */}
        <div className="footer-box">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Conditions</a></li>
            <li><a href="#">Disclaimer</a></li>
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
