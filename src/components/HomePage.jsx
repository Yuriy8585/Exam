import React from 'react';
import Filter from './Filter';
import Product from './items/Product';


function HomePage() {
  return (
    <div>
    
  
  
      <Filter />
      
        <section className="promo">
          <div className="promo__img">
            <img src="/my-app/src/img/promo.png" alt="photo promo" />
          </div>
          <div className="promo__content">
            <div className="promo__info">
              <h1 className="promo__title">THE BRAND</h1>
              <h2 className="promo__heading">OF LUXERIOUS FASHION</h2>
            </div>
          </div>
        </section>
        <section className="sale center">
          <div className="sale__item">
            <a className="header__link-site" href="catalog_w.html">
              <img src="/my-app/src/img/si1.jpg" alt="sale image" />
            </a>
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
          <div className="sale__item">
            <img src="img/si2.jpg" alt="sale image" />
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
          <div className="sale__item">
            <img src="img/si3.jpg" alt="sale image" />
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
          <div className="sale__item sale__item_big">
            <img src="img/sibig.jpg" alt="sale image" />
            <div className="sale__content">
              <p className="sale__text">30% OFF</p>
              <h3 className="sale__heading">FOR WOMEN</h3>
            </div>
          </div>
        </section>

        <Product/>
        
        
    </div>
        
  );
}

export default HomePage;