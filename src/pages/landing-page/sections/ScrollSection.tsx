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
    let sections = gsap.utils.toArray('.horizontal-section');

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: `+=${window.innerWidth * sections.length}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="horizontal-section">
            <AboutMeSection />
          </div>
          <div className="horizontal-section">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
