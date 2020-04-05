import React from 'react';
import './Hours.scss';

const Hours = ({hours}) => (
  <>
    {hours.map((type, index) => (
      <div className="hours-content" key={index}>
        <h4>{type.days}</h4>
        <h5>{type.hours}</h5>
      </div>
    ))}
  </>
)

export default Hours