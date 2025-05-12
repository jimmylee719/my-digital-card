import React from 'react';
import { profile } from '../data';

const ProfileCard = () => (
  <div className="profile-card">
    <img className="avatar" src={profile.avatar} alt="大頭照" />
    <h1 className="profile-name">{profile.name}</h1>
    <h2 className="profile-company">{profile.company}</h2>
    <p className="company-desc">{profile.companyDesc}</p>
    <div className="contact-buttons">
      <a className="email-btn" href={`mailto:${profile.email}`}>
        <span className="item-icon">📧</span> 線上諮詢 / Email
      </a>
    </div>
  </div>
);

export default ProfileCard; 