import React from 'react';
import { profile } from '../data';

const ProfileCard = () => (
  <div className="profile-card">
    <img className="avatar" src={profile.avatar} alt="大頭照" />
    <h1>
      <span>姓名 Name：</span>{profile.name}
    </h1>
    <h2>
      <span>公司 Company：</span>{profile.company}
    </h2>
    <div style={{marginTop: '0.5rem'}}>
      <span>Email：</span>
      <a className="email-btn" href={`mailto:${profile.email}`}>{profile.email}</a>
    </div>
  </div>
);

export default ProfileCard; 