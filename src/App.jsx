import './App.css';
import ProfileCard from './components/ProfileCard';
import CertificateList from './components/CertificateList';
import ExperienceList from './components/ExperienceList';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="main-bg">
      <div className="card-container">
        <ProfileCard />
        <CertificateList />
        <ExperienceList />
        <Portfolio />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
