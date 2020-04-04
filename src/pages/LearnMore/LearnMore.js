import React from 'react';
import FreshImg from '../../assets/images/learnmore_1.jpg';
import GreatImg from '../../assets/images/learnmore_2.jpg';
import './LearnMore.scss';

const LearnMore = () => (
  <section>
    <div className="learnmore-fresh-wrapper">
      <div className="learnmore-fresh-content">
        <h3 className="learnmore-title">FRESH BEANS</h3>
        <p className="learnmore-info">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <a className="learnmore-link">LEARN MORE</a>
      </div>
      <div className="learnmore-fresh-img" style={{backgroundImage: `url(${FreshImg})`}}></div>
    </div>
    <div className="learnmore-great-wrapper" style={{backgroundImage: `url(${GreatImg})`}}>
      <div className="learnmore-great-content">
        <h3 className="learnmore-title">GREAT COFFEE</h3>
        <p className="learnmore-info">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <a className="learnmore-link">LEARN MORE</a>
      </div>
    </div>
  </section>
)

export default LearnMore;