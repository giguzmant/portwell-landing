import React from 'react';
import './Contact.scss';

const Contact = ({info}) => (
  <>
    {info.map((type, index) => (
      <div className="contact-wrapper" key={index}>
        <h4>{type.title}</h4>
        <h5>{type.info}</h5>
      </div>
    ))}
  </>
)

export default Contact;