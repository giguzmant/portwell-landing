import React from 'react';
import dataHours from '../../dataHours';
import Hours from '../../components/Hours/Hours';
import dataTalk from '../../dataTalk';
import Contact from '../../components/Contact/Contact';
import './Footer.scss';
import Social from '../../components/Social/Social';
import dataSocial from '../../dataSocial';

const Footer = () => (
  <footer className="footer-wrapper" >
      <div className="footer-hours">
        <h2>{dataHours.title}</h2>
        <Hours hours={dataHours.hours} />
      </div>
      <div className="footer-contact">
        <h2>{dataTalk.title}</h2>
        <Contact info={dataTalk.info}/>
      </div>
      <div className="footer-social">
        <h2>{dataSocial.title}</h2>
        <Social social={dataSocial.social}/>
      </div>
  </footer>
)

export default Footer;