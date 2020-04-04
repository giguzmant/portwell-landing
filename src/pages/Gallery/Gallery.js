import React from 'react';
import Macaroons from '../../assets/images/gallery_1.jpg';
import Cup from '../../assets/images/gallery_2.jpg';
import Beans from '../../assets/images/galery_3.jpg';
import './Gallery.scss';

const Gallery = () => (
  <section className="gallery-wrapper">
      <div className="gallery-image" style={{backgroundImage: `url(${Macaroons})`}}/>
      <div className="gallery-image" style={{backgroundImage: `url(${Cup})`}}/>
      <div className="gallery-image" style={{backgroundImage: `url(${Beans})`}}/>
  </section>
)

export default Gallery;