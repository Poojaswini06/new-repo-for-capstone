import React from 'react';
import '../CSS files/header.css';
const Header = () => {
  return (
    <header>
      <div className='HeaderContent'>
        <h2 aria-label="Little Lemon Restaurant"> Little Lemon</h2>
        <h5 aria-label="Location of Little Lemon: Chicago">Chicago</h5>
        <p>We are family owned<br/>
           Mediterranean restaurant,<br/>
          focused on traditional<br/>
          recipes served with a modern twist.</p>
        <button aria-label="Reserve a Table at Little Lemon">Reserve a Table</button>
      </div>
      <div className='HeaderImage'>
        <img src="restauranfood.jpg" aria-hidden="true"></img>
      </div>
    </header>
  );
};

export default Header;
