import IntroSection from './sections/IntroSection';
import ContactMeSection from './sections/ContactMeSection';
import Navbar from '../../components/navbar/Navbar';
import AboutMeSection from './sections/AboutMeSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import { Analytics } from '@vercel/analytics/next';

const LandPage = () => {
  return (
    <>
      <Analytics />
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
