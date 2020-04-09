import React from 'react';
import data from '../../dataBlogCard';
import BlogEntries from '../../components/BlogEntries/BlogEntries';
import './Blog.scss';

const Blog = () => (
  <section className="blog-wrapper">
    <div className="header">
      <h1 className="title">BLOG</h1>
      <p className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
      laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
    <div className="blog-cards-wrapper">
      {data.map((type, index) => (
        <BlogEntries key={index} img={type.img} title={type.title} date={type.date} info={type.info}/>
      ))}
    </div>
  </section>
)

export default Blog;