import React from 'react';
import '../CSS files/nav.css';

const Nav = () => {
  return (
    <nav>
      <img src="Logo.svg" alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#orderonline">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
