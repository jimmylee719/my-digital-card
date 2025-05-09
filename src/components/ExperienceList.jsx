import React from 'react';
import { experiences } from '../data';

const ExperienceList = () => (
  <section>
    <h3>學經歷 Education & Experience</h3>
    <ul className="icon-list">
      {experiences.map((exp, idx) => (
        <li key={idx} className="icon-list-item">
          <span className="item-icon">{exp.icon}</span>
          <span>{exp.zh} / {exp.en}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default ExperienceList; 