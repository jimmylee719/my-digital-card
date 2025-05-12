import './App.css';
import ProfileCard from './components/ProfileCard';
import CertificateList from './components/CertificateList';
import ExperienceList from './components/ExperienceList';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <div className="main-bg">
      <div className="card-container">
        <ProfileCard />
        <ServiceList />
        <CertificateList />
        <ExperienceList />
        <Portfolio />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
