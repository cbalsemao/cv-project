import { useEffect, useRef } from 'react';
import AboutMeSection from './sections/AboutMeSection';
import IntroSection from './sections/IntroSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './land-page.style.css';
import ProjectsSection from './sections/ProjectsSection';
import ContactMeSection from './sections/ContactMeSection';

gsap.registerPlugin(ScrollTrigger);

const SRC_PATH = 'space-random-photo.jpg';

const LandPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactMeSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vertical scroll for IntroSection to AboutMeSection
    gsap.to(introSectionRef.current, {
      scrollTrigger: {
        trigger: introSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        // pin: true,
      },
    });

    // Horizontal scroll for AboutMeSection to ProjectsSection
    gsap.to(aboutMeSectionRef.current, {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: aboutMeSectionRef.current,
        start: 'top top',
        end: () => `+=${containerRef.current!.offsetWidth}`,
        scrub: true,
        // pin: true,
        snap: 1,
      },
    });

    // // Vertical scroll for ProjectsSection to ContactMeSection
    // gsap.to(projectsSectionRef.current, {
    //   scrollTrigger: {
    //     trigger: projectsSectionRef.current,
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: true,
    //     pin: true,
    //   },
    // });
  }, []);

  return (
    <div ref={containerRef} style={{}}>
      <div ref={introSectionRef} style={{ height: '100vh' }}>
        <IntroSection />
      </div>
      <div ref={aboutMeSectionRef} style={{ display: 'flex', width: '100vw' }}>
        <AboutMeSection />
      </div>
      <div ref={projectsSectionRef} style={{ display: 'flex', width: '100vw' }}>
        <ProjectsSection />
      </div>
      {/*<div
        ref={contactMeSectionRef}
        style={{ display: 'flex', width: '100vw' }}
      >
        <ContactMeSection />
      </div> */}
    </div>
  );
};

export default LandPage;
