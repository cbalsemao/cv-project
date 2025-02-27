import IntroSection from './sections/IntroSection';
import ContactMeSection from './sections/ContactMeSection';
import Navbar from '../../components/navbar/Navbar';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

const LandPage = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  );
};

export default LandPage;
