import React from 'react';
import HeroImg from '../../assets/images/header_section.jpg';
import './Header.scss';

const Header = () => {
  const headerImg = {
    backgroundImage: `url(${HeroImg})`
  }
  
  return(
      <header className="hero-parallax" style={headerImg}>
        <div className="hero-text">
          <h1 className="hero-title">Portwell, Inc.</h1>
          <p className="hero-subtitle">Serving only the best since 2007</p>
        </div>
      </header>
  )
}
export default Header;