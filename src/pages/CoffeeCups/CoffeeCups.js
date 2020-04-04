import React from 'react';
import data from '../../dataCoffeeCups';
import CardCoffeeCup from '../../components/CardCoffeeCup/CardCoffeeCup'
import coffeeCupsBG from '../../assets/images/bg_menu.jpg';
import './CoffeeCups.scss';
import '../../scss/common/_all.scss';

const CoffeeCups = () => (
  <section className="coffeecups-wrapper" style={{backgroundImage:`url(${coffeeCupsBG})`}}>
    <div className="header">
      <h1 className="title">WE BELIEVE IN COFFEE THAT TASTE INCREDIBLE</h1>
      <p className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
    <div className="coffeecups-cards-wrapper">
      {data.map((type, index) => (
        <CardCoffeeCup key={index} img={type.img} info={type.info} title={type.title}/>
      ))}
    </div>
  </section>
)

export default CoffeeCups;