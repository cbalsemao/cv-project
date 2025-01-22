import IntroSection from './sections/IntroSection';
import './land-page.style.css';
import ContactMeSection from './sections/ContactMeSection';
import ScrollSection from './sections/ScrollSection';

const LandPage = () => {
  return (
    <>
      <IntroSection />
      <ScrollSection />
      <ContactMeSection />
    </>
  );
};

export default LandPage;
