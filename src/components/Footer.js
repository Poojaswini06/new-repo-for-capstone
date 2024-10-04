import React from 'react';
import "../CSS files/footer.css";

const Footer = () => {
    return (
      <footer>
        <div className="footer-logo">
          <img src="Logo.svg" alt="Little Lemon Logo" />
        </div>
        
        <div className="footer-sections">
          {/* Doormat Navigation */}
          <div className="footer-navigation">
            <h4>Doormat Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order-online">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>Address: abc ave, City, State</li>
              <li>Phone: (000) 000-0000</li>
              <li>Email: xyz@ll.com</li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="footer-social">
            <h4>Social Links</h4>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;
