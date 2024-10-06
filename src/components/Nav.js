import React from 'react';
import '../CSS files/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <img src="Logo.svg" alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
