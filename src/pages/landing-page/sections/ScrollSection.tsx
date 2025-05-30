import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: '-100vw',
          ease: 'none',
          duration: 1,

          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: '3000 top',
            scrub: 0.6,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <AboutMeSection />
          </div>
          <div className="scroll-section">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
