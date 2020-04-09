import React from 'react';
import './Nav.scss'

const Nav = () => (
  <nav className="nav">
    <ul className="nav-wrapper">
      <li>
        <a href="#home">HOME</a>
      </li>
      <li>
        <a href="#about-us">ABOUT US</a>
      </li>
      <li>
        <a href="#our-story">OUR STORY</a>
      </li>
      <li>
        <a href="#blog">BLOG</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  </nav>
)

export default Nav;