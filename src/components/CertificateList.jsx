import React from 'react';
import { certificates } from '../data';

const CertificateList = () => (
  <section>
    <h3>證照 Certifications</h3>
    <ul className="icon-list">
      {certificates.map((cert, idx) => (
        <li key={idx} className="icon-list-item">
          <span className="item-icon">{cert.icon}</span>
          <span>{cert.zh} / {cert.en}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default CertificateList; 