import React from 'react';
import './Social.scss';

const Social = ({social}) => (
  <div className="social-wrapper">
    {social.map((type, index) => (
      <i className={type} aria-hidden="true" key={index}></i>
    ))}
  </div>
)

export default Social;