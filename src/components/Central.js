import React from 'react';
import '../CSS files/main.css';

const Central = () => {
    return (
        <main>
            <section className='first'>
                <h4 className='sectionH4'>This week's specials!</h4>
                <div className='sectionButton'><button >Online Menu</button></div>
            </section>
            <section className="cards-container">
                    <div className="card">
                    <img src="greek salad.jpg" alt="Greek Salad" className="card-image" />

                        <div className="card-header">
                            <h5 className="dish-name">Greek Salad</h5>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of<br/>crispy lettuce, peppers, olives <br/>and our Chicago style feta <br/>cheese, garnished with <br/>crunchy garlic and rosemary <br/>croutons.</p>
                        <a href="#" className="order-link">
                            Order a delivery <span className="bike-icon">🚴‍♂️</span>
                        </a>
                    </div>
                    <div className="card">
                        <img src="bruschetta.jpg" alt="Bruschetta" className="card-image" />
                        <div className="card-header">
                            <h5 className="dish-name">Bruschetta</h5>
                            <span className="price">$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from <br/>grilled bread that has been <br/>smeared with garlic and <br/>seasoned with salt and olive<br/>oil.</p>
                        <a href="#" className="order-link">
                            Order a delivery <span className="bike-icon">🚴‍♂️</span>
                        </a>
                    </div>
                    <div className="card">
                        <img src="lemon dessert.jpg" alt="Lemon Dessert" className="card-image" />
                        <div className="card-header">
                            <h5 className="dish-name">Lemon Desssert</h5>
                            <span className="price">$5.00</span>
                        </div>
                        <p>This comes straight from <br/>grandma’s recipe book, every<br/>last ingredient has been<br/>sourced and is as authentic <br/>as can be imagined..</p>
                        <a href="#" className="order-link">
                            Order a delivery <span className="bike-icon">🚴‍♂️</span>
                        </a>
                    </div>
            </section>
        </main>
    );
  };

  export default Central;