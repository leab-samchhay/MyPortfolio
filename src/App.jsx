import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSlice from './pages/HeroSlice';
import Navba from './pages/Navba';
import SkillPage from './pages/SkillPage';
import AboutPage from './pages/AboutPage';
import Project from './pages/Project';
import CertificatePage from './pages/CertificatePage';
import ContactPage from './pages/ContactPage';
import FooterPage from './pages/FooterPage';

// ទំព័រដើម (HomePage) ដែលមាន Hero, About, Skill, Project, Contact
function HomePage() {
  return (
    <>
      <HeroSlice />
      <AboutPage />
      <SkillPage />
      <Project />
      <ContactPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#07101d] min-h-screen text-white">
        <Navba />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/certificates" element={<CertificatePage />} />
        </Routes>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
