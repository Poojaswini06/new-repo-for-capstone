import React from 'react';
import "../CSS files/footer.css";
import { Link } from 'react-router-dom';

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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/orderonline">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
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
