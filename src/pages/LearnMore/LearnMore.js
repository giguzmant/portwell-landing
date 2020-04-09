import React from 'react';
import FreshImg from '../../assets/images/learnmore_1.jpg';
import GreatImg from '../../assets/images/learnmore_2.jpg';
import './LearnMore.scss';

const LearnMore = () => (
  <section>
    <div className="learnmore-fresh-wrapper">
      <div className="learnmore-fresh-content">
        <h3 className="learnmore-title">FRESH BEANS</h3>
        <p className="learnmore-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nulla vitae est maximus pulvinar nec eget metus. Nulla faucibus nisl id orci mattis finibus. Ut bibendum malesuada nulla, sed varius felis lacinia in. Suspendisse potenti. Sed tincidunt velit non lacus ultrices, at ultricies turpis blandit. Phasellus id vestibulum nulla, ac mollis augue. Aliquam ac eleifend neque. </p>
        <a className="learnmore-link" href="#learn-more">LEARN MORE</a>
      </div>
      <div className="learnmore-fresh-img" style={{backgroundImage: `url(${FreshImg})`}}></div>
    </div>
    <div className="learnmore-great-wrapper" style={{backgroundImage: `url(${GreatImg})`}}>
      <div className="learnmore-great-content">
        <h3 className="learnmore-title">GREAT COFFEE</h3>
        <p className="learnmore-info">Aliquam aliquam orci justo, et luctus nulla pellentesque eget. Nulla non nibh at justo luctus euismod id at risus. Nam eget efficitur ex. Suspendisse tellus arcu, volutpat eget dui ut, posuere pharetra eros. Duis congue, quam ac malesuada aliquam, libero sapien interdum lectus, non tincidunt dolor ipsum et ligula. Sed et ultricies magna, quis scelerisque odio.</p>
        <a className="learnmore-link" href="#learn-more">LEARN MORE</a>
      </div>
    </div>
  </section>
)

export default LearnMore;