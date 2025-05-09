import React from 'react';
import { profile } from '../data';

const ProfileCard = () => (
  <div className="profile-card">
    <img className="avatar" src={profile.avatar} alt="大頭照" />
    <h1 className="profile-name">{profile.name}</h1>
    <h2 className="profile-company">{profile.company}</h2>
    <div style={{marginTop: '0.7rem'}}>
      <a className="email-btn" href={`mailto:${profile.email}`}>{profile.email}</a>
    </div>
  </div>
);

export default ProfileCard; 