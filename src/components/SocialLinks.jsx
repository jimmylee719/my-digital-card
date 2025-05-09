import React from 'react';
import { socialLinks } from '../data';

const SocialLinks = () => (
  <div className="social-links">
    {socialLinks.map((link, idx) => (
      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
        <span className="item-icon">{link.icon}</span> {link.name}
      </a>
    ))}
  </div>
);

export default SocialLinks; 