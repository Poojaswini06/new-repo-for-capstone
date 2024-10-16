import React from 'react';
import "../CSS files/footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer>
        <div className="footer-logo">
          <img src="Logo.svg" alt="Little Lemon Logo" aria-label="Little Lemon Logo"/>
        </div>
        <div className="footer-sections">
          <div className="footer-navigation">
            <h4>Doormat Navigation</h4>
            <ul>
            <li><Link to="/about" aria-label="Learn more about Little Lemon">About</Link></li>
            <li><Link to="/menu" aria-label="View the menu">Menu</Link></li>
            <li><Link to="/reservations" aria-label="Make a reservation">Reservations</Link></li>
            <li><Link to="/orderonline" aria-label="Order food online">Order Online</Link></li>
            <li><Link to="/login" aria-label="Login to your account">Login</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li aria-label="Restaurant Address">Address: abc ave, City, State</li>
              <li aria-label="Phone Number">Phone: (000) 000-0000</li>
              <li aria-label="Email Address">Email: xyz@ll.com</li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Social Links</h4>
            <ul>
              <li><a href="#facebook" aria-label="Visit Little Lemon on Facebook">Facebook</a></li>
              <li><a href="#instagram" aria-label="Visit Little Lemon on Instagram">Instagram</a></li>
              <li><a href="#twitter" aria-label="Visit Little Lemon on Twitter">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
