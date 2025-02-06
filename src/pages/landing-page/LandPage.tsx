import IntroSection from './sections/IntroSection';
import ContactMeSection from './sections/ContactMeSection';
import ScrollSection from './sections/ScrollSection';
import Navbar from '../../components/navbar/Navbar';

const LandPage = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <ScrollSection />
      <ContactMeSection />
    </>
  );
};

export default LandPage;
