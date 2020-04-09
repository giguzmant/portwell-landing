import React from 'react';
import StoryImg from '../../assets/images/background_story.jpg'
import './Story.scss';

const Story = () => (
  <section className="story-header-wrapper">
    <div className="header story-header">
      <h1 className="title">OUR STORY</h1>
      <p className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
    <div className="story-img" style={{backgroundImage: `url(${StoryImg})`}}></div>
  </section>
)

export default Story;