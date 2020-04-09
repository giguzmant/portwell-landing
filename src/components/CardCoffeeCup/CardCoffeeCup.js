import React from 'react';
import './CardCoffeeCup.scss';

const CardCoffeeCup = ({img, info, title}) => (
  <div className="cup-card">
    <div className="cup-img">
      <img src={img}  alt=""/>
    </div>
    <div className="cup-info-wrapper">
      <h3 className="cup-title">{title}</h3>
      <p className="cup-info">{info}</p>
    </div>
  </div>
)

export default CardCoffeeCup;