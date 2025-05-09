import React from 'react';
import { experiences } from '../data';

const ExperienceList = () => (
  <section>
    <h3>學經歷 Education & Experience</h3>
    <ul>
      {experiences.map((exp, idx) => (
        <li key={idx}>{exp.zh} / {exp.en}</li>
      ))}
    </ul>
  </section>
);

export default ExperienceList; 