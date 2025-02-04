import IntroSection from './sections/IntroSection';
import ContactMeSection from './sections/ContactMeSection';
import ScrollSection from './sections/ScrollSection';
import DesktopMenu from '../../components/navbar/DesktopMenu';

const LandPage = () => {
  return (
    <>
      <DesktopMenu />
      <IntroSection />
      <ScrollSection />
      <ContactMeSection />
    </>
  );
};

export default LandPage;
