
import HeroSlice from './pages/HeroSlice'
import Navba from './pages/Navba'
import SkillPage from './pages/SkillPage'
import AboutPage from './pages/AboutPage'
import Project from './pages/Project'
import CertificatePage from './pages/CertificatePage'
import ContactPage from './pages/ContactPage'
import FooterPage from './pages/FooterPage'



function App() {

  return (
    <>
       
      <div >
        <Navba/>
        <HeroSlice/>
        <AboutPage/>
        <SkillPage/>
        <Project/>
        <CertificatePage/>
        <ContactPage/>
        <FooterPage/>
      </div>
    </>
  )
}

export default App
