import React from 'react';
import './BlogEntries.scss';

const BlogEntries = ({img, title, info, date}) => (
  <div className="blog-card-wrapper">
      <div className="blog-card-img" style={{backgroundImage: `url(${img})`}}/>
      <div className="blog-card-content">
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{info}</p>
      </div>
  </div>
)

export default BlogEntries;
