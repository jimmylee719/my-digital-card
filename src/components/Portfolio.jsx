import React from 'react';
import { portfolio } from '../data';

const Portfolio = () => (
  <section>
    <h3>作品集 Portfolio</h3>
    <div className="portfolio-list">
      {portfolio.map((item, idx) => (
        <a className="portfolio-item" href={item.link} key={idx} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt={item.title_zh} />
          <div className="portfolio-title">
            <span className="item-icon">{item.icon}</span>
            <span>{item.title_zh} / {item.title_en}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Portfolio; 