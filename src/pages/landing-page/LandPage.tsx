import IntroSection from './sections/IntroSection';
import ContactMeSection from './sections/ContactMeSection';
import Navbar from '../../components/navbar/Navbar';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';

const LandPage = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  );
};

export default LandPage;
