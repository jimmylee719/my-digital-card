import React from 'react';
import { certificates } from '../data';

const CertificateList = () => (
  <section>
    <h3>證照 Certifications</h3>
    <ul>
      {certificates.map((cert, idx) => (
        <li key={idx}>{cert.zh} / {cert.en}</li>
      ))}
    </ul>
  </section>
);

export default CertificateList; 