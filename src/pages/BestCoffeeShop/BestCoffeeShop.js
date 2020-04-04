import React from 'react';
import BestCoffeeImg from '../../assets/images/section_bg_3.jpg'
import Beans from '../../assets/icons/icon_1.png';
import Milk from '../../assets/icons/icon_2.png';
import Machine from '../../assets/icons/icon_3.png';
import './BestCoffeeShop.scss';

const BestCoffeeShop = () => (
  <section className="best-coffee-wrapper" style={{backgroundImage: `url(${BestCoffeeImg})`}}>
    <div className="best-coffee-content">
      <h1 className="best-coffee-title">THE BEST COFFEE SHOP</h1>
      <div className="best-coffee-icons-wrapper">
          <div className="best-coffee-icon">
            <img src={Beans}/>
            <h3>BEANS</h3>
          </div>
          <div className="best-coffee-icon">
            <img src={Milk}/>
            <h3>MILK</h3>
          </div>
          <div className="best-coffee-icon">
            <img src={Machine}/>
            <h3>MACHINE</h3>
          </div>
      </div>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, omnis iste natus error sit voluptatem accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque.</p>
    </div>
  </section>
)

export default BestCoffeeShop;