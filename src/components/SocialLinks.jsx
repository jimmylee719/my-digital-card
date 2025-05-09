import React from 'react';
import { socialLinks } from '../data';

const SocialLinks = () => (
  <div className="social-links">
    {socialLinks.map((link, idx) => (
      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
    ))}
  </div>
);

export default SocialLinks; 