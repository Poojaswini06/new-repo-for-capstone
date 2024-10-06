import React from 'react';
import '../CSS files/header.css';
const Header = () => {
  return (
    <header>
      <div className='HeaderContent'>
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p><pre>We are family owned<br/>
           Mediterranean restaurant,<br/>
          focused on traditional<br/>
          recipes served with a modern twist.</pre></p>
        <button>Reserve a Table</button>
      </div>
      <div className='HeaderImage'>
        <img src="restauranfood.jpg"></img>
      </div>
    </header>
  );
};

export default Header;
